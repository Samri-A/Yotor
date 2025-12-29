import Link from "next/link";
export default function Register(){
    return(
    <>
    <body>

    <div className="container_login">

        <div className="login_box">
            <img
            src="/assets/image/logo_blue.png"
            alt="yotor logo"
            className="logo-image"
          />
          <p className="title_1"> Welcome to Yotor👋</p>
          <p className="desc_small" >Kindly fill in your information below to register</p>
          
            
            <form action="" method="post" className="form">


            <label > Full Name</label>
            <input type="text" name="name" id="name" placeholder="Abebe"/>
            <label > Email</label>
            <input type="email" name="email" id="email" placeholder="aabbcc@gmail.com"/>
            <label >Password</label>
            <input type="password" name="password" id="password" placeholder="Create your password"/>
            <button type="submit" className="submit_login">Submit</button>
          </form>
           <p className="login_option">Do you have an account? Login 
             <Link href={'/login'}>here</Link> </p>
          

          
          
        </div>
        <div className="long_design_box">
            <img src="./assets/image/for_design/blue_login_3.png" alt=""  className="blue_login_3"/>
            <img src="./assets/image/for_design/blue_login_1.png" alt="" className="blue_login_1"/>
            <img src="./assets/image/for_design/blue_login_2.png" alt="" className="blue_login_2"/>
            <img src="./assets/image/for_design/blue_login_0.png" alt="" className="blue_login_0"/>
            
        </div>

        
    </div>
    
</body>
    </>
    );
}