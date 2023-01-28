import { Button } from "antd";
import React, { useState } from "react";

export default function UploadFile(props) {
  const [first, setFirst] = useState(true);

  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const fileHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    setIsFilePicked(true);
  };

  return (
    <section className="icon-box-area section--padding text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="section-heading">
              <h5 className="section__meta">Convert Your Documents</h5>
              <h2 className="section__title">{props.title}</h2>
              <div className="section-divider mx-auto"></div>
            </div>
          </div>
        </div>
        <div className="row icon-box-wrap">
          <div className="col-lg-12 col-sm-12">
            <div className="icon-box icon-box-3">
              <div class="mb-3" id="uploadFile">
                <label for="file-upload" class="custom-file-upload">
                  {first ? (
                    <i className="las la-cloud-upload-alt box__icon"></i>
                  ) : (
                    <i className="las la-sync-alt box__icon"></i>
                  )}
                </label>
                <input
                  id="file-upload"
                  type="file" 
                  onChange={(e) => {
                    fileHandler(e);
                    setFirst(false)
                  }}
                />
              </div>
              <h5 className="icon__title">
                {" "}
                {first ? "Upload Document" : `${selectedFile.name}` } {" "}
              </h5>

             {isFilePicked ?  <button className="btn btn-success" style={{marginTop: '20px', fontWeight: 600, padding: "10px" }}>Convert Document</button> : undefined}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
