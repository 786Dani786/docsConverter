import React from "react";
import { Link } from "react-router-dom";
import ConverterDrawer from "./ConverterDrawer";

export default function Header() {

  const [isVisible, setISVisible] = React.useState(false)


  return (
    <section className="header-menu-area">
    <ConverterDrawer isVisible = {isVisible}/>
      <div className="header-menu-fluid">
        <div className="container">
          <div className="row align-items-center menu-content">
            <div className="col-lg-3">
              <div className="logo-box">
                <Link to="/" className="logo" title="Prizon">
                  <h5>Site Title</h5>
                </Link>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="menu-wrapper">
                <nav className="main-menu">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/converter">Compress PDF</Link>
                    </li>
                    <li>
                      <Link to="/">Merge PDF</Link>
                    </li>
                    <li className="has-mega-menu">
                      <a href="#">All Tools</a>
                      <ul className="dropdown-menu-item mega-menu">
                        <li>
                          <h5 className="text-center">To PDF</h5>
                          <ul className="mega-menu-inner  text-center">
                            <li>
                              <a href="team-members.html">Word To PDF</a>
                            </li>
                            <li>
                              <a href="pricing-tables.html">Excel To PDF</a>
                            </li>
                            <li>
                              <a href="buttons.html">PowerPoint to PDF</a>
                            </li>
                            <li>
                              <a href="icon-hover-effects.html">Jpg to PDF</a>
                            </li>
                            <li>
                              <a href="content-boxes.html">Iwork</a>
                            </li>
                            <li>
                              <a href="flip-boxes.html">openOffice To PDF</a>
                            </li>
                            <li>
                              <a href="alert-boxes.html">Ebook to PDF</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <h5  className="text-center">From PDF</h5>
                          <ul className="mega-menu-inner text-center">
                            <li>
                              <a href="social-icons.html">PDF to Word</a>
                            </li>
                            <li>
                              <a href="google-maps.html">PDF to Excel</a>
                            </li>
                            <li>
                              <a href="charts.html">PDF to PowerPoint</a>
                            </li>
                            <li>
                              <a href="content-carousels.html">PDF to Jpg</a>
                            </li>
                            <li>
                              <a href="bullet-list.html">PDF to PNG</a>
                            </li>
                            <li>
                              <a href="accordions.html">PDF to PDF/A</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <h5  className="text-center">Others</h5>
                          <ul className="mega-menu-inner text-center">
                            <li>
                              <a href="testimonials.html">Merge PDF</a>
                            </li>
                            <li>
                              <a href="faqs.html">Split PDF</a>
                            </li>
                            <li>
                              <a href="faqs.html">Compress PDF</a>
                            </li>
                            <li>
                              <a href="faqs.html">Add Watermark</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li> 
                  </ul>
                </nav>
                <div className="logo-right-button">
                  <button onClick={(e) => setISVisible(!isVisible)} className="side-menu-open">
                    <span className="menu__bar"></span>
                    <span className="menu__bar"></span>
                    <span className="menu__bar"></span>
                  </button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
