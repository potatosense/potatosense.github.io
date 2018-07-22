(function(){
  var _ = function(key) {return getKeyFromComponentConfig ("rowColumn", key)}
  var _config = {
    align:              _("align"),
    breakpoints:        [1184, 960, 840, 600, 480],
    numberOfColumns:    [12,   12,  8,   8,   4],
    gutter:             [80,   64,  64,  48,  48],
    columnGap:          [32,   24,  24,  16,  16],
    columnSize:         [3,    4,   4,   4,   4],
    columnLeftOffset:   [0,    0,   0,   0,   0],
    columnRightOffset:  [0,    0,   0,   0,   0]
  };

  // Get value for given width
  var _getValueForWidth = function(breakpoints, currentWidth, values) {
    // Find target breakpoint from list breakpoints
    var targetBreakpoint = Math.max.apply(null, breakpoints);
    breakpoints.forEach(function(p) {
      if (p >= currentWidth && p < targetBreakpoint) {
        targetBreakpoint = p;
      }
    });
    // Return value for target breakpoint
    return values[breakpoints.indexOf(targetBreakpoint)];
  }


  var ResponsiveDiv = Components.ResponsiveDiv;
  var RowContent = React.createClass({
    render: function () {
      var breakpoints = this.props.breakpoints;
      var currentWidth = this.props.currentWidth;
      var maxWidth = Math.max.apply(null, breakpoints);
      var gutter = _getValueForWidth(breakpoints, currentWidth, this.props.gutter);
      var marginLeft = this.props.align === "left" ? 0 : "auto";
      var marginRight = this.props.align === "right" ? 0 : "auto";

      var style = {
        maxWidth: (maxWidth + "px"),
        padding: ("0 " + (gutter / 2) + "px"),
        marginLeft: marginLeft,
        marginRight: marginRight
      };

      var childrenWithProps = React.Children.map( this.props.children,
        child => React.cloneElement(child, {
          breakpoints: this.props.breakpoints,
          numberOfColumns: this.props.numberOfColumns,
          currentWidth: this.props.currentWidth,
          columnSize: this.props.columnSize,
          columnLeftOffset: this.props.columnLeftOffset,
          columnRightOffset: this.props.columnRightOffset,
          columnGap: this.props.columnGap,
        })
      );

      return (
        <div  className="row__content" style={style}>
          {childrenWithProps}
        </div>
      );
    }
  });

  /*
  * Row
  */
  Components.Row = (function() {
    return React.createClass({
      getDefaultProps: function() {
        return {
          align: _config.align,
          breakpoints: _config.breakpoints,
          numberOfColumns: _config.numberOfColumns,
          gutter: _config.gutter,
          columnGap: _config.columnGap,
          columnSize: _config.columnSize,
          columnLeftOffset: _config.columnLeftOffset,
          columnRightOffset: _config.columnRightOffset
        }
      },

      render: function () {
        return (
          <ResponsiveDiv className="row" passWidthAs="currentWidth">
            <RowContent align={this.props.align}
              breakpoints={this.props.breakpoints}
              numberOfColumns={this.props.numberOfColumns}
              gutter={this.props.gutter}
              columnGap={this.props.columnGap}
              columnSize={this.props.columnSize}
              columnLeftOffset={this.props.columnLeftOffset}
              columnRightOffset={this.props.columnRightOffset}>
              {this.props.children}
            </RowContent>
          </ResponsiveDiv>
        );
      }

    });

  })();


  Components.Column = (function() {

    return React.createClass({
      // Props: size, leftOffset, rightOffset
      // Props from parent Row:
      // columnGap, breakpoints, width, columnSize, columnLeftOffset, columnRightOffset,

      render: function () {
        var breakpoints = this.props.breakpoints;
        var numberOfColumns = this.props.numberOfColumns;
        var currentWidth = this.props.currentWidth;
        var columnGap = this.props.columnGap;
        var size = this.props.size || this.props.columnSize;
        var leftOffset = this.props.leftOffset || this.props.columnLeftOffset;
        var rightOffset = this.props.rightOffset || this.props.columnRightOffset;

        var currentSize = _getValueForWidth(breakpoints, currentWidth, size);
        var currentNumberOfColumns = _getValueForWidth(breakpoints, currentWidth, numberOfColumns);
        var currentColumnGap = _getValueForWidth(breakpoints, currentWidth, columnGap);
        var currentLeftOffset = _getValueForWidth(breakpoints, currentWidth, leftOffset);
        var currentRightOffset = _getValueForWidth(breakpoints, currentWidth, rightOffset);

        var width = (currentSize / currentNumberOfColumns) * 100;
        var marginLeft = (currentLeftOffset / currentNumberOfColumns) * 100;
        var marginRight = (currentRightOffset / currentNumberOfColumns) * 100;

        var style = {
          width: (width + "%"),
          padding: ("0 " + (currentColumnGap / 2) + "px"),
          marginLeft: marginLeft + "%",
          marginRight: marginRight + "%"
        };

        return (
          <div className="column" style={style}>
            {this.props.children}
          </div>
        );
      }

    });

  })();

})();
