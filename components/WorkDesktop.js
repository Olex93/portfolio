import React from 'react';
import Head from 'next/head';
import { motion } from "framer-motion";
import GridItem from "../components/GridItem"
import itemsList from "../components/ItemsList"
import SpringDivider from "../components/SpringDivider"
import Lightbox from "../components/Lightbox"
import ColorSelect from "../components/colorSelect"


export default function work(props) {

    const [colorWord, setColorWord] = React.useState("orange")
    React.useEffect(() => {
        if (props.color.highlightColor === "rgb(224,128,49)"){
          setColorWord("orange")
        } if (props.color.highlightColor === "rgb(128,93,201)"){
          setColorWord("purple")
        } if (props.color.highlightColor === "rgb(87,190,106)"){
          setColorWord("green")
        } if (props.color.highlightColor === "rgb(77,128,255)"){
          setColorWord("blue")
        }
      })

    const styles = {
            paddedBody:{
                marginLeft:"240px",
                padding:"0 30px",
                textAlign:"center",
                overflow:"hidden",
                minHeight:"100vh",
                marginTop:"-350px"
            },
            mobileBody:{
                marginLeft:"0",
                padding:"0",
                textAlign:"center",
                overflow:"hidden",
                minHeight:"100vh"
            },
            gridContainer:{
                alignItems:"center",
                padding:"30px"
            },
            grid:{
                display:"flex",
                alignItems:"flexStart",
                flexWrap:"wrap",
                justifyContent:"center",
                padding:0
            },
            GridButton:{
                backgroundColor:props.color.backgroundColor,
                color:props.color.highlightColor,
                margin:"5px",
                border:`2px solid ${props.color.highlightColor}`,
                padding:"5px 10px",
                fontSize:"18px",
                fontWeight:"700",
                borderRadius:"3px",
                boxShadow:`2px 2px 12px -6px ${props.color.darkBG}`,
                cursor:"pointer"
            },
            GridButtonFill:{
                backgroundColor:props.color.highlightColor,
                color:props.color.textColor,
                margin:"5px",
                border:`2px solid ${props.color.highlightColor}`,
                padding:"5px 10px",
                fontSize:"18px",
                fontWeight:"700",
                borderRadius:"3px",
                boxShadow:`inset 2px 2px 12px -6px ${props.color.darkBG}`,
                cursor:"pointer"
            },
            filterHeading:{
                display:"inline", 
                paddingRight:"10px",
                color:props.color.highlightColor
            },
            headingDiv:{
                backgroundImage:`url('/images/${colorWord}Blob.svg')`,
                backgroundSize:"1200px",
                backgroundRepeat:"no-repeat",
                backgroundPosition:"-340px -800px",
                height:"600px",
                marginBottom:"-300px",
                marginLeft:"240px",
                paddingLeft:"40px",
                overflow:"visible"
              },
              headingDivMobile:{
                backgroundImage:`url('/images/${colorWord}Blob.svg')`,
                backgroundSize:"1200px",
                backgroundRepeat:"no-repeat",
                backgroundPosition:"-340px -800px",
                height:"600px",
                marginBottom:"-300px",
                marginLeft:"0",
                paddingLeft:"40px",
                overflow:"visible"
              },
              heading:{
                color:"rgb(34,44,52)",
                fontSize:'60px',
                padding:"40px 0"
              }
        }
    
    const corporate = itemsList.filter(item =>{
        return item.category === "corporate"
       })
    
    const personal = itemsList.filter(item =>{
        return item.category === "personal"
       })


 // HIGHLIGHTING BUTTON COLOR
        const [allButton, setAllButton] = React.useState(true)
        const [personalButton, setPersonalButton] = React.useState(false)
        const [corporateButton, setCorporateButton] = React.useState(false)

        // Import all list items
        const all = itemsList
        // // Make a stateful items list 
        const [items, setItems] = React.useState(all)
        // Set which items are contained within items by filtering through itemsList based on the tag which was selected
        function updateItems(e){
            if (e.target.id === "corporate"){
                setCorporateButton(true)
                setPersonalButton(false)
                setAllButton(false)
                setItems(corporate)
            }
            if (e.target.id === "personal"){
                setItems(personal)
                setCorporateButton(false)
                setPersonalButton(true)
                setAllButton(false)
            }
            if (e.target.id === "all"){
                setItems(all)
                setCorporateButton(false)
                setPersonalButton(false)
                setAllButton(true)
            }
        }

    const [size, setSize] = React.useState([1]);
    if (typeof window !== 'undefined') {
  
      // setSize to window width based on useLayoutEffect//
      React.useLayoutEffect(() => {
        //function to be called to update size//
        function updateWidth() {
          setSize([window.innerWidth]);
        }
        //call function on resize//
        window.addEventListener('resize', updateWidth);
        updateWidth();
        return () => window.removeEventListener('resize', updateWidth);
        }, []);
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

    // set state for lightbox to be open or closed
    const [showLightbox, openLightbox] = React.useState(false)
    // set state for the item that the lightbox should display, set from the GridItem component
    const [lightboxItem, setLightboxItem] = React.useState({})
    // function called from the GridItem that was clicked to set the lightbox item and open the lightbox
    function triggerLightbox(item){
        setLightboxItem(item)
        openLightbox(true)
    }
    // function to close lightbox when close icon is clicked
    function closeLightbox(){
        openLightbox(false)
    }

    // handler function to close lightbox on escape key press
    const [userText, setUserText] = React.useState('');
    const handleUserKeyPress = React.useCallback(event => {
        const { key, keyCode } = event;
        if (keyCode === 27) {
        openLightbox(false);
        }
    })
    React.useEffect(() => {
        window.addEventListener('keydown', handleUserKeyPress);
        return () => {
        window.removeEventListener('keydown', handleUserKeyPress);
        };
    }, [handleUserKeyPress]);
 

    return (
        <div>
        <div style={size > 991 ? styles.headingDiv : styles.headingDivMobile}>
            <motion.h1 style={styles.heading}>My Work</motion.h1>
        </div>
        <div  style={size > 991 ? styles.paddedBody : styles.mobileBody}>
            <div style={{paddingTop:"80px"}}>
                <motion.button 
                    id="all" 
                    style={allButton ? styles.GridButtonFill : styles.GridButton}
                    onClick={(e) => updateItems(e)}
                    whileHover={{scale: 1.1}}
                    >All</motion.button>
                <motion.button 
                    id="corporate" 
                    style={corporateButton ? styles.GridButtonFill : styles.GridButton} 
                    onClick={(e) => updateItems(e)}
                    whileHover={{scale: 1.1}}
                    >Corporate</motion.button>
                <motion.button 
                    id="personal" 
                    style={personalButton ? styles.GridButtonFill : styles.GridButton} 
                    onClick={(e) => updateItems(e)}
                    whileHover={{scale: 1.1}}
                    >Personal</motion.button>
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
                                <GridItem key={item.key} item={item} itemsList={itemsList} color={props.color} triggerLightbox={triggerLightbox} />
                            </motion.div>
                        ))}
            </motion.ul>
                {showLightbox === true && 
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <Lightbox color={props.color} item={lightboxItem} closeLightbox={closeLightbox} />
                    </motion.div>
                }
            </div>
        </div>
        </div>
    );
    }

    

