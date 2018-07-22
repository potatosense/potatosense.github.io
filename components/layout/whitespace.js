"use strict";

define(["components/global/config", "components/utils/mixins/clearfix", "components/layout/responsiveDiv"], function (globalConfig, clearfix, ResponsiveDiv) {

  var $ = {
    gutter: globalConfig.grid.base * 5
  };

  var styles = styleplus({
    ".whitespace": {
      display: "block",
      height: 0,
      width: "100%",
      clear: "both",
      "@mixin": clearfix()
    }
  });

  var WhitespaceInner = React.createClass({
    displayName: "WhitespaceInner",


    render: function render() {
      var classes = "whitespace";
      return React.createElement("div", { className: classes, style: { padding: this._getPadding() } });
    },

    _getPadding: function _getPadding() {}

  });

  return React.createClass({

    getDefaultProps: function getDefaultProps() {
      return {
        size: 1
      };
    },

    render: function render() {
      var classes = "whitespace";
      if (this.props.size) {
        classes += " whitespace--" + this.props.size;
      }
      if (this.props.responsiveTo === "screen") {
        classes += " whitespace--screen-responsive";
      }

      return React.createElement(
        ResponsiveDiv,
        null,
        React.createElement(WhitespaceInner, null)
      );
    }

  });
});