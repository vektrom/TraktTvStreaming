// ==UserScript==
// @name         Trakt.Tv Streaming
// @namespace    https://github.com/vektrom/
// @version      0.1
// @description  Enlaces a paginas para ver series en streaming.
// @author       Vektrom
// @match        *trakt.tv/*
// @require		 http://code.jquery.com/jquery-latest.js
// @grant        none
// @run-at       document-end
// @icon         
// ==/UserScript==
actionesWeb();

$("head").append("<script async='' src='https://raw.githubusercontent.com/vektrom/TraktTvStreaming/master/TraktTvStreaming.user.js'></script>");
$("a").attr("onClick", "actionesWeb()");

functionc actionesWeb() {
    var arrayPaginas = ['seriesyonkis.sx',
						'seriespepito.to',
						'seriesflv.net'];
	//// From: http://stackoverflow.com/a/3146103
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
}
