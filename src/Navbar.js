import React from 'react';
import {AppBar,Toolbar,Typography,Button,useMediaQuery,IconButton,MenuItem,Menu} from '@material-ui/core';
import { createMuiTheme, responsiveFontSizes, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import {useSpring, animated} from 'react-spring';

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
  }
}));

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function Navbar() {

  const m_size = useMediaQuery('(min-width:1024px)');
  const s_size = useMediaQuery('(min-width:768px)');
  const xs_size = useMediaQuery('(min-width:425px)');

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
                  <Button className={classes.menuButton} color="inherit">About me</Button>
                  <Button className={classes.menuButton} color="inherit">Job experience</Button>
                  <Button className={classes.menuButton} color="inherit">Studies</Button>
                  <Button className={classes.menuButton} color="inherit">Skills</Button>
                  <Button className={classes.menuButton} size="large" color="white" variant="contained">Contact</Button>
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