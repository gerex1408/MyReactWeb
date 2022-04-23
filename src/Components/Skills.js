import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Grid,useMediaQuery,Typography} from '@material-ui/core';
import ProgressBar from "react-customizable-progressbar";
import {useSpring, animated} from 'react-spring';
import {DiHtml5,DiCss3} from 'react-icons/di'
import {SiCplusplus,SiJavascript,SiReact,SiMysql,SiUbuntu,SiSpring, SiGnubash,SiJava,SiPython,SiHaskell,SiBootstrap,SiAndroid,SiDocker,SiWindows,SiApple} from 'react-icons/si'
import {FaGitAlt} from 'react-icons/fa'
import SkillComponent from "./SkillComponent";

const useStyles = makeStyles({
    root:{
      flexGrow: 1,
      height:"90vh",
      backgroundColor:"#000",
      display:"flex",
      alignItems:"center",
      justifyContent:"center"
    },
    leftCell:{
        display:"flex",
        flexDirection:'column',
        alignItems:"center",
        justifyContent:"center",
        
    },
    rightCell:{
        display:"flex",
        flexDirection:'column',
        alignItems:"center",
        justifyContent:"center",
    },
    cell:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
    },
    animated:{
        width:"90%",
    },
    progress:{
        display: "flex",
        flexDirection:"column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "absolute",
        top: "0",
        width: "100%",
        height: "100%",
        margin: "0 auto",
        fontSize: "2.2em",
        fontWeight: "100",
        color: "#fff",
        userSelect: "none",
    },
    title: {
        flexGrow: 1,
        fontFamily:"Montserrat",
        color:'#fff'
      },
});

function Skills(){

    const classes = useStyles();
    const m_size = useMediaQuery('(max-width:1024px)'); //portatil size
    const s_size = useMediaQuery('(max-width:768px)'); //tablet size
    const xs_size = useMediaQuery('(min-width:425px)'); //min mobile size
    const xm_size = useMediaQuery('(max-width:600px)'); //min pc size
    const props = useSpring({to:{opacity: 1}, from: {opacity: 0},config: {delay:2000,duration:2000}})
    
    return(
        <div className={classes.root} style={xm_size?{height:"100%"}:{height:"90vh"}}>
            <animated.div style={props} className={classes.animated}>
                <Grid container>
                    <Grid item xs={12} sm={12} lg={6} className={classes.leftCell}>
                        <Typography variant="h6" className={classes.title}>Programming Languages</Typography>
                        <Grid container >
                            <Grid item xs={12} sm={4} lg={4} className={classes.cell}>
                                <SkillComponent size={60} progress={85} icon={<SiJavascript color="#f0db4f"/>} percent={'85%'} />
                            </Grid>
                            <Grid item xs={12} sm={4} lg={4} className={classes.cell}>
                                <SkillComponent size={60} progress={80} icon={<SiJava color="#5382a1"/>} percent={'80%'} />
                            </Grid>
                            <Grid item xs={12} sm={4} lg={4} className={classes.cell}>
                                <SkillComponent size={60} progress={65} icon={<SiCplusplus color="28527a"/>} percent={'65%'} />
                            </Grid>
                            <Grid item xs={12} sm={4} lg={4} className={classes.cell}>
                                <SkillComponent size={60} progress={65} icon={<SiPython color="4b8bbe"/>} percent={'65%'} />
                            </Grid>
                            <Grid item xs={12} sm={4} lg={4} className={classes.cell}>
                                <SkillComponent size={60} progress={55} icon={<SiGnubash color="#b5e550"/>} percent={'55%'} /> 
                            </Grid>
                            <Grid item xs={12} sm={4} lg={4} className={classes.cell}>
                                <SkillComponent size={60} progress={40} icon={<SiHaskell color="#5e5086"/>} percent={'40%'} /> 
                            </Grid>
                        
                        </Grid>
                        <Typography variant="h6" className={classes.title}>Frameworks/Libraries</Typography>
                        <Grid container >
                            <Grid item xs={12} sm={4} lg={4} className={classes.cell}>
                                <SkillComponent size={60} progress={85} icon={<SiReact color="#61DBFB"/>} percent={'85%'} />
                            </Grid>
                            <Grid item xs={12} sm={4} lg={4} className={classes.cell}>
                                <SkillComponent size={60} progress={85} icon={<SiSpring color="#b5e550"/>} percent={'85%'} />
                            </Grid>
                            <Grid item xs={12} sm={4} lg={4} className={classes.cell}>
                                <SkillComponent size={60} progress={85} icon={<SiBootstrap color="#771ef6"/>} percent={'85%'} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6} className={classes.rightCell}>
                        <Typography variant="h6" className={classes.title}>Technologies</Typography>
                        <Grid container >
                            <Grid item xs={12} sm={4} lg={4} className={classes.cell}>
                                <SkillComponent size={60} progress={85} icon={<FaGitAlt color="#F1502F"/>} percent={'85%'} />
                            </Grid>
                            <Grid item xs={12} sm={4} lg={4} className={classes.cell}>
                                <SkillComponent size={60} progress={80} icon={<SiMysql/>} percent={'80%'} />
                            </Grid>
                            <Grid item xs={12} sm={4} lg={4} className={classes.cell}>
                                <SkillComponent size={60} progress={80} icon={<DiHtml5 color="#e34c26" />} percent={'80%'} />
                            </Grid>
                            <Grid item xs={12} sm={4} lg={4} className={classes.cell}>
                                <SkillComponent size={60} progress={80} icon={<DiCss3 color="#2965f1"/>} percent={'80%'} />
                            </Grid>
                            <Grid item xs={12} sm={4} lg={4} className={classes.cell}>
                                <SkillComponent size={60} progress={60} icon={<SiAndroid color="#3edc85"/>} percent={'60%'} />
                            </Grid>
                            <Grid item xs={12} sm={4} lg={4} className={classes.cell}>
                                <SkillComponent size={60} progress={40} icon={<SiDocker color="#2497ed"/>} percent={'40%'} />
                            </Grid>
                        </Grid>
                        <Typography variant="h6" className={classes.title}>Operative Systems</Typography>
                        <Grid container >
                            <Grid item xs={12} sm={4} lg={4} className={classes.cell}>
                                <SkillComponent size={60} progress={80} icon={<SiUbuntu color="#e95420"/>} percent={'80%'} />
                            </Grid>
                            <Grid item xs={12} sm={4} lg={4} className={classes.cell}>
                                <SkillComponent size={60} progress={75} icon={<SiWindows color="#03d1de"/>} percent={'75%'} />
                            </Grid>
                            <Grid item xs={12} sm={4} lg={4} className={classes.cell}>
                                <SkillComponent size={60} progress={70} icon={<SiApple />} percent={'70%'} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </animated.div>
        </div>

    );

}
export default Skills