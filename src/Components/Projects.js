import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {useSpring, animated} from 'react-spring';
import {useMediaQuery} from "@material-ui/core/";

const useStyles = makeStyles({
    root:{
      flexGrow: 1,
      height:"90vh",
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center'
    }
})

export default function Projects (){
    const classes = useStyles();

    const props1 = useSpring({to:{opacity: 1,marginTop:0}, from: {opacity: 0,marginTop:200},config: {delay:1000,duration:1000}})

    const m_size = useMediaQuery('(max-width:1024px)');
    const s_size = useMediaQuery('(min-width:768px)');
    const xs_size = useMediaQuery('(min-width:425px)');

    return(
        <div className={classes.root}>
        </div>
        
    )
}