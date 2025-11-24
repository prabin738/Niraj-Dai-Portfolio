import React from "react";
import { Link } from "react-router-dom";
import aboutPart1 from "../../assets/images/resource/about-1.jpg";
import aboutPart2 from "../../assets/images/resource/about-2.jpg";
import bgImg1 from "../../assets/images/shape/shape-5.png";
import bgImg2 from "../../assets/images/shape/shape-6.png";

const About = (props) => {
  return (
    <>
      {/* about-section */}
      <section className="about-section pt_150 pb_150">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
              <div className="image_block_one">
                <div className="image-box mr_40 pl_80 pb_70">
                  <div
                    className="image-shape"
                    style={{
                      backgroundImage: `url(${bgImg1})`,
                    }}
                  />
                  <figure className="image image-1">
                    <img className="main" src={aboutPart1} alt="" />
                  </figure>
                  <figure className="image image-2">
                    <img className="main" src={aboutPart2} alt="" />
                  </figure>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className="content_block_one">
                <div className="content-box ml_45">
                  <div className="sec-title mb_25">
                    <span className="sub-title mb_13">About Me</span>
                    <h2>
                      Passionate Videographer & Photographer Capturing Life's
                      Best Moments
                    </h2>
                  </div>
                  <div className="text-box mb_35">
                    <p>
                      I am Niraj Thapa, a visual storyteller dedicated to
                      preserving your most clear memories. With a keen eye for
                      detail and a passion for cinematic aesthetics, I transform
                      ordinary moments into extraordinary visual experiences.
                      Whether it's a wedding, a corporate event, or a personal
                      portrait, I ensure every frame tells a story.
                    </p>
                  </div>
                  <div className="list-inner mb_45">
                    <div
                      className="shape"
                      style={{
                        backgroundImage: `url(${bgImg2})`,
                      }}
                    />
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-6 col-sm-12 list-column">
                        <ul className="list-style-one clearfix">
                          <li>Cinematic Editing</li>
                          <li>Custom Packages</li>
                          <li>Fast Turnaround</li>
                        </ul>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 list-column">
                        <ul className="list-style-one clearfix">
                          <li>High-End Equipment</li>
                          <li>OCreative Direction</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="btn-box">
                    <Link to="contact" className="theme-btn btn-one">
                      Contact Me
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about-section end */}
    </>
  );
};

export default About;
