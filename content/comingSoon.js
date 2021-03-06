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
        margin: "0 auto",
        padding: "120px 32px"
      },

      "&__image": {
        display: "block",
        width: "210px",
        height: "auto",
        margin: "0",
        boxSizing: "border-box",
        opacity: "0.6"
      },

      "&__logo": {
        display: "block",
        width: "280px",
        height: "auto",
        margin: "16px 0 0",
        boxSizing: "border-box"
      },

      "&__description": {
        fontSize: "19px",
        color: "rgba(0,0,0,0.6)"
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
          React.createElement("img", { className: "comingSoon__image", src: "/assets/images/potato.png" }),
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