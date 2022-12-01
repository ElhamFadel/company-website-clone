import './style.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {} from '@fortawesome/free-regular-svg-icons';

const Footer: React.FC = ({}) => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-content">
            <div className="col">
              <p>You can follow us on our social media accounts .</p>
              <div className="social-media">
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
            <div className="col">
              <h3 className="title-h3">Our Services</h3>
              <div className="services">
                <ul>
                  <li>Interface Design</li>
                  <li>Seo Optimizer</li>
                  <li>Digital Marketing</li>
                  <li>Market Monitor</li>
                  <li>Graphic Design</li>
                </ul>
              </div>
            </div>
            <div className="col">
              <h3 className="title-h3">Important Link</h3>
              <div className="important-link">
                <ul>
                  <li>Home</li>
                  <li>Services</li>
                  <li>Jobs</li>
                  <li>blog</li>
                  <li>Our Team</li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
            <div className="col">
              <h3 className="title-h3">Contact Info</h3>
              <p>You can contact us through</p>
              <div className="contact-us">
                <ul>
                  <li>Thawra Street - Omara' Building 4th floor</li>
                  <li>+970567101200</li>
                  <li>info@dash.ps</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="copyright_wrap">
            <div className="copyright">
              <p> © 2022 dash. All Rights Reserved by dash</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
