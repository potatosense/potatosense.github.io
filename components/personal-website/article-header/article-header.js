"use strict";

Components.ArticleHeader = function () {

  var Link = ReactRouter.Link;

  return React.createClass({
    render: function render() {
      return React.createElement(
        "div",
        { className: "article-header" },
        React.createElement(
          "div",
          { className: "article-header__button" },
          this.renderLink()
        ),
        React.createElement("img", { className: "article-header__image", src: "/data/images/profile-pic.png" }),
        React.createElement(
          "p",
          { className: "article-header__text" },
          React.createElement(
            "small",
            null,
            React.createElement(
              "span",
              null,
              "By Nayan Suthar \xA0\xA0\xB7\xA0\xA0"
            ),
            React.createElement(
              "span",
              null,
              "12 Jan 2017 \xA0\xA0\xB7\xA0\xA0"
            ),
            React.createElement(
              "span",
              null,
              "10 min read"
            )
          )
        )
      );
    },

    renderLink: function renderLink() {
      if (this.props.routerLink) {
        return React.createElement(Link, { to: this.props.routerLink, className: "icon-button back" });
      } else if (this.props.httpLink) {
        return React.createElement("a", { href: this.props.httpLink, className: "icon-button back" });
      } else {
        return React.createElement("a", { className: "icon-button back" });
      }
    }

  });
}();