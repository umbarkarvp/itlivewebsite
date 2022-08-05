import React from 'react';
import footerLogo from '../../Img/footer-logo.png';
import '../Footer/Footer.css';

const Footer = () => {
  return (
    <>
        <section id='footer_part'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                        <img src={footerLogo}  alt="logo" />
                    </div>
                    <div className='col-md-6'>
                        <form>
                        <h5>Sign Up for More Updates</h5>
                            <input type='text' placeholder='Enter Email' />
                        </form>
                    </div>
                    <div className='col-md-3'>
                        <h5 className='about_footer'>About</h5>
                        <p>We make your Loyalty Program a Unique experience. No expiration , Easy Adaptablity , Efficient and Effective.</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Footer