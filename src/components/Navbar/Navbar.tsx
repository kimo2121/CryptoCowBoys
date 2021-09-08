import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/images/logo.png";
import opensea from "../../assets/icons/opensea.png";
import { ReactComponent as BurgerMenu } from "../../assets/icons/burger.svg";
import { ReactComponent as Discord } from "../../assets/icons/discord.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as Close } from "../../assets/icons/cancel.svg";
import { Link } from "react-scroll";

const Navbar: React.FC = () => {
  const [navbar, setNavbar] = useState(false);
  const [menu, setMenu] = useState(false);

  const changeBackground = (): void => {
    if (window.scrollY >= 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  console.log(menu);
  window.addEventListener("scroll", changeBackground);
  return (
    <div className={navbar ? "navbar active" : "navbar"}>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="external-links">
        <a href="https://twitter.com/CowboysNFT">
          <Twitter style={{ width: "25px", height: "25px", fill: "white" }} />
        </a>
        <a href="https://discord.com/invite/DWZ96Uf2">
          <Discord style={{ width: "25px", height: "25px" }} />
        </a>
        <a href="https://opensea.io/CryptoCowboysNFT">
          <img src={opensea} alt="" />
        </a>
      </div>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/faq">FAQ</a>
      </div>
      <div className="burgermenu">
        <BurgerMenu
          onClick={() => {
            setMenu(!menu);
            setNavbar(true);
          }}
          style={{
            width: "30px",
            height: "30px",
            fill: "white",
          }}
        />
      </div>
      <div className="slide-menu">
        {menu && (
          <div className={menu ? "menu-content active" : "menu-content"}>
            <Close
              onClick={() => setMenu(false)}
              className={menu ? "close-icon" : "close-icon active"}
            />
            <div className="slide-menu-links">
              <a onClick={() => setMenu(false)} href="/">
                Home
              </a>
              <a onClick={() => setMenu(false)} href="/about">
                About
              </a>
              <Link smooth={true} duration={700} to="road-map">
                <a
                  onClick={() => {
                    setMenu(false);
                    window.location.pathname !== "/" &&
                      window.location.replace("/");
                  }}
                  href="/"
                >
                  ROADMAP
                </a>
              </Link>
              <Link smooth={true} duration={700} to="our-team-members">
                <a
                  onClick={() => {
                    setMenu(false);
                    window.location.pathname !== "/" &&
                      window.location.replace("/");
                  }}
                  href="/"
                >
                  OUR TEAM
                </a>
              </Link>
              <a onClick={() => setMenu(false)} href="/faq">
                FAQ
              </a>
            </div>
            <div className="side-external-links">
              <a
                onClick={() => setMenu(false)}
                href="https://twitter.com/CowboysNFT"
              >
                <Twitter
                  style={{ width: "25px", height: "25px", fill: "white" }}
                />
              </a>
              <a
                onClick={() => setMenu(false)}
                href="https://discord.com/invite/DWZ96Uf2"
              >
                <Discord style={{ width: "25px", height: "25px" }} />
              </a>
              <a
                onClick={() => setMenu(false)}
                href="https://opensea.io/CryptoCowboysNFT"
              >
                <img src={opensea} alt="" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
