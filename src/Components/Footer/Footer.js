
import React from "react";
import logo from "../../assets/logo/logo-ndc.png";
import fb from "../../assets/social/facebook.png";
import linkedin from "../../assets/social/linkedin.png";
import insta from "../../assets/social/instagram.png";
import tw from "../../assets/social/twitter.png";
import "./Footer.css";
import { UseServices } from "../../hooks";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const [services] = UseServices();
  const navigate = useNavigate();
  const moveToSocialId = (socialLink)=>{
    window.open(socialLink, '_blank');
  }
  return (
    <footer className="footer ">
      <div className="container">
        <div className="row ">
          <div className="col-xl-4 col-lg-6 col-md-12 col-12">
            <div>
              <div className="f-title">
                <img src={logo} alt="meditro" className="f-logo" />
              </div>
              <p className="f-des">
              In hospitals, hope thrives, compassion abounds, and healing is our mission. Here, expertise meets empathy, and every patient is embraced with care. Together, we navigate journeys from illness to wellness, ensuring no one walks alone.
              </p>
              <span className="pb-2 d-inline-block">Contact Us</span>
              <h3 className="">+92 3334882342</h3>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-12 col-12 d-flex justify-content-between">
            <ul className="f-links list-unstyled">
              <div className="f-title">Quick Links</div>
              <li style={{cursor:"pointer"}} onClick={()=> navigate('/')}>Home</li>
              <li style={{cursor:"pointer"}} onClick={()=> navigate('/about')}> About</li>
              <li style={{cursor:"pointer"}} onClick={()=> navigate('/service')}>Service</li>
              
              <li style={{cursor:"pointer"}} onClick={()=> navigate('/contact')}>Contact</li>
            
            </ul>

            <ul className="f-links list-unstyled">
              <div className="f-title">Our Service</div>
             {services.map((item)=>{
              
              return <li>{item.name}</li>
             })}
            </ul>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-12 col-12">
            <div className="f-title">Follow Us on</div>
          
            <div className="social-links d-flex">
              <button className="border-0" onClick={()=>moveToSocialId('https://www.facebook.com/')}><img src={fb} alt="facebook" className="img-fluid object-fit-contain" /></button>
              <button className="border-0"><img src={insta} alt="fb" className="img-fluid object-fit-contain" /></button>
              <button className="border-0"><img src={linkedin} alt="fb" className="img-fluid object-fit-contain" /></button>
              <button className="border-0"><img src={tw} alt="fb" className="img-fluid object-fit-contain" /></button>
            </div>
          </div>
        </div>
        <hr />
        <code className="text-center d-block">
          Copyright © {new Date().getFullYear()} Design & Developed by CureLogics, Rahim Yar Khan
        </code>
      </div>
    </footer>
  );
};

export default Footer;
