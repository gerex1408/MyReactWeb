import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  useMediaQuery
} from "@material-ui/core/";

const useStyles = makeStyles({
  card: {
    backgroundColor:"#fff",
    maxHeight:440,
    maxWidth: 345,
    marginTop: "30px"
},
cardSmall:{
    backgroundColor:"#fff",
    margin: "30px"
},
  media: {
    height: 140
  }
});

function StudyComponent(props){
    const classes = useStyles();
    const xs_size = useMediaQuery('(min-width:425px)');

    return(
        <Card className={xs_size?classes.card:classes.cardSmall}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.image}
                    title={props.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="h2">
                    {props.title}
                    </Typography>
                    <Typography gutterBottom variant="body1" component="h2" dangerouslySetInnerHTML={{__html: props.years}}>
                    </Typography>
                    <Typography
                    style={{ textAlign: "justify" }}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    dangerouslySetInnerHTML={{__html: props.description}}
                    >
                    
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button
                    target="_blank"
                    size="small"
                    color="secondary"
                    href={props.link}
                >
                    Visit the website
                </Button>
            </CardActions>
        </Card>
    )
}
export default StudyComponent