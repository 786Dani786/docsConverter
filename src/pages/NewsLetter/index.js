import React from "react";

export default function Newsletter() {
  return (
    <section className="error-area section-padding-top text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 mx-auto">
            <div className="error-content">
              <div className="error-heading">
                <h2 className="error__title">Subscribe for our NewsLetter</h2>
                <p className="error__text">
                  Subscribe our NewsLetter for daily updates and our offers.
                </p>
              </div>
              <div className="contact-form-action"> 
                <form method="post">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="search"
                      name="search"
                      placeholder="Search for pages..."
                    />
                    <button className="search-btn" type="button">
                      {" "}
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
