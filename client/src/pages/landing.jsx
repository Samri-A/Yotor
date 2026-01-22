import { NavLink , Link } from "react-router-dom";
import L_Header from "../component/landing_header";
import L_Footer from "../component/landing_footer";
import img_child from "../assets/image/child_reading_image.png";
import networking from "../assets/image/course_img/networking.png";
import a2sv from "../assets/image/a2sv.png";
import alx from "../assets/image/alx.png";
import ethiojobs from "../assets/image/ethiojobs.png";
import ashewa from "../assets/image/ashewa.png";
import sand from "../assets/image/sand.png";
import afriwork from "../assets/image/afriwork.png";
export default function Landing() {
  return (
    <>
    <div className="container">
      <L_Header/>
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
            <Link to={'/register'}>   Get Started</Link>
          
          </button>
        </div>
        <div className="learning">
          <div>
            <img
              src={img_child}
              alt="a person learning"
              className="child-image"
            />
          </div>
        </div>
      </div>

      <div className="courses">
        <button className="all_course_btn">
           See all courses
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
                  src={networking}
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
            src={a2sv}
            alt=""
            className="partner-logo"
          />
          <img
            src={alx}
            alt=""
            className="partner-logo"
          />
          <img
            src={ethiojobs}
            alt=""
            className="partner-logo"
          />
        </div>
        <div className="partners">
          <img
            src={ashewa}
            alt=""
            className="partner-logo"
          />
          <img
            src={afriwork}
            alt=""
            className="partner-logo"
          />
          <img
            src={sand}
            alt=""
            className="partner-logo"
          />
        </div>
      </div>

    <div className="Contests"></div>
  
    <L_Footer/>
    </div>
    </>
  );
}
