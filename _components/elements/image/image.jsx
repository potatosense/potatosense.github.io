Components.Image = (function() {

  return React.createClass({

    render: function () {
      var classes = "img";
      if (this.props.full) { classes += " img--full"; }
      if (this.props.nomargin) { classes += " img--no-margin"; }

      return (
        <img className={classes} src={this.props.src} />
      );
    }

  });

})();
