import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
    <div className="container">
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
            <Link href='about'>About</Link>

            
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
        <div className="side_header">
          <div className="login-button-box">
            <button
              type="button"
              className="btn login-button"
            >
             <Link href={'/login'}>Login</Link> 
            </button>
          </div>
          <div className="menu-icon" >
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </div>
      <div className="home">
        <div className="intro">
          <p className="title">Shape Your Future</p>
          <p className="des">
            Start learning courses tailored to your interests, participate in
            contests and competitions, and pave the way to your dream job by
            showcasing your unique profile.
          </p>
          <button
            type="button"
            className="btn signup-button"
          >
            Get Started
          </button>
        </div>
        <div className="learning">
          <div>
            <img
              src="/assets/image/child_reading_image.png"
              alt="a person learning"
              className="child-image"
            />
          </div>
        </div>
      </div>

      <div className="courses">
        <button className="all_course_btn">
          <a href="./course.html"></a> See all courses
        </button>
        <div className="course_cards">
          <div className="course_card left left1"></div>

          <div className="course_card left left2"></div>
          <div className="course_card left left3">
            <div className="course_stat">
              <div className="enrolled_courses">
                <p className="enrolled_students">2034 students</p>
              </div>

              <div className="rating"></div>
            </div>
            <div className="course_top">
              <div className="circle_course_dec"></div>
              <div className="courses_img">
              </div>
            </div>

            <div className="course_detail">
              <p className="course_title">Graphics Designing</p>
              <p className="course_description">
                Understand the basics of graphics design Concepts
              </p>
            </div>
            <div className="enroll">
              <a
                href="./register.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="enroll_text">Enroll -{'>'}</p>
              </a>
            </div>
          </div>
          <div className="course_card top">
            <div className="course_stat">
              <div className="enrolled_courses">
                <p className="enrolled_students">2034 students</p>
              </div>

              <div className="rating"></div>
            </div>
            <div className="course_top">
              <div className="circle_course_dec"></div>
              <div className="courses_img">
                <img
                  src="/assets/image/course_img/networking.png"
                  alt=""
                  className="course_img"
                />
              </div>
            </div>

            <div className="course_detail">
              <p className="course_title">Networking Essentials</p>

              <p className="course_description">
                Understand networking concepts such as protocols, IP addressing,
                and network security to build and manage reliable systems
              </p>
            </div>
            <div className="enroll">
              <a
                href="./register.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="enroll_text">Enroll -{'>'}</p>
              </a>
            </div>
          </div>
          <div className="course_card right right1">
            <div className="course_stat">
              <div className="enrolled_courses">
                <h4 className="enrolled_students">2034 students</h4>
              </div>

              <div className="rating"></div>
            </div>
            <div className="course_top">
              <div className="circle_course_dec"></div>
              <div className="courses_img">
              </div>
            </div>

            <div className="course_detail">
              <p className="course_title">Graphics Designing</p>

              <p className="course_description">
                Understand the basics of graphics design Concepts
              </p>
            </div>
            <div className="enroll">
              <a
                href="./register.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="enroll_text">Enroll -{'>'}</p>
              </a>
            </div>
          </div>
          <div className="course_card right right2"></div>
          <div className="course_card right right3"></div>
        </div>
      </div>

      <div className="partner">
        <div className="partners">
          <img
            src="/assets/image/a2sv.png"
            alt=""
            className="partner-logo"
          />
          <img
            src="/assets/image/alx.png"
            alt=""
            className="partner-logo"
          />
          <img
            src="/assets/image/ethiojobs.png"
            alt=""
            className="partner-logo"
          />
        </div>
        <div className="partners">
          <img
            src="/assets/image/ashewa.png"
            alt=""
            className="partner-logo"
          />
          <img
            src="/assets/image/afriwork.png"
            alt=""
            className="partner-logo"
          />
          <img
            src="/assets/image/sand.png"
            alt=""
            className="partner-logo"
          />
        </div>
      </div>

      <div className="Contests"></div>
    </div>
    <div className="footer">
      <p>&copy; 2025 Yotor Inc. All rights reserved.</p>
      <div className="social_media">
        <a href="https://facebook.com" target="_blank" className="s_icons"
          ><i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" target="_blank" className="s_icons"
          ><i className="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com" target="_blank" className="s_icons"
          ><i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/company/yotor-acadamy"
          target="_blank"
          className="s_icons"
          ><i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>
    </>
  );
}
