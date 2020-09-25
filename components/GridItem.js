import React from 'react'
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import SpringDivider from "../components/SpringDivider"

export default function GridItem(props) {

    const styles={
        itemBox:{
            backgroundColor: props.color.lightBG,
            width: "300px",
            height:"370px",
            borderRadius: "3px",
            display:"flex",
            flexDirection:"column",
            color:props.color.textColor
        },
        paragraph:{
            height:"100%",
            margin:"7px",
            padding:"0 10px"
        },
        imageDiv:{
            width:"100%", 
            height: "350px", 
            backgroundImage:props.item.image, 
            backgroundSize:"cover",
        },
        button:{
            backgroundColor:props.color.backgroundColor,
            color:props.color.highlightColor,
            margin:"5px",
            border:"none",
            padding:"5px 10px",
            fontSize:"18px",
            fontWeight:"700",
            borderRadius:"3px",
            boxShadow:`2px 2px 12px -6px ${props.color.darkBG}`
        },
    }
    const itemText = props.item.text.substring(0,100) + "...";

    return (
    <div>
        <motion.div style={{ margin: "20px"}} layout>
        <motion.div
            layout
            initial={{opacity:0}}
            animate={{opacity:1}}
            style={styles.itemBox}
        >   
        <div style={styles.imageDiv} />
            <motion.h2 layout>{props.item.heading}</motion.h2>
            <SpringDivider color={props.color} width={"90%"} dividerBG={props.color.lightBG}/>
        <div style={styles.paragraph}>
            <motion.p layout>{itemText}</motion.p>
            <button onClick={() => props.triggerLightbox(props.item)} style={styles.button}>Expand</button>
        </div>
        </motion.div>
        </motion.div>
    </div>
    );
}