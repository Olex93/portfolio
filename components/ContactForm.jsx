import React from 'react';
import axios from 'axios';
const PORT = process.env.PORT || 3000;
const ContactAPI = 'https://afportfolio.herokuapp.com/contact';
import { motion } from "framer-motion";


function ContactForm(props) {
    const [formSent, setFormSent] = React.useState(false);
    const inputStyle = {
        border:`1px solid ${props.color.highlightColor}`,
        display:"block",
        padding:"5px",
        borderRadius:"2px",
        margin:"10px auto",
        width:"100%",
        fontFamily:"Roboto",
        fontSize:"15px",
    }
    const button = {
        backgroundColor:props.color.lightBG,
        border:`2px solid ${props.color.highlightColor}`,
        margin:"5px 0",
        padding:"5px 10px",
        fontSize:"15px",
        fontWeight:"700",
        borderRadius:"3px",
        boxShadow:`2px 2px 12px -6px ${props.color.darkBG}`,
        cursor: "pointer",
        color:props.color.textColor,      
    }

    const formDiv = {
      maxWidth:"350px",
      margin:"auto"
    }
    
    const [contact, setContact] = React.useState({
      fName: "",
      lName: "",
      email:"",
      message: ""
    });
  
    function handleChange(event) {
      const { name, value } = event.target;
  
      setContact(prevValue => {
        return {
          ...prevValue,
          //name here refers to the deconstructed event name, not an actual name variable//
          [name]: value
        };
      });
    }


    function sendData(e){
        e.preventDefault();    
        // axios.post('https://afportfolio.herokuapp.com/contact',{contact})
        axios.post(ContactAPI, {contact})
        .then(response => {
         console.log(response);
        })
        .catch(error => {
         console.log(error);
        });
        setContact({
            fName: "",
            lName: "",
            email:"",
            message: ""
          });
          setFormSent(true);
        }

    
    return (
      <div>
       <div>
        <form style={formDiv}>
          <input
            style={inputStyle}
            onChange={handleChange}
            name="fName"
            value={contact.fName}
            placeholder="First Name"
            id="fName"
          />
          <input
            style={inputStyle}
            onChange={handleChange}
            name="lName"
            value={contact.lName}
            placeholder="Last Name"
            id="lName"
          />
          <input
            style={inputStyle}
            onChange={handleChange}
            name="email"
            value={contact.email}
            placeholder="Email address"
            id="email"
          />
        <textarea
            style={inputStyle}
            onChange={handleChange}
            name="message"
            value={contact.message}
            placeholder="Your Message"
            rows="4"
            id="yourMessage"
          />
          <motion.button whileHover={{scale:1.2}} style={button} onClick={sendData}>Submit</motion.button>
        </form>
        </div>
      </div> 
    );
  }

  export default ContactForm;