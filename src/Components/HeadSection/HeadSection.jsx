import React from 'react'
import '../HeadSection/HeadSection.css';
import sideImg from '../../Img/s.png';

const HeadSection = () => {
  return (
    <>
    <header id='head-section'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='head_text'>
                        <h2 className='description'>We make your <span>Loyalty Program</span> a <span>Unique</span> experience</h2>
                        <p className='text-muted'>Get your Reward Pods and ensure a well functioning, simple, Loyality Program</p>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='img_src'>
                        <img src={sideImg} alt='' className='img-fluid'></img>
                    </div>
                </div>
            </div>
        </div>
    </header>

    </>
  )
}

export default HeadSection