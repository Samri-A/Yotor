import { Link } from "react-router-dom";
import L_Footer from "../component/landing_footer";
import L_Header from "../component/landing_header";
import learning from "../assets/image/for_design/learning.png"
export default function About(){
    return(
        <>
  <L_Header/>
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
      <img src={learning} alt="" className="abt_kid_image" />
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
  <L_Footer/>
        </>
    )
}