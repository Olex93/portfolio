import React from 'react';
import Head from 'next/head';
import { motion, AnimateSharedLayout } from "framer-motion";
import GridItem from "../components/GridItem"
import itemsList from "../components/ItemsList"
import SpringDivider from "../components/SpringDivider"
import Lightbox from "../components/Lightbox"
import tagsList from "../components/tagsList"

export default function work(props) {

    const [buttonStyle, setButtonStyle] = React.useState({
        backgroundColor: props.color.lightBG,
        textColor: props.color.textColor
    })

        const styles = {
            paddedBody:{
                paddingLeft:"240px",
                textAlign:"center",
                overflow:"hidden",
                backgroundColor:props.color.backgroundColor,
                minHeight:"100vh"
            },
            gridContainer:{
                alignItems:"center",
                padding:"30px 0"
            },
            grid:{
                display:"flex",
                alignItems:"flexStart",
                flexWrap:"wrap",
                justifyContent:"center"
            },
            GridButton:{
                backgroundColor:buttonStyle.backgroundColor,
                color:buttonStyle.textColor,
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
    
    // filter functionality based on tags
    // make items list stateful
    const [items, setItems] = React.useState(itemsList)
    // Set which items are contained within items by filtering through itemsList based on the tag which was selected
    function updateItems(clickedCategory){
        if (clickedCategory !== "all"){
            setItems(
                itemsList.filter(item =>{
                 return item.category === clickedCategory
                })
             )
        }
        if (clickedCategory === "all"){
            setItems(itemsList)
        }
    }


    // need to have an array of tags that are selected
    // when a button is clicked, check if the clickedTag is present in the array, 
    // if not in array, higlight that button and push, 
    // if in array, unhighlight that button and remove 
    // // filter functionality based on tags
    // const [clicked, setClicked] = React.useState([1,2])
    

    // function clickTag(key){

    //     //if value us already in the array
    //     if(clicked.indexOf(key) !== -1){

    //         //identify the index of the clicked item
    //         var index = clicked.indexOf(key)

    //         //create new array and  splice the new item off of it
    //         var newArray = clicked.splice(index, 1)

    //         //set clicked to equal the new array
    //         setClicked(
    //             newArray
    //         )
    //         console.log(clicked)
    //     } 
    //     //if value is not in the array already
    //     if(clicked.indexOf(key) === -1){
    //         setClicked([
    //             ...clicked,
    //             key
    //         ]
    //         )
    //     }

    // }




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
        <div style={styles.paddedBody}>
            <div style={{paddingTop:"100px"}}>
                <h2 style={styles.filterHeading}>Venture:</h2>
                <button style={styles.GridButton} onClick={() => updateItems("corporate")}>Corporate</button>
                <button style={styles.GridButton} onClick={() => updateItems("personal")}>Personal</button>
                <button style={styles.GridButton} onClick={() => updateItems("all")}>All</button>
            </div>
            {/* <div>
                <h2 style={styles.filterHeading}>Technology:</h2>
                {tagsList.map((tag) => (
                <button id={tag.key} style={styles.GridButton} onClick={e => clickTag(tag.key)}>{tag.text}</button>
                ))}
            </div> */}
            <div style={{margin:"30px auto 0"}}>
            <SpringDivider color={props.color} width={"10%"} dividerBG={props.color.backgroundColor}/>
            </div>
            <div style={styles.gridContainer}>
                <AnimateSharedLayout>
                    <motion.div
                    style={styles.grid}
                    layout
                    >
                        {items.map((item) => (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                            <GridItem layout key={item.key} item={item} itemsList={itemsList} color={props.color} triggerLightbox={triggerLightbox} />
                        </motion.div>
                        ))}
                    </motion.div>
                </AnimateSharedLayout>
                {showLightbox === true && 
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <Lightbox color={props.color} item={lightboxItem}/>
                    </motion.div>
                }
            </div>
        </div>
    );
    }

    

