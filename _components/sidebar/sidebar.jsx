/** Spinner
    ======
    Simple
*/

define(["components/global/config"], function(globalConfig) {

  var Link = ReactRouter.Link;

  var styles = styleplus({
    ".sidebar": {
      display: "block",
      width: "100%",
      height: "100%",
      overflow: "auto",
      padding: (globalConfig.grid.base * 5) + "px 0",
      borderRight: "1px solid " + globalConfig.color.border.default,

      "&__folder": {
        display: "block",
        width: "100%",
        padding: (globalConfig.grid.base * 1.5) + "px " + (globalConfig.grid.base * 4) + "px",
      },

      "&__item": {
        display: "block",
        width: "100%",
        padding:(globalConfig.grid.base * 1.5) + "px " + (globalConfig.grid.base * 4) + "px",
        paddingLeft: (globalConfig.grid.base * 6) + "px",
      }
    }
  });

  return React.createClass({
    render: function () {
      return (
        <div className="sidebar">
          {this._renderChildren()}
        </div>
      );
    },

    _renderChildren: function() {
      var i, child;
      var tree = this.props.tree;
      var markup = [];

      for (i = 0; i < tree.length; i++) {
        child = tree[i];
        if(child.type === "folder") {
          markup.push (this._renderFolder(child, i));
        } else {
          markup.push (this._renderItem(child, i));
        }
      }
      return markup;
    },

    _renderFolder: function(item, key) {
      var classes = "sidebar__folder";
      return (
        <div className={classes} key={key}>
          {item.label}
        </div>
      );
    },

    _renderItem: function(item, key) {
      return (
        <Link to={item.link} className="sidebar__item" key={key}>
          {item.label}
        </Link>
      );
    }
  });

});
