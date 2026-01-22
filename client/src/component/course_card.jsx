export default function CourseCard(title , teachername , numberofstudents , course_description , price , rating){
    return(
        <>
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
        </>
    );
}