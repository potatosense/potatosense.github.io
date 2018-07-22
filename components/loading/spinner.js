"use strict";

/** Spinner
    ======
    Simple
*/

define(["components/global/config"], function (globalConfig) {

  var styles = styleplus({
    "@keyframes spin": {
      from: {
        transform: "rotate(0deg)"
      },
      to: {
        transform: "rotate(360deg)"
      }
    },
    ".spinner": {
      display: "block",
      width: "100%",
      height: "100%",

      "&:before": {
        content: "\"\"",
        display: "block",
        width: globalConfig.grid.base * 3 + "px",
        height: globalConfig.grid.base * 3 + "px",
        position: "absolute",
        top: "50%",
        left: "50%",
        marginLeft: -globalConfig.grid.base * 1.5 + "px",
        marginTop: -globalConfig.grid.base * 1.5 + "px",
        border: globalConfig.grid.base / 4 + "px solid transparent",
        borderTopColor: globalConfig.color.text.black,
        borderRadius: "50%",
        animationName: "spin",
        animationDuration: "1s",
        animationTimingFunction: "linear",
        animationIterationCount: "infinite"
      }
    }
  });

  return React.createClass({
    render: function render() {
      return React.createElement("div", { className: "spinner" });
    }
  });
});