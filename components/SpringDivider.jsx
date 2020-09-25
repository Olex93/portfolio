import React from 'react';
import { motion } from 'framer-motion';
import Divider from '@material-ui/core/Divider';



export default function SpringDivider (props){

  const styles = {
    customDivider:{
      height:"1px",
      width: props.width,
      margin:"0 auto",
      backgroundColor:props.color.highlightColor
    },
    customDiv:{
      backgroundColor:props.dividerBG
    }
  }

    return(
        <motion.div  style={styles.customDiv}
            initial={{
              width:"1%"
              }}
            animate={{
              width:"100%"
            }}
          ><Divider style={styles.customDivider} />
          </motion.div>
    )
}