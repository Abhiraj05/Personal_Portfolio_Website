import "./App.css";
import logo from "./assets/logoedited.svg";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import linkdin from "./assets/linkdinedit.svg";
import twitter from "./assets/twitter.svg";
import github from "./assets/githubedit.svg";
import facebook from "./assets/facebook.svg";
import instagram from "./assets/instagram.svg";

import { useTypewriter, Cursor } from "react-simple-typewriter";
import React from "react";
import Fade from "react-reveal/Fade";

function App() {
  const [text] = useTypewriter({
    words: ["fullstack developer", "uiux designer"],
    loop: {},
    typeSpeed: 130,
    deleteSpeed: 90,
  });

  return (
    <>
      <Fade top distance="10%" duration={1500}>
        <div className="nav-fixed">
        <nav>
          <div id="logo">
            <a href="index.html">
              <img src={logo} className="hover:opacity-50" alt="logo" />
            </a>
          </div>
          <div className="logos">
            <a
              href="https:/www.linkedin.com/in/abhiraj-shilkar-408126217"
              className="hover:opacity-70"
            >
              <img src={linkdin} alt="1" />
            </a>
            <a href="https://github.com/Abhiraj05" className="hover:opacity-70">
              <img src={github} alt="2" />
            </a>
          </div>
        </nav>
        </div>
        <div>
          <p className="main-heading mt-28">
            <span>hi </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-white">there,</span>

          </p>
        </div>
        <div>
          <p className="main-heading-2">
            <span>this </span>
            <span>is</span>
          </p>
        </div>
        <div>
          <p className="main-heading-3 ">
            <span className="text-blue-400">@</span>

            <span>bhiraj shilkar</span>
          </p>
        </div>
        <div>
          <p className="main-heading-4 text-blue-400">
            a {""}
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-blue-500 to-white">{text}</span>
            <span>
              <Cursor cursorStyle="|" />
            </span>
          </p>
        </div>
        <div className="text-center">
          <button className="resume-btn bg-gradient-to-t from-blue-500 to-slate-300 shadow-blue-400 ">resume</button>
        </div>
        <div className="outer-container   bg-blue-400">
          <p className="project-text">my projects</p>
          <div className="inner-container ">
            <a href="https://randomemailidgenerator.netlify.app/">
              <img src={image1} alt="hello" />
              <div className="card-text">
                <p>random email id</p>
                <p>generator</p>
                <p className="mt-2">tech stack : reactjs,css</p>
              </div>
            </a>
          </div>
          <div className="inner-container ">
            <a href="https://abhiraj05.github.io/simple_calculator/">
              <img src={image2} alt="hello" />
              <div className="card-text">
                <p>simple</p>
                <p>calculator</p>
                <p className="mt-2">tech stack : html,css,js</p>
              </div>
            </a>
          </div>
        </div>
        <div className="outer-container">
          <p className="project-text">contact me</p>
          <form className="text-center">
            <div>
              <input
                className="w-64 h-10 mb-8 rounded-md pl-3 text-black font-mono placeholder:text-sm placeholder:font-mono placeholder:text-slate-400"
                type="text"
                placeholder="name@gmail.com"
              />
            </div>
            <div>
              <input
                className="w-64 h-10 mb-8 rounded-md pl-3 text-black font-mono placeholder:text-sm capitalize placeholder:font-mono  placeholder:text-slate-400"
                type="text"
                placeholder="your name"
              />
            </div>
            <div>
              <input
                className="w-64 h-20 mb-8 rounded-md pl-3 text-black font-mono placeholder:text-sm capitalize placeholder:font-mono  placeholder:text-slate-400"
                type="text"
                placeholder="your message"
              />
            </div>
            <button className="submit-btn text-blue-400">submit</button>
          </form>
        </div>
        <footer className="ftr  bg-blue-400">
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
      </Fade>
    </>
  );
}

export default App;
