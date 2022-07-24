import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import notFoundGif from '../images/notFound.gif'

const useStyles = makeStyles(theme => ({
    root: {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:"85vh",
        backgroundColor:"#000",
    },
  }));

export default function PageNotFound(){

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <img src={notFoundGif}/>
        </div>
    )
}