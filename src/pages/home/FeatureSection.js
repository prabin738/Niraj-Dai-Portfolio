import React from "react";

const Feature = (props) => {
  return (
    <>
      {/* feature-section */}
      <section className="feature-section">
        <div className="auto-container">
          <div className="inner-container">
            <div className="row clearfix">
              <div className="col-lg-6 col-md-12 col-sm-12 feature-block">
                <div className="feature-block-one">
                  <div className="inner-box">
                    <div className="icon-box">
                      <div className="icon gradient-color">
                        <i className="icon-9" />
                      </div>
                    </div>
                    <h3>Cinematic 4K Quality</h3>
                    <p>
                      Using high-end equipment to capture stunning,
                      crystal-clear video and vibrant photos for every project.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 feature-block">
                <div className="feature-block-one">
                  <div className="inner-box">
                    <div className="icon-box">
                      <div className="icon gradient-color">
                        <i className="icon-12" />
                      </div>
                    </div>
                    <h3>Creative & Professional</h3>
                    <p>
                      An unique artistic vision and professional reliability to
                      tell your story in the most beautiful way.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* feature-section end */}
    </>
  );
};

export default Feature;
