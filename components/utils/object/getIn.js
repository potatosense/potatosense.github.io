"use strict";

define([], function () {
  return function (obj, keys) {
    var currentObject = obj,
        index;
    for (index = 0; index < keys.length; index++) {
      // Look for key if complex datatype
      if (currentObject instanceof Object && currentObject.hasOwnProperty(keys[index])) {
        currentObject = currentObject[keys[index]];
      } else {
        return;
      }
    }
    return currentObject;
  };
});