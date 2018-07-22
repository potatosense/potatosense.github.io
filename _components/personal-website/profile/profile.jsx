Components.Profile = (function (){
  return React.createClass({
    render: function () {
      return (
        <div className="profile">
          <img className="profile__image" src="/data/images/profile-pic.png"/>
          <div className="profile__button">
            <a href="" className="icon-button linkedin"></a>
          </div>
          <div className="profile__button">
            <a href="" className="icon-button twitter"></a>
          </div>
        </div>
      );
    }
  });
})();
