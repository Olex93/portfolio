import React from 'react';
import Drawer from "../components/Drawer"
import MobileDrawer from "../components/MobileDrawer"

export default function Navigation(props) {
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
    <>
    {size > 991 && <Drawer theme={props.customTheme} color={props.color} changeColor={props.changeColor}/>}
    {size <= 991 && <MobileDrawer theme={props.customTheme} color={props.color} changeColor={props.changeColor}/>}
    </>
  )
}
