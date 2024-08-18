import "./App.css";
import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
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
          <input  placeholder="your name" className="w-72 h-11 mb-8 rounded-md pl-3 text-black font-mono placeholder:text-sm capitalize placeholder:font-mono  placeholder:text-slate-400 text-sm" type="text" name="name" required />
        </div>
        <div>
          <input  placeholder="name@gmail.com"  className="w-72 h-11 mb-8 rounded-md pl-3 text-black font-mono placeholder:text-sm placeholder:font-mono placeholder:text-slate-400 text-sm" type="email" name="email" required />
        </div>
        <div>
          <textarea placeholder="your message"  className="resize-none  w-72 h-24 mb-8 rounded-md pl-3 pt-2 text-black font-mono placeholder:text-sm capitalize placeholder:font-mono  placeholder:text-slate-400 text-sm" name="message" required></textarea>
        </div>

        <button className="submit-btn text-blue-400" type="submit">Submit</button>
      </form>
      <span className="message">{result}</span>
    </div>
  );
}

export default Contact;
