"use strict";

Components.ProjectLink = function () {

  var Link = ReactRouter.Link;

  return React.createClass({
    render: function render() {
      return React.createElement(
        "div",
        { className: "project-link" },
        React.createElement(
          "h6",
          { className: "project-link__header" },
          this.renderLink()
        ),
        React.createElement(
          "p",
          { className: "project-link__desc" },
          "Interactively visualize customer directed alignments via user friendly \"outside the box\" thinking. Enthusiastically fabricate long-term high-impact supply chains before client-based innovation."
        )
      );
    },
    renderLink: function renderLink() {
      if (this.props.routerLink) {
        return React.createElement(
          Link,
          { to: this.props.routerLink },
          "Compellingly supply impactful total linkage after superior value"
        );
      } else if (this.props.httpLink) {
        return React.createElement(
          "a",
          { href: this.props.httpLink },
          "Compellingly supply impactful total linkage after superior value"
        );
      } else {
        return React.createElement(
          "a",
          null,
          "Compellingly supply impactful total linkage after superior value"
        );
      }
    }
  });
}();