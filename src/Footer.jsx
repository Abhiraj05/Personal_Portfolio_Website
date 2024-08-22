import facebook from "./assets/facebook.svg";
import instagram from "./assets/instagram.svg";
import twitter from "./assets/twitter.svg";
import "./App.css";
import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";



function Footer(){
return(
<footer className="ftr ">
<p className="contact-text">connect me</p>
<div className="social-logos">
  <a
    href="https:/www.facebook.com/abhirajshilkar"
    className="hover:opacity-70"
  >
    <img src={facebook} alt="1" />
  </a>
  <a
    href="https://www.instagram.com/shilkarabhiraj"
    className="hover:opacity-70"
  >
    <img src={instagram} alt="2" />
  </a>
  <a href="https://x.com/abhiraj_eth" className="hover:opacity-70">
    <img src={twitter} alt="twitter" />
  </a>
</div>
<p className="abhiraj-ftr">made with &#9829; by abhiraj</p>
</footer>
);
}

export default Footer;