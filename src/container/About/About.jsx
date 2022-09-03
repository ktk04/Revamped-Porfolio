import React, {useState,useEffect} from 'react'
import './About.scss';
import {motion} from 'framer-motion';
import {AppWrap}from '../../wrapper';
const abouts=[
  {title:'Web Development',description:'I am a good web developer.',imageURL:''}
]
function About() {
  return (
    <div id="about">
    <motion.div whileInView={{x:[-100,0],opacity:[0,1]}}
        transition={{duration:0.5}}>
    <p className="head-text">A Little Bit <span> About Me</span>
    </p>

    <div className="tag-cmp app__flex">
    <div className="head-text2">
     <p> My name is Kevin Thomas Koshy. I am a <span>Third Year</span> student doing my <span>Bachelors in Computer Science Engineering</span> at the SRM Institute of Science and Technology, Kattankulathur. Breaking down big problems to solvable small tasks is the way I go about stuff. </p>
     <br/>
    <p>When I'm not coding or studying, you can expect to find me gaming, playing keyboard or just socialising. </p>
    </div>
    </div>
    </motion.div>
    </div>
  )
}

export default AppWrap(About,'about');