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

    var arrayPaginas = [{url: 'seriesyonkis.sx', icon: ''},
                        {url: 'seriespepito.to', icon: ''},
                        {url: 'seriesflv.net', icon: ''}];
    
    var infoCap = {title: '', season: '', chapter: ''};
    
	//// The correct way to do it from: http://stackoverflow.com/a/3146103
	var newDiv = $("<div></div>")
				.css("position", "absolute")
                .css("height", "256px");
    var newLink = $("<a></a>")
    				.css("background-color", "yellow")
    				.css("display", "block")
    				.css("position", "relative")
	    			.css("z-index", "2")
    				.css("bottom", "0")
    				.attr("href", "http://www.google.com/")
    				.attr("target", "_blank")
    					.append("Google");
    var newLink2 = $("<a></a>")
    				.css("background-color", "yellow")
    				.css("display", "block")
    				.css("position", "relative")
	    			.css("z-index", "2")
    				.css("bottom", "0")
    				.attr("href", "http://www.google.com/")
    				.attr("target", "_blank")
    					.append("Google");
	var allNewContent = newDiv.append(newLink).append(newLink2).append(newLink).append(newLink);
	$(".poster").parent()
		.prepend(allNewContent);
}());
