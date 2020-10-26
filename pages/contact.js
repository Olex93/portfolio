import React from "react"
import Head from 'next/head';
import ContactForm from "../components/ContactForm"
import { motion } from "framer-motion";
import HomeDesktop from "../components/HomeDesktop"


export default function Contact(props) {

  const [colorWord, setColorWord] = React.useState("orange")
  React.useEffect(() => {
      if (props.color.highlightColor === "rgb(224,128,49)"){
        setColorWord("orange")
      } if (props.color.highlightColor === "rgb(128,93,201)"){
        setColorWord("purple")
      } if (props.color.highlightColor === "rgb(87,190,106)"){
        setColorWord("green")
      } if (props.color.highlightColor === "rgb(77,128,255)"){
        setColorWord("blue")
      }
    })

  const styles = {
    mobileBody:{
        margin:0,
        padding:0,
        overflow:"hidden",
        minHeight:"100vh",
    },
    headingDiv:{
        backgroundImage:`url('/images/${colorWord}Blob.svg')`,
        backgroundSize:"1200px",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"-340px -850px",
        height:"600px",
        marginBottom:"-300px",
        marginLeft:"0",
        paddingLeft:"40px",
        overflow:"hidden"
      },
      heading:{
        color:"rgb(34,44,52)",
        fontSize:'60px',
        padding:"40px 0"
      },
  }

  const [size, setSize] = React.useState([1]);
    if (typeof window !== 'undefined') {
  
      // setSize to window width based on useLayoutEffect//
      React.useLayoutEffect(() => {
        //function to be called to update size//
        function updateWidth() {
          setSize([window.innerWidth]);
        }
        //call function on resize//
        window.addEventListener('resize', updateWidth);
        updateWidth();
        return () => window.removeEventListener('resize', updateWidth);
        }, []);
      }
 

    return (
      <div>
      <Head>
        <title>Alex Foster - Contact Me</title>
        <meta name="description" content="Get in touch with me, Alex Foster, by filling out this contact form." />
      </Head>
      {size < 991 ?
      <div style={styles.mobileBody}>
        <div style={styles.headingDiv}>
              <motion.h1 style={styles.heading}>Contact Me</motion.h1>
          </div>
        <div styles={styles.formDiv}>
          <ContactForm color={props.color} changeColor={props.color.changeColor} />
        </div>
      </div>
      :
      <HomeDesktop color={props.color} changeColor={props.color.changeColor} />}
      </div>
    )
  }