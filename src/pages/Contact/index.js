import React from 'react'
import NewsLetter from "../../pages/NewsLetter"

export default function index() {
  return (
   <React.Fragment>
    <section class="breadcrumb-area">
    <div class="breadcrumb-shape breadcrumb-shape1"></div>
    <div class="breadcrumb-shape breadcrumb-shape2"></div>
    <div class="breadcrumb-shape breadcrumb-shape3"></div>
    <div class="breadcrumb-shape breadcrumb-shape4"></div>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="breadcrumb-content">
                    <div class="breadcrumb__titles">
                        <h2 class="breadcrumb__title">Contact Us</h2>
                    </div>
                    <ul class="breadcrumb__list">
                        <li class="breadcrumb__list-active"><a href="index.html">Home</a></li> 
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="contact-area section--padding">
    <div class="container">
        <div class="row">
            <div class="col-lg-7">
                <div class="section-heading">
                    <p class="section__meta">#get in touch</p>
                    <h2 class="section__title">Need Any Help? Contact us</h2>
                </div>
                <div class="contact-form-action contact-form-item">
                    <form method="post">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <i class="la la-user form-icon"></i>
                                    <input class="form-control" type="text" name="text" placeholder="Name"/>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <i class="la la-envelope-o form-icon"></i>
                                    <input class="form-control" type="email" name="email" placeholder="Email"/>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <i class="la la-phone form-icon"></i>
                                    <input class="form-control" type="text" name="text" placeholder="Number"/>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <i class="la la-pencil-square form-icon"></i>
                                    <input class="form-control" type="text" name="text" placeholder="Subject"/>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="form-group message-group">
                                    <i class="la la-pencil form-icon"></i>
                                    <textarea class="form-control message-control" placeholder="Message"></textarea>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="form-group mb-0">
                                    <button class="theme-btn" type="button">send message <span class="la la-caret-right"></span></button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-lg-4 ml-auto">
                <div class="contact-img contact-tilt">
                    <img src="assets/images/contact-img.png" alt=""/>
                </div>
            </div>
        </div>
        <div class="row contact-address">
            <div class="col-lg-12">
                <div class="contact-heading">
                    <h3 class="contact__heading">Contact Us:</h3>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6">
                <div class="contact-card">
                    <h5 class="contact__subheding">Email</h5>
                    <p class="contact__text"> 
                        <span><i class="la la-envelope-o"></i> <a href="mailto:info123@prizon.com">info123@prizon.com</a></span>
                    </p>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6">
                <div class="contact-card">
                    <h5 class="contact__subheding">Phone</h5>
                    <p class="contact__text"> 
                        <span><i class="la la-phone"></i> <a href="#">+1 800 801 27 18</a></span> 
                    </p>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6">
                <div class="contact-card">
                    <h5 class="contact__subheding">Address</h5>
                    <p class="contact__text">
                        <span><i class="la la-map-marker"></i> Scheme 3, Rawalpindi, Pakistan</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
<NewsLetter />
   </React.Fragment>
  )
}
