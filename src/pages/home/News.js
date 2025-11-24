import React from "react";
import { Link } from "react-router-dom";
import newsImg1 from "../../assets/images/news/news-1.jpg";
import newsImg2 from "../../assets/images/news/news-2.jpg";
import newsImg3 from "../../assets/images/news/news-3.jpg";
import newsIcon1 from "../../assets/images/icons/icon-4.svg";
import newsIcon2 from "../../assets/images/icons/icon-5.svg";

const News = (props) => {
  return (
    <>
      {/*news-section */}
      <section className="news-section sec-pad">
        <div className="auto-container">
          <div className="sec-title mb_50 centred">
            <span className="sub-title">Our Article</span>
            <h2>
              Get More Update From <br />
              Our Article
            </h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
              <div
                className="news-block-one wow fadeInUp animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <Link to="/blog/blog-details">
                      <img src={newsImg1} alt="" />
                    </Link>
                  </figure>
                  <div className="lower-content">
                    <div className="date">
                      16 <span>APR</span>
                    </div>
                    <ul className="post-info mb_13 clearfix">
                      <li>
                        <img src={newsIcon1} alt="" />
                        <Link to="/blog/blog-details">Admin</Link>
                      </li>
                      <li>
                        <img src={newsIcon2} alt="" />0 Cmnts
                      </li>
                    </ul>
                    <h3>
                      <Link to="/blog/blog-details">
                        5 Tips for Perfect Wedding Photos
                      </Link>
                    </h3>
                    <p>
                      Planning your big day? Here are the top 5 lighting and
                      posing secrets to ensure your wedding album looks
                      absolutely magical.
                    </p>
                    <div className="link">
                      <Link to="/blog/blog-details">
                        <span>Read More</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
              <div
                className="news-block-one wow fadeInUp animated"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <Link to="/blog/blog-details">
                      <img src={newsImg2} alt="" />
                    </Link>
                  </figure>
                  <div className="lower-content">
                    <div className="date">
                      14 <span>APR</span>
                    </div>
                    <ul className="post-info mb_13 clearfix">
                      <li>
                        <img src={newsIcon1} alt="" />
                        <Link to="/blog/blog-details">Admin</Link>
                      </li>
                      <li>
                        <img src={newsIcon2} alt="" />2 Cmnts
                      </li>
                    </ul>
                    <h3>
                      <Link to="/blog/blog-details">
                        Behind the Scenes: Music Video Shoot
                      </Link>
                    </h3>
                    <p>
                      Take a look at how we filmed the latest music video. From
                      location scouting to the final color grade, see the full
                      creative process.
                    </p>
                    <div className="link">
                      <Link to="/blog/blog-details">
                        <span>Read More</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
              <div
                className="news-block-one wow fadeInUp animated"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <Link to="/blog/blog-details">
                      <img src={newsImg3} alt="" />
                    </Link>
                  </figure>
                  <div className="lower-content">
                    <div className="date">
                      13 <span>APR</span>
                    </div>
                    <ul className="post-info mb_13 clearfix">
                      <li>
                        <img src={newsIcon1} alt="" />
                        <Link to="/blog/blog-details">Admin</Link>
                      </li>
                      <li>
                        <img src={newsIcon2} alt="" />5 Cmnts
                      </li>
                    </ul>
                    <h3>
                      <Link to="/blog/blog-details">
                        Why Professional Headshots Matter?
                      </Link>
                    </h3>
                    <p>
                      In today's digital world, your profile picture is your
                      first impression. Learn why high-quality branding photos
                      are essential for your career.
                    </p>
                    <div className="link">
                      <Link to="/blog/blog-details">
                        <span>Read More</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*news-section end */}
    </>
  );
};

export default News;
