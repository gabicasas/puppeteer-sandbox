 let datoDom=null, parentDatoDom=null;
 window.addEventListener('mousemove', (evt) => {
     window.mousePositionEvt=evt;
 });

 window.addEventListener('keydown', (evt) => {
     if(evt.keyCode==118){//F7 par cargar el dato
         datoDom=window.mousePositionEvt.target;
         parentDatoDom=datoDom;
        datoDom.style.backgroundColor="red";
     }else if(evt.keyCode==119) //F8 para buscar padre
     {
         parentDatoDom=parentDatoDom.parentNode;
         parentDatoDom.style.backgroundColor="green";
     }else if(evt.keyCode==120) //F9 para guardar template
     {
         let selector=obtainCssSelector(datoDom,parentDatoDom);
         let nodos=textNodesUnder(parentDatoDom);
         items.push({selector:selector,nodos:nodos});
         datoDom=null;
         parentDatoDom=null;
     }
 });



//TODO, filtar par eliminar los texto vaciones con el filtro de la propia funcion
 function textNodesUnder(el){
  var n, a=[], walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,null,false);
  while(n=walk.nextNode()) a.push(n);
  return a;
}

//Devuelve la lista de nodos de un template o elemento para que sea mas facil de comparar con el DOM
function listaNodosTemplate(el){
  var n, a=[],walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,null,false);
   while(n=walk.nextNode()) a.push(n);
  return a;
  }

obtainTemplate=function(templateChild){
	let textNodesChilds=textNodesUnder(templateChild);
	let parent=templateChild.parentNode;
	while(textNodesUnder(parent).length==textNodesChilds.length)
		parent=parent.parentNode;
		
	return parent;
}
 
 obtainCssSelector=function(myElement, firstParentElement){
 selectors=[];
 
 mySelector=function(element){
	
	/*if(element.tagName=='BODY'){
		selectors.push('body')
		return;
	}*/
	if(element==firstParentElement){
		return;
	}else{
	//debugger;
	if(element.parentNode){
		var selector={};
		selector.tag=element.tagName;
		for(let i=0;i<element.parentNode.children.length;i++){
			if(element==element.parentNode.children[i])
				selector.child=":nth-child("+(i+1)+")";
		}
		
		selectors.push(selector);
		mySelector(element.parentNode);
		}
	}
	
};

mySelector(myElement);

/*var result="";
for(var i=selectors.length-1;i>=0;i--){
result+=selectors[i]
if(i!=0)
	result+= " > "
}
return result;*/

return selectors;
	

}

//Todos los cambios
observer = new MutationObserver(function(a){
	
	a.map(element => {
	   
	console.log(obtainCssSelector(element.target, document.body));
	
	
	items.map(item => {
	    var isThisItem=true;
		//Buscamos el psoible padore en funcion de lo largo de la cadena del selector
		var parent=element.target;
		for(var i=0;i<item.selector.length && isThisItem;i++){
		    if(isThisItem && item.selector[i].tag==parent.tagName)
		      isThisItem=true;
		    else
		      isThisItem=false;  
			parent=parent.parentNode;
		}
		if(isThisItem){
		//Se calcula el numero de nodos de texto a ver si coincide
		if(listaNodosTemplate(parent).length==item.nodos.length)
			;//Parece que va bien...
		}
	});
	
	})


});
observer.observe(document.documentElement, {
	childList: true,
	subtree: true
});

/*

Modelo de datos
-selector cortado
-cadena de nodos text

var items=[{selector:aa, nodos:...}]


*/
var items=[];
