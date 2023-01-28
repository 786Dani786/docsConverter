import React from "react"; 
import { Link } from "react-router-dom";
import allServicesData from "../../Json/svg";
export default function index() {
   
  return (
  <React.Fragment>
    <section class="heading-area text-center heading-area5" style={{paddingTop: "150px"}}>
    <div class="container">
        <div class="row">
            <div class="col-lg-7 mx-auto">
                <div class="section-heading gradient-heading">
                    <h5 class="section__meta">Services</h5>
                    <h2 class="section__title">Services we are providing to our customers.</h2>
                    <div class="section-divider mx-auto"></div>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="info-box-area service-area section--padding text-center">
      <div className="container"> 
        <div className="row "> 
         {allServicesData.map((item, idx) => 
             <div className="col-lg-4" key={item.id}>
             <div className="info-box-item info-box-item-7">
               <div className="info-header"> 
                 <img  src={item.imgSrc} alt="my images "/>
               </div>
               <div className="info-body">
                 <h3 className="info__title">{item.title}</h3>
                 <p className="info__text">
                   {item.shortDescription}
                 </p>
                 <a href="#" className="info__btn">
                   Convert Now
                 </a>
               </div>
             </div>
           </div>
         )}
        </div> 
      </div> 
    </section>
  </React.Fragment>
  );
}
