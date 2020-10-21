import React from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from "framer-motion";
import Blobs from "../components/blobs"
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';



export default function DesktopHome(props) {

  const styles = {
    CustomBody: {
      height:"100vh",
      width:"100%",

      backgroundColor:props.color.backgroundColor,
    },
    outerBody: {
      width:"100%",
      height:"100%",
      overflow: "hidden",
      zIndex:"-2",
      backgroundColor:props.color.backgroundColor,
    },
    innerBody:{
        width: "100%",
        marginLeft:"10px",
        height:"100%",
        display: "flex",
        flexDirection:"column",
        justifyContent: "center",
        alignItems: "center",
        textAlign:"center",
        zIndex:"99",
        backgroundColor:props.color.backgroundColor,
    },
    customHeading: {
        fontSize:"7vw",
        lineHeight: "1.2",
        letterSpacing: "2px",
        fontWeight: "900",
        color:props.color.highlightColor
    },
    customh2:{
        color:props.color.textColor,
        fontWeight: "500",
        fontSize: "1.5rem"
    },
    flexGrid:{
      display:"flex"
    },
    divider:{
      width: '1px',
      border: `1px solid ${props.color.highlightColor}`,
      color: props.color.highlightColor,
      height:"17px",
      margin:"0 5px 5px 5px"
    }
  }

  const handleClick = function(color){
    props.changeColor(color);
  }

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  }
  const item = {
    visible: { 
      opacity: 1 
    },
    hidden: {
      opacity: 0 
    },
  }

  return (
    <div>
    <Head>
      <title>Alex Foster - Web Development Portfolio</title>
    </Head>
    <AnimatePresence>
      <Blobs />
    </AnimatePresence>
      <div style={styles.CustomBody}>
        <div style={styles.outerBody}>
          <div style={styles.innerBody}>
            <div>
              <h1 style={styles.customHeading}>Alex Foster</h1>
              <h2 style={styles.customh2}>MERN Web Application Developer & UX Designer</h2>
            </div>
            <div style={styles.flexGrid}>
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={list}
              style={{paddingLeft:"0"}}
            >
              <Grid container alignItems="center">
                
                {props.customTheme === "light" ?
                    <motion.div  whileHover={{scale: 1.4, transition: {duration:.2}}} variants={item}><FiberManualRecordIcon fontSize="large" onClick={() => handleClick("dark")} style={{color:"#222C34"}}/></motion.div>
                        :
                    <motion.div  whileHover={{scale: 1.4, transition: {duration:.2}}} variants={item}><FiberManualRecordIcon fontSize="large" onClick={() => handleClick("light")} style={{color:"#e8e8e8"}}/></motion.div>
                }
                    <motion.div  whileHover={{scale: 1.4, transition: {duration:.2}}} variants={item}><Divider orientation="vertical" flexItem style={styles.divider}/></motion.div>
                    <motion.div  whileHover={{scale: 1.4, transition: {duration:.2}}} variants={item}><FiberManualRecordIcon fontSize="large" onClick={() => handleClick("purple")} style={{color:"#805DC9"}}/></motion.div>
                    <motion.div  whileHover={{scale: 1.4, transition: {duration:.2}}} variants={item}><FiberManualRecordIcon fontSize="large" onClick={() => handleClick("green")} style={{color:"#57BE6A"}}/></motion.div>
                    <motion.div  whileHover={{scale: 1.4, transition: {duration:.2}}} variants={item}><FiberManualRecordIcon fontSize="large" onClick={() => handleClick("orange")} style={{color:"#E08031"}}/></motion.div>
                    <motion.div  whileHover={{scale: 1.4, transition: {duration:.2}}} variants={item}><FiberManualRecordIcon fontSize="large" onClick={() => handleClick("blue")} style={{color:"#4D80FF"}}/></motion.div>
    
            </Grid>

            </motion.ul>
            </div>
                
            </div>
          </div>
        </div>
    </div>
  )
}
