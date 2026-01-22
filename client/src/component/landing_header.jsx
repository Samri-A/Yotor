import { NavLink , Link } from "react-router-dom";
import logo from "../assets/image/logo_blue.png";
export default function L_Header(){
    return(
        <>
        <div className="header">
        <div className="logo">
          <img
            src={logo}
            alt="yotor logo"
            className="logo-image"
          />
        </div>
        <div className="nav">
          <button
            type="button"
            className="nav-button"
          > <Link to={'/'}>Home</Link>
            
          </button>
          <button
            type="button"
            className="nav-button"
          >
            <Link to={'/about'}>About</Link>

            
          </button>
          <button
            type="button"
            className="nav-button"
          >
            <Link to={'/courses'}>Courses</Link>
           
          </button>
          <button type="button" className="nav-button">Contests</button>
          <button type="button" className="nav-button">Community</button>
          <button type="button" className="nav-button">Jobs</button>
        </div>
        <div className="side_header">
          <div className="login-button-box">
            <button
              type="button"
              className="btn login-button"
            >
             <Link to={'/login'}>Login</Link> 
            </button>
          </div>
          <div className="menu-icon" >
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </div>
        </>
    );
}