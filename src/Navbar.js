import {React, useState,useEffect} from 'react';
import {AppBar,Toolbar,Typography,Button,useMediaQuery,IconButton,MenuItem,Menu} from '@material-ui/core';
import { createMuiTheme, responsiveFontSizes, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import {useSpring, animated} from 'react-spring';
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    fontSize:"1em"
  },
  title: {
    flexGrow: 1,
    fontFamily:"Montserrat"
  },
  nav:{
    backgroundColor:"#000",
    height:"10vh",
    justifyContent:"center"
  },
  link:{
    textDecoration:"none"
  }
}));

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function Navbar() {

  const [anchorEl, setAnchorEl] = useState(null);
  const [aboutMe,setAboutMe]=useState(window.location.pathname==="/"?true:false);
  const [studies,setStudies]=useState(window.location.pathname==="/studies"?true:false);
  const [jobExp,setjobExp]=useState(window.location.pathname==="/jobexperience"?true:false);
  const [skills,setSkills]=useState(window.location.pathname==="/skills"?true:false);
  const [contact,setContact]=useState(window.location.pathname==="/contact"?true:false);

  useEffect(()=>{
    console.log("res")
  },[aboutMe,studies,jobExp,skills,contact])

  const m_size = useMediaQuery('(min-width:1024px)');
  const s_size = useMediaQuery('(min-width:768px)');
  const xs_size = useMediaQuery('(min-width:425px)');

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const falseThem=()=>{
    setAboutMe(false);
    setStudies(false);
    setjobExp(false);
    setSkills(false);
    setContact(false);
  }

  const handleAboutMe=()=>{
    falseThem()
    setAboutMe(true);
  };
  const handleStudies=()=>{
    falseThem()
    setStudies(true);
  };
  const handleJobExp=()=>{
    falseThem()
    setjobExp(true);
  };
  const handleSkills=()=>{
    falseThem()
    setSkills(true);
  };
  const handleContact=()=>{
    falseThem()
    setContact(true);
  };

  const classes = useStyles();

  const props = useSpring({to:{opacity: 1,marginTop:0}, from: {opacity: 0,marginTop:-300},config: {delay:500,duration:1000}})
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.nav}>
        <animated.div style={props}>
          <Toolbar>
            <ThemeProvider theme={theme}>
              <Typography variant="h4" className={classes.title}>Gerard Lozano</Typography>
            </ThemeProvider>
            {
              m_size?(
                <nav>
                  <Link to="/" className={classes.link} style={aboutMe?{color:"#ff4c4c"}:{color:"#fff"}}><Button onClick={handleAboutMe} className={classes.menuButton} color="inherit">About me</Button></Link>
                  <Link to="/studies" className={classes.link} style={studies?{color:"#ff4c4c"}:{color:"#fff"}}><Button onClick={handleStudies} className={classes.menuButton} color="inherit">Studies</Button></Link>
                  <Link to="/jobexperience" className={classes.link} style={jobExp?{color:"#ff4c4c"}:{color:"#fff"}}><Button onClick={handleJobExp} className={classes.menuButton} color="inherit">Job experience</Button></Link>
                  <Link to="/skills" className={classes.link} style={skills?{color:"#ff4c4c"}:{color:"#fff"}}><Button onClick={handleSkills} className={classes.menuButton} color="inherit">Skills</Button></Link>
                  <Link to="/contact" className={classes.link} ><Button color={contact?"secondary":"white"} onClick={handleContact} className={classes.menuButton} size="large" variant="contained">Contact</Button></Link>
                </nav>
              ):(
                <nav>
                  <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>About me</MenuItem>
                    <MenuItem onClick={handleClose}>Job experience</MenuItem>
                    <MenuItem onClick={handleClose}>Studies</MenuItem>
                    <MenuItem onClick={handleClose}>Skills</MenuItem>
                    <MenuItem onClick={handleClose}>Contact</MenuItem>
                  </Menu>
                </nav>
              )
            }
          </Toolbar>
        </animated.div>
      </AppBar>
    </div>
  );
}
export default Navbar;