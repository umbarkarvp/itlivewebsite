import React from "react";
import Blog_01 from "../../Img/blog-02.jpg";
import Blog_02 from "../../Img/blog-01.jpg";
import Blog_03 from "../../Img/blog-03.jpg";
import Person_01 from "../../Img/person-01.png";
import "../Blog/Blog.css";

const Blog = () => {
  const blog_arry = [
    {
      imgs : Blog_01,
      user : "admin",
      date : "April, 12 2022",
      time : "15 mins ago"
    },
    {
      imgs : Blog_02,
      user : "admin",
      date : "May, 20 2022",
      time : "7 mins ago"
    },
    {
      imgs : Blog_03,
      user : "admin",
      date : "March, 10 2022",
      time : "35 mins ago"
    }
  ]
  return (
    <>
      <section id="cards_blog">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img src={Blog_01} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="card_text">
                    <div className="label_img">
                      <img src={Person_01} alt="" />
                    </div>
                    <div className="labels mx-auto text-center">
                      <p className="card-text text-muted">
                        admin
                      </p>
                      <p className="card-text text-muted">
                        April, 12 2022
                      </p>
                      <p className="card-text text-muted">
                      <i class="fa-solid fa-clock"></i> 3 mins ago
                      </p>
                    </div>
                  </div>
                  <h5 className="card-title">Card title</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
