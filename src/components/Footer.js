import React from "react";
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-linkedin">
        <FaLinkedin />
        <p>https://www.linkedin.com/harry-99</p>
      </div>
      <div className="footer-contact">
        <FaPhoneAlt />
        <p>6207929491</p>
      </div>
      <div className="footer-email">
        <MdEmail />
        <p>hariom.ravi786@gmail.com</p>
      </div>
    </div>
  );
}

export default Footer;
