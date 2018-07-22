define ([
  "components/global/config",
  "components/utils/mixins/clearfix",
  "components/layout/responsiveDiv"
], function(
  globalConfig, clearfix, ResponsiveDiv
) {

  var $ = {
    gutter: globalConfig.grid.base * 5
  }

  var styles = styleplus ({
    ".whitespace": {
      display: "block",
      height: 0,
      width: "100%",
      clear: "both",
      "@mixin": clearfix ()
    }
  });

  var WhitespaceInner = React.createClass({

    render: function () {
      var classes = "whitespace";
      return (
        <div className={classes} style={{padding: this._getPadding()}}/>
      );
    },

    _getPadding: function () {

    }


  });


  return React.createClass({

    getDefaultProps: function() {
      return {
        size: 1
      }
    },

    render: function () {
      var classes = "whitespace";
      if(this.props.size) {
        classes += " whitespace--" + this.props.size;
      }
      if(this.props.responsiveTo === "screen") {
        classes += " whitespace--screen-responsive";
      }

      return (
        <ResponsiveDiv>
          <WhitespaceInner />
        </ResponsiveDiv>
      );
    }

  });

});
