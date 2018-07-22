/**
* Markdown to JSX
*/

var markdownToJsx = (function() {

  var jsxBegining = (
    "define([], function() {" +
    "  return React.createClass({ " +
    "    render: function () { " +
    "      return (" +
    "        <div>"
  );

  var jsxEnding = (
    "        </div>" +
    "      )" +
    "    }" +
    "  })" +
    "})"
  );

  var heading1 = function (text) {
    return "<h1>" + text + "</h1>";
  };
  var heading2 = function (text) {
    return "<h2>" + text + "</h2>";
  };
  var heading3 = function (text) {
    return "<h3>" + text + "</h3>";
  };
  var heading4 = function (text) {
    return "<h4>" + text + "</h4>";
  };
  var heading5 = function (text) {
    return "<h15>" + text + "</h5>";
  };
  var heading5 = function (text) {
    return "<h5>" + text + "</h5>";
  };
  var heading6 = function (text) {
    return "<h6>" + text + "</h6>";
  };
  var paragraph = function (text) {
    return "<p>" + text + "</p>";
  };


  /* Return the function to convert markdown into Html */
  return function(markdown) {
    var jsxContent = "";
    // Process markdown content
    markdown.split("\n").forEach (function(line) {
      var type = line.split(" ")[0];
      switch (type) {
        case "#": jsxContent += heading1(line.substr(2))
        break;
        case "##": jsxContent += heading2(line.substr(3))
        break;
        case "###": jsxContent += heading3(line.substr(4))
        break;
        case "####": jsxContent += heading4(line.substr(5))
        break;
        case "#####": jsxContent += heading5(line.substr(6))
        break;
        case "######": jsxContent += heading6(line.substr(7))
        break;
        default: jsxContent += paragraph(line)
        break;
      }
    });

    return jsxBegining + jsxContent + jsxEnding;
  };
}) ();


module.exports = markdownToJsx;
