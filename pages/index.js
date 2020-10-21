import React from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from "framer-motion";
import DesktopHome from './DesktopHome';
import MobileHome from "./MobileHome"




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
        <motion.div>
          {size > 991 &&
          <DesktopHome color={props.color} changeColor={props.changeColor} customTheme={props.customTheme}/>
          }
          {size <= 991 && 
          <MobileHome color={props.color} customTheme={props.customTheme} changeColor={props.changeColor}/>}

        </motion.div>
      )
}
  
  

