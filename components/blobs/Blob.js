import React from 'react';
import { motion } from 'framer-motion';

export default function Blob(props){
  const style={
    blobStyles:{
      width:props.width
    },
    containerStyle:{
      position: "relative",
      textAlign: "center",
      color: "white",
    },
    headingStyles:{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex:5
    }
  }

    return(
      <div style={style.containerStyle}>
        <h1 style={style.headingStyles}>{props.heading}</h1>
        <motion.img
        src={"/images/" + props.blobColor + "Blob.svg"}
        style={style.blobStyles}
        alt='blob'
        animate={{
            rotateX: [0, 19, 30, 22, 29, 0 ],
            rotateY: [12, 6, 0, 26, 0, 12],
            rotateZ: [0, 6, 8, 11, 1, 0],
            scaleX: [1, 1.1, 1, 1.1, 0.9, 1],
            scaleY: [1, 0.9, 1.1, 1, 1.1, 1],
            rotate: [0, 15, 16, 5, 7, 0]

            }}
            transition={{
            duration: 15,
            type:"circInOut",
            ease: "linear",
            times: [0, 0.25, 0.4, 0.5, 0.77, 1],
            loop: Infinity,
            repeatDelay: 0
          }}/>

      </div>
        )
    
}


