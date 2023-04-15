import React from "react";
import Contact from "./Contact";
import "./Rabout.css";
import Ashish from './images/Ashish.jpg'

const Rabout = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-evenly">
          <div className="col-md-12 mt-5">
            <div className="text-center p-3">
              <div className="row justify-content-center">
                <div className="col-md-5 text-center p-3">
                  <img
                    // src="https://media.istockphoto.com/id/1400471206/photo/portrait-of-a-handsome-young-man-with-manly-face-male-beauty-fashionable-brunet-guy-in-black.jpg?b=1&s=170667a&w=0&k=20&c=gqA0i2b7J0gkRpT4aGJEyZHJmzKAJwIArESYNyFKxWE="
                    src={Ashish}
                    className="img-fluid"
                    id="aboutIMG"
                    alt=""
                  />
                  <h3 className="mt-3">I am a Web Devloper</h3>
                  <p>
                    I Am A Web Developer For More Than 4 Years. My Expertise Is
                    To Develop And Design Creative Websites And Graphic Designs.
                  </p>
                  <div className="row justify-content-center">
                    <div className="col-md-3 col-3 p-3 text-center FB">
                      <h1>
                        <a href="">
                          <i class="bi bi-facebook ICONS"></i>
                        </a>
                      </h1>
                    </div>
                    <div className="col-md-3 col-3 p-3 text-center">
                      <h1>
                        <a href="/">
                          <i class="bi bi-twitter ICONS"></i>
                        </a>
                      </h1>
                    </div>
                    <div className="col-md-3 col-3 p-3 text-center">
                      <h1>
                        <a href="#">
                          <i class="bi bi-instagram ICONS"></i>
                        </a>
                      </h1>
                    </div>
                    <div className="col-md-3 col-3 p-3 text-center">
                      <h1>
                        <a href="#">
                          <i class="bi bi-linkedin ICONS"></i>
                        </a>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-between">
          <h1 className="mb-4">
            My <span style={{ color: "#ff7200" }}>Skills</span>
          </h1>
          <div className="col-md-5">
            <div className="row">
              <div className="col-md-6">HTML5</div>
              <div className="col-md-6 text-end">
                <p>90%</p>
              </div>
            </div>
            <div
              className="progress mb-3"
              role="progressbar"
              aria-label="Success example"
              aria-valuenow={25}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div className="progress-bar BARS" style={{ width: "90%" }} />
            </div>
            <div className="row">
              <div className="col-md-6">CSS</div>
              <div className="col-md-6 text-end">
                <p>85%</p>
              </div>
            </div>
            <div
              className="progress mb-3"
              role="progressbar"
              aria-label="Success example"
              aria-valuenow={25}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div className="progress-bar BARS" style={{ width: "85%" }} />
            </div>

            <div className="row">
              <div className="col-md-6">Javascript</div>
              <div className="col-md-6 text-end">
                <p>75%</p>
              </div>
            </div>
            <div
              className="progress mb-3"
              role="progressbar"
              aria-label="Success example"
              aria-valuenow={25}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div className="progress-bar BARS" style={{ width: "75%" }} />
            </div>

            <div className="row">
              <div className="col-md-6">Bootstrap</div>
              <div className="col-md-6 text-end">
                <p>95%</p>
              </div>
            </div>
            <div
              className="progress mb-3"
              role="progressbar"
              aria-label="Success example"
              aria-valuenow={25}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div className="progress-bar BARS" style={{ width: "95%" }} />
            </div>
          </div>

          {/* 2nd col  */}

          <div className="col-md-5">
            <div className="row">
              <div className="col-md-6">React Js</div>
              <div className="col-md-6 text-end">
                <p>75%</p>
              </div>
            </div>
            <div
              className="progress mb-3"
              role="progressbar"
              aria-label="Success example"
              aria-valuenow={25}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div className="progress-bar BARS" style={{ width: "75%" }} />
            </div>
            <div className="row">
              <div className="col-md-6">MongoDB</div>
              <div className="col-md-6 text-end">
                <p>60%</p>
              </div>
            </div>
            <div
              className="progress mb-3"
              role="progressbar"
              aria-label="Success example"
              aria-valuenow={25}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div className="progress-bar BARS" style={{ width: "60%" }} />
            </div>

            <div className="row">
              <div className="col-md-6">Express Js</div>
              <div className="col-md-6 text-end">
                <p>80%</p>
              </div>
            </div>
            <div
              className="progress mb-3"
              role="progressbar"
              aria-label="Success example"
              aria-valuenow={25}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div className="progress-bar BARS" style={{ width: "80%" }} />
            </div>

            <div className="row">
              <div className="col-md-6">Node Js</div>
              <div className="col-md-6 text-end">
                <p>50%</p>
              </div>
            </div>
            <div
              className="progress mb-3"
              role="progressbar"
              aria-label="Success example"
              aria-valuenow={25}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div className="progress-bar BARS" style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default Rabout;
