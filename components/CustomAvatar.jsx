import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { motion } from 'framer-motion';


const useStyles = makeStyles((theme) => ({
    customAvatar:{
      width:"100px",
      height:"100px",
      margin:"20px auto 20px auto"
    }
  }))

export default function CustomAvatar(props){

    const classes = useStyles();

    return(
        <motion.div className="card" 
            initial={{
                opacity:0,
                scale:0
            }}
            animate={{
                opacity:1,
                scale:1
            }}
            whileHover={{
                scale: 1.2,
                transition: {
                duration: .2
            }}
        }>
            <Avatar className={classes.customAvatar} div style={{border: `2px solid ${props.highlightColor}`}} circle src={"/images/Head.png"}/>
        </motion.div>
    )
}