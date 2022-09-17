import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {useSpring, animated} from 'react-spring';
import {useMediaQuery} from "@material-ui/core/";
import JobComponent from "./JobComponent";
import amazon from '../images/amazon.png';
import bcds from '../images/bcds_logo.gif';
import additio from '../images/additio.png';
import fundcraft from '../images/fundcraft.png'

const useStyles = makeStyles({
    root:{
      flexGrow: 1,
      height:"90vh",
      backgroundColor:"#323232",
    },
    innerDiv:{
        display: "flex",
        flexDirection:"column",
        justifyContent: "flex-start",
        flexWrap: "wrap", 
        height:"100%",
        alignItems:"center"
    },
    rowDiv:{
        width:"100%",
        display: "flex",
        flexDirection:"row",
        justifyContent: "space-around",
        flexWrap: "wrap", 
        alignItems:"center"
    }
})


function JobExperience (){

    const classes = useStyles();

    const props1 = useSpring({to:{opacity: 1,marginTop:0}, from: {opacity: 0,marginTop:200},config: {delay:1000,duration:1000}})

    const m_size = useMediaQuery('(max-width:1024px)');
    const s_size = useMediaQuery('(max-width:768px)');
    const xs_size = useMediaQuery('(min-width:425px)');

    const s_size_height = useMediaQuery('(max-height:880px)');


    const description1= "<ul><li>I developed the whole BCDS new web page with React.js , SpringBoot and MariaDB</li><li>I contributed to the development of the NRS (Network Research Simulator).</li><li>I did research work about graph metrics and robustness of networks</li><li>I designed and developed a web page for ReUseMP3 project in collaboration with ICRA (Institut Català de Recerca de l'Aigua)</li></ul>"
    const description2= "<p>As an Ops tech IT Intern I am engaged in the local IT team for providing highly reactive technical support to operations in order to guaranty to our customers the quality and reliability that made Amazon’s reputation.</p> <ul><li>I developed a python program that finds the specific location of a device over the FC (Fulfillment center) network</li><li>I developed a monitoring screen to control the state of the time clocks</li><li>I took part in several network CM's (Change Management)</li></ul>"
    const description3= "As a Software developer I was engaged in several projects and tasks to make Additio the best teaching and communication app in the software market. I mainly worked on the front end part of the web application with technologies such as React, Angularjs and Nextjs."
    const description4= "As a Frontend developer my responsability is to ensure that fundcraft's web tool is user-friendly, fast-loading and attractive. I also have to cooperate with our backend team to use the API correctly and in the best way possible. We work with technologies such as React, Redux, Django and PostgreSQL."

    return(
        <div className={classes.root} style={s_size_height||m_size?{height:"100%"}:{height:"90vh"}}>
            <div className={classes.innerDiv}>
                <animated.div style={props1} className={classes.innerDiv}>
                    <div className={classes.rowDiv}>
                        <JobComponent image={fundcraft} title={"Frontend Developer"} subtitle={"Fundcraft"} date={"09/22-Present"} description={description4} />
                        <JobComponent image={additio} title={"Full Stack Developer"} subtitle={"Additio"} date={"06/22-09/22"} description={description3} />
                    </div>
                    <div className={classes.rowDiv}>
                        <JobComponent image={bcds} title={"Research Technician"} subtitle={"Broadband Communications and Distributed Systems"} date={"01/20-5/22"} description={description1} />
                        <JobComponent image={amazon} title={"IT Support Engineer"} subtitle={"Amazon(BCN1)"} date={"06/21-10/21"} description={description2} />
                    </div>
                </animated.div>
            </div>
        </div>
    )
}
export default JobExperience