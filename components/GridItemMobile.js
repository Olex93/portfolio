import React from 'react'
import { motion, AnimateSharedLayout } from "framer-motion";
import SpringDivider from "../components/SpringDivider"

export default function GridItem(props) {

    const styles={
        itemBox:{
            padding:0,
            margin:0,
            width: "100%",
            height:"100%",
            borderRadius: "3px",
            display:"flex",
            flexDirection:"column",
            alignItems:"flex-start",
            color:props.color.textColor,
            textAlign:"left"
        },
        paragraph:{
            height:"100%",
            margin:"10px 20px 30px"
        },
        imageDiv:{
            width:"100%", 
            height: "200px", 
            backgroundImage:props.item.image, 
            backgroundSize:"cover",
            repeat:"no-repeat",
            margin:0,
            padding:0
        },
        button:{
            backgroundColor:props.color.backgroundColor,
            color:props.color.highlightColor,
            margin:"0",
            border:`2px solid ${props.color.highlightColor}`,
            padding:"5px 10px",
            fontSize:"15px",
            fontWeight:"700",
            borderRadius:"3px",
            boxShadow:`2px 2px 12px -6px ${props.color.darkBG}`,
            cursor: "pointer"
        },
        logoIcon:{
            width:"40px",
            height:"40px",
            borderRadius:"50px",
            border:`1px solid ${props.color.highlightColor}`,
            marginBottom:"15px",
            backgroundColor:props.color.textColor,
            alignSelf:"center"
        },
        topBar:{
            display:"flex",
            justifyContent:"flex-start",
            alignItems:"center",
            margin:"20px 20px 0 15px",
            alignContent:"center",
        },
        heading:{
            margin:"-15px 0 0 15px"
        },
        date:{
            fontStyle:"italic",
            padding:0,
            margin:0,
            margin:"0 0 0 15px"
        },
        subHeading:{
            color:props.color.textColor,
            padding:"0 20px 5px 0",
            fontWeight:"400",
            margin:"0",
            fontSize:"16px"
        },
        headingSpan:{
            color: props.color.highlightColor,
            fontWeight:"600"
        },
        list:{
            padding:"10px 20px 20px"
        },
        hiddenContent:{
            display:"none"
        },
        shownContent:{
            color:props.color.textColor,
            marginTop:"30px"
        },
        blockHeading:{
            padding:0,
            margin:"10px 0 -10px 0",
            fontSize:"17px",
            fontWeight:"600"
        },
        unstyledLink:{
            color:props.color.textColor, 
            textDecoration:"none"
        }
    }

    const [expanded, setExpanded] = React.useState(false)
    const [number, setNumber] = React.useState(100);
    function expand(e){
        const fullLength = props.item.text.length
        if (number === 100) {
            setNumber(fullLength)
            setExpanded(true)
        } else {
            setNumber(100)
            setExpanded(false)
            document.getElementById(`div${e.target.id}`).scrollIntoView(true);
        }
    }



    return (

    <div>
        <div>
        <div
            style={styles.itemBox}
            whileHover={{
                boxShadow:`5px 5px 12px -6px ${props.color.darkBG}`,
                transition: {
                    duration: .2
                    }
                }}
            
        >  
        <motion.div layout id={"div" + props.item.key} style={styles.topBar}>
        <motion.img layout src={props.item.icon} style={styles.logoIcon} />
            <div>
                <motion.h2 layout style={styles.heading} >{props.item.heading}</motion.h2>
                <motion.p style={styles.date}>{props.item.date}</motion.p>
            </div>
        </motion.div>
        <div style={styles.imageDiv} />
            <SpringDivider color={props.color} width={"100%"} dividerBG={props.color.backgroundColor}/>
        <div style={styles.paragraph}>
        <AnimateSharedLayout>
        <motion.p style={styles.blockHeading}>{props.item.subheading}</motion.p>
            <motion.p >{number === 100 ? props.item.text.substring(0, number) + "..." : props.item.text.substring(0, number)}</motion.p>
            {expanded && 
                <>               
                <motion.p >{props.item.text2}</motion.p>
                <motion.p >{props.item.text3}</motion.p>
                </>
            }
            {expanded && props.item.url && <motion.button whileHover={{scale:1.2}} style={styles.button}><a style={styles.unstyledLink} href={props.item.url} target="blank">View Site</a></motion.button>}
            {expanded && !props.item.url && props.item.codeSandbox && <motion.button whileHover={{scale:1.2}} style={styles.button}><a style={styles.unstyledLink} href={props.item.codeSandbox} target="blank">View Sandbox</a></motion.button>}
            <div style={!expanded ? styles.hiddenContent : styles.shownContent}>

                <p style={styles.subHeading}><i style={styles.headingSpan}>Full list of technologies:</i></p>
                <ul style={styles.list}>
                    {props.item.tags.map((tag) => (
                        <li style={styles.subHeading}>{tag}</li>
                        ))
                    }
                </ul>
            </div>
            <motion.button
            whileHover={{
                scale: 1.2,
                backgroundColor:props.color.highlightColor,
                color: props.color.backgroundColor,
                transition: {
                    duration: .2
                    }
                }}
                id={props.item.key.toString()}
                onClick={(e) => expand(e)} style={styles.button}>{!expanded ? "Expand" : "Close"}
            </motion.button>
            </AnimateSharedLayout>
        </div>
        </div>
        </div>
    </div>

    );
}