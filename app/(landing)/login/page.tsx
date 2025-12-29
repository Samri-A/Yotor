import Link from "next/link";
export default function Login() {
    return (
    <>
            <div className="container_login">

                <div className="login_box">
                    <img
                        src="./assets/image/logo_blue.png"
                        alt="yotor logo"
                        className="logo-image"
                    />
                    <p className="title_1"> Welcome back to Yotor👋</p>
                    <form action="" method="post" className="form">


                        <label > Email</label>
                        <input type="email" name="email" id="email" placeholder="Enter Your Email Here"/>
                            <label>Password</label>
                            <input type="password" name="password" id="password" placeholder="********"/>
                                <button type="submit" className="submit_login">Submit</button>
                    </form>
                    <p className="login_option">Dont have an account? Register 
             <Link href={'/register'}>here</Link> </p>



                </div>
                <div className="long_design_box">
                            <img src="./assets/image/for_design/blue_login_3.png" alt=""  className="blue_login_3"/>
                            <img src="./assets/image/for_design/blue_login_1.png" alt="" className="blue_login_1"/>
                            <img src="./assets/image/for_design/blue_login_2.png" alt="" className="blue_login_2"/>
                            <img src="./assets/image/for_design/blue_login_0.png" alt="" className="blue_login_0"/>
                </div>
            </div>
            </>);
}