import React from 'react';
import Head from 'next/head';
import { motion } from "framer-motion";
import GridItemMobile from "../components/GridItemMobile"
import itemsList from "../components/ItemsList"
import SpringDivider from "../components/SpringDivider"
import Lightbox from "../components/Lightbox"
import ColorSelect from "../components/colorSelect"


export default function work(props) {

    const styles = {
            mobileBody:{
                margin:0,
                padding:0,
                overflow:"hidden",
                backgroundColor:props.color.backgroundColor,
                minHeight:"100vh",
                textAlign:"center"
            },
            gridContainer:{
                alignItems:"center",
                padding:0,
                margin:0
            },
            grid:{
                display:"flex",
                alignItems:"flexStart",
                flexWrap:"wrap",
                justifyContent:"center",
                padding:0,
                margin:0
            },
            GridButton:{
                backgroundColor:props.color.lightBG,
                color:props.color.textColor,
                margin:"5px",
                border:"none",
                padding:"5px 10px",
                fontSize:"18px",
                fontWeight:"700",
                borderRadius:"3px",
                boxShadow:`2px 2px 12px -6px ${props.color.darkBG}`,
                cursor:"pointer"
            },
            highlightButton:{
                backgroundColor:props.color.highlightColor,
                color:props.color.textColor,
                margin:"5px",
                border:"none",
                padding:"5px 10px",
                fontSize:"18px",
                fontWeight:"700",
                borderRadius:"3px",
                boxShadow:`2px 2px 12px -6px ${props.color.darkBG}`
            },
            filterHeading:{
                display:"inline", 
                paddingRight:"10px",
                color:props.color.highlightColor
            }
        }
    
    const corporate = itemsList.filter(item =>{
        return item.category === "corporate"
       })
    
    const personal = itemsList.filter(item =>{
        return item.category === "personal"
       })

    const all = itemsList

    // // make items list stateful
    const [items, setItems] = React.useState(all)

    
    // Set which items are contained within items by filtering through itemsList based on the tag which was selected
    function updateItems(e){
        if (e.target.id === "corporate"){
            setItems(corporate)
        }
        if (e.target.id === "personal"){
            setItems(personal)
        }
        if (e.target.id === "all"){
            setItems(all)
        }
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

  
 

    return (
        <div  style={styles.mobileBody}>
            <div style={{paddingTop:"80px"}}>
                <h2 style={styles.filterHeading}>Venture:</h2>
                <motion.button 
                    id="corporate" 
                    style={styles.GridButton} 
                    onClick={(e) => updateItems(e)}
                    whileHover={{
                        scale: 1.1,
                        backgroundColor:props.color.highlightColor,
                        color: props.color.backgroundColor,
                        transition: {
                            duration: .2
                            }
                        }}
                    >Corporate</motion.button>
                <motion.button 
                    id="personal" 
                    style={styles.GridButton} 
                    onClick={(e) => updateItems(e)}
                    whileHover={{
                        scale: 1.1,
                        backgroundColor:props.color.highlightColor,
                        color: props.color.backgroundColor,
                        transition: {
                            duration: .2
                            }
                        }}
                    >Personal</motion.button>
                <motion.button 
                    id="all" style={styles.GridButton} 
                    onClick={(e) => updateItems(e)}
                    whileHover={{
                        scale: 1.1,
                        backgroundColor:props.color.highlightColor,
                        color: props.color.backgroundColor,
                        transition: {
                            duration: .2
                            }
                        }}
                    >All</motion.button>
            </div>
            <div style={{margin:"30px auto 0"}}>
            <SpringDivider color={props.color} width={"10%"} dividerBG={props.color.backgroundColor}/>
            </div>
            <div style={styles.gridContainer}>
            <motion.ul 
                style={styles.grid}
                initial="hidden"
                animate="visible"
                variants={list}
            >
                        {items.map((item, index) => (
                            <motion.div 
                                layout
                                key={index}
                                >
                                <GridItemMobile key={item.key} item={item} itemsList={itemsList} color={props.color} />
                            </motion.div>
                        ))}
            </motion.ul>
            </div>
        </div>
    );
    }

    

