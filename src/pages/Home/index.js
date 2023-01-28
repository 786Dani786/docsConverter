import React from "react";
import Newsletter from "../NewsLetter";
import HomeBanner from "./Banner";
import HomeAbout from "./HomeAbout";
import HomeProcess from "./HomeProcess";
import HomeServices from "./HomeServices";
import Whychooseus from "./Whychooseus";
import Banner2 from "./Banner/Banner2";
import ConverterDrawer from "../../components/ConverterDrawer";

export default function index() {
  return (
    <React.Fragment>
      <Banner2 />
      <ConverterDrawer />
      <HomeServices />
      <HomeProcess />
      <HomeAbout />
      <Whychooseus />
      <Newsletter />
    </React.Fragment>
  );
}
