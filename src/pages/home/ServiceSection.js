import SingleService from "../../components/Service/SingleService";

import serviceIcon1 from "../../assets/images/service/service-1.jpg";
import serviceIcon2 from "../../assets/images/service/service-2.jpg";
import serviceIcon3 from "../../assets/images/service/service-3.jpg";

const Service = () => {
  return (
    <section className="service-section bg-color-1 sec-pad centred">
      <div className="auto-container">
        <div className="sec-title mb_60">
          <span className="sub-title">My Expertise</span>
          <h2>
            Professional Photography & <br />
            Videography Services
          </h2>
        </div>
        <div className="row clearfix">
          <div className="col-lg-4 col-md-6 col-sm-12 service-block">
            <SingleService
              serviceImage={serviceIcon1}
              Title="Event & Wedding Films"
              Text="Capturing the emotion and energy of your special days. From cinematic wedding highlights to dynamic corporate event recaps, I create films you'll want to watch again and again."
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 service-block">
            <SingleService
              serviceImage={serviceIcon2}
              Title="Portrait & Lifestyle"
              Text="Professional portraits that show your best side. Whether for personal branding, family memories, or fashion shoots, I provide high-resolution, professionally edited images."
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 service-block">
            <SingleService
              serviceImage={serviceIcon3}
              Title="Brand & Commercial"
              Text="Elevate your brand with high-impact visuals. I create engaging promotional videos and product photography designed to boost your social media presence and marketing."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
