import React from "react";
import { Link } from "react-router-dom";

export default function HomeProcess() {
  return (
    <section className="info-box-area section--padding text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="section-heading">
              <h5 className="section__meta">Our Process</h5>
              <h2 className="section__title">Process to Follow</h2>
              <div className="section-divider mx-auto"></div>
            </div>
          </div>
        </div>
        <div className="row info-box-wrap pt-5 mt-4">
          <div className="col-lg-4 col-sm-6">
            <div className="info-box-item info-box-item-5">
              <span className="info-dot"></span>
              <span className="info-dot"></span>
              <span className="info-dot"></span>
              <div className="info-header">
                <span className="la la-gears info__icon"></span>
              </div>
              <div className="info-body">
                <h3 className="info__title">Upload File</h3>
                <p className="info__text">
                  Choose the PDF you want to convert from your computer.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="info-box-item info-box-item-5">
              <span className="info-dot"></span>
              <span className="info-dot"></span>
              <span className="info-dot"></span>
              <div className="info-header">
                <span className="la la-paint-brush info__icon"></span>
              </div>
              <div className="info-body">
                <h3 className="info__title">Select Conversion</h3>
                <p className="info__text">
                  Our PDF converter will begin extracting the text, images, and
                  scanned pages (OCR) from your PDF.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="info-box-item info-box-item-5">
              <span className="info-dot"></span>
              <span className="info-dot"></span>
              <span className="info-dot"></span>
              <div className="info-header">
                <span className="la la-heart-o info__icon"></span>
              </div>
              <div className="info-body">
                <h3 className="info__title">Download File</h3>
                <p className="info__text">
                  A perfectly formatted Word document is created in seconds and
                  ready to download. Our PDF to Word converter then wipes out
                  any copies of your file from our server, keeping your data
                  safe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
