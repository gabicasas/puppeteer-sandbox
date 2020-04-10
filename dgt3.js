function dgt3(globalVar, eventEmitter) {
  (async () => {
    const constants = require('./constants.js');
    const puppeteer = require('puppeteer-core');
    const downloads = require('./download.js');
    downloads.download(globalVar, eventEmitter);
    const fs = require('fs')
    const keyboardMapping = require('./USKeyboardLayout.js');
    const browser = await puppeteer.launch(constants.PUPPETEER_OPTS)
    const page = await browser.newPage()
    const navigationPromise = page.waitForNavigation()

    await page.goto("https://sedeapl.dgt.gob.es/WEB_TTRA_CONSULTA/Todos.faces?idioma=es")

    //await page.goto("https://sedeapl.dgt.gob.es/WEB_TTRA_CONSULTA/TablonEdictosPublico.faces")

    await page.setViewport({ width: 1600, height: 803 })



    await page.keyboard.down(keyboardMapping.keyCodeLayout[118].code)

    //Abre el buscador avanzado
    await page.waitForSelector("body > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(7) > DIV:nth-child(1) > DIV:nth-child(2) > FORM:nth-child(3) > INPUT:nth-child(2)");
    await page.click("body > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(7) > DIV:nth-child(1) > DIV:nth-child(2) > FORM:nth-child(3) > INPUT:nth-child(2)");
     
     await navigationPromise


     //Selecciona fecha inicio
     await page.waitForSelector("body > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(7) > DIV:nth-child(1) > DIV:nth-child(2) > FORM:nth-child(5) > DIV:nth-child(4) > DIV:nth-child(3) > DIV:nth-child(1) > INPUT:nth-child(2)");
     await page.click("body > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(7) > DIV:nth-child(1) > DIV:nth-child(2) > FORM:nth-child(5) > DIV:nth-child(4) > DIV:nth-child(3) > DIV:nth-child(1) > INPUT:nth-child(2)");


     //Borrar el campo situando el puntero
    for(let i =0;i<10;i++)
      await page.keyboard.press(keyboardMapping.keyCodeLayout[37].code)
  for(let i =0;i<10;i++)  
      await page.keyboard.press(keyboardMapping.keyCodeLayout[46].code)
     
 
    

     await page.keyboard.type("10-03-2020")

     //Presionamobs enter para lanzar
     await page.keyboard.press(keyboardMapping.keyCodeLayout[13].code)
     await navigationPromise

      //Selecciona fecha fin 
     await page.waitForSelector("body > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(7) > DIV:nth-child(1) > DIV:nth-child(2) > FORM:nth-child(5) > DIV:nth-child(4) > DIV:nth-child(3) > DIV:nth-child(2) > INPUT:nth-child(2)");
     await page.click("body > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(7) > DIV:nth-child(1) > DIV:nth-child(2) > FORM:nth-child(5) > DIV:nth-child(4) > DIV:nth-child(3) > DIV:nth-child(2) > INPUT:nth-child(2)");


       //Borrar el campo situando el puntero
    for(let i =0;i<10;i++)
    await page.keyboard.press(keyboardMapping.keyCodeLayout[37].code)
for(let i =0;i<10;i++)  
    await page.keyboard.press(keyboardMapping.keyCodeLayout[46].code)



    await page.keyboard.type("10-04-2020")



    //Presionamobs enter para lanzar formulario
    await page.keyboard.press(keyboardMapping.keyCodeLayout[13].code)
    await navigationPromise

    /** Setea descarga (no se si funciona)*/
    await page._client.send('Page.setDownloadBehavior', {
      behavior: 'allow',
      // This path must match the WORKSPACE_DIR in Step 1
      downloadPath: './downloads',
    });


try{
while(true){
//  for(let i=0;i<1;i++){
  let data;
try{
  
    //page.exposeFunction('downloadPDF', function (elem) { return elem; });
    await page.evaluate(fs.readFileSync('./TemplateGenerator.js', 'utf8'));
     data = await page.evaluate(element => {
      window.tg = (new TemplateGenerator({ "customFunction": "downloadPDF", "selector": "A:nth-child(1)", "selectorDom": [{ "tag": "A", "child": 0 }], "nodes": [{ "node": {}, "value": "Ayuntamiento de Pamplona\n\nEdicto de notificación de denuncias.", "fixed": true }, { "node": {}, "value": "\n\t\t\t\t\t\t\t\t\t" }] }));
      window.tg.staticData();
      /***************** */
      window.tg.calculatedItems.forEach(element => {
       // debugger;
        element.href=element.selected.href;
        /*
        Nos ncesario hacr este click
        */
        //element.selected.click();
      });
      /************************ */
      return window.tg.calculatedItems;
    })

  }catch(e){
    console.log("Se acabó lo que se daba 1")
  }

    // console.log(data);
    //Evento generado con lo datos para tratarlos en otro punto 
    eventEmitter.emit("scrapedDataEvent",data);








    

    try{
      //Busco el segundo boton de paginacion
    console.log("Páginas dos y siguientes")
    await page.waitForSelector("body > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(10) > DIV:nth-child(2) > DIV:nth-child(11) > DIV:nth-child(4) > INPUT:nth-child(1)");
    await page.click("body > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(10) > DIV:nth-child(2) > DIV:nth-child(11) > DIV:nth-child(4) > INPUT:nth-child(1)");
    }catch(e){
      //Estoy en la primera pagina (Si se hace este try / cath al reves no pasa de la pagina 1,2,1,2,1,2,...)
    console.log("Primera pagina")  
    await page.waitForSelector("body > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(10) > DIV:nth-child(2) > DIV:nth-child(11) > DIV:nth-child(2) > INPUT:nth-child(1)");
    await page.click("body > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(10) > DIV:nth-child(2) > DIV:nth-child(11) > DIV:nth-child(2) > INPUT:nth-child(1)");
    }
    await navigationPromise

    await page.setViewport({ width: 1600, height: 803 })
    console.log("Espera 90 segundos")
  await page.waitFor(90000)
  console.log("Fin Espera");
  }
}catch(e){
  console.log("Se acabó lo que se daba")
}

  })()
}

module.exports = {
  dgt3: dgt3
}