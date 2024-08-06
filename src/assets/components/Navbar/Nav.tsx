import "./nav.scss";

export default function Nav() {
  return (
    <div className="navbar">
      <div className="logoContainer">
        <img src="./icons/logo.svg" alt="" />
        <span>Mutineer</span>
      </div>

      <div className="end">

        <div className="icons">
          <img src="./icons/search.svg" alt="" />
          <img src="./icons/app.svg" alt="" />
          <img src="./icons/expand.svg" alt="" /> 
          <img src="./icons/notifications.svg" alt="" />
          <div className="budge">
            <span>3</span>
          </div>
        </div>

        <div className="user">
          <img src="./icons/noavatar.png" alt="" />
          <span>Admin</span>
        </div>

        <img src="./icons/settings.svg" alt="" />
      </div>
    </div>
  )
}
