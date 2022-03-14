import React from 'react';
import '../styles/globals.css'
import { motion } from 'framer-motion';
import Head from 'next/head'
import Navigation from "../components/Navigation"



function MyApp({ Component, pageProps, router }) {


  const [customTheme, setCustomTheme] = React.useState("dark")

  const [color, setColor] =  React.useState(
    {
      highlightColor:"rgb(224,128,49)",
      backgroundColor:"rgb(34,44,52)",
      textColor:"rgb(232,232,232)",
      lightBG:"rgb(74,85,94)",
      darkBG:"rgb(0,0,13)",
      opaqueBG:"rgba(0,0,13,0.9)"
    });

  function changeColor(newColor){
    
      if (newColor === "dark"){
        setColor(
         {
           ...color,
          backgroundColor:"rgb(34,44,52)",
          textColor:"rgb(232,232,232)",
          lightBG:"rgb(74,85,94)",
          darkBG:"rgb(0,0,13)",
          opaqueBG:"rgba(0,0,13,0.9)"
        })
        setCustomTheme("dark")
      }
      if (newColor === "light"){
        setColor(
         {
           ...color,
          backgroundColor:"rgb(232,232,232)",
          lightBG:"rgb(255,255,255)",
          textColor:"rgb(34,44,52)",
          darkBG:"#a2a2a2",
          opaqueBG:"rgba(182,182,182,0.8)"
        })
        setCustomTheme("light")
      }
      if (newColor === "purple"){
        setColor(
         {
           ...color,
          highlightColor:"rgb(128,93,201)"
        })
      }
      if (newColor === "green"){
        setColor(
         {
           ...color,
           highlightColor:"rgb(87,190,106)"
        })
      }
      if (newColor === "orange"){
        setColor(
         {
           ...color,
           highlightColor:"rgb(224,128,49)"
        })
      }
      if (newColor === "blue"){
        setColor(
         {
           ...color,
           highlightColor:"rgb(77,128,255)"
        })
      }
    }


    const spring = {
      type: "spring",
      damping: 20,
      stiffness: 100
    };

    
  
    return (
      <div>
          <Head>

          </Head>
          <div style={{backgroundColor:color.backgroundColor}}>
          <Navigation color={color} changeColor={changeColor}/>
          <motion.div
                transition={{ type: "fade", duration: 0.3}}
                key={router.route}
                initial={{marginRight:"200px"}}
                animate={{marginRight:"0px"}}
                id="page-transition-container"
              >
            <Component {...pageProps}  key={router.route} customTheme={customTheme} color={color} changeColor={changeColor}/>
          </motion.div>
          </div>
      </div>
    );
}

export default MyApp
