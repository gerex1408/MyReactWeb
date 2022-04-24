import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Box,Card,CardContent,CardMedia,Typography} from "@material-ui/core"
import amazon from '../images/amazon.png';

const useStyles = makeStyles({
    card:{
      height:"250px",
      display:"flex",
      width:"600px"
    },
    cardImage:{
        flex:1
    },
    cardContent:{
        flex:4
    }
})

function JobComponent(){
    const classes = useStyles();

    return(
        <Card className={classes.card}>
            <CardMedia
                className={classes.cardImage}
                component="img"
                image={amazon}
                alt="Amazon"
            />
            <CardContent className={classes.cardContent}>
                <Typography component="div" variant="h5">
                    IT Support Engineer
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    Amazon 
                </Typography>
            </CardContent>
            
        </Card>
    )
}
export default JobComponent