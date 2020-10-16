import React from 'react';
import Head from 'next/head';
import { motion, AnimateSharedLayout } from "framer-motion";
import GridItem from "../components/GridItem"
import itemsList from "../components/ItemsList"
import SpringDivider from "../components/SpringDivider"
import Lightbox from "../components/Lightbox"
import tagsList from "../components/tagsList"


export default function workOld(props) {

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
                backgroundColor:props.color.lightBG,
                color:props.color.textColor,
                margin:"5px",
                border:"none",
                padding:"5px 10px",
                fontSize:"18px",
                fontWeight:"700",
                borderRadius:"3px",
                boxShadow:`2px 2px 12px -6px ${props.color.darkBG}`
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
    const [displayed, setDisplayed] = React.useState("all")
    const [taggedItems, setTaggedItems] = React.useState([])

    
    // Set which items are contained within items by filtering through itemsList based on the tag which was selected
    function updateItems(e){
        if (e.target.id === "corporate"){
            setItems(corporate)
            setDisplayed("corporate")
            console.log(displayed)
        }
        if (e.target.id === "personal"){
            setItems(personal)
            setDisplayed("personal")

        }
        if (e.target.id === "all"){
            setItems(all)
            setDisplayed("all")
        }
    }

  


    const [buttons, setButtons] = React.useState(
        [ 
            { id: 'react', text: 'React.js', selected: false },
            { id: 'next', text: 'Next.js', selected: false },
            { id: 'node', text: 'Node.js', selected: false }
        ]
    )
    
    const [selectedTags, setSelectedTags] = React.useState([])

    // when a button is clicked
    function clickTag(e){
        setButtons(
            // map through each button in the react array 
            buttons.map((btn) => {
                // if the id matches the id of the clicked button
                if (e.target.id === btn.id){
                    // if the button is not selected already
                    if(btn.selected === false){
                        //add the selected button id to the selected tags array for filter purposes
                        setSelectedTags([...selectedTags, e.target.id])
                        // return the same object but with the opposite value for selected
                        return(
                            {...btn, selected:true}
                        )
                    }
                    // if the button is selected already
                    if (btn.selected === true){
                        //remove tag from selected tag array
                        removeTag(e.target)
                        return(
                            {...btn, selected:false}
                        )}
                // if the id doesn't match then just return the same object
                }else if (e.target.id !== btn.id){
                    return(
                        {...btn}
                    )
                }
            })
        )
    
        
        function removeTag(e) {
            var array = [...selectedTags]; // make a separate copy of the array
            var index = array.indexOf(e.id)
            if (index !== -1) {
              array.splice(index, 1);
              setSelectedTags(array);
            }
          }

          function updateCustomItems(){
            if (displayed === "all"){
                console.log(selectedTags)
                setItems(
                    itemsList.filter(item =>{
                        selectedTags.forEach(tag => {
                            if(item.tags.includes(tag) === true){
                                return item
                            }
                        });
                }))
            }
        }
            // if (displayed === "corporate"){
            //     setItems(
            //         itemsList.filter(item =>{
            //             if(item.category === "corporate"){
            //                 if(item.tags.includes(e.target.id) === true){
            //                     return item
            //                 }
            //             }
            //     }))
            // }
            // if (displayed === "personal"){
            //     setItems(
            //         itemsList.filter(item =>{
            //             if(item.category === "personal"){
            //                 if(item.tags.includes(e.target.id) === true){
            //                     return item
            //                 }
            //             }
            //     }))
            // }

        

        // function setCustomItems(){
        //     // for each button in the buttons array
        //     buttons.map((button) => {
        //         // if the button is selected
        //         if (button.selected !== false){
        //             // map through all data items
        //             itemsList.map((item) => {
        //                 // check if the item tags include the button id
        //                 if(item.tags.includes(button.text) !== false){
        //                     console.log(item)
        //                     //if true, push the item to the tagged Items array
        //                     // setTaggedItems(
        //                     //     ...items,
        //                     //     item
        //                     //     )
        //                 }
        //             })
        //         }
        //     })
        
        //     setItems(taggedItems)
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
        <div style={styles.paddedBody}>
            <div style={{paddingTop:"100px"}}>
                <h2 style={styles.filterHeading}>Venture:</h2>
                <button id="corporate" style={styles.GridButton} onClick={(e) => updateItems(e)}>Corporate</button>
                <button id="personal" style={styles.GridButton} onClick={(e) => updateItems(e)}>Personal</button>
                <button id="all" style={styles.GridButton} onClick={(e) => updateItems(e)}>All</button>
            </div>
            <div>
                <h2 style={styles.filterHeading}>Technology:</h2>
                {buttons.map((btn) => (<button id={btn.id} style={btn.selected ? styles.highlightButton : styles.GridButton} onClick={e => clickTag(e)}>{btn.text}</button>))}
            </div>
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

    

