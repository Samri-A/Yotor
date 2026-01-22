import { NavLink , Link } from "react-router-dom";
import login3 from  "../assets/image/for_design/blue_login_3.png" ;
import login2 from  "../assets/image/for_design/blue_login_2.png" ;
import login1 from  "../assets/image/for_design/blue_login_1.png" ;
import login0 from  "../assets/image/for_design/blue_login_0.png" ;
import logo from "../assets/image/logo_blue.png";
import { useState } from "react";
export default function Login() {

    const [email , setEmail]= useState('');
    const [password , setPassword]= useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(email);
    }
    return (
    <>
            <div className="container_login">

                <div className="login_box">
                    <img
                        src={logo}
                        alt="yotor logo"
                        className="logo-image"
                    />
                    <p className="title_1"> Welcome back to Yotor👋</p>
                    <form method="post" className="form" onSubmit={handleSubmit}>
                        <label > Email</label>
                        <input type="email" name="email" id="email" placeholder="Enter Your Email Here" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            <label>Password</label>
                            <input type="password" name="password" id="password" placeholder="********" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                                <button type="submit" className="submit_login">Submit</button>
                    </form>
                    <p className="login_option">Dont have an account? Register <span className="link_highlight">  <Link to={'/register'}> here</Link></span> </p>
                </div>
                <div className="long_design_box">
                            <img src={login3} alt=""  className="blue_login_3"/>
                            <img src={login1} alt="" className="blue_login_1"/>
                            <img src={login2}  alt="" className="blue_login_2"/>
                            <img src={login0} alt="" className="blue_login_0"/>
                </div>
            </div>
            </>);
}