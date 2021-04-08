import {React} from 'react';
import myPhoto from '../images/me.jpeg';
import {makeStyles} from '@material-ui/core/styles';
import { Typography,Link,useMediaQuery,Button} from '@material-ui/core';
import {useSpring, animated} from 'react-spring';
import {GitHub,Instagram,LinkedIn} from '@material-ui/icons';

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
      width:"300px"
  },
  presentation: {
      textAlign:"center",
      height:"100%",
      display:"flex",
      flexDirection:"column",
      justifyContent:"flex-start"
  },
  typo:{
    color:"white",
    width:"60%",
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
  }
}));

function WelcomePage() {

  const classes = useStyles();
  const props = useSpring({to:{opacity: 1,marginLeft:0}, from: {opacity: 0,marginLeft:-500},config: {delay:1000,duration:1000}})
  const props2 = useSpring({to:{opacity: 1,marginTop:0}, from: {opacity: 0,marginTop:200},config: {delay:1000,duration:1000}})
  const props3 = useSpring({to:{opacity: 1}, from: {opacity: 0},config: {delay:1000,duration:1000}})

  const m_size = useMediaQuery('(max-width:1024px)');
  const s_size = useMediaQuery('(min-width:768px)');
  const xs_size = useMediaQuery('(min-width:425px)');


  return (
    <div className={classes.root} style={m_size?{height:"100%"}:null}>
      <div className={classes.presentation}>
        <animated.div  className={classes.figure} style={props}>
            <img className={classes.img} src={myPhoto} alt="Me" />
        </animated.div >

        <animated.div style={props2} className={classes.typo}>
            <Typography variant="h5">
                Welcome to my web page! My name is <b style={{color:"#ff4c4c"}}>Gerard Lozano Trias</b>, I am currently <b style={{color:"#ff4c4c"}}>19 years old</b> and pursuing a degree in <b style={{color:"#ff4c4c"}}>computer engineering</b> at the University of Girona. 
                I am passioned with everything related to computer science and programming. <b style={{color:"#ff4c4c"}}>Enjoy browsing this web</b> and learn more about me!
            </Typography>
        </animated.div>

        <animated.div style={props3} className={classes.socialIcons}>
            <Link href="https://github.com/gerex1408" target="_blank" rel="noopener"><GitHub className={classes.icon} fontSize="large"/></Link>
            <Link href="https://www.instagram.com/lozaniki_/?hl=es" target="_blank" rel="noopener"><Instagram className={classes.icon} fontSize="large"/> </Link>
            <Link href="https://www.linkedin.com/in/gerardlozanotrias/" target="_blank" rel="noopener"><LinkedIn className={classes.icon}  fontSize="large" /></Link>
        </animated.div>
      </div>
    </div>
  );
}
export default WelcomePage;