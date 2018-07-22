/**
* Styleplus
*
* Add styles dynamicaly in <style> tag using JS Object (For React components)
*/

var styleplus = (function() {
  /**
  * Create and add style tag in head
  */
  var _styleDOM = document.createElement ("style");
  _styleDOM.type = "text/css";
  _styleDOM.id = "stylo-stylesheet";
  document.getElementsByTagName ("head") [0].appendChild (_styleDOM);

  /**
  * Helper Functions
  */
  var _isObject = function (obj) {
    return (typeof obj === "object" && !Array.isArray(obj) && obj !== null);
  }
  var _parseSelector = function (selector, parent) {
    if (selector.indexOf ("&") !== -1) {
      return selector.replace (/&/g, parent);
    } else {
      return parent + " " + selector;
    }
  }

  var _parseStyle = function (property, value) {
    property = property.replace(/([a-z1-9])([A-Z])/g, "$1-$2").toLowerCase ();
    return property + ": " + value + "; ";
  };


  /* Return the function to add styles to the style tag */
  return function(styleObj) {
    var flatStyleObj = {};
    var keyframeString = "";
    var styleString = "";

    // Flatten style object to final output structure.
    // Actual styles declaration are pased as added as array of strings for each selector

    var flattenStyleObj = function (obj, target, selector) {
      for (var key in obj) {
        if (_isObject(obj [key])) {
          if(key.startsWith("@keyframe")) {
            // If keyframes, create a nestes object
            target [key] = {};
            flattenStyleObj (obj [key], target [key], "");
          } else if (key.startsWith("@mixin")) {
            // If mixin, flatten the given object in place
            flattenStyleObj (obj [key], target, selector);
          } else {
            // If it's an object, create a new selector
            var newSelector  = _parseSelector(key, selector);
            // Create a new key in flatStyleObj
            target [newSelector] = [];
            // and flatten the object with the new selector
            flattenStyleObj(obj [key], target, newSelector);
          }
          // Else add the key value as a properties under the selector
        } else if (selector && target[selector]) {
          target[selector].push (_parseStyle(key, obj[key]))
        }
      }
    };
    flattenStyleObj(styleObj, flatStyleObj, "");

    var parseStyleObj = function (obj) {
      for (var key in obj) {
        styleString += key + " {";
        if (_isObject(obj [key])) {
          parseStyleObj (obj [key]);
        } else {
          styleString += obj [key].join (" ");
        }
        styleString += "} ";
      }
    };
    parseStyleObj (flatStyleObj);

    _styleDOM.innerHTML += styleString;

    return null;
  };
}) ();
