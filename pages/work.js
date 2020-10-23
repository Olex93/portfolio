import React from 'react';
import Head from 'next/head';
import WorkDesktop from "../components/WorkDesktop"
import WorkMobile from "../components/WorkMobile"

export default function work(props) {


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
 

    return (
        <div>
           {size > 650 ? <WorkDesktop color={props.color} changeColor={props.changeColor}/> : <WorkMobile color={props.color} changeColor={props.changeColor}/> }
        </div>
    );
    }

    

