import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Grid,useMediaQuery} from '@material-ui/core';
import ProgressBar from "react-customizable-progressbar";
import {useSpring, animated} from 'react-spring';
import {DiHtml5,DiCss3} from 'react-icons/di'
import {SiCplusplus,SiJavascript,SiReact,SiMysql,SiUbuntu,SiSpring,SiJson, SiGnubash,SiJava} from 'react-icons/si'
import {FaGitAlt} from 'react-icons/fa'

const useStyles = makeStyles({
    root:{
      flexGrow: 1,
      height:"90vh",
      backgroundColor:"#000",
      display:"flex",
      alignItems:"center",
      justifyContent:"center"
    },
    cell:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
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
    animated:{
        width:"90%"
    }
});

function Skills(){

    const classes = useStyles();
    const m_size = useMediaQuery('(max-width:1024px)'); //portatil size
    const s_size = useMediaQuery('(max-width:768px)'); //tablet size
    const xs_size = useMediaQuery('(max-width:425px)'); //min mobile size
    const xm_size = useMediaQuery('(max-width:600px)'); //min pc size
    const props = useSpring({to:{opacity: 1}, from: {opacity: 0},config: {delay:2000,duration:2000}})
    
    return(
        <div className={classes.root} style={xm_size?{height:"100%"}:{height:"90vh"}}>
            <animated.div style={props} className={classes.animated}>
                <Grid container>
                    <Grid item xs={12} sm={4} lg={3} className={classes.cell}>
                        <ProgressBar
                                radius={s_size?60:80}
                                progress={85}
                                strokeWidth={14}
                                strokeColor="#ff4c4c"
                                strokeLinecap="square"
                                trackStrokeWidth={14}
                                initialAnimation={true}
                                transition="1.5s ease 0.5s"
                                trackTransition="0s ease"
                                cut={120}
                                trackStrokeLinecap="butt"
                                rotate={-210}
                        >
                            <div className={classes.progress}>
                                <h2 style={{margin:"0"}}><SiReact color="#61DBFB"/></h2>
                                <h6 style={{margin:"0"}}>85%</h6>
                            </div>
                        </ProgressBar>
                    </Grid>
                    <Grid item xs={12} sm={4} lg={3} className={classes.cell}>
                        <ProgressBar
                                radius={s_size?60:80}
                                progress={80}
                                strokeWidth={14}
                                strokeColor="#ff4c4c"
                                strokeLinecap="butt"
                                trackStrokeWidth={14}
                                initialAnimation={true}
                                transition="1.5s ease 0.5s"
                                trackTransition="0s ease"
                                cut={120}
                                trackStrokeLinecap="butt"
                                rotate={-210}
                        >
                            <div className={classes.progress}>
                                <h2 style={{margin:"0"}}><FaGitAlt color="#F1502F"/></h2>
                                <h6 style={{margin:"0"}}>80%</h6>
                            </div>
                        </ProgressBar>
                    </Grid>
                    <Grid item xs={12} sm={4} lg={3} className={classes.cell}>
                        <ProgressBar
                                radius={s_size?60:80}
                                progress={80}
                                strokeWidth={14}
                                strokeColor="#ff4c4c"
                                strokeLinecap="butt"
                                trackStrokeWidth={14}
                                initialAnimation={true}
                                transition="1.5s ease 0.5s"
                                trackTransition="0s ease"
                                cut={120}
                                trackStrokeLinecap="butt"
                                rotate={-210}
                        >
                            <div className={classes.progress}>
                                <h2 style={{margin:"0"}}><SiMysql/></h2>
                                <h6 style={{margin:"0"}}>80%</h6>
                            </div>
                        </ProgressBar>
                    </Grid>
                    <Grid item xs={12} sm={4} lg={3} className={classes.cell}>
                        <ProgressBar
                                radius={s_size?60:80}
                                progress={80}
                                strokeWidth={14}
                                strokeColor="#ff4c4c"
                                strokeLinecap="butt"
                                trackStrokeWidth={14}
                                initialAnimation={true}
                                transition="1.5s ease 0.5s"
                                trackTransition="0s ease"
                                cut={120}
                                trackStrokeLinecap="butt"
                                rotate={-210}
                        >
                            <div className={classes.progress}>
                                <h2 style={{margin:"0"}}><DiCss3 color="#2965f1"/></h2>
                                <h6 style={{margin:"0"}}>80%</h6>
                            </div>
                        </ProgressBar>
                    </Grid>
                    <Grid item xs={12} sm={4} lg={3} className={classes.cell}>
                        <ProgressBar
                                radius={s_size?60:80}
                                progress={80}
                                strokeWidth={14}
                                strokeColor="#ff4c4c"
                                strokeLinecap="butt"
                                trackStrokeWidth={14}
                                initialAnimation={true}
                                transition="1.5s ease 0.5s"
                                trackTransition="0s ease"
                                cut={120}
                                trackStrokeLinecap="butt"
                                rotate={-210}
                        >
                            <div className={classes.progress}>
                                <h2 style={{margin:"0"}}><SiJson color="a6a9b6"/></h2>
                                <h6 style={{margin:"0"}}>80%</h6>
                            </div>
                        </ProgressBar>
                    </Grid>
                    <Grid item xs={12} sm={4} lg={3} className={classes.cell}>
                        <ProgressBar
                                radius={s_size?60:80}
                                progress={75}
                                strokeWidth={14}
                                strokeColor="#ff4c4c"
                                strokeLinecap="butt"
                                trackStrokeWidth={14}
                                initialAnimation={true}
                                transition="1.5s ease 0.5s"
                                trackTransition="0s ease"
                                cut={120}
                                trackStrokeLinecap="butt"
                                rotate={-210}
                        >
                            <div className={classes.progress}>
                                <h2 style={{margin:"0"}}><SiJavascript color="#f0db4f"/></h2>
                                <h6 style={{margin:"0"}}>75%</h6>
                            </div>
                        </ProgressBar>
                    </Grid>
                    <Grid item xs={12} sm={4} lg={3} className={classes.cell}>
                        <ProgressBar
                                radius={s_size?60:80}
                                progress={70}
                                strokeWidth={14}
                                strokeColor="#ff4c4c"
                                strokeLinecap="butt"
                                trackStrokeWidth={14}
                                initialAnimation={true}
                                transition="1.5s ease 0.5s"
                                trackTransition="0s ease"
                                cut={120}
                                trackStrokeLinecap="butt"
                                rotate={-210}
                        >
                            <div className={classes.progress}>
                                <h2 style={{margin:"0"}}><SiCplusplus color="28527a"/></h2>
                                <h6 style={{margin:"0"}}>70%</h6>
                            </div>
                        </ProgressBar>
                    </Grid>
                    <Grid item xs={12} sm={4} lg={3} className={classes.cell}>
                        <ProgressBar
                                radius={s_size?60:80}
                                progress={70}
                                strokeWidth={14}
                                strokeColor="#ff4c4c"
                                strokeLinecap="butt"
                                trackStrokeWidth={14}
                                initialAnimation={true}
                                transition="1.5s ease 0.5s"
                                trackTransition="0s ease"
                                cut={120}
                                trackStrokeLinecap="butt"
                                rotate={-210}
                        >
                            <div className={classes.progress}>
                                <h2 style={{margin:"0"}}><DiHtml5 color="#e34c26" /></h2>
                                <h6 style={{margin:"0"}}>70%</h6>
                            </div>
                        </ProgressBar>
                    </Grid>
                    <Grid item xs={12} sm={4} lg={3} className={classes.cell}>
                        <ProgressBar
                                radius={s_size?60:80}
                                progress={65}
                                strokeWidth={14}
                                strokeColor="#ff4c4c"
                                strokeLinecap="butt"
                                trackStrokeWidth={14}
                                initialAnimation={true}
                                transition="1.5s ease 0.5s"
                                trackTransition="0s ease"
                                cut={120}
                                trackStrokeLinecap="butt"
                                rotate={-210}
                        >
                            <div className={classes.progress}>
                                <h2 style={{margin:"0"}}><SiSpring color="#b5e550"/></h2>
                                <h6 style={{margin:"0"}}>65%</h6>
                            </div>
                        </ProgressBar>
                    </Grid>
                    <Grid item xs={12} sm={4} lg={3} className={classes.cell}>
                        <ProgressBar
                                radius={s_size?60:80}
                                progress={60}
                                strokeWidth={14}
                                strokeColor="#ff4c4c"
                                strokeLinecap="butt"
                                trackStrokeWidth={14}
                                initialAnimation={true}
                                transition="1.5s ease 0.5s"
                                trackTransition="0s ease"
                                cut={120}
                                trackStrokeLinecap="butt"
                                rotate={-210}
                        >
                            <div className={classes.progress}>
                            <h2 style={{margin:"0"}}><SiJava color="#5382a1"/></h2>
                            <h6 style={{margin:"0"}}>60%</h6>
                            </div>
                        </ProgressBar>
                    </Grid>
                    <Grid item xs={12} sm={4} lg={3} className={classes.cell}>
                        <ProgressBar
                                radius={s_size?60:80}
                                progress={60}
                                strokeWidth={14}
                                strokeColor="#ff4c4c"
                                strokeLinecap="butt"
                                trackStrokeWidth={14}
                                initialAnimation={true}
                                transition="1.5s ease 0.5s"
                                trackTransition="0s ease"
                                cut={120}
                                trackStrokeLinecap="butt"
                                rotate={-210}
                        >
                            <div className={classes.progress}>
                                <h2 style={{margin:"0"}}><SiUbuntu color="#e95420"/></h2>
                                <h6 style={{margin:"0"}}>60%</h6>
                            </div>
                        </ProgressBar>
                    </Grid>
                    <Grid item xs={12} sm={4} lg={3} className={classes.cell}>
                        <ProgressBar
                                radius={s_size?60:80}
                                progress={55}
                                strokeWidth={14}
                                strokeColor="#ff4c4c"
                                strokeLinecap="butt"
                                trackStrokeWidth={14}
                                initialAnimation={true}
                                transition="1.5s ease 0.5s"
                                trackTransition="0s ease"
                                cut={120}
                                trackStrokeLinecap="butt"
                                rotate={-210}
                        >
                            <div className={classes.progress}>
                                <h2 style={{margin:"0"}}><SiGnubash color="#b5e550"/></h2>
                                <h6 style={{margin:"0"}}>55%</h6>
                            </div>
                        </ProgressBar>
                    </Grid>
                </Grid>
            </animated.div>
        </div>

    );

}
export default Skills