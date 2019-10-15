class TemplateGenerator {
  constructor(conf) {
    this.selector = conf.selector;
    this.selectorDom = conf.selectorDom;
    this.nodes = conf.nodes;
    this.items=[];
    this.calculatedItems=[];
  }

  dinamicData(a, b) {
    console.log(a);
    console.log(b);
  }

  staticData() {
    //Todos los posibles nodos
    let nodes = document.querySelectorAll(this.selector);


    nodes.forEach(element => {
      let newParent = element;
      for (let i = 0; i < this.selectorDom.length; i++)
        newParent = newParent.parentNode;
      //Se calcula el selector estructurado
      let newSelector = this.obtainCssSelector(element, newParent);
      let newNodos = this.textNodesUnder(newParent);
      //Se marcan los fixed
      for(let i=0;i<this.nodes.length;i++){
        if(this.nodes[i].fixed)
          newNodos[i].fixed=true;
      }
      if(newNodos.length==this.nodes.length){ //Esto es una forma de saberque la estructura del dom es similar
         		let newItem={selector: newSelector, nodos:newNodos, selected:element}; // Para guardar en lista auxiliar
         		//Se marca
         		this.calculatedItems.push(newItem);
         		element.style.border="1px dashed green";
         	
         	}
        	
    });
     /*this.nodes=newNodos;
         items.push({selector:newSelector,nodos:newNodos});
         datoDom=null;
         parentDatoDom=null;
         console.log(items);*/
  }

  obtainCssSelector(myElement, firstParentElement) {
    let selectors = [];

    let mySelector = function(element) {
      if (element == firstParentElement) {
        return;
      } else {
        //debugger;
        if (element.parentNode) {
          var selector = {};
          selector.tag = element.tagName;
          for (let i = 0; i < element.parentNode.children.length; i++) {
            if (element == element.parentNode.children[i]) {
              // selector.child=":nth-child("+(i+1)+")";
              selector.child = i;
            }
          }

          selectors.push(selector);
          mySelector(element.parentNode);
        }
      }
    };

    mySelector(myElement);

    /*var this.result="";
    for(var i=selectors.length-1;i>=0;i--){
    this.result+=selectors[i]
    if(i!=0)
    this.result+= " > "
    }
    return this.result;*/

    return selectors;
  }

  textNodesUnder(el) {
    var n,
      a = [],
      walk = document.createTreeWalker(
        el,
        NodeFilter.SHOW_TEXT,
        node => {
          /*
if(escape(node.nodeValue).replace(/%0A/g,"").replace(/%20/g,"").replace(/%09/g,"").length==0) // se salta espacios en blanco
return NodeFilter.FILTER_REJECT;
*/

          return NodeFilter.FILTER_ACCEPT;
        },
        false
      );
    while ((n = walk.nextNode())) a.push({ node: n, value: n.nodeValue });
    return a;
  }

  observeChanges() {
    //Todos los cambios
    observer = new MutationObserver(function(a) {
      a.map(element => {
        //console.log(obtainCssSelector(element.target, document.body));

        this.items.map(item => {
          var isThisItem = true;
          //Buscamos el psoible padore en funcion de lo largo de la cadena del selector

          var start = 0;
          var end = item.selector.length;
          var nodes = [];
          //Se busca el caso en que el nodo que cambio no es solo el texto
          while (nodes.length != 1 && end != 0) {
            nodes = element.target.querySelectorAll(
              selectorDom(item.selector.slice(start, end))
            );
            end--;
          }

          //Será el nodo con el texto a a auditar
          var target = null;
          if (
            nodes.length == 1 &&
            nodes[0].firstChild &&
            nodes[0].firstChild.nodeName == "#text"
          ) {
            target = nodes[0];
          } else {
            //En caso de que solo haya cambiado el texto no vale la estrategia del selector
            target = element.target;
          }

          if (target) {
            // Sera el nodo padre de varios niveles coinicidnete con el selector y los nodos de texto fijos
            var parent = target;
            for (var i = 0; i < item.selector.length && isThisItem; i++) {
              if (
                isThisItem &&
                item.selector[i].tag == parent.tagName &&
                parent.parentNode.children[item.selector[i].child] == parent
              )
                isThisItem = true;
              else isThisItem = false;
              parent = parent.parentNode;
            }
            if (isThisItem) {
              //Se calcula el numero de nodos de texto a ver si coincide
              let nodosPosibles = listaNodosTemplate(parent);
              if (nodosPosibles.length == item.nodos.length) {
                //console.log('puede ser',item, parent);
                for (let i = 0; i < item.nodos.length; i++) {
                  if (item.nodos[i].fixed) {
                    isThisItem =
                      item.nodos[i].value == nodosPosibles[i].nodeValue &&
                      isThisItem;
                  }
                }
              } else {
                isThisItem = false;
              }
            }

            if (isThisItem) {
              item.key = "";
              item.nodos.map(nodo => {
                if (nodo.fixed) item.key += "$$$" + nodo.value;
              });
              item.value = target.firstChild.nodeValue;
              console.info(item);
              if (!this.result[item.id]) this.result[item.id] = {};
              this.result[item.id][item.key] = item.value;
            }
          }
        });
      });
    });
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true
    });
  }

  test(a){
    console.log(a);
  }
}