"use strict";

Components.Image = function () {

  return React.createClass({

    render: function render() {
      var classes = "img";
      if (this.props.full) {
        classes += " img--full";
      }
      if (this.props.nomargin) {
        classes += " img--no-margin";
      }

      return React.createElement("img", { className: classes, src: this.props.src });
    }

  });
}();