Components.ProjectLink = (function () {

  var Link = ReactRouter.Link;

  return React.createClass({
    render: function () {
      return (
        <div className="project-link">
          <h6 className="project-link__header">
            {this.renderLink ()}
          </h6>
          <p className="project-link__desc">
            Interactively visualize customer directed alignments via user friendly
            "outside the box" thinking. Enthusiastically fabricate long-term
            high-impact supply chains before client-based innovation.
          </p>
        </div>
      );
    },
    renderLink: function() {
      if (this.props.routerLink) {
        return (
          <Link to={this.props.routerLink}>
              Compellingly supply impactful total linkage after superior value
          </Link>
        );
      } else if (this.props.httpLink) {
        return (
          <a href={this.props.httpLink}>Compellingly supply impactful total linkage after superior value</a>
        );
      } else {
        return (
          <a>Compellingly supply impactful total linkage after superior value</a>
        );
      }
    }
  });
})();
