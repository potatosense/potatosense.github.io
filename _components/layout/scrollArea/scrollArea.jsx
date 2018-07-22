Components.ScrollArea = (function() {

  return React.createClass({
    render: function () {
      var classes = "scroll-area";
      if (this.props.horizontal) {
        classes = "scroll-area scroll-area--x";
      } else if (this.props.vertical) {
        classes = "scroll-area scroll-area--y";
      }
      return (
        <div className={classes}>
          {this.props.children}
        </div>
      );
    },
  });

})();
