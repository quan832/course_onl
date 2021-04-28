import React from "react";
import logo2_footer from "../../assets/images/logo/logo2_footer.png";
export default function Footer() {
  return (
    <footer>
      <div className="footer-area footer-padding">
        <div className="footer-wrapper ">
          <div className="container">
            <div className="row d-flex justify-content-between">
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="single-footer-caption mb-50">
                  <div className="single-footer-caption mb-30">
                    <div className="footer-logo mb-25">
                      <a href="index.html">
                        <img src={logo2_footer} alt />
                      </a>
                    </div>
                    <div className="footer-tittle">
                      <div className="footer-pera">
                        <p>
                          The automated process starts as soon as your clothes
                          go into the machine.
                        </p>
                      </div>
                    </div>
                    <div className="footer-social">
                      <a href="#">
                        <i className="fab fa-twitter" />
                        
                      </a>
                      <a href="https://bit.ly/sai4ull">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-4 col-sm-5">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Subjects</h4>
                    <ul>
                      <li>
                        <a href="#">Design &amp; creatives</a>
                      </li>
                      <li>
                        <a href="#">Telecommunication</a>
                      </li>
                      <li>
                        <a href="#">Restaurant</a>
                      </li>
                      <li>
                        <a href="#">Programing</a>
                      </li>
                      <li>
                        <a href="#">Architecture</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-4 col-sm-5">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Community</h4>
                    <ul>
                      <li>
                        <a href="#">Design &amp; creatives</a>
                      </li>
                      <li>
                        <a href="#">Telecommunication</a>
                      </li>
                      <li>
                        <a href="#">Restaurant</a>
                      </li>
                      <li>
                        <a href="#">Programing</a>
                      </li>
                      <li>
                        <a href="#">Architecture</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-4 col-sm-5">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Company</h4>
                    <ul>
                      <li>
                        <a href="#">Design &amp; creatives</a>
                      </li>
                      <li>
                        <a href="#">Telecommunication</a>
                      </li>
                      <li>
                        <a href="#">Restaurant</a>
                      </li>
                      <li>
                        <a href="#">Programing</a>
                      </li>
                      <li>
                        <a href="#">Architecture</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Newsletter</h4>
                    <p>Subscribe our newsletter to get updates.</p>
                  </div>
                  <div className="footer-form">
                    <div id="mc_embed_signup">
                      <form
                        target="_blank"
                        action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01"
                        method="get"
                        className="subscribe_form relative mail_part"
                        noValidate="true"
                      >
                        <input
                          type="email"
                          name="EMAIL"
                          id="newsletter-form-email"
                          placeholder="  Enter your email"
                        />
                        <div className="form-icon">
                          <button
                            type="submit"
                            name="submit"
                            id="newsletter-submit"
                            className="email_icon newsletter-submit button-contactForm"
                          >
                            Subscribe
                          </button>
                        </div>
                        <div className="mt-10 info" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom-area">
            <div className="container">
              <div className="footer-border">
                <div className="row d-flex align-items-center">
                  <div className="col-xl-12 ">
                    <div className="footer-copy-right text-center">
                      <p>
                        Copyright © All rights reserved | This template is made
                        with
                        <i
                          className="fa fa-heart color-danger"
                          aria-hidden="true"
                        />
                        by
                        <a
                          href="https://colorlib.com"
                          target="_blank"
                          rel="nofollow noopener"
                        >
                          Colorlib
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
