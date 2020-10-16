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
import MailIcon from '@material-ui/icons/Mail';
import { motion } from 'framer-motion';
import SpringDivider from "../components/SpringDivider"
import CustomAvatar from "../components/CustomAvatar"
import SendIcon from '@material-ui/icons/Send';
import DraftsIcon from '@material-ui/icons/Drafts';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Collapse from '@material-ui/core/Collapse';
import theme from "../pages/theme"
import Link from 'next/link'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
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
    textColor: {
      color: props.color.textColor
    },
    lightBG:{
      backgroundColor: props.color.lightBG
    },
    darkBG:{
      backgroundColor: props.color.darkBG
    },
    highlightColor:{
      color:props.color.highlightColor
    },
    divBG:{
      backgroundColor:props.color.lightBG,
      height:"100vh",
      width:"240px"
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
              <ListItem button>
                <ListItemIcon><InboxIcon style={customStyles.textColor}/></ListItemIcon>
                <Link href="/about"><a><ListItemText style={customStyles.textColor} primary={"About Me"} /></a></Link>
              </ListItem>
              <ListItem button>
                <ListItemIcon><InboxIcon style={customStyles.textColor}/></ListItemIcon>
                <Link href="/work"><a><ListItemText style={customStyles.textColor} primary={"My Work"} /></a></Link>
              </ListItem>
          </List>
        <SpringDivider color={props.color} width={"80%"} dividerBG={props.color.lightBG}/>
          <List
            component="nav"
            className={classes.nestedRoot}
          >
            <ListItem button onClick={handleClick}>
              <ListItemIcon>
                <InboxIcon style={customStyles.textColor} />
              </ListItemIcon>
              <ListItemText style={customStyles.textColor} primary="Work Experience" />
              {open ? <ExpandLess style={customStyles.highlightColor} /> : <ExpandMore style={customStyles.highlightColor}/>}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <StarBorder style={customStyles.textColor} />
                  </ListItemIcon>
                  <ListItemText style={customStyles.textColor} primary="Development" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <StarBorder style={customStyles.textColor} />
                  </ListItemIcon>
                  <ListItemText style={customStyles.textColor} primary="Design" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <StarBorder style={customStyles.textColor} />
                  </ListItemIcon>
                  <ListItemText style={customStyles.textColor} primary="SEO" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <StarBorder style={customStyles.textColor} />
                  </ListItemIcon>
                  <ListItemText style={customStyles.textColor} primary="Analytics" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <StarBorder style={customStyles.textColor}/>
                  </ListItemIcon>
                  <ListItemText style={customStyles.textColor} primary="Marketing Automation" />
                </ListItem>
              </List>
            </Collapse>
          </List>
          {/* Replace this with significant achievements testimonial carousel */}
          {shown ?  
          <CustomAvatar backgroundColor={props.color.lightBG} highlightColor={props.color.highlightColor} /> : null}
          </div>
        </Drawer>
    </div>
  );
}
