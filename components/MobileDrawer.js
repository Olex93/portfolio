import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Link from 'next/link'
import Divider from '@material-ui/core/Divider';
import globals from "../styles/homepage.module.css"
import { motion } from "framer-motion";


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});


export default function CustomDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
         <ListItem><Link href="/"><Button><a>Home</a></Button></Link></ListItem>
        <ListItem><Link href="/about"><Button><a>About Me</a></Button></Link></ListItem>
        <ListItem><Link href="/work"><Button><a>My Work</a></Button></Link></ListItem>
      </List>
      <Divider />
      <List>
        <ListItem><Link href="/miranda"><Button><a>About</a></Button></Link></ListItem>
        <ListItem><Link href="/private-fields"><Button><a>Our Fields</a></Button></Link></ListItem>
        <ListItem><Link href="/contact"><Button><a>Contact</a></Button></Link></ListItem>
      </List>
    </div>
  );

  const styles = {
    menuButton:{
      position:"fixed",
      top:"10px",
      right:"10px",
      zIndex:"1",
      background:"none",
      border:"none",
      cursor:"pointer",
    },
    drawer:{
      backgroundColor:props.color.lightBG
    }
  }


  return (
    <div>
        <CssBaseline />
        {['left'].map((anchor) => (
        <React.Fragment key={anchor} >
          <motion.button whileHover={{scale: 1.2}} className={globals.menuButton} style={styles.menuButton} onClick={toggleDrawer(anchor, true)}><MenuIcon style={{ fontSize: 27, color:props.color.textColor }} /></motion.button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
    
  );
}
