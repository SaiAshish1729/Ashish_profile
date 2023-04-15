import React from "react";
import "./Skills.css";
import html from "../Components/images/html.png";
import css from "../Components/images/css.png";
import js from "../Components/images/js.png";
import bootstrao from "../Components/images/bootstrap.png";
import mongo from "../Components/images/mongo.png";
import node from "../Components/images/node.png";
import react from "../Components/images/react.png";
import express from "../Components/images/express.png";

const Skill = () => {
  return (
    <>
    

      <section style={{ backgroundColor: "black", color: "white" }}>
        <div className="container">
          <div className="row">
            <h2 className="skill mt-4 mb-5">Technologies</h2>
            <div className="col-md-3">
              <div className="html text-center">
                <img
                  src={html}
                  style={{ width: "61%" }}
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="css">
                <img
                  src={css}
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-3 text-center">
              <img
                src={js}
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-md-3">
              <img
                src={bootstrao}
                style={{ width: "80%" }}
                className="img-fluid text-center"
                alt=""
              />
            </div>
            <div className="col-md-3 text-center mt-4">
              <img
                src={react}
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-md-3 text-center mt-4">
              <img
                src={mongo}
                style={{ width: "80%", height: "78%" }}
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-md-3 text-center mt-4">
              <img
                src={node}
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-md-3 text-center mt-4">
              <img
                src={express}
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
