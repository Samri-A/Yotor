import { Link } from "react-router-dom";
export default function Learn(){
    return(
        <>
    <div className="header">
      <div className="logo">
        <img
          src="./assets/image/logo_blue.png"
          alt="yotor logo"
          className="logo-image"
        />
      </div>
      <div className="nav">
        <button
          type="button"
          className="nav-button"
        >
          <Link href='/'>Home</Link>
        </button>
        <button type="button" className="nav-button">About</button>
        <button
          type="button"
          className="nav-button"
        >
          <a href="./course.html"></a>Courses
        </button>
        <button type="button" className="nav-button">Contests</button>
        <button type="button" className="nav-button">Community</button>
        <button type="button" className="nav-button">Jobs</button>
      </div>
      <div className="login-button-box">
        <button
          type="button"
          className="btn login-button"
        >
          <a href="./dashboard.html"></a ><img src="/assets/image/profile_icon.png" alt="" />Samli
        </button>
      </div>
    </div>
    <div className="learn_container">
      <div className="side_bar">
        <p className="module_n">Module</p>
        <div className="module" id="module1">
          <p className="m">Introduction to UI/UX</p>
        </div>
        <div className="module"><p className="m">UX Research Fundamentals</p></div>
        <div className="module"><p className="m">Information Architecture</p></div>
        <div className="module"><p className="m">Wireframing</p></div>
        <div className="module"><p className="m">Visual Design (UI Design)</p></div>
        <div className="module"><p className="m">Prototyping</p></div>
        <div className="module"><p className="m">Usability Testing</p></div>
        <div className="module"><p className="m">UX Writing</p></div>
        <div className="module"><p className="m">Responsive & Adaptive Design</p></div>
        <div className="module"><p className="m">Design Systems & Components</p></div>
      </div>
      <div className="video_side">
        <img
          src="./assets/image/for_design/video_icon.png"
          alt=""
          className="course_video"
        />
        <p className="title">Introduction to UI/UX</p>
      </div>
    </div>
        </>
    );
}