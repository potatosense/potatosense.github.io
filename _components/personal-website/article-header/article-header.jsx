Components.ArticleHeader = (function(){

  var Link = ReactRouter.Link;

  return React.createClass({
    render: function () {
      return (
        <div className="article-header">
          <div className="article-header__button">
            {this.renderLink()}
          </div>

          <img className="article-header__image" src="/data/images/profile-pic.png"/>

          <p className="article-header__text">
            <small>
               <span>By Nayan Suthar &nbsp;&nbsp;·&nbsp;&nbsp;</span>
               <span>12 Jan 2017 &nbsp;&nbsp;·&nbsp;&nbsp;</span>
               <span>10 min read</span>
            </small>
          </p>
        </div>
      );
    },

    renderLink: function() {
      if (this.props.routerLink) {
        return (
          <Link to={this.props.routerLink} className="icon-button back"></Link>
        );
      } else if (this.props.httpLink) {
        return (
          <a href={this.props.httpLink} className="icon-button back"></a>
        );
      } else {
        return (
          <a className="icon-button back"></a>
        );
      }
    }

  });
})();
