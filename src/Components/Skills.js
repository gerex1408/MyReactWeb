import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Grid,useMediaQuery} from '@material-ui/core';
import ProgressBar from "react-customizable-progressbar";

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
        padding:"5px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
    },
    progress:{
        display: "flex",
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
        userSelect: "none"
    }
});

function Skills(){

    const classes = useStyles();
    const m_size = useMediaQuery('(max-width:1024px)');
    
    return(
        <div className={classes.root} style={m_size?{height:"100%"}:null}>
            <Grid container style={{width:"90%"}}>
                <Grid item xs={12} sm={3} className={classes.cell}>
                    <ProgressBar
                            radius={80}
                            progress={80}
                            strokeWidth={18}
                            strokeColor="#ff4c4c"
                            strokeLinecap="square"
                            trackStrokeWidth={18}
                            initialAnimation={true}
                            transition="1.5s ease 0.5s"
                            trackTransition="0s ease"
                    >
                        <div className={classes.progress}>
                            <div>hola</div>
                        </div>
                    </ProgressBar>
                </Grid>
                <Grid item xs={12} sm={3} className={classes.cell}>
                    <ProgressBar
                            radius={80}
                            progress={80}
                            strokeWidth={18}
                            strokeColor="#ff4c4c"
                            strokeLinecap="square"
                            trackStrokeWidth={18}
                            initialAnimation={true}
                            transition="1.5s ease 0.5s"
                            trackTransition="0s ease"
                    >
                        <div className={classes.progress}>
                            <div>hola</div>
                        </div>
                    </ProgressBar>
                </Grid>
                <Grid item xs={12} sm={3} className={classes.cell}>
                    <ProgressBar
                            radius={80}
                            progress={80}
                            strokeWidth={18}
                            strokeColor="#ff4c4c"
                            strokeLinecap="square"
                            trackStrokeWidth={18}
                            initialAnimation={true}
                            transition="1.5s ease 0.5s"
                            trackTransition="0s ease"
                    >
                        <div className={classes.progress}>
                            <div>hola</div>
                        </div>
                    </ProgressBar>
                </Grid>
                <Grid item xs={12} sm={3} className={classes.cell}>
                    <ProgressBar
                            radius={80}
                            progress={80}
                            strokeWidth={18}
                            strokeColor="#ff4c4c"
                            strokeLinecap="square"
                            trackStrokeWidth={18}
                            initialAnimation={true}
                            transition="1.5s ease 0.5s"
                            trackTransition="0s ease"
                    >
                        <div className={classes.progress}>
                            <div>hola</div>
                        </div>
                    </ProgressBar>
                </Grid>
                <Grid item xs={12} sm={3} className={classes.cell}>
                    <ProgressBar
                            radius={80}
                            progress={80}
                            strokeWidth={18}
                            strokeColor="#ff4c4c"
                            strokeLinecap="square"
                            trackStrokeWidth={18}
                            initialAnimation={true}
                            transition="1.5s ease 0.5s"
                            trackTransition="0s ease"
                    >
                        <div className={classes.progress}>
                            <div>hola</div>
                        </div>
                    </ProgressBar>
                </Grid>
                <Grid item xs={12} sm={3} className={classes.cell}>
                    <ProgressBar
                            radius={80}
                            progress={80}
                            strokeWidth={18}
                            strokeColor="#ff4c4c"
                            strokeLinecap="square"
                            trackStrokeWidth={18}
                            initialAnimation={true}
                            transition="1.5s ease 0.5s"
                            trackTransition="0s ease"
                    >
                        <div className={classes.progress}>
                            <div>hola</div>
                        </div>
                    </ProgressBar>
                </Grid>
                <Grid item xs={12} sm={3} className={classes.cell}>
                    <ProgressBar
                            radius={80}
                            progress={80}
                            strokeWidth={18}
                            strokeColor="#ff4c4c"
                            strokeLinecap="square"
                            trackStrokeWidth={18}
                            initialAnimation={true}
                            transition="1.5s ease 0.5s"
                            trackTransition="0s ease"
                    >
                        <div className={classes.progress}>
                            <div>hola</div>
                        </div>
                    </ProgressBar>
                </Grid>
                <Grid item xs={12} sm={3} className={classes.cell}>
                    <ProgressBar
                            radius={80}
                            progress={80}
                            strokeWidth={18}
                            strokeColor="#ff4c4c"
                            strokeLinecap="square"
                            trackStrokeWidth={18}
                            initialAnimation={true}
                            transition="1.5s ease 0.5s"
                            trackTransition="0s ease"
                    >
                        <div className={classes.progress}>
                            <div>hola</div>
                        </div>
                    </ProgressBar>
                </Grid>
                <Grid item xs={12} sm={3} className={classes.cell}>
                    <ProgressBar
                            radius={80}
                            progress={80}
                            strokeWidth={18}
                            strokeColor="#ff4c4c"
                            strokeLinecap="square"
                            trackStrokeWidth={18}
                            initialAnimation={true}
                            transition="1.5s ease 0.5s"
                            trackTransition="0s ease"
                    >
                        <div className={classes.progress}>
                            <div>hola</div>
                        </div>
                    </ProgressBar>
                </Grid>
                <Grid item xs={12} sm={3} className={classes.cell}>
                    <ProgressBar
                            radius={80}
                            progress={80}
                            strokeWidth={18}
                            strokeColor="#ff4c4c"
                            strokeLinecap="square"
                            trackStrokeWidth={18}
                            initialAnimation={true}
                            transition="1.5s ease 0.5s"
                            trackTransition="0s ease"
                    >
                        <div className={classes.progress}>
                            <div>hola</div>
                        </div>
                    </ProgressBar>
                </Grid>
                <Grid item xs={12} sm={3} className={classes.cell}>
                    <ProgressBar
                            radius={80}
                            progress={80}
                            strokeWidth={18}
                            strokeColor="#ff4c4c"
                            strokeLinecap="square"
                            trackStrokeWidth={18}
                            initialAnimation={true}
                            transition="1.5s ease 0.5s"
                            trackTransition="0s ease"
                    >
                        <div className={classes.progress}>
                            <div>hola</div>
                        </div>
                    </ProgressBar>
                </Grid>
                <Grid item xs={12} sm={3} className={classes.cell}>
                    <ProgressBar
                            radius={80}
                            progress={80}
                            strokeWidth={18}
                            strokeColor="#ff4c4c"
                            strokeLinecap="square"
                            trackStrokeWidth={18}
                            initialAnimation={true}
                            transition="1.5s ease 0.5s"
                            trackTransition="0s ease"
                    >
                        <div className={classes.progress}>
                            <div>hola</div>
                        </div>
                    </ProgressBar>
                </Grid>
            </Grid>
        </div>

    );

}
export default Skills