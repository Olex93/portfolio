import React from 'react';
import Head from 'next/head';
import { motion } from "framer-motion";
import classes from "../styles/about.module.css"
import Carousel from 'nuka-carousel';


export default function about(props) {
  const technologies = ["/images/codeLogos/react.svg", "/images/codeLogos/javascript.svg", "/images/codeLogos/html.svg", "/images/codeLogos/css.svg", "/images/codeLogos/next.svg", "/images/codeLogos/bootstrap.svg", "/images/codeLogos/github.svg", "/images/codeLogos/jquery.svg", "/images/codeLogos/mongodb.svg", "/images/codeLogos/node.svg", "/images/codeLogos/wordpress.svg", "/images/codeLogos/zoho.svg"]
  const styles = {
    CustomBody: {
      marginLeft:"240px",
      backgroundColor:props.color.backgroundColor,
    },
    headingDiv:{
      backgroundImage:"url('/images/orangeBlob.svg')",
      backgroundSize:"1200px",
      backgroundRepeat:"no-repeat",
      backgroundPosition:"-340px -800px",
      height:"600px",
      marginBottom:"-300px",
    },
    heading:{
      color:"rgb(34,44,52)",
      fontSize:'60px',
      padding:"40px 0 0 40px"
    },
    flexBox:{
      display:"flex",
      flexDirection: "row",
      justifyContent:"flex-start",
      width:"100%"
    },
    leftCol:{
      width:"30%",
      minWidth:"450px",
      padding:"40px 80px 0 40px",
      position:"sticky",
      top:0,
      alignSelf: "flex-start"
    },
    rightCol:{
      width:"60%",
      minWidth:"300px",
      padding:"40px 80px 40px 0",
      alignSelf: "flex-start",
      maxWidth:"700px"
    },
    listItem:{
      color:props.color.highlightColor,
      fontWeight:"500",
      fontSize:"1.5rem",
      lineHeight:"150%",
    },
    titleImg:{
      boxShadow:`12px 12px 15px -10px ${props.color.darkBG}`,
      width:"100%",
      margin:"0 10px -50px 10px"
    },
    link:{
      textDecoration:"none",
      color:props.color.textColor,
    },
    headings:{
      color:props.color.highlightColor,
      fontSize:"1.3rem",
      margin:"80px 10px 0 10px"
    },
    content:{
      color:props.color.textColor,
      fontSize:"1.1rem",
      lineHeight:"145%",
      letterSpacing:"0.7px",
      margin:"15px 10px"
    },
    sliderImg:{
      maxWidth:"400px",
      padding:"50px 0 0 10px",
      textAlign:"left"
    }

}


  return (
    <div>
      <Head>
        <title>Alex Foster - About Me</title>
      </Head>
      <div style={styles.CustomBody}>
        <div style={styles.headingDiv}>
          <h1 style={styles.heading}>Hey, I'm Alex</h1>
        </div>
        <div style={styles.flexBox}>
          <div style={styles.leftCol}>
          <ul>  
            <li style={styles.listItem}><a style={styles.link} href="#about">About Me</a></li>
            <li style={styles.listItem}><a style={styles.link} href="#famSof">Familliar Software</a></li>
            <li style={styles.listItem}><a style={styles.link} href="#profSum">Proffessional Summary</a></li>
            <li style={styles.listItem}><a style={styles.link} href="#workExp">Work Experience</a></li>
            <li style={styles.listItem}><a style={styles.link} href="#achievements">Key Achievements</a></li>
            <li style={styles.listItem}><a style={styles.link} href="#training">Training</a></li>
          </ul>
          </div>
          <div style={styles.rightCol}>
            <img src="/images/meWalking.svg" style={styles.titleImg} onerror="this.onerror=null; this.src='/images/meWalking.jpg'" />
            <h2 id="about" style={styles.headings}>A bit about me</h2>
            <p style={styles.content}>Hi, I’m Alex. I’m a <strong>full stack</strong> javascript developer. I have a particular passion for the front-end. In my eyes, <strong>simplicity</strong> and <strong>usability</strong> trump flair every time. </p>
            <p style={styles.content}>I’m also an outdoors person. I love to cook. I’m a keen writer; in the process of writing my own novel. I live through my work and love to learn.    I don’t know what I would do without my partner or my friends.</p>
            <h2  id="famSof" style={styles.headings}>Familliar software</h2>
            <Carousel defaultControlsConfig={{nextButtonClassName: 'carouselNext'}} autoplay={true} wrapAround={true} slidesToShow={1} renderBottomCenterControls={null} renderCenterLeftControls={null} >
              {technologies.map(logo => 
                   <img style={styles.sliderImg} src={logo} />
                  )
              }
              </Carousel>
            <h2  id="profSum" style={styles.headings}>Proffessional Summary</h2>
            <p style={styles.content}>I believe that the best way to understand something is to build it. I find an immense amount of satisfaction in that. At uni, I wrote a dissertation that struggled with the concept of universal truth. I believe this is what drew me to development. <strong>To build something is to know it.</strong></p>
            <p style={styles.content}>I have worked as a developer both on a <strong>freelance</strong> basis and within various <strong>employed</strong> roles. Whilst employed, I have spent time designing and developing WordPress websites. On a freelance basis and more recently, I have built a number of websites using the <strong>MERN</strong> (Mongoose, Express, React, Node) stack, along with other notable technologies such as Next.js, Framer Motion, Material UI, Axios, Heroku and more. </p>
            <h2  id="workExp" style={styles.headings}>Work Experience</h2>
            <h2  id="achievements" style={styles.headings}>Key Achievements</h2>
            <h2  id="training" style={styles.headings}>Training</h2>
          </div>
        </div>
      </div>
    </div>

  )
}
