import React from 'react'
import {NavLink} from 'react-router-dom';

const Comon = (props) => {
  return (
    <>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-11 mx-auto'>
              <div className='row align-items-center'>
                <div className='col-lg-6 order-2 order-lg-1'>
                  <div className='home_page flex-column'>
                  <h3 className='home_text pb-3'>{props.title} <span className='brand_text'>{props.brandtitle}</span></h3>
                  <p className='text-muted para_text mb-3'>{props.text}</p>
                  <NavLink className="btn btn_get_started" to="">{props.btnname}</NavLink>
                  </div>
                </div>
                <div className='col-lg-6 order-1 order-lg-2'>
                  <img src={props.img} alt='home_img' className='img-fluid' />
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Comon