import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section className="footer-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="copy-right">
              <p className="copy__desc">
                &copy; Copyright  2022. Made with
                <span className="la la-heart"></span> by{" "}
                <a target="_blank" href="https://www.xillixtech.com">
                  xillixtech.
                </a>
              </p>
              <ul className="condition-links">
                <li>
                  <Link to="/terms">Terms of Use</Link>
                </li>
                <li>
                  <Link to="/privacy" style={{ marginLeft: "10px" }}>
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
