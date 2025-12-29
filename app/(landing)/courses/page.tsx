import Link from "next/link";
export default function Courses(){
    return(
        <>
        
    <div className="header">
        <div className="logo">
            <img src="./assets/image/logo_blue.png" alt="yotor logo" className="logo-image" />
        </div>
        <div className="nav">
            <button type="button" className="nav-button">
                <a href="./index.html"></a>Home
            </button>
            <button type="button" className="nav-button">About</button>
            <button type="button" className="nav-button" >
                <a href="/course"></a>Courses
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
    <div className="container_course">
        <div className="heading">
            <p className="catagory">UI/UX Design</p>
            <button className="see_all">See all</button>
        </div>
        <div className="course_grid">
            <div className="course_catalog" >
                <div className="course_title_top">
                    <img src="/assets/image/for_design/course_icon.png" alt="" className="course_icon" />
                    <p className="course_title">UI/UX Design</p>
                </div>

                <div className="tutor_des">
                    <p className="grey_texts tutor_name">Sirak Sebastian</p>
                    <img src="/assets/image/for_design/verfiy.png" alt="" className="verfied_icon" />
                    <p className="grey_texts students_enrolled">2000+ students</p>
                </div>
                <p className="grey_texts course_description">
                    Learn the art of crafting intuitive, visually appealing, and
                    functional digital interfaces with this UI Design course.
                </p>
                <div className="rate">
                    <p className="price">500 birr</p>
                    <div className="rating">
                        <img src="/assets/image/for_design/rated_star.png" alt="" className="star_r" />
                        <img src="/assets/image/for_design/rated_star.png" alt="" className="star_r" />
                        <img src="/assets/image/for_design/rated_star.png" alt="" className="star_r" />
                        <img src="/assets/image/for_design/rated_star.png" alt="" className="star_r" />
                        <img src="/assets/image/for_design/rated_star.png" alt="" className="star_r" />
                    </div>
                </div>
            </div>
            <div className="course_catalog">
                <Link href={'/learn'}></Link>
                <div className="course_title_top">
                    <img src="/assets/image/for_design/course_icon.png" alt="" className="course_icon" />
                    <p className="course_title">UI/UX Design</p>
                </div>

                <div className="tutor_des">
                    <p className="grey_texts tutor_name">Sirak Sebastian</p>
                    <img src="/assets/image/for_design/verfiy.png" alt="" className="verfied_icon" />
                    <p className="grey_texts students_enrolled">2000+ students</p>
                </div>
                <p className="grey_texts course_description">
                    Learn the art of crafting intuitive, visually appealing, and
                    functional digital interfaces with this UI Design course.
                </p>
                <div className="rate">
                    <p className="price">500 birr</p>
                    <div className="rating">
                        <img src="/assets/image/for_design/rated_star.png" alt="" className="star_r" />
                        <img src="/assets/image/for_design/rated_star.png" alt="" className="star_r" />
                        <img src="/assets/image/for_design/rated_star.png" alt="" className="star_r" />
                        <img src="/assets/image/for_design/rated_star.png" alt="" className="star_r" />
                        <img src="/assets/image/for_design/rated_star.png" alt="" className="star_r" />
                    </div>
                </div>
            </div>
            <div className="course_catalog" >
                <div className="course_title_top">
                    <img src="/assets/image/for_design/course_icon.png" alt="" className="course_icon" />
                    <p className="course_title">UI/UX Design</p>
                </div>

                <div className="tutor_des">
                    <p className="grey_texts tutor_name">Sirak Sebastian</p>
                    <img src="/assets/image/for_design/verfiy.png" alt="" className="verfied_icon" />
                    <p className="grey_texts students_enrolled">2000+ students</p>
                </div>
                <p className="grey_texts course_description">
                    Learn the art of crafting intuitive, visually appealing, and
                    functional digital interfaces with this UI Design course.
                </p>
                <div className="rate">
                    <p className="price">500 birr</p>
                    <div className="rating">
                        <img src="/assets/image/for_design/rated_star.png" alt="" className="star_r" />
                        <img src="/assets/image/for_design/rated_star.png" alt="" className="star_r" />
                        <img src="/assets/image/for_design/rated_star.png" alt="" className="star_r" />
                        <img src="/assets/image/for_design/rated_star.png" alt="" className="star_r" />
                        <img src="/assets/image/for_design/rated_star.png" alt="" className="star_r" />
                    </div>
                </div>
            </div>
            <div className="course_catalog">
                <div className="course_title_top">
                    <img src="./assets/image/for_design/course_icon.png" alt="" className="course_icon" />
                    <p className="course_title">UI/UX Design</p>
                </div>

                <div className="tutor_des">
                    <p className="grey_texts tutor_name">Sirak Sebastian</p>
                    <img src="/assets/image/for_design/verfiy.png" alt="" className="verfied_icon" />
                    <p className="grey_texts students_enrolled">2000+ students</p>
                </div>
                <p className="grey_texts course_description">
                    Learn the art of crafting intuitive, visually appealing, and
                    functional digital interfaces with this UI Design course.
                </p>
                <div className="rate">
                    <p className="price">500 birr</p>
                    <div className="rating">
                        <img src="/assets/image/for_design/rated_star.png" alt="" className="star_r" />
                        <img src="/assets/image/for_design/rated_star.png" alt="" className="star_r" />
                        <img src="/assets/image/for_design/rated_star.png" alt="" className="star_r" />
                        <img src="/assets/image/for_design/rated_star.png" alt="" className="star_r" />
                        <img src="/assets/image/for_design/rated_star.png" alt="" className="star_r" />
                    </div>
                </div>
            </div>
            <div className="course_catalog" >
                <div className="course_title_top">
                    <img src="/assets/image/for_design/course_icon.png" alt="" className="course_icon" />
                    <p className="course_title">UI/UX Design</p>
                </div>

                <div className="tutor_des">
                    <p className="grey_texts tutor_name">Sirak Sebastian</p>
                    <img src="/assets/image/for_design/verfiy.png" alt="" className="verfied_icon" />
                    <p className="grey_texts students_enrolled">2000+ students</p>
                </div>
                <p className="grey_texts course_description">
                    Learn the art of crafting intuitive, visually appealing, and
                    functional digital interfaces with this UI Design course.
                </p>
                <div className="rate">
                    <p className="price">500 birr</p>
                    <div className="rating">
                        <img src="/assets/image/for_design/rated_star.png" alt="" className="star_r" />
                        <img src="/assets/image/for_design/rated_star.png" alt="" className="star_r" />
                        <img src="/assets/image/for_design/rated_star.png" alt="" className="star_r" />
                        <img src="/assets/image/for_design/rated_star.png" alt="" className="star_r" />
                        <img src="/assets/image/for_design/rated_star.png" alt="" className="star_r" />
                    </div>
                </div>
            </div>
            <div className="course_catalog">
                <div className="course_title_top">
                    <img src="./assets/image/for_design/course_icon.png" alt="" className="course_icon" />
                    <p className="course_title">UI/UX Design</p>
                </div>

                <div className="tutor_des">
                    <p className="grey_texts tutor_name">Sirak Sebastian</p>
                    <img src="./assets/image/for_design/verfiy.png" alt="" className="verfied_icon" />
                    <p className="grey_texts students_enrolled">2000+ students</p>
                </div>
                <p className="grey_texts course_description">
                    Learn the art of crafting intuitive, visually appealing, and
                    functional digital interfaces with this UI Design course.
                </p>
                <div className="rate">
                    <p className="price">500 birr</p>
                    <div className="rating">
                        <img src="/assets/image/for_design/rated_star.png" alt="" className="star_r" />
                        <img src="/assets/image/for_design/rated_star.png" alt="" className="star_r" />
                        <img src="/assets/image/for_design/rated_star.png" alt="" className="star_r" />
                        <img src="/assets/image/for_design/rated_star.png" alt="" className="star_r" />
                        <img src="/assets/image/for_design/rated_star.png" alt="" className="star_r" />
                    </div>
                </div>
            </div>
            <div className="course_catalog" >
                <div className="course_title_top">
                    <img src="./assets/image/for_design/course_icon.png" alt="" className="course_icon" />
                    <p className="course_title">UI/UX Design</p>
                </div>

                <div className="tutor_des">
                    <p className="grey_texts tutor_name">Sirak Sebastian</p>
                    <img src="./assets/image/for_design/verfiy.png" alt="" className="verfied_icon" />
                    <p className="grey_texts students_enrolled">2000+ students</p>
                </div>
                <p className="grey_texts course_description">
                    Learn the art of crafting intuitive, visually appealing, and
                    functional digital interfaces with this UI Design course.
                </p>
                <div className="rate">
                    <p className="price">500 birr</p>
                    <div className="rating">
                        <img src="/assets/image/for_design/rated_star.png" alt="" className="star_r" />
                        <img src="/assets/image/for_design/rated_star.png" alt="" className="star_r" />
                        <img src="/assets/image/for_design/rated_star.png" alt="" className="star_r" />
                        <img src="/assets/image/for_design/rated_star.png" alt="" className="star_r" />
                        <img src="/assets/image/for_design/rated_star.png" alt="" className="star_r" />
                    </div>
                </div>
            </div>
            <div className="course_catalog">
                <div className="course_title_top">
                    <img src="./assets/image/for_design/course_icon.png" alt="" className="course_icon" />
                    <p className="course_title">UI/UX Design</p>
                </div>

                <div className="tutor_des">
                    <p className="grey_texts tutor_name">Sirak Sebastian</p>
                    <img src="./assets/image/for_design/verfiy.png" alt="" className="verfied_icon" />
                    <p className="grey_texts students_enrolled">2000+ students</p>
                </div>
                <p className="grey_texts course_description">
                    Learn the art of crafting intuitive, visually appealing, and
                    functional digital interfaces with this UI Design course.
                </p>
                <div className="rate">
                    <p className="price">500 birr</p>
                    <div className="rating">
                        <img src="/assets/image/for_design/rated_star.png" alt="" className="star_r" />
                        <img src="/assets/image/for_design/rated_star.png" alt="" className="star_r" />
                        <img src="/assets/image/for_design/rated_star.png" alt="" className="star_r" />
                        <img src="/assets/image/for_design/rated_star.png" alt="" className="star_r" />
                        <img src="/assets/image/for_design/rated_star.png" alt="" className="star_r" />
                    </div>
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
    );
}