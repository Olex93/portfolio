import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SpringDivider from "../components/SpringDivider"
import CustomAvatar from "../components/CustomAvatar"
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Collapse from '@material-ui/core/Collapse';
import theme from "./theme"
import Link from 'next/link'
import ContactForm from "../components/ContactForm"


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    overflow:"hidden"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    border:"none"
  },
  drawerPaper: {
    width: drawerWidth,
    border:"none"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  topDivider:{
    height:"3px",
    width:"80%",
    margin:"0 auto",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  nestedRoot: {
    width: '100%',
    maxWidth: 240,
  },

}));

const drawerWidth = 240;

export default function CustomDrawer(props) {

  const classes = useStyles();

  const [shown, setShown] = React.useState(true);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
    setShown(!shown);
  };

  const customStyles = {
    menuLink:{
      color:props.color.textColor,
    },
    divBG:{
      backgroundColor:props.color.lightBG,
      height:"100vh",
      width:"240px"
    },
    contactSection:{
      width:"100%",
      padding:"40px 20px 20px",
      backgroundColor:props.color.lightBG
    },
    contactHeading:{
      fontSize:"17px",
      fontWeight:"400",
      color:props.color.textColor,
      letterSpacing:"1.2px",
      marginTop:"5px"
    }
  }
  

  return (
      <div  className={classes.root}>
        <CssBaseline />
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
        <div  style={customStyles.divBG}>


        <Divider className={classes.topDivider} style={{backgroundColor:props.color.highlightColor}}/>
        <Link href="/"><a><CustomAvatar  backgroundColor={props.color.lightBG} highlightColor={props.color.highlightColor} /></a></Link>
        <SpringDivider color={props.color} width={"80%"} dividerBG={props.color.lightBG}/>
          <List>
              <Link  href="/about">
                <a style={customStyles.menuLink}>
                  <ListItem button>
                    <ListItemIcon><InboxIcon style={{color:props.color.textColor}}/></ListItemIcon>
                    <ListItemText primary={"About Me"} />
                  </ListItem>
                </a>
              </Link>
              <Link href="/work">
                <a style={customStyles.menuLink}>
                  <ListItem button>
                    <ListItemIcon><InboxIcon style={{color:props.color.textColor}}/></ListItemIcon>
                    <ListItemText primary={"My Work"} />
                  </ListItem>
                </a>
              </Link>
          </List>
          <SpringDivider color={props.color} width={"80%"} dividerBG={props.color.lightBG}/>
          <div style={customStyles.contactSection}>
            <p style={customStyles.contactHeading}>Write to me</p>
            <ContactForm color={props.color} changeColor={props.changeColor}/>
          </div>
          </div>
        </Drawer>
    </div>
    
  );
}
