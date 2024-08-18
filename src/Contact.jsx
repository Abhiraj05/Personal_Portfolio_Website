import "./App.css";
import React from "react";
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import "./index.css";

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "18a6510f-1597-4881-ab34-ea6319437040");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Details Submitted Successfully !");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="text-center">
        <div>
          <input
            className="w-64 h-10 mb-8 rounded-md pl-3 text-black font-mono placeholder:text-sm placeholder:font-mono placeholder:text-slate-400"
            type="email"
            placeholder="name@gmail.com"
          required/>
        </div>
        <div>
          <input
            className="w-64 h-10 mb-8 rounded-md pl-3 text-black font-mono placeholder:text-sm capitalize placeholder:font-mono  placeholder:text-slate-400"
            type="text"
            placeholder="your name"
         required />
        </div>
        <div>
          <input
            className="w-64 h-20 mb-8 rounded-md pl-3 text-black font-mono placeholder:text-sm capitalize placeholder:font-mono  placeholder:text-slate-400"
            type="text"
            placeholder="your message"
         required />
        </div>
        <button className="submit-btn text-blue-400" type="submit">
          submit
        </button>
      </form>
      <span className="message">{result}</span>
    </div>
  );
}

export default Contact;
