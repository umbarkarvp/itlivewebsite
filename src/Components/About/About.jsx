import React from 'react'
import '../About/About.css';
import about_img from '../../Img/about-4.png';
import use01 from '../../Img/use01.png';
import use02 from "../../Img/use02.png";
import use03 from "../../Img/use03.png";
import Use_sec from '../UseSection/Use_sec';


const About = () => {
    const new_arry = [
        {
          imgs:  use01 ,
          name: "No Expiration"
        },
        {
          imgs:  use02 ,
          name: "Easy Adaptablity"
        },
        {
          imgs:  use03 ,
          name: "Efficient and Effective"
        }
      ];
  return (
    <>
        <section id='about_reward'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='about_story'>
                            <h5 className='about_head05'>About RewardsPods</h5>
                            <h2 className='about_head02'>Provide a bridge between businesses and consumers</h2>
                            <p className='text-muted'>Reward Pods create a bridge between businesses and consumers, allowing both to benefit and strengthening the relationship between the two. On the one hand buyers get reward pods/points for their purchases. For every purchase a consumer receives a pod that contains a 5% reward on that particular purchase. On the other hand, businesses offering these reward pods get loyal, satisfied customers. This strengthens the business/consumer relationship.</p>
                        </div>
                        {/* <div className='row'>
                            {new_arry.map((newArr, index) => {
                               return <Use_sec newName={newArr} />;
                            })}
                        </div> */}
                    </div>
                    <div className='col-md-6'>
                        <div className='about_img'>
                            <div className='group_img'>
                                <img src={about_img} alt='' className='img-fluid' />
                            </div>
                        {/* <div className='img_animation'></div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About