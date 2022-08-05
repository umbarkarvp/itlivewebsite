import React from 'react'
import newImg from '../../Img/newImg.jpg';
import Comon from './Comon';

const Home = () => {
  return (
    <>
        <Comon 
          title="Grow your Bussiness With our"
          brandtitle="IT Service"
          text="We are team of talented developer making websites"
          img = {newImg}
          btnname = "Get Started"
        />
    </>
  )
}

export default Home