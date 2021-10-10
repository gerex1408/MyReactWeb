import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import maristes from '../images/maristes.jpg';
import eoi from '../images/eoi.png';
import udg from '../images/udg.png';
import udemy from '../images/udemy.png';
import {useSpring, animated} from 'react-spring';
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
  card: {
    backgroundColor:"#fff",
    maxHeight:440,
    maxWidth: 345,
    marginTop: "30px"
},
  media: {
    height: 140
  }
});

function Studies() {
  const classes = useStyles();

  const props1 = useSpring({to:{opacity: 1,marginTop:0}, from: {opacity: 0,marginTop:200},config: {delay:1000,duration:1000}})

  const m_size = useMediaQuery('(max-width:1024px)');
  const s_size = useMediaQuery('(min-width:768px)');
  const xs_size = useMediaQuery('(min-width:425px)');

  return (
    <div className={classes.root} style={m_size?{height:"100%"}:null}>
        <div className={classes.innerDiv}>
            <animated.div style={props1}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={maristes}
                            title="Maristes Girona"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="h2">
                            Maristes Girona
                            </Typography>
                            <Typography gutterBottom variant="body1" component="h2">
                            2004 - 2019
                            </Typography>
                            <Typography
                            style={{ textAlign: "justify" }}
                            variant="body2"
                            color="textSecondary"
                            component="p"
                            >
                            I spent 15 years studying in Maristes Girona, including primary
                            and high school. I decided to take the <b>technology branch</b> in
                            high school and that was one of the best decisions that I have
                            taken so far. I am so proud of my education and my best{" "}
                            <b>childhood memories </b>
                            are in Maristes.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button
                            target="_blank"
                            size="small"
                            color="secondary"
                            href="https://www.girona.maristes.cat/"
                        >
                            Visit the website
                        </Button>
                    </CardActions>
                </Card>
            </animated.div>
            <animated.div style={props1}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={eoi}
                            title="EOI Girona"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="h2">
                            EOI Girona
                            </Typography>
                            <Typography gutterBottom variant="body1" component="h2">
                            2019 - 2020
                            </Typography>
                            <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                            style={{ textAlign: "justify" }}
                            >
                            EOI stands for <b>Official school of languages</b> in Spanish. It
                            is a public center were you can learn a bunch of languages. In my
                            case, the EOI was the most important part of my{" "}
                            <b>English education</b>, I got my <b>C1 level certificate</b>{" "}
                            there. I've always been into trying to master English so I can work abroad one day.  
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button
                            size="small"
                            color="secondary"
                            href="http://www.eoigirona.com/"
                            target="_blank"
                        >
                            Visit the website
                        </Button>
                    </CardActions>
                </Card>
            </animated.div>

            <animated.div style={props1}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={udg}
                            title="University of Girona"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="h2">
                            University of Girona
                            </Typography>
                            <Typography gutterBottom variant="body1" component="h2">
                            2019 - <span style={{ color: "green" }}>Nowadays</span>
                            </Typography>
                            <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                            style={{ textAlign: "justify" }}
                            >
                            I am currently pursuing a degree in <b>computer engineering </b>
                            at the University of Girona, also known as <b>UdG</b>. I'm in my
                            <b> third year</b> of four. I have the feeling that I'm
                            studying the perfect degree for me, I don't think there's an other one
                            that can make me be more motivated and inspired in learning new things than this one. 
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button
                            size="small"
                            color="secondary"
                            href="https://www.udg.edu/en/"
                            target="_blank"
                        >
                            Visit the website
                        </Button>
                    </CardActions>
                </Card>
            </animated.div>

            <animated.div style={props1}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={udemy}
                            title="Udemy"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="h2">
                            Udemy
                            </Typography>
                            <Typography gutterBottom variant="body1" component="h2">
                            2019 - <span style={{ color: "green" }}>Nowadays</span>
                            </Typography>
                            <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                            style={{ textAlign: "justify" }}
                            >
                            An important part of my knowledge as a web developer is Udemy, an
                            online plataform to take coures of any kind. I've completed 3 
                            courses, my first one was to learn <b>HTML and CSS</b>, my second
                            one to learn <b>JavaScript</b> and my last one was an{" "}
                            <b>advanced fullStack</b> course of web developing.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button
                            size="small"
                            color="secondary"
                            href="https://www.udemy.com"
                            target="_blank"
                        >
                            Visit the website
                        </Button>
                    </CardActions>
                </Card>
            </animated.div>
        </div>
    </div>
  );
}

export default Studies;