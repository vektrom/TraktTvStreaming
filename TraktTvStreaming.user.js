// ==UserScript==
// @name         Trakt.Tv Streaming
// @namespace    https://github.com/vektrom/
// @version      0.1
// @description  Enlaces a paginas para ver series en streaming.
// @author       Vektrom
// @match        *trakt.tv/*
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
    
	var urlBusqueda = 'https://www.google.es/?gws_rd=ssl#q=hola&btnI';
    
    // Inicializando variables de contenido
	var newDiv = null;
	var newLink = null;
	var iconLink = null;
    
	$(".poster").each(function (index, element) {
		var allNewContent = null;
        
		//Obtener titulo de la url de la pagina
		infoCap.title = $(this).parent().attr("href");
		//Limpianto titulo
		infoCap.title = infoCap.title.replace("/shows/","");
		infoCap.title = infoCap.title.replace("/movies/","");
        	//No reemplaza el guión del año de las películas
		infoCap.title = infoCap.title.replace("-","+");
        
		newDiv = $("<div></div>")
				.css("position", "absolute")
				.css("height", "256px");
		
        for (var i = 0; i < arrayPaginas.length; i++) {
			urlBusqueda = 'https://www.google.es/?gws_rd=ssl#q='+infoCap.title+'+site:'+arrayPaginas[i].url+'+&btnI';
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
        
		$(this).parent().prepend(allNewContent);
        
	})
	
	
}());
