Components.Background = (function() {

  return React.createClass({
    getDefaultProps: function() {
      return {}
    },

    getInitialState: function() {
      return {}
    },

    render: function () {
      var classes = "background";
      if(this.props.type) {
        classes += " background--" + this.props.type;
      }
      if(this.props.border) {
        if(this.props.border.includes("T")) { classes += " background--border-top"}
        if(this.props.border.includes("B")) { classes += " background--border-bottom"}
        if(this.props.border.includes("L")) { classes += " background--border-left"}
        if(this.props.border.includes("R")) { classes += " background--border-right"}
      }

      return (
        <div className={classes}>
          {this.props.children}
        </div>
      );
    }

  });

})();
