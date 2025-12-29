import Link from "next/link"
export default function About(){
    return(
        <>
  <div className="header">
    <div className="logo">
      <img src="./assets/image/logo_blue.png" alt="yotor logo" className="logo-image" />
    </div>
    <div className="nav">
      <button type="button" className="nav-button" >
        <a href="./index.html"></a>Home
      </button>
      <button type="button" className="nav-button" >About</button>
      <button type="button" className="nav-button" >
        <Link href={'/courses'}>Courses</Link> 
      </button>
      <button type="button" className="nav-button">Contests</button>
      <button type="button" className="nav-button">Community</button>
      <button type="button" className="nav-button">Jobs</button>
    </div>
    <div className="side_header">
      <div className="login-button-box">
        <button type="button" className="btn login-button" >
             <Link href={'/login'}>Login</Link> 
        </button>
      </div>
      <div className="menu-icon" >
        <i className="fas fa-bars"></i>
      </div>
    </div>
  </div>
  <div className="about_container">
    <div className="about_text">
      <p className="started">How It Started</p>
      <p className="dream">Our Dream is Global Learning Tranformation</p>
      <p className="abt_desc">
        Our dream is to create a digital haven of knowledge accessible to all.
        United by their belief in the transformational power of education,
        they embarked on a journey to build Kawruh With relentless
        dedication, they gathered a team of experts and launched this
        innovative platform, creating a global community of eager learners,
        all connected by the desire to explore, learn, and grow
      </p>
    </div>
    <div className="about_box">
      <img src="/assets/image/for_design/learning.png" alt="" className="abt_kid_image" />
      <div className="testmony">
        <div className="about_card">
          <p className="about_large_text">3.5</p>
          <p className="about_small_text">Years Experience</p>
        </div>
        <div className="about_card">
          <p className="about_large_text">23</p>
          <p className="about_small_text">Projects</p>
        </div>
        <div className="about_card">
          <p className="about_large_text">830+</p>
          <p className="about_small_text">Postive Reviews</p>
        </div>
        <div className="about_card">
          <p className="about_large_text">100K</p>
          <p className="about_small_text">Trusted Students</p>
        </div>
      </div>
    </div>
  </div>
  <div className="footer">
    <p>&copy; 2025 Yotor Inc. All rights reserved.</p>
    <div className="social_media">
      <a href="https://facebook.com" target="_blank" className="s_icons"><i className="fab fa-facebook-f"></i></a>
      <a href="https://twitter.com" target="_blank" className="s_icons"><i className="fab fa-twitter"></i></a>
      <a href="https://instagram.com" target="_blank" className="s_icons"><i className="fab fa-instagram"></i></a>
      <a href="https://www.linkedin.com/company/yotor-acadamy" target="_blank" className="s_icons"><i
          className="fab fa-linkedin-in"></i></a>
    </div>
  </div>
        </>
    )
}