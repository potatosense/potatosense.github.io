"use strict";

Components.Profile = function () {
  return React.createClass({
    render: function render() {
      return React.createElement(
        "div",
        { className: "profile" },
        React.createElement("img", { className: "profile__image", src: "/data/images/profile-pic.png" }),
        React.createElement(
          "div",
          { className: "profile__button" },
          React.createElement("a", { href: "", className: "icon-button linkedin" })
        ),
        React.createElement(
          "div",
          { className: "profile__button" },
          React.createElement("a", { href: "", className: "icon-button twitter" })
        )
      );
    }
  });
}();