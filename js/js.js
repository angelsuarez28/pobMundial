

var miMapa;


var urlFeatureWebMerc = "http://services.arcgis.com/BG6nSlhZSAWtExvp/ArcGIS/rest/services/MajorCities_WebMercator/FeatureServer/0"


require(["esri/map",
"esri/layers/ArcGISTiledMapServiceLayer",
"esri/layers/ArcGISDynamicMapServiceLayer",
"esri/layers/FeatureLayer",
"dojo/domReady!"],
function(Map,
  ArcGISTiledMapServiceLayer,
  ArcGISDynamicMapServiceLayer,
  FeatureLayer) {



miMapa = new Map("mapaCont", {


"center": [-5,15],
"zoom": 3,
"basemap": "hybrid"

});




var capaWebMerc = new FeatureLayer(urlFeatureWebMerc,{
  /*"definitionExpression" : "POPULATION > 5000000",*/
  "id": "Merc",
  "opacity": 0.8
  });



  var rangoloco = document.getElementById ("txtRango");
  rango.onchange = actualizaPob;

/*Realizamos una función a parte para que actualice el valor del rango*/

  function actualizaPob(){
    var rangoPoblacionLoco = document.getElementById("rango");
    var rangoArriba =  rangoPoblacionLoco.value;

    var txtRadio = document.getElementById("txtRango");
    txtRadio.innerHTML = rangoArriba;
  };







function dameValor () {
miMapa.addLayer(capaWebMerc);
/*var inputValor = document.getElementById("inputQ");*/
var selectorPoblacion = document.getElementById("selector");
var rangoPoblación = document.getElementById("rango");
var rangoPob =  rangoPoblación.value;
capaWebMerc.setDefinitionExpression("POPULATION" + selectorPoblacion.value + rangoPoblación.value);


var texto = "POPULATION" +" " + (selectorPoblacion.value) +" " +  (rangoPoblación.value);
var parrafo = document.getElementById ("loco2");
parrafo.innerHTML = texto;



};



var boton = document.getElementById("botonQ");
boton.onclick = dameValor;











});
