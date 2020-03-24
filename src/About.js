import React  from 'react';
import {Animated} from "react-animated-css";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { TiAdjustBrightness,TiGlobeOutline,TiLightbulb } from "react-icons/ti";


function About() {
    return (
        <Animated   animationIn="bounceInUp" animationOut="fadeOut" isVisible={true}>
 
        <div className="aboutus-txt">
          <p>About Us</p>
          <h2>Who Am I?</h2>
          <p><b>Hi I'm Hamideh Mohamadnian</b> On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.

Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
      
      
      
   <VerticalTimeline>
   <VerticalTimelineElement
     className="vertical-timeline-element--work"
     contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
     contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
     date="2011 - present"
     iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
     icon={<TiAdjustBrightness />}
   >
     <h4 className="vertical-timeline-element-subtitle">Web Development </h4>
     <p>I have experience building websites and extentions using JavaScript,React,HTML,CSS</p>
   </VerticalTimelineElement>
   <VerticalTimelineElement
     className="vertical-timeline-element--work"
     contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
     contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
     date="2010 - 2011"
     iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
     icon={<TiLightbulb />}

    >
        <h4 className="vertical-timeline-element-subtitle">Web Development </h4>
        <p>
        I have experience building kinde of websites by Wordpress    </p>
   </VerticalTimelineElement>
   <VerticalTimelineElement
     className="vertical-timeline-element--work"
     contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
     contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
     date="2008 - 2010"
     iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
     icon={<TiGlobeOutline />}

    >
      <h4 className="vertical-timeline-element-subtitle">Web Development </h4>
      <p>
      I have experience building kinde of websites by Joomla    </p>
   </VerticalTimelineElement>

   
 </VerticalTimeline>
      
        </div>
        </Animated>
    );
  
}
 

export default About;