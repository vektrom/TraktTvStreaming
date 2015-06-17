// ==UserScript==
// @name         Trakt.Tv Streaming
// @namespace    https://github.com/vektrom/
// @version      0.4
// @description  Enlaces a paginas para ver series en streaming.
// @author       Vektrom
// @match        *://trakt.tv/*
// @grant        none
// @icon         
// ==/UserScript==
(function () {
	// No se otra manera de hacer que se ejecute el script de otra manera, ya que por defecto al clicar no se recarga la pagina entera.
	$("a[href!='#']").attr("target", "_top");

	var arrayPaginas = [{title: 'Series Yonkis', url: 'seriesyonkis.sx', icon: 'http://www.seriesyonkis.sx/favicon.ico'},
						{title: 'Series Pepito', url: 'seriespepito.to', icon: 'http://s.seriespepito.to/obj/img/favicon.ico'},
						{title: 'Series FLV', url: 'seriesflv.net', icon: 'http://i.imgur.com/4c71T1I.jpg'}];
    
	var arrayPaginas2 = 'seriesyonkis.sx';
	var infoCap = {title: "nada", season: "nada", chapter: "nada"};
    
	var urlBusqueda = 'https://www.google.es/search?gws_rd=ssl&q=texto&btnI';
    
    // Inicializando variables de contenido
	var newDiv = null;
	var newLink = null;
	var iconLink = null;
	var allNewContent = null;
    
	$(".poster, .fanart").each(function (index) {
		allNewContent = null;
        
		//Obtener titulo de la url de la pagina
        	//Try&Catch para controlar si no hay enlace y coger la url actual (?)
        try{
            var urlActual = "";
            urlActual = window.location.pathname;
            // El -1 lo cuenta como true.
            if (urlActual.indexOf("episodes") > -1) {
                infoCap.title = urlActual;
            }
            else {
                infoCap.title = $(this).parent().attr("href");
            }
            var slitUrl = infoCap.title.split("/");
            infoCap.title = slitUrl[2];
            //Obtener info de la url actual
            infoCap.season = (slitUrl[4]) ? slitUrl[4] : '';
            infoCap.chapter = (slitUrl[6]) ? slitUrl[6] : '';

            infoCap.title = infoCap.title.replace(/-/g,"+");
            
            // Si sabemos el cap. buscamos por capítulo. Si no lo sabemos, buscamos sólo por titulo de la serie.
            var stringBusquedaSerie = "";
            if (infoCap.chapter) {
                stringBusquedaSerie = infoCap.title+'+'+infoCap.season+'x'+infoCap.chapter;
            }
            else {
                stringBusquedaSerie = infoCap.title;
            }
            
            //Div contenedor de los enlaces
            newDiv = $("<div></div>")
            .css("position", "absolute")
            .css("height", "256px");

            //Bucle para añadir todos los enlaces del array
            for (var i = 0; i < arrayPaginas.length; i++) {
                urlBusqueda = 'https://www.google.es/search?gws_rd=ssl&q='+stringBusquedaSerie+'+site:'+arrayPaginas[i].url+'&btnI';
                iconLink = $("<img></img>")
                .attr("src", arrayPaginas[i].icon)
                .attr("width", "16")
                .attr("height", "16");


                newLink = $("<a></a>")
                .css("background-color", "white")
                .css("display", "block")
                .css("position", "relative")
                .css("z-index", "2")
                .css("bottom", "0")
                .attr("title", arrayPaginas[i].title)
                .attr("alt", arrayPaginas[i].title)
                .attr("href", urlBusqueda)
                .attr("target", "_blank")
                .append(iconLink);

                allNewContent = newDiv.append(newLink);
            }

            // Añadimos a la página todo lo creado.
            $(this).parent().prepend(allNewContent);
        }
        catch(e){
            
        }
	})
	
	
}());
