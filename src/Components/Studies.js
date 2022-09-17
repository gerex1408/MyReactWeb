import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import maristes from '../images/maristes.jpg';
import eoi from '../images/eoi.png';
import udg from '../images/udg.png';
import udemy from '../images/udemy.png';
import {useSpring, animated} from 'react-spring';
import {useMediaQuery} from "@material-ui/core/";
import StudyComponent from "./StudyComponent";

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

  const s_size_height = useMediaQuery('(max-height:880px)');


  const description1 = "I spent 15 years studying in Maristes Girona, including primary and high school. I decided to take the <b>technology branch</b> in high school and that was one of the best decisions that I have taken so far. I am so proud of my education and my best <b>childhood memories </b> are in Maristes."
  const description2 = "EOI stands for <b>Official school of languages</b> in Spanish. It is a public center were you can learn a bunch of languages. In my case, the EOI was the most important part of my <b>English education</b>, I got my <b>C1 level certificate</b> there. I've always been into trying to master English so I can work abroad one day."
  const description3 = "I am currently pursuing my <b>last year</b> of <b>computer engineering </b> at the University of Girona, also known as <b>UdG</b>. I have the feeling that I'm studying the perfect degree for me, I don't think there's an other one that can make me be more motivated and inspired in learning new things than this one."
  const description4 = "An important part of my knowledge as a web developer is Udemy, an online plataform to take coures of any kind. I've completed 3  courses, my first one was to learn <b>HTML and CSS</b>, my second one to learn <b>JavaScript</b> and my last one was an <b>advanced fullStack</b> course of web developing."

  return (
    <div className={classes.root} style={s_size_height||m_size?{height:"100%"}:{height:"90vh"}}>
        <div className={classes.innerDiv}>

            <animated.div style={props1}>
                <StudyComponent image={maristes} title="Maristes Girona" years={"2004 - 2019"} description={description1} link={"https://www.girona.maristes.cat/"} />
            </animated.div>

            <animated.div style={props1}>
                <StudyComponent image={eoi} title="EOI Girona" years={"2019 - 2020"} description={description2} link={"http://www.eoigirona.com/"} />
            </animated.div>

            <animated.div style={props1}>
                <StudyComponent image={udg} title="University of Girona" years={"2019 - <span style=\"color:green\">Nowadays</span>"} description={description3} link={"https://www.udg.edu/en/"} />
            </animated.div>

            <animated.div style={props1}>
                <StudyComponent image={udemy} title="Udemy" years={"2019 - <span style=\"color:green\">Nowadays</span>"} description={description4} link={"https://www.udemy.com"} />
            </animated.div>
        </div>
    </div>
  );
}

export default Studies;