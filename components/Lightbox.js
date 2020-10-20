import React from 'react'
import Blobs from "../components/blobs"
import SpringDivider from './SpringDivider'

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
        innerContainer:{
            height:"500px",
            margin:"auto",
            width:"400px",
            backgroundColor:props.color.lightBG,
            overflow:"scroll",
            textAlign:"left",
        },
        imgDiv:{
            background:props.item.image,
            height:"200px",
            backgroundSize:"cover",
            marginBottom:"20px"
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

    return(
        <div style={style.lightboxBG}>
            <div style={style.outerContainer} onClick={() => props.closeLightbox()}>
                <div style={style.innerContainer}>
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
        </div>
    )
}