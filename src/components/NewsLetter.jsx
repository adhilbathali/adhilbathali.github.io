import "../styles/newsletter.css"
import React, { useState } from "react"
import axios from "axios"

export default function NewsLetter(){

    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            if (!validateEmail(email)) {
                setMessage("Invalid email");
                setEmail("")
                return;
            }
            else{
                
                const response = await axios.post("https://adhilbathali-backend.onrender.com/newsletter/subscribe", {email})
                if(response.data.response === "ok"){
                    setMessage("Thanks for subscribing! 🎉")
                    setEmail("")
                    return;
                }
                else if(response.data.response === "Email already exists"){
                    setMessage("Email already exists!")
                    setEmail("")
                    return;
                }
                else{
                    setMessage("Subscription failed. Try again later.")
                    setEmail("")
                    return;
                }
            }

        }catch(err){
            console.log(err)
        }
    }
    return (
        <div className="newsletter">
            <p>Subscribe to my newsletter for weekly updates!</p>
            <div className="subscribe">
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="john@email.com" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
                    <button className="subscribe" type="submit">Subscribe</button>
                    <p>{message}</p>
                    <p></p>
                </form>
            </div>
        </div>
    )
}