export default function Dashboard(){
    return(
    <>
    <div className="header">
      <div className="logo">
        <img
          src="/assets/image/logo_blue.png"
          alt="yotor logo"
          className="logo-image"
        />
      </div>
      <div className="nav">
        <button
          type="button"
          className="nav-button"
        >
          <a href="./index.html"></a>Home
        </button>
        <button
          type="button"
          className="nav-button"
        >
          About
        </button>
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
          <a href="./dashboard.html"></a><img src="/assets/image/profile_icon.png" alt="" />Samli
        </button>
      </div>
    </div>
    <div className="dashboard_container">
      <div className="dashboard_head">
        <div className="dashboard_welcome">
          <p className="dashboard_text">
            <span className="student_name">Hi, Samli!🖐️ </span>
            <span className="s1">What do you want</span>
            <span className="s2">to learn today?</span>
          </p>
        </div>
        <img
          src="/assets/image/course_img/ui.png"
          alt=""
          className="course_img"
        />
        <img
          src="/assets/image/course_img/figma.png"
          alt=""
          className="course_img"
        />
        <img
          src="/assets/image/course_img/ui.png"
          alt=""
          className="course_img"
        />
      </div>
      <div className="learning_courses">
        <img
          src="/assets/image/dashboard.png"
          alt=""
          className="dashboard_course"
        />
        <img
          src="/assets/image/dashboard.png"
          alt=""
          className="dashboard_course"
        />
        <img
          src="/assets/image/dashboard.png"
          alt=""
          className="dashboard_course"
        />
      </div>
    </div>
    <div className="footer">
      <p>&copy; 2025 Yotor Inc. All rights reserved.</p>
      <div className="social_media">
        <a href="https://facebook.com" target="_blank"
          className="s_icons" ><i className="fab fa-facebook-f"></i ></a>
        <a href="https://twitter.com" target="_blank"  className="s_icons"
          ><i className="fab fa-twitter" ></i></a>
        <a href="https://instagram.com" target="_blank"  className="s_icons"
          ><i className="fab fa-instagram" ></i></a>
        <a href="https://www.linkedin.com/company/yotor-acadamy" target="_blank"  className="s_icons"
          ><i className="fab fa-linkedin-in"></i></a>
      </div>
    </div>
    </>
    );
}