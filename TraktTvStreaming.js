
//// From: http://stackoverflow.com/a/3550261
// a function that loads jQuery and calls a callback function when jQuery has finished loading
function addJQuery(callback) {
  var script = document.createElement("script");
  script.setAttribute("src", "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js");
  script.addEventListener('load', function() {
    var script = document.createElement("script");
    script.textContent = "window.jQ=jQuery.noConflict(true);(" + callback.toString() + ")();";
    document.body.appendChild(script);
  }, false);
  document.body.appendChild(script);
}

// the guts of this userscript
function main() {
  // Note, jQ replaces $ to avoid conflicts.
	var codigo = "<div style='position: absolute; z-index: 2; margin-top: 237px;'><a style='background-color: yellow; display: inline-block;' href='http://google.es'><div>Google</div></a><a style='background-color: yellow; display: inline-block;' href='http://google.es'><div>Google</div></a><a style='background-color: yellow; display: inline-block;' href='http://google.es'><div>Google</div></a><a style='background-color: yellow; display: inline-block;' href='http://google.es'><div>Google</div></a></div>";
	
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
	$(".poster").parent().parent()
		.prepend(allNewContent);

}

// load jQuery and execute the main function
addJQuery(main);
