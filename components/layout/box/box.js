"use strict";

Components.Box = function () {

  return React.createClass({
    getDefaultProps: function getDefaultProps() {
      return {
        layout: "col"
      };
    },
    render: function render() {
      var classes = "box";
      if (this.props.full) {
        classes += " box--full";
      }
      if (this.props.fullx) {
        classes += " box--fullx";
      }
      if (this.props.layout === "col") {
        classes += " box--col-layout";
      }
      if (this.props.layout === "row") {
        classes += " box--row-layout";
      }

      return React.createElement(
        "div",
        { className: classes },
        this.props.children
      );
    }
  });
}();

Components.BoxItem = function () {

  return React.createClass({
    render: function render() {
      var classes = "box__item";
      if (this.props.fixed) {
        classes = "box__fixed-item";
      }

      return React.createElement(
        "div",
        { className: classes },
        this.props.children
      );
    }
  });
}();