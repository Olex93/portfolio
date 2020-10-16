import React from 'react'
import { motion } from "framer-motion";
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
            boxShadow:`2px 2px 12px -6px ${props.color.darkBG}`,
            cursor: "pointer"
        },
    }
    const itemText = props.item.text.substring(0,100) + "...";

    return (
    <div>
        <motion.div style={{ margin: "20px"}} layout>
        <motion.div
            style={styles.itemBox}
            whileHover={{
                boxShadow:`5px 5px 12px -6px ${props.color.darkBG}`,
                transition: {
                    duration: .2
                    }
                }}
        >   
        <div style={styles.imageDiv} />
            <motion.h2 >{props.item.heading}</motion.h2>
            <SpringDivider color={props.color} width={"90%"} dividerBG={props.color.lightBG}/>
        <div style={styles.paragraph}>
            <motion.p >{itemText}</motion.p>
            <motion.button
            whileHover={{
                scale: 1.2,
                backgroundColor:props.color.highlightColor,
                color: props.color.backgroundColor,
                transition: {
                    duration: .2
                    }
                }}
                 onClick={() => props.triggerLightbox(props.item)} style={styles.button}>Expand
            </motion.button>
        </div>
        </motion.div>
        </motion.div>
    </div>
    );
}