import { Link } from "react-router-dom";
import "./left.scss";

export default function Left() {
  return (
    <div className="left">
      <div className="first">
        <div className="title">
          <span>MAIN</span>
        </div>

        <div className="item">
          <img src="./icons/home.svg" alt="" /> 
          <span>Home</span>  
        </div>

        <div className="item">
          <img src="./icons/profile.svg" alt="" />
          <span>Profile</span>
        </div>
      </div>

      <div className="lists">
          <div className="title">
          <span>LISTS</span>
          </div>
          <div className="item">
              <Link to={"/user"}>
              <img src="./icons/user.svg" alt="" />
              <span>Users</span>
              </Link>
          </div>
          <div className="item">
            <img src="./icons/product.svg" alt="" />
            <span>Products</span>
          </div>
          <div className="item">
            <img src="./icons/order.svg" alt="" />
            <span>Orders</span>
          </div>
          <div className="item">
            <img src="./icons/post2.svg" alt="" />
            <span>Users</span>
          </div>
      </div>

      <div className="general">
        <div className="title">
        <span>GENERAL</span>
        </div>
        <div className="item">
          <img src="./icons/element.svg" alt="" />
          <span>Elements</span>
        </div>
        <div className="item">
          <img src="./icons/note.svg" alt="" />
          <span>Elements</span>
        </div>
        <div className="item">
          <img src="./icons/form.svg" alt="" />
          <span>Forms</span>
        </div>
        <div className="item">
          <img src="./icons/calendar.svg" alt="" />
          <span>Calendar</span>
        </div>
      </div>

      <div className="maintenance">
       <div className="title">
       <span>MAIINTENANCE</span>
       </div>
        <div className="item">
          <img src="./icons/settings.svg" alt="" />
          <span>Settings</span>
        </div>
        <div className="item">
          <img src="./icons/backup.svg" alt="" />
          <span>Backups</span>
        </div>
      </div>

      <div className="analytics">
        <div className="title">
        <span>ANALYTICS</span>
        </div>
        <div className="item">
          <img src="./icons/chart.svg" alt="" />
          <span>Charts</span>
        </div>
        <div className="item">
          <img src="./icons/chart.svg" alt="" />
          <span>Charts</span>
        </div>
        <div className="item">
          <img src="./icons/chart.svg" alt="" />
          <span>Charts</span>
        </div>
      </div>
      
    </div>
  )
}
