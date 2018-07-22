define([
  "components/layout/responsiveDiv",
  "components/layout/whitespace",
  "components/sidebar/sidebar"
], function (
  ResponsiveDiv,
  Whitespace,
  Sidebar
) {

  var navTree = [
    {type:"folder", label:"Circle of Design"},
    {type:"item", label:"Design Thinking", link:"/design-thinking/"},
    {type:"item", label:"Design Study", link:"/design-study/"}
  ];

  var styles = styleplus({
    ".bricksMainPage": {
      display: "block",
      width: "100%",
      height: "100%",
      overflow: "auto",
      padding: "0 0 0 320px",
      boxSizing: "border-box",

      "&__sidebar": {
        display: "block",
        width: "320px",
        height: "100%",
        position: "absolute",
        left: "0",
        top: "0",
        bottom: "0",
        boxSizing: "border-box"
      },

      "&__content-wrapper": {
        display: "block",
        width: "100%",
        height: "100%",
        overflow: "auto",
        boxSizing: "border-box"
      },

      "&__content": {
        display: "block",
        maxWidth: "720px",
        boxSizing: "border-box",
        margin: "0 auto"
      }
    }
  });

  return React.createClass ({
    render: function () {
      return (
        <div className="bricksMainPage">
          <div className="bricksMainPage__sidebar">
            <Sidebar tree={navTree}/>
          </div>
          <div className="bricksMainPage__content-wrapper">
            <div className="bricksMainPage__content">
              {this.props.children}
            </div>
          </div>
        </div>
      );
    }
  });
});
