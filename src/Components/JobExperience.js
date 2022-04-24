import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {useSpring, animated} from 'react-spring';
import {useMediaQuery} from "@material-ui/core/";
import JobComponent from "./JobComponent";

const useStyles = makeStyles({
    root:{
      flexGrow: 1,
      height:"90vh",
      backgroundColor:"#323232",
    },
    innerDiv:{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap", 
        height:"100%",
        alignItems:"center"
    },
})


function JobExperience (){

    const classes = useStyles();

    const props1 = useSpring({to:{opacity: 1,marginTop:0}, from: {opacity: 0,marginTop:200},config: {delay:1000,duration:1000}})

    const m_size = useMediaQuery('(max-width:1024px)');
    const s_size = useMediaQuery('(min-width:768px)');
    const xs_size = useMediaQuery('(min-width:425px)');

    return(
        <div className={classes.root} style={m_size?{height:"100%"}:null}>
            <div className={classes.innerDiv}>
                <JobComponent/>
            </div>
        </div>
    )
}
export default JobExperience