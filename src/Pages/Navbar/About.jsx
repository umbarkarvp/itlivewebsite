import React from 'react'
import aboutImg from '../../Img/about-img.jpg';
import Comon from './Comon';

const About = () => {
  return (
    <>
        <Comon 
          title="Welcome to About Page"
          brandtitle="IT Service"
          text="We are team of talented developer making websites"
          img = {aboutImg}
          btnname = "Get Started"
        />
    </>
  )
}

export default About