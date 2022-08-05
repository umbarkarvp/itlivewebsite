import React from "react";
import Rate1 from "../../Img/rate (1).png";
import Rate2 from "../../Img/rate (2).png";
import Rate3 from "../../Img/rate (3).png";
import Rate4 from "../../Img/rate (5).png";
import use01 from '../../Img/use01.png';
import '../Performance/Performance.css';

const Performance = () => {
  return (
    <>
      <section id="performance">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="details">
                <h5 className="per_head05">Performance</h5>
                <h2 className="per_head02">Reward Pods can Boost your Performance!</h2>
                <p className="text-muted">
                  Sign up and help your company increase sales, draw more
                  customers and solidify your brand!
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-body card_size">
                  <div className="img_per">
                    <img src={Rate1} alt="" className="img-fluid" />
                    <hr />
                  </div>
                  <div className="img_details">
                    <h5>Increase Sales</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-body card_size">
                  <div className="img_per">
                    <img src={Rate2} alt="" className="img-fluid" />
                    <hr />
                  </div>
                  <div className="img_details">
                    <h5>Grow Customer base</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row next-line">
            <div className="col-md-3">
              <div className="card">
                <div className="card-body card_size">
                  <div className="img_per">
                    <img src={Rate3} alt="" className="img-fluid" />
                    <hr />
                  </div>
                  <div className="img_details">
                    <h5>Solidify Brand</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-body card_size">
                  <div className="img_per">
                    <img src={Rate4} alt="" className="img-fluid" />
                    <hr />
                  </div>
                  <div className="img_details">
                    <h5>Cost Effective</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-body card_size">
                  <div className="img_per">
                    <img src={use01} alt="" className="img-fluid" />
                    <hr />
                  </div>
                  <div className="img_details">
                    <h5>No Expiration</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
                <div className="btn-readmore">
                    <button className="btn btn-read">READ MORE <i class="fa-solid fa-plus"></i></button>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Performance;
