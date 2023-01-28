import React, { useState } from "react";
import { Drawer } from "antd";
import { Link } from "react-router-dom";

export default function ConverterDrawer(props) {
  return (
    <section className="header-menu-area">
      <Drawer
        title="site Title"
        visible={props.isVisible}
        footer="This is drawer footer "
        closable={false}
      >
        <div className="header-menu-fluid">
          <div className="container">
            <div className="row align-items-center menu-content">
              <div className="col-lg-9 bg-[re]">
                <div className="menu-wrapper">
                  <div className=" w-100 d-flex flex-column align-items-center justify-content-center">
                    <div className="menu-wrapper">
                      <div className="main-menu bg-dark">
                        <div>
                          <Link className="text-black">Adnan Akram </Link>
                        </div>
 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </section>
  );
}
