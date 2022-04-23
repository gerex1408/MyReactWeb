import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProgressBar from "react-customizable-progressbar";

const useStyles = makeStyles({
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
    }
});

function SkillComponent (props){
    const classes = useStyles();

    return(
        <ProgressBar
            radius={props.size}
            progress={props.progress}
            strokeWidth={10}
            strokeColor="#ff4c4c"
            strokeLinecap="square"
            trackStrokeWidth={10}
            initialAnimation={true}
            transition="1.5s ease 0.5s"
            trackTransition="0s ease"
            cut={120}
            trackStrokeLinecap="butt"
            rotate={-210}
        >
            <div className={classes.progress}>
                <h4 style={{margin:"0"}}>{props.icon}</h4>
                <h6 style={{margin:"0"}}>{props.percent}</h6>
            </div>
        </ProgressBar>
    )
}
export default SkillComponent