import { Link } from "react-router-dom";
import { useState } from "react";
import login3 from  "../assets/image/for_design/blue_login_3.png" ;
import login2 from  "../assets/image/for_design/blue_login_2.png" ;
import login1 from  "../assets/image/for_design/blue_login_1.png" ;
import login0 from  "../assets/image/for_design/blue_login_0.png" ;
import logo from "../assets/image/logo_blue.png";
export default function Register(){
    const [name , setName]= useState('');
    const [email , setEmail]= useState('');
    const [password , setPassword]= useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(name);
        }
    return(
    <>


    <div className="container_login">

        <div className="login_box">
            <img
            src={logo}
            alt="yotor logo"
            className="logo-image"
          />
          <p className="title_1"> Welcome to Yotor👋</p>
          <p className="desc_small" >Kindly fill in your information below to register</p>
          
            
            <form className="form" onSubmit={handleSubmit}>


            <label > Full Name</label>
            <input type="text" name="name" id="name" placeholder="Abebe" value={name} onChange={(e)=>setName(e.target.value)} />
            <label > Email</label>
            <input type="email" name="email" id="email" placeholder="aabbcc@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <label >Password</label>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" name="password" id="password" placeholder="Create your password"/>
            <button type="submit" className="submit_login">Submit</button>
          </form>
           <p className="login_option">Do you have an account?  Login 
            <span className="link_highlight"> <Link to={'/login'}>here</Link> </span>  </p>
          
          
        </div>
        <div className="long_design_box">
            <img src={login3} alt=""  className="blue_login_3"/>
            <img src={login1} alt="" className="blue_login_1"/>
            <img src={login2}  alt="" className="blue_login_2"/>
            <img src={login0} alt="" className="blue_login_0"/>
        </div>

    </div>
    </>
    );
}