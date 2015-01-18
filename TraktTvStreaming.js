///////////////
// From: http://stackoverflow.com/questions/2246901/how-can-i-use-jquery-in-greasemonkey-scripts-in-google-chrome
///////////////
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
  $(".poster").parent().parent()
    .prepend(codigo);

}

// load jQuery and execute the main function
addJQuery(main);
