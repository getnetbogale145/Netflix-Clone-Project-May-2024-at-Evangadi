// import React from "react";
// import "./footer.css";

// const Footer = () => {
//   return (
//     <footer className="netflix-footer">
//       <div className="container">
//         <div className="footer-content">
//           <div className="footer-logo">
//             {/* You can replace the logo with the Netflix logo or your project logo */}
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
//               alt="Netflix Logo"
//             />
//           </div>
//           <div className="footer-links">
//             <ul>
//               <li>Home</li>
//               <li>Terms of Use</li>
//               <li>Privacy Policy</li>
//               <li>Contact Us</li>
//             </ul>
//           </div>
//           <div className="footer-social">
//             {/* Add social media icons or links as needed */}
//             <i className="fab fa-facebook-square"></i>
//             <i className="fab fa-twitter"></i>
//             <i className="fab fa-instagram"></i>
//           </div>
//         </div>
//         <div className="footer-disclaimer">
//           <p>&copy; 2024 Your Company. All Rights Reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import "./footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">
        <div className="footer_icons">
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>

        <div className="footer_data">
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preference</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        <div className="service_code">
          <p>Service Code</p>
        </div>

        <div className="copy-write">&copy; 1997-2024 Netflix, Inc.</div>
      </div>
    </div>
  );
};

export default Footer;
