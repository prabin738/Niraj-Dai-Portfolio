import React from "react";
import { Link } from "react-router-dom";
import teamImg1 from "../../assets/images/team/team-1.jpg";
import teamImg2 from "../../assets/images/team/team-2.jpg";
import teamImg3 from "../../assets/images/team/team-3.jpg";

const Team = (props) => {
  return (
    <>
      {/*team-section */}
      <section className="team-section sec-pad centred">
        <div className="auto-container">
          <div className="sec-title mb_50">
            <span className="sub-title">Featured Clients</span>
            <h2>Celebrities I Have Worked With</h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-4 col-md-6 col-sm-12 team-block">
              <div
                className="team-block-one wow fadeInUp animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <img src={teamImg1} alt="" />
                  </figure>
                  <div className="lower-content">
                    <div className="share-box">
                      <div className="share-icon">
                        <i className="fas fa-share-alt"></i>
                      </div>
                      <ul className="social-links clearfix">
                        <li>
                          <Link to="/">
                            <i className="fab fa-facebook-f"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <i className="fab fa-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <i className="fab fa-skype"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <h3>
                      <Link to="/team/team-details">Upasana Singh Thakuri</Link>
                    </h3>
                    <span className="designation">Leading Actress</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 team-block">
              <div
                className="team-block-one wow fadeInUp animated"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <img src={teamImg2} alt="" />
                  </figure>
                  <div className="lower-content">
                    <div className="share-box">
                      <div className="share-icon">
                        <i className="fas fa-share-alt"></i>
                      </div>
                      <ul className="social-links clearfix">
                        <li>
                          <Link to="/">
                            <i className="fab fa-facebook-f"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <i className="fab fa-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <i className="fab fa-skype"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <h3>
                      <Link to="/team/team-details">Priyanka Karki</Link>
                    </h3>
                    <span className="designation">Actress & Filmmaker</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 team-block">
              <div
                className="team-block-one wow fadeInUp animated"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <img src={teamImg3} alt="" />
                  </figure>
                  <div className="lower-content">
                    <div className="share-box">
                      <div className="share-icon">
                        <i className="fas fa-share-alt"></i>
                      </div>
                      <ul className="social-links clearfix">
                        <li>
                          <Link to="/">
                            <i className="fab fa-facebook-f"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <i className="fab fa-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <i className="fab fa-skype"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <h3>
                      <Link to="/team/team-details">Swostima Khadka</Link>
                    </h3>
                    <span className="designation">Film Star</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*team-section end */}
    </>
  );
};

export default Team;
