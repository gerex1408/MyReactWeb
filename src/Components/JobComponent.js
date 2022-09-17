import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Box,Card,CardContent,CardMedia,Typography,CardHeader,IconButton} from "@material-ui/core"

const useStyles = makeStyles({
    card:{
      height:"fit-content",
      maxWidth:"600px",
      margin:"20px"
    },
    cardImage:{
        borderRadius:"50%",
        boxShadow: "0px 0px 18px 1px black",
        height:"100px",
        width:"100px"
    },

    cardContent:{
        paddingTop:0
    },
})

function JobComponent(props){
    const classes = useStyles();

    return(
        <Card className={classes.card}>
             <CardHeader
                avatar={
                    <CardMedia
                    className={classes.cardImage}
                    component="img"
                    image={props.image}
                    />
                }
                title={<Typography variant="h5"component="h2">{props.title}</Typography>}
                subheader={<Typography variant="p" color="textSecondary">{props.subtitle +' '+props.date}</Typography>} 
            />
            <CardContent className={classes.cardContent}>
                <Typography variant="p"  dangerouslySetInnerHTML={{__html: props.description}}>
                </Typography>
            </CardContent>
        </Card>
    )
}
export default JobComponent