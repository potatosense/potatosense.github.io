/* Responsive Div
 * Passes it's width to child components.
 */
define([], function() {

  return React.createClass({

    getDefaultProps: function() {
      return {
        passWidthAs: null,
        updateOnWindowResize: false
      }
    },

    getInitialState: function() {
      return {
        width: null
      }
    },

    render: function () {
      var children = this.props.children;
      var childrenProps = {};

      if (this.props.passWidthAs) {
        childrenProps [this.props.passWidthAs] = this.state.width;
        children = React.Children.map( this.props.children,
          child => React.cloneElement(child, childrenProps));
      }

      return (
        <div data-width={this.state.width}>
          {children}
        </div>
      );
    },

    _updateWidth: function(){
      var node = ReactDOM.findDOMNode(this);
      var width = node.getBoundingClientRect().width;
      if (width !== this.state.width) {
        this.setState({
          width: width
        });
      }
    },

    componentDidMount: function() {
      var _this = this;
      _this._updateWidth();
      if (this.props.updateOnWindowResize) {
        window.addEventListener("resize", function() {
          _this._updateWidth();
        }, false);
      }
    }
  });
});
