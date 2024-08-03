import { useState } from "react";
import "./App.css";
import logo from "./assets/logoedit.svg";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import linkdin from "./assets/linkdin.svg";
import twitter from "./assets/twitter.svg";
import github from "./assets/github.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav>
        <div className="relative inline-block text-center text-black" id="logo">
          <a href="index.html">
            <img src={logo} alt="" srcset="" />
          </a>
        </div>
        <div className="scroll-div">
          <div className="linediv"></div>
          <div className="linediv"></div>
          <div className="linediv"></div>
        </div>
      </nav>
      <div>
        <p className="main-heading">
          <span>hi </span>
          <span style={{ color: " #69B0E3" }}>there,</span>
        </p>
      </div>
      <div>
        <p className="main-heading-2">
          <span>this </span>
          <span>is</span>
        </p>
      </div>
      <div>
        <p className="main-heading-3">
          <span style={{ color: " #69B0E3" }}>@</span>
          <span>bhiraj shilkar</span>
        </p>
      </div>
      <div>
        <p className="main-heading-4">a full stack developer</p>
      </div>

      <div className="text-center">
        <button className="resume-btn">resume</button>
      </div>
      <div className="outer-container">
        <p className="project-text">my projects</p>
        <div className="inner-container ">
          <a href="https://randomemailidgenerator.netlify.app/">
            <img src={image1} alt="" />
            <div className="card-text">
              <p>random email id</p>
              <p>generator</p>
              <p className="mt-2">tech stack : reactjs,css</p>
            </div>
          </a>
        </div>
        <div className="inner-container ">
          <a href="https://abhiraj05.github.io/simple_calculator/">
            <img src={image2} alt="" />
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
              className="w-56 h-9 mb-8 rounded-md pl-3 text-black font-mono placeholder:text-sm placeholder:font-mono placeholder:text-slate-400"
              type="text"
              placeholder="name@gmail.com"
            />
          </div>
          <div>
            <input
              className="w-56 h-9 mb-8 rounded-md pl-3 text-black font-mono placeholder:text-sm capitalize placeholder:font-mono  placeholder:text-slate-400"
              type="text"
              placeholder="your name"
            />
          </div>{" "}
          <div>
            <input
              className="w-56 h-20 mb-8 rounded-md pl-3 text-black font-mono placeholder:text-sm capitalize placeholder:font-mono  placeholder:text-slate-400"
              type="text"
              placeholder="your message"
            />
          </div>
          <button className="submit-btn">submit</button>
        </form>
      </div>
      <footer className="ftr">
        <p className="contact-text">connect me</p>
        <div className="social-logos">
          <a href="https:/www.linkedin.com/in/abhiraj-shilkar-408126217">
            <img src={linkdin} alt="" />
          </a>
          <a href="https://github.com/Abhiraj05">
            <img src={github} alt="" />
          </a>
          <a href="https://x.com/abhiraj_eth">
            <img src={twitter} alt="" />
          </a>
        </div>
        <p className="abhiraj-ftr">made with &#9829; by abhiraj</p>
      </footer>
    </>
  );
}

export default App;
