"use strict";

define([], function () {
  var styles = styleplus({
    ".comingSoon": {
      display: "block",
      width: "100%",
      height: "100%",
      overflow: "auto",
      boxSizing: "border-box",

      "&__content": {
        display: "block",
        maxWidth: "800px",
        boxSizing: "border-box",
        margin: "0 auto"
      },

      "&__logo": {
        width: "240px",
        height: "auto",
        margin: "160px 0 0",
        boxSizing: "border-box"
      },

      "&__description": {
        fontSize: "19px"
      }
    }
  });

  return React.createClass({
    render: function render() {
      return React.createElement(
        "div",
        { className: "comingSoon" },
        React.createElement(
          "div",
          { className: "comingSoon__content" },
          React.createElement("img", { className: "comingSoon__logo", src: "/assets/images/logo.png" }),
          React.createElement(
            "p",
            { className: "comingSoon__description" },
            "Coming Soon"
          )
        )
      );
    }
  });
});