import React from 'react';
import axios from 'axios';
const PORT = process.env.PORT || 3000;
const ContactAPI = 'https://afportfolio.herokuapp.com/contact';



function ContactForm() {
    const [formSent, setFormSent] = React.useState(false);
    const inputStyle= {
        border:"none",
        display:"block",
        padding:"5px",
        borderRadius:"3px",
        margin:"10px auto",
        width:"350px"
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
        // axios.post('https://findthelead.herokuapp.com/contact',{contact})
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
            message: ""
          });
          setFormSent(true);
        }

    
    return (
      <div style={{height:"100vh"}}>
       <div>
        <h1>Write to us</h1>
        <form >
        <p >Get in touch if you'd like to have a chat about any of the services offered by Find The Lead.</p>
        <label for="fName">First Name</label>
          <input
            style={inputStyle}
            onChange={handleChange}
            name="fName"
            value={contact.fName}
            placeholder="First Name"
            id="fName"
          />
        <label for="lName" >Last Name</label>
          <input
            style={inputStyle}
            onChange={handleChange}
            name="lName"
            value={contact.lName}
            placeholder="Last Name"
            id="lName"
          />
          <label for="email" >Email address</label>
          <input
            style={inputStyle}
            onChange={handleChange}
            name="email"
            value={contact.email}
            placeholder="Email address"
            id="email"
          />
        <label for="yourMessage" >Your message.</label>
        <textarea
            style={inputStyle}
            onChange={handleChange}
            name="message"
            value={contact.message}
            placeholder="Your Message"
            rows="4"
            id="yourMessage"
          />
          <button onClick={sendData}>Submit</button>
        </form>
        </div>
      </div> 
    );
  }

  export default ContactForm;