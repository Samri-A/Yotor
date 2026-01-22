export default function L_Footer(){
    return(
      <>
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