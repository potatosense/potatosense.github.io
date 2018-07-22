"use strict";

/* Responsive Div
 * Passes it's width to child components.
 */
define([], function () {

  return React.createClass({

    getDefaultProps: function getDefaultProps() {
      return {
        passWidthAs: null,
        updateOnWindowResize: false
      };
    },

    getInitialState: function getInitialState() {
      return {
        width: null
      };
    },

    render: function render() {
      var children = this.props.children;
      var childrenProps = {};

      if (this.props.passWidthAs) {
        childrenProps[this.props.passWidthAs] = this.state.width;
        children = React.Children.map(this.props.children, function (child) {
          return React.cloneElement(child, childrenProps);
        });
      }

      return React.createElement(
        "div",
        { "data-width": this.state.width },
        children
      );
    },

    _updateWidth: function _updateWidth() {
      var node = ReactDOM.findDOMNode(this);
      var width = node.getBoundingClientRect().width;
      if (width !== this.state.width) {
        this.setState({
          width: width
        });
      }
    },

    componentDidMount: function componentDidMount() {
      var _this = this;
      _this._updateWidth();
      if (this.props.updateOnWindowResize) {
        window.addEventListener("resize", function () {
          _this._updateWidth();
        }, false);
      }
    }
  });
});