import React, { useState } from "react";
import axios from "axios";
import "../styles/contact-form.css";

import PhoneInput from "./PhoneInput";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: {country:"", number:""},
    representType: "Individual",
    representName: "",
    query: "",
  });

    const [message, setMessage] = useState("");

    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePhoneChange = (phoneData) => {
      setFormData((prevData) => ({
        ...prevData,
        phone: {
          country: phoneData.country,
          number: phoneData.number,
        },
      }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      
    // Reset form fields after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: { country: "", number: "" }, // Reset phone input
      representType: "Individual",
      representName: "",
      query: "",
    });

    try {

            if (!validateEmail(formData.email)) {
              setMessage("Invalid email");
              setFormData({...formData, email: ""});
              return;
            }
            else{

                const response = await axios.post("https://adhilbathali-backend.onrender.com/contact/submitform", formData, {
                  headers: { "Content-Type": "application/json" },
                });


                if(response.data.response === "ok"){
                    setMessage("Form submitted successfully")
                    return;
                }
                else if(response.data.response === "You have already sent a query"){
                    setMessage("You have already sent a query!")
                    return;
                }
                else{
                    setMessage("Error submitting form. Please try again.")
                    return;
                }

            }
    } catch (error) {

        setMessage(`Error submitting form. Please try again. ${error}`);
        console.error("Error:", error.response?.data || error.message);

    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="support-icon">
        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="Support">
          <path d="M29.07,16.57a1.25,1.25,0,0,1-1.25-1.25V11.79c0-5-4.62-9-10.3-9s-10.3,4.05-10.3,9v3.53a1.25,1.25,0,0,1-2.5,0V11.79C4.72,5.43,10.47.25,17.52.25s12.8,5.18,12.8,11.54v3.53A1.24,1.24,0,0,1,29.07,16.57Z" fill="#4169e1" class="color000000 svgShape"></path>
          <path d="M25.69 28.33a1.25 1.25 0 0 1-1.25-1.25V15.21A1.25 1.25 0 0 1 25.69 14c4.31 0 7.82 3.23 7.82 7.19S30 28.33 25.69 28.33zm1.25-11.74V25.7A4.86 4.86 0 0 0 31 21.15 4.86 4.86 0 0 0 26.94 16.59zM9.31 28.33c-4.31 0-7.82-3.22-7.82-7.18S5 14 9.31 14a1.25 1.25 0 0 1 1.25 1.25V27.08A1.25 1.25 0 0 1 9.31 28.33zM8.06 16.59A4.86 4.86 0 0 0 4 21.15 4.86 4.86 0 0 0 8.06 25.7z" fill="#4169e1" class="color000000 svgShape"></path>
          <path d="M25.28,32.4H21.14a1.25,1.25,0,0,1,0-2.5h4.14a2.44,2.44,0,0,0,2.44-2.44v-.55a1.25,1.25,0,1,1,2.5,0v.55A4.94,4.94,0,0,1,25.28,32.4Z" fill="#4169e1" class="color000000 svgShape"></path>
          <path d="M19,34.75H16.53a3.42,3.42,0,0,1-3.42-3.42v-.14a3.42,3.42,0,0,1,3.42-3.41H19a3.41,3.41,0,0,1,3.41,3.41v.14A3.42,3.42,0,0,1,19,34.75Zm-2.45-4.47a.92.92,0,0,0-.92.91v.14a.92.92,0,0,0,.92.92H19a.92.92,0,0,0,.91-.92v-.14a.91.91,0,0,0-.91-.91Z" fill="#4169e1" class="color000000 svgShape"></path>
        </svg>
      </div>
      <h2>Get in Touch</h2>
      <div className="first-last-name">
        <div className="form-attribute">
          <label htmlFor="firstName">First Name</label>
          <input type="text" placeholder="Peter" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div className="form-attribute">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" placeholder="Parker" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>
      </div>

      <div className="form-attribute">
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="peterparker@email.com" name="email" value={formData.email} onChange={handleChange} required />
      </div>

      <div className="phone-attribute">
       <PhoneInput value={formData.phone} onChange={handlePhoneChange} />
      </div>

      

      <fieldset className="radio-group">
      <legend>Select Your Representation</legend> {/* Group Label */}
      <div className="represent-radio">
        {["Individual", "Business", "Organization"].map((option) => (
          <label key={option}>
            <input
              type="radio"
              name="representType"
              value={option}
              checked={formData.representType === option}
              onChange={handleChange}
            />
            <span className="custom-radio"></span> {/* Custom Circle */}
            {option}
          </label>
        ))}
      </div>
      <div className="form-attribute">
        <label htmlFor="representName">
          {formData.representType === "Individual" && "What do you do?"}
          {formData.representType === "Business" && "Business Name"}
          {formData.representType === "Organization" && "Organization Name"}
        </label>
        <input type="text" name="representName" value={formData.representName} onChange={handleChange} required />
      </div>
    </fieldset>


      <div className="form-attribute">
        <label htmlFor="query">Query</label>
        <textarea name="query" value={formData.query} onChange={handleChange} required />
      </div>

      <button type="submit">Submit</button>

      {message && <p>{message}</p>}
    </form>
  );
}
