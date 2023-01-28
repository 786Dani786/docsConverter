import React from "react";

export default function Banner2() {
  return (
    <section className="banner-area">
      <svg
        className="banner-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fillOpacity="1"
          d="M0,192L26.7,197.3C53.3,203,107,213,160,234.7C213.3,256,267,288,320,282.7C373.3,277,427,235,480,208C533.3,181,587,171,640,186.7C693.3,203,747,245,800,240C853.3,235,907,181,960,144C1013.3,107,1067,85,1120,96C1173.3,107,1227,149,1280,154.7C1333.3,160,1387,128,1413,112L1440,96L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
        ></path>
      </svg>
      <div className="banner-fluid">
        <div className="banner-item-wrap">
          <div id="perticles-js"></div>
          <div className="banner-item-table">
            <div className="banner-item-tablecell">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="banner-content text-center">
                      <div className="section-heading">
                        <p className="section__meta">
                          #welcome to PDF converter
                        </p>
                        <h2 className="section__title">We make PDF easy</h2>
                      </div>
                      <div className="section-description">
                        <p className="section__desc">
                          All the tools you’ll need to be more productive and{" "}
                          <br /> work smarter with documents.
                        </p>
                      </div>
                      {/* <div classNameName="col-lg-6">
                        <div classNameName="banner-img-content">
                          <img src="assets/images/seo-img.png" alt="seo-img" />
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
