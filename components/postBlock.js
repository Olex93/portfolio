import React from "react"
import { motion, AnimateSharedLayout } from "framer-motion";

export default function postBlock(props){
    const styles = {
        cardContainer:{
            position:"relative",
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-around",
            height:"100%",
            backgroundColor:props.color.lightBG,
            margin:"40px 10px",
            borderRadius:"2px",
            boxShadow:`12px 12px 15px -10px ${props.color.darkBG}`,
          },
          cardLeft:{
            width:"25%",
            display:"flex",
            justifyContent:"center",
            borderWidth:"0 2px 0 0",
            borderStyle:"solid",
            borderColor:props.color.darkBG
          },
          cardLeft2:{
            width:"0",
            display:"flex",
            justifyContent:"center",
            borderWidth:"0 0 0 0",
            borderStyle:"none",
          },
          cardRight:{
            width:"75%",
            padding:"20px"
          },
          cardRight2:{
            width:"100%",
            padding:"40px"
          },
          clientLogo:{
            alignSelf:"center",
            width:"80%",
          },
          cardHeading:{
            color:props.color.textColor,
            fontWeight:"600",
            letterSpacing:"0.7px",
            fontSize:"1.1rem",
            padding:0,
            margin:0
          },
          cardDates:{
            color:props.color.textColor
          },
          pillHeading:{
            color:props.color.textColor
          },
          cardPill:{
            backgroundColor:props.color.highlightColor,
            borderRadius:"2px",
            border:"none",
            display:"inline-block",
            padding:"5px 10px",
            position:'absolute',
            top:"15px",
            right:"15px"
          }, 
          pillText:{
            fontSize:"1rem",
            color:props.color.darkBG,
            padding:0
          },
          subHeading:{
            color:props.color.textColor,
            padding:"0 0 5px 0",
            fontWeight:"400",
            margin:"0",
            fontSize:"1rem"
          }
    }
    const [expanded, setExpanded] = React.useState(false)
    

    const [number, setNumber] = React.useState(50);
    function expand(){
        const fullLength = props.item.text.length
        if (number === 50) {
            setNumber(fullLength)
            setExpanded(true)
        } else {
            setNumber(50)
            setExpanded(false)
        }
    }

    return(
        <motion.div layout style={styles.cardContainer}>

         <motion.div layout style={!expanded ? styles.cardLeft : styles.cardLeft2} >
          <img style={styles.clientLogo} src={props.item.logoSRC}></img>
        </motion.div>

        <motion.div layout style={!expanded ? styles.cardRight : styles.cardRight2}>
          <h3  style={styles.cardHeading}>{props.item.heading}</h3>
          <i  style={styles.cardDates}>{props.item.date}</i>
          {props.item.workExp1 && <p  style={{color:props.color.textColor}}>{number === 50 ? props.item.workExp1.substring(0, number) + "..." : props.item.workExp1.substring(0, number)}</p>}
          {!props.item.workExp1 && <p  style={{color:props.color.textColor}}>{number === 50 ? props.item.text.substring(0, number) + "..." : props.item.text.substring(0, number)}</p>}
          {props.item.workExp2 && expanded && <p style={{color:props.color.textColor}}>{props.item.workExp2}</p>}
          {expanded && 
            <ul>
            {props.item.workDuties && props.item.workDuties.map((item, index) => (
                                <li style={{color:props.color.textColor}} id={index}>{item}</li>
                            ))}
            </ul>
           }
          <h4 style={styles.pillHeading}><div style={styles.cardPill}><span>{props.item.type}</span></div></h4>
          <button onClick={expand}>{!expanded ? "Expand" : "Close"}</button>
        </motion.div>

      </motion.div>
    )
}