"use strict";

define([], function () {
  return function (y, x) {
    var arr = new Array(y);
    for (var i = 0; i < y; i++) {
      arr[i] = new Array(x);
      for (var j = 0; j < x; j++) {
        arr[i][j] = null;
      }
    }
    return arr;
  };
});