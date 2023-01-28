import React from "react";

export default function FilePreview() {
  return (
    <section className="icon-box-area section--padding text-center">
      <div className="container">
        <div className="row"></div>
        <div className="row icon-box-wrap">
          <div className="col-lg-12 col-sm-12">
            <div className="icon-box icon-box-3">
              <div class="mb-3" id="uploadFile">
                <label for="file-upload" class="custom-file-upload">
                  <i className="las la-cloud-upload-alt box__icon"></i>
                </label>
                <input id="file-upload" type="file" />
              </div>
              <h5 className="icon__title">upload Document</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
