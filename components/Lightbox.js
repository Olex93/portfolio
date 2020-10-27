import React from 'react'
import Blobs from "../components/blobs"
import SpringDivider from './SpringDivider'
import CloseIcon from '@material-ui/icons/Close';
import { motion } from "framer-motion";


export default function Lightbox(props){

    const style = {
        lightboxBG:{
            backgroundColor: props.color.opaqueBG,
            position:"fixed", 
            width:"100%", 
            height:"100vh", 
            left:"0", 
            top:"0", 
            zIndex:"9"
        },
        outerContainer:{
            display:"flex",
            height:"100%",
            marginLeft:"240px",
        },
        mobileOuter:{
            display:"flex",
            marginLeft:0,
            height:"100vh",
        },
        innerContainer:{
            height:"500px",
            margin:"auto",
            width:"400px",
            backgroundColor:props.color.lightBG,
            overflow:"scroll",
            textAlign:"left",
        },
        innerContainerMobile:{
            height:"80%",
            margin:"auto",
            width:"80%",
            backgroundColor:props.color.lightBG,
            overflow:"scroll",
            textAlign:"left",
        },
        imgDiv:{
            background:props.item.image,
            height:"200px",
            backgroundSize:"cover",
            marginBottom:"20px",
            backgroundPosition:"center"
        },
        headingDiv:{
            padding:"0 20px 20px 20px"
        },
        heading:{
            color:props.color.textColor,
            padding:"0 20px 5px 0",
            fontSize:"28px",
            margin:"0"
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
        textDiv:{
            padding:"20px 20px 20px 20px"
        },
        linkColor:{
            color:props.color.textColor
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

    return(
        <div style={style.lightboxBG}>
            <div style={size > 991 ? style.outerContainer : style.mobileOuter} onClick={() => props.closeLightbox()}>
                <div style={size > 600 ? style.innerContainer : style.innerContainerMobile}>
                    <div style={style.imgDiv} />
                    <div style={style.headingDiv}>
                        <h2 style={style.heading}>{props.item.heading}</h2>
                        <p style={style.subHeading}><i style={style.headingSpan}>Client: </i>{props.item.organisation}</p>
                        <p style={style.subHeading}><i style={style.headingSpan}>Project: </i>{props.item.subheading}</p>
                        <p style={style.subHeading}><i style={style.headingSpan}>Date: </i>{props.item.date}</p>
                        {props.item.url !== null && <p style={style.subHeading}><i style={style.headingSpan}>Url: </i> <a style={style.linkColor} href={props.item.url} target="blank">{props.item.url}</a></p>}
                        {props.item.codeSandbox !== null && <p style={style.subHeading}><i style={style.headingSpan}>CodeSandbox: </i> <a style={style.linkColor} href={props.item.codeSandbox} target="blank">{props.item.codeSandbox}</a></p>}

                    </div>
                    <SpringDivider color={props.color} width={"80%"} dividerBG={props.color.lightBG} />
                    <div style={style.textDiv}>
                        <p style={style.subHeading}><i style={style.headingSpan}>Summary: </i>{props.item.text}</p>
                        {props.item.text2 && <p style={style.subHeading}>{props.item.text2}</p>}
                        {props.item.text3 && <p style={style.subHeading}>{props.item.text3}</p>}
                    </div>
                    <SpringDivider color={props.color} width={"80%"} dividerBG={props.color.lightBG} />
                    <div style={style.textDiv}>
                        <p style={style.subHeading}><i style={style.headingSpan}>Full list of technologies:</i></p>
                        <ul>
                            {props.item.tags.map((tag) => (
                                <li style={style.subHeading}>{tag}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <motion.div whileHover={{scale: 1.4, transition: {duration:.2}}} style={{position:"absolute", top:"10px", right:"10px"}}>
            <CloseIcon  style={{ fontSize: 40,  color:props.color.highlightColor, cursor:"pointer" }} onClick={props.closeLightbox}/>
            </motion.div>
        </div>
    )
}