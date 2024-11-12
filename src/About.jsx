import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function About(){
    return(
        
        <div className="para-text ">
            <p className='abt-txt'>about me</p>
            <div>

    <p className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-white text-justify"> Hello !
                 I'm Abhiraj Shilkar, an aspiring full-stack developer currently pursuing a degree in information technology at Goa College of Engineering. 
                I have a keen interest in web3, blockchain,
                 artificial intelligence & 
                machine learning.</p>
            </div>
        </div>
    );
}

export default About;