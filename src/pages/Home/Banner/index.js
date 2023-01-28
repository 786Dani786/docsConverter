import React from "react";

export default function HomeBanner() {
  return (
    <section className="banner-area home-page-3">
      <div className="banner-item-wrap">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="banner-content">
                <div className="section-heading">
                  <p className="section__meta rounded-radius">
                    <span className="section-dot"></span> welcome to PDF
                    converter
                  </p>
                  <h2 className="section__title">We make PDF easy.</h2>
                  <p className="text-white">
                    All the tools you’ll need to be more productive and work
                    smarter with documents.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-img-content">
                <img src="assets/images/seo-img.png" alt="seo-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
