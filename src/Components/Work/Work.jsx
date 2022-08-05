import React from 'react'
import Work01 from '../../Img/work.png';
import '../Work/Work.css';

const Work = () => {
  return (
    <>
        <section id="work">
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='img_work'>
                            <img src={Work01} alt='' className='img-fluid' />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="detail_work">
                            <h5>Our Wallet</h5>
                            <h2>How it Works</h2>
                            <p className='text-muted'>Acquire again token via reward pods, and use it as per your convenience.</p>
                        </div>
                        <div class="ioc-crypto">
                            <div class="item">
                               <i class="fa-solid fa-cloud-arrow-down"></i>
                               <div class="crypto-title">Tap on tranfer points</div>
                                <div class="crypto-text">Transfer your reward pods to any of your peers.</div>
                            </div>

                            <div class="item">
                                <i class="fa-solid fa-wallet"></i>
                                <div class="crypto-title">Convert to Again</div>
                                <div class="crypto-text">Convert your points into AGAIN via move to the blockchain tab.</div>
                            </div>

                            <div class="item">
                                <i class="fa-brands fa-bitcoin"></i>
                                <div class="crypto-title">Use Again</div>
                                <div class="crypto-text">Once it is converted, use the token as you see fit.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Work