import React from "react";
import "./footer.css";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as Discord } from "../../assets/icons/discord.svg";
const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer-nav">
        <a href="/">Home</a>
        <a href="/">Contact Us</a>
      </div>
      <div className="footer-external">
        <a href="https://twitter.com/CowboysNFT">
          <Twitter />
        </a>
        <a href="https://discord.com/invite/DWZ96Uf2'">
          <Discord />
        </a>
      </div>
    </div>
  );
};

export default Footer;
