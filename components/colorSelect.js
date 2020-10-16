import React from "react"
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { motion } from "framer-motion";


export default function ColorSelect(props){


  const handleClick = function(color){
    props.changeColor(color);
  }

    const styles = {
        divider:{
            width: '1px',
            border: `1px solid ${props.color.highlightColor}`,
            color: props.color.highlightColor,
            height:"17px",
            margin:"0 5px 5px 5px"
      }
    }

    const item = {
        visible: { 
          opacity: 1 
        },
        hidden: {
           opacity: 0 
        },
    }


    return(

        <Grid container alignItems="center">
                
            {props.theme === "light" ?
                <motion.div  whileHover={{scale: 1.4, transition: {duration:.2}}} variants={props.item}><FiberManualRecordIcon fontSize="large" onClick={() => handleClick("dark")} style={{color:"#222C34"}}/></motion.div>
                    :
                <motion.div  whileHover={{scale: 1.4, transition: {duration:.2}}} variants={props.item}><FiberManualRecordIcon fontSize="large" onClick={() => handleClick("light")} style={{color:"#e8e8e8"}}/></motion.div>
            }
                <motion.div  whileHover={{scale: 1.4, transition: {duration:.2}}} variants={props.item}><Divider orientation="vertical" flexItem style={styles.divider}/></motion.div>
                <motion.div  whileHover={{scale: 1.4, transition: {duration:.2}}} variants={props.item}><FiberManualRecordIcon fontSize="large" onClick={() => handleClick("purple")} style={{color:"#805DC9"}}/></motion.div>
                <motion.div  whileHover={{scale: 1.4, transition: {duration:.2}}} variants={props.item}><FiberManualRecordIcon fontSize="large" onClick={() => handleClick("green")} style={{color:"#57BE6A"}}/></motion.div>
                <motion.div  whileHover={{scale: 1.4, transition: {duration:.2}}} variants={props.item}><FiberManualRecordIcon fontSize="large" onClick={() => handleClick("orange")} style={{color:"#E08031"}}/></motion.div>
                <motion.div  whileHover={{scale: 1.4, transition: {duration:.2}}} variants={props.item}><FiberManualRecordIcon fontSize="large" onClick={() => handleClick("blue")} style={{color:"#4D80FF"}}/></motion.div>

        </Grid>
    )
}