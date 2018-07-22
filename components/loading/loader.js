"use strict";

/** Loader
    ======
    Loader is a component that will render a spinner initially and load required component.
    Once the component is loaded, it will render that component with given children.
    Currently loader does not support props for the component, only children are supported.
*/

define(["components/loading/spinner"], function (Spinner) {
  return React.createClass({

    getInitialState: function getInitialState() {
      return {
        element: null
      };
    },

    render: function render() {
      var Elem = this.state.element;
      if (Elem) {
        return React.createElement(
          Elem,
          null,
          this.props.children
        );
      } else {
        require([this.props.element], this._updateContent);
        return React.createElement(Spinner, null);
      }
    },

    _updateContent: function _updateContent(elem) {
      this.setState({
        element: elem
      });
    }

  });
});