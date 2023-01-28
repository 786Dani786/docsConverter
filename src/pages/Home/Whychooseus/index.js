import React from "react";

export default function Whychooseus() {
  return (
    <section className="info-box-area section--padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="section-heading text-center">
              <h5 className="section__meta">Why Choose US</h5>
              <h2 className="section__title">Why Our Services</h2>
              <div className="section-divider mx-auto"></div>
            </div>
          </div>
        </div>
        <div className="row info-box-wrap">
          <div className="col-lg-4 col-sm-6">
            <div className="info-box-item info-box-item-6">
              <div className="info-header">
                <span className="la la-paint-brush info__icon"></span>
              </div>
              <div className="info-body">
                <h3 className="info__title">Any Device, Anytime!</h3>
                <p className="info__text">
                  PDFs are everywhere and so are we! We keep those simple tasks
                  simple on web, desktop, and mobile.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="info-box-item info-box-item-6">
              <div className="info-header">
                <span className="la la-code info__icon"></span>
              </div>
              <div className="info-body">
                <h3 className="info__title">We are Rated Highly</h3>
                <p className="info__text">
                  The most visited website in Switzerland and consistently in
                  the top 200 most visited websites in the world.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="info-box-item info-box-item-6">
              <div className="info-header">
                <span className="la la-cloud-upload info__icon"></span>
              </div>
              <div className="info-body">
                <h3 className="info__title">All Languages</h3>
                <p className="info__text">
                  Available in the almost all spoken languages in the world, we
                  really do make PDF tools for everyone!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
