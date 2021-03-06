import React from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from "framer-motion";
import HomeDesktop from '../components/HomeDesktop';
import HomeMobile from "../components/HomeMobile"




export default function Home(props) {
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


      return(
        <div>
          <Head>
             <title>Alex Foster - Web Developer Portfolio</title>
             <meta name="description" content="This is Alex Foster's web development portfolio, showcasing some recent work and proffessional information." />
          </Head>
        <motion.div>
          {size > 991 &&
          <HomeDesktop color={props.color} changeColor={props.changeColor} customTheme={props.customTheme}/>
          }
          {size <= 991 && 
          <HomeMobile color={props.color} customTheme={props.customTheme} changeColor={props.changeColor}/>}

        </motion.div>
        </div>
      )
}
  
  

