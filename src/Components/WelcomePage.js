import {React, useEffect, useRef, useState} from 'react';
import myPhoto from '../images/me.jpg';
import myPhotoSmall from '../images/me_small.jpeg';
import {makeStyles} from '@material-ui/core/styles';
import { Typography,Link,useMediaQuery,Button} from '@material-ui/core';
import {useSpring, animated} from 'react-spring';
import {GitHub,Instagram,LinkedIn, Twitter} from '@material-ui/icons';
import ReactGA from 'react-ga4';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height:"90vh",
    backgroundColor:"#000",
  },
  figure:{
      marginBottom:"50px",
      marginTop:"100px"
  },
  img:{
      borderRadius:"50%",
      height:"300px",
      width:"300px",
      '&:hover': {
        cursor: 'pointer'
     },
  },
  imgSmall:{
      borderRadius:"50%",
      height:"200px",
      width:"200px",
      '&:hover': {
        cursor: 'pointer'
      },
  },
  presentation: {
      textAlign:"center",
      height:"85vh",
      display:"flex",
      flexDirection:"column",
      justifyContent:"flex-start"
  },
  typo:{
    color:"white",
    width:"80%",
    alignSelf:"center"
  },
  socialIcons:{
    marginTop:"50px",
    width:"192px",
    alignSelf:"center",
    display:"flex",
    justifyContent:"space-between"
  },
  icon:{
    color:"#fff",
    '&:hover':{
      color:"#ff4c4c"
    }
  },
}));

function WelcomePage() {

  const image = useRef(null)
  const [toggled, isToggled] = useState(false)

  const classes = useStyles();
  const props = useSpring({to:{opacity: 1,marginLeft:0}, from: {opacity: 0,marginLeft:-500},config: {delay:1000,duration:1000}})
  const props2 = useSpring({to:{opacity: 1,marginTop:0}, from: {opacity: 0,marginTop:200},config: {delay:1000,duration:1000}})
  const props3 = useSpring({to:{opacity: 1}, from: {opacity: 0},config: {delay:1000,duration:1000}})

  const m_size = useMediaQuery('(max-width:1024px)');
  const s_size = useMediaQuery('(min-width:768px)');
  const xs_size = useMediaQuery('(min-width:425px)');

  const s_size_height = useMediaQuery('(max-height:880px)');


  useEffect(()=>{
    ReactGA.send({ hitType: "pageview", page: "/" });
  })

  function changeImage(){
    if (!toggled) image.current.src = myPhotoSmall
    else image.current.src = myPhoto
    isToggled(!toggled)
  }

  return (
    <div className={classes.root} style={s_size_height||m_size?{height:"100%"}:{height:"90vh"}}>
      <div className={classes.presentation}>
        <animated.div  className={classes.figure} style={props}>
            <img ref={image} className={s_size?classes.img:classes.imgSmall} src={myPhoto} onClick={changeImage} alt="Me" />
        </animated.div >

        <animated.div style={props2} className={classes.typo}>
            <Typography variant={s_size?'h5':'body1'}>
                Welcome to my web page! My name is <b style={{color:"#ff4c4c"}}>Gerard Lozano Trias</b>, I am currently <b style={{color:"#ff4c4c"}}>21 years old</b> and pursuing a degree in <b style={{color:"#ff4c4c"}}>computer engineering</b> at the University of Girona. 
                I am passioned with everything related to computer science and programming. <b style={{color:"#ff4c4c"}}>Enjoy browsing this web</b> and learn more about me!
            </Typography>
        </animated.div>

        <animated.div style={props3} className={classes.socialIcons}>
            <Link  href="https://github.com/gerex1408" target="_blank" rel="noopener"><GitHub className={classes.icon} fontSize="large"/></Link>
            <Link  href="https://www.instagram.com/lozaniki_/?hl=es" target="_blank" rel="noopener"><Instagram className={classes.icon} fontSize="large"/> </Link>
            <Link  href="https://www.linkedin.com/in/gerardlozanotrias/" target="_blank" rel="noopener"><LinkedIn className={classes.icon}  fontSize="large" /></Link>
            <Link  href="https://twitter.com/GerardLozano9" target="_blank" rel="noopener"><Twitter className={classes.icon}  fontSize="large" /></Link>
        </animated.div>
      </div>
    </div>
  );
}
export default WelcomePage;