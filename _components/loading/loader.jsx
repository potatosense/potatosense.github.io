/** Loader
    ======
    Loader is a component that will render a spinner initially and load required component.
    Once the component is loaded, it will render that component with given children.
    Currently loader does not support props for the component, only children are supported.
*/

define(["components/loading/spinner"], function(Spinner) {
  return React.createClass({

    getInitialState: function() {
      return {
        element: null
      };
    },

    render: function () {
      var Elem = this.state.element;
      if (Elem) {
        return <Elem>{this.props.children}</Elem>;
      } else {
        require([this.props.element], this._updateContent);
        return <Spinner />;
      }
    },

    _updateContent: function(elem) {
      this.setState ({
        element: elem
      });
    }

  });
});
