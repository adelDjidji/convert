import React from "react";
import { Row, Col } from "antd";
// import ReactPixel from "react-facebook-pixel";

import NavBar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Head from "next/head";
// import "../Styles/career.scss";

export default function Career({}) {
  return (
    <div className="career-container">
    <Head>
        <title>CONVERT | Career</title>
      </Head>
      <NavBar mode="white" className="no-border" />
      <div className="career-header">
        <di className="title-container">
          <h1 className="header-title">REINVENT INTERNET’S VALUE</h1>
          <div className="red-box">Create the legacy you want</div>
        </di>
      </div>
      <div className="page-container">
        <img
          className="fixed-logo"
          src="/Assets/icons/Logo A - colour.png"
          alt=""
        />
        <section className="section1">
          <Row>
            <Col md={24} lg={12} className="">
              <h1 className="big-title left space-top">
                About
                <img
                  className="light-shadow icon"
                  src="/Assets/icons/Logo A - colour.png"
                  alt=""
                />{" "}
              </h1>

              <p className="simple">
                At <span className="blue bold">CONVERT</span> , we believe in
                noble philosophy of creating the best & extra ordinary values
                for users, it is all about globalizing the benefits under the
                Online-Merge-Offline (OMO) logic. Together, we continue to
                create values that have never happened in history.
              </p>
              <p className="simple">
                We are searching for passionate, eager to success talent to join
                our team. <span className="blue bold">CONVERT</span> is a Global
                brand started from China, Singapore, Australia & Malaysia. We
                are determined to carry out an important mission to create extra
                ordinary values to users local & globally.
              </p>
            </Col>
            <Col md={24} lg={12} className="">
              <img
                style={{ maxHeight: 530 }}
                src="/Assets/img/screens-poster.png"
                alt=""
                className="move-r"
              />
            </Col>
          </Row>
        </section>
        <section className="section2 gray">
          <h1 className="title gotham">
            {" "}
            <span className="red2 bold">50% Salary increment</span> if you are
            successfully recruited
          </h1>
          <Row type="flex" justify="space-between">
            <Col md={24} lg={12} className="">
              <div className="box left-one">
                <h1 className="white box-text">
                  Work at the most innovative start-up with a big dream of
                  listed in NYSE
                </h1>
                <img src="/Assets/img/img-career-1.png" alt="" />
              </div>
            </Col>
            <Col md={24} lg={12} className="">
              <div className="box right-one">
                <h1 className="white box-text">
                  Flexible to work remotely from the comfort of your home
                </h1>
                <img src="/Assets/img/img-career-2.png" alt="" />
              </div>
            </Col>
          </Row>
        </section>
        <section className="section3">
          <h1 className="title">Talents needed in various department. </h1>
          <p className="simple">
            {" "}
            If you have any experience in any of the division listed, kindly
            follow below steps:
          </p>

          <Row type="flex" justify="space-between" className="domaines">
            <Col md={24} lg={12}>
              <Col md={24} lg={24} className="domain">
                <img
                  className="domain-num"
                  src="/Assets/icons/1-red.svg"
                  alt=""
                />
                <div className="domaine">
                  <span className="icon-d">
                    {" "}
                    <img src="/Assets/icons/car-icon1.svg" alt="" />{" "}
                  </span>
                  <span className="text-d">Business Development Division</span>
                </div>
              </Col>
              <Col md={24} lg={24} className="domain">
                <img
                  className="domain-num"
                  src="/Assets/icons/2-red.svg"
                  alt=""
                />
                <div className="domaine">
                  <span className="icon-d">
                    {" "}
                    <img src="/Assets/icons/car-icon2.svg" alt="" />{" "}
                  </span>
                  <span className="text-d">Marketing Division</span>
                </div>
              </Col>
              <Col md={24} lg={24} className="domain">
                <img
                  className="domain-num"
                  src="/Assets/icons/3-red.svg"
                  alt=""
                />
                <div className="domaine">
                  <span className="icon-d">
                    {" "}
                    <img src="/Assets/icons/car-icon3.svg" alt="" />{" "}
                  </span>
                  <span className="text-d">
                    Infrastructure & Licensing Division
                  </span>
                </div>
              </Col>
            </Col>

            <Col md={24} lg={12}>
              <Col md={24} lg={24} className="domain">
                <img
                  className="domain-num move"
                  src="/Assets/icons/4-red.svg"
                  alt=""
                />
                <div className="domaine">
                  <span className="icon-d">
                    {" "}
                    <img src="/Assets/icons/car-icon4.svg" alt="" />{" "}
                  </span>
                  <span className="text-d">Product Development Division</span>
                </div>
              </Col>
              <Col md={24} lg={24} className="domain">
                <img
                  className="domain-num move"
                  src="/Assets/icons/5-red.svg"
                  alt=""
                />
                <div className="domaine">
                  <span className="icon-d">
                    {" "}
                    <img src="/Assets/icons/car-icon5.svg" alt="" />{" "}
                  </span>
                  <span className="text-d">Operation Division</span>
                </div>
              </Col>
              <Col md={24} lg={24} className="domain">
                <img
                  className="domain-num move"
                  src="/Assets/icons/6-red.svg"
                  alt=""
                />
                <div className="domaine">
                  <span className="icon-d">
                    {" "}
                    <img src="/Assets/icons/car-icon6.svg" alt="" />{" "}
                  </span>
                  <span className="text-d">Customer Experience Division</span>
                </div>
              </Col>
            </Col>
          </Row>
        </section>
        <section className="section4">
          <h1 className="title center">
            10 mins to complete the job application{" "}
          </h1>
          <Row type="flex" justify="space-between">
            <Col md={24} lg={8} className="stap center stap1">
              <div className="darks">
                <div className="btn dark-btn apple">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://apps.apple.com/us/app/id1519724399"
                    // onClick={() => ReactPixel.trackCustom("AppStore")}
                  >
                    <img src="/Assets/icons/apple-download-icon.svg" alt="" />
                  </a>
                </div>
                <br />
                <div className="btn dark-btn">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://play.google.com/store/apps/details?id=com.convert.app"
                    // onClick={() => ReactPixel.trackCustom("AppStore")}
                  >
                    <img
                      src="/Assets/icons/google-play-download-icon.svg"
                      alt=""
                    />
                  </a>
                </div>
              </div>

              <h1 className="step-txt">Step 1:</h1>
              <p className="des"> Download CONVERT App</p>
            </Col>
            <Col md={24} lg={8} className="stap center stap2">
              <img src="/Assets/img/step-img1.png" alt="" />

              <h1 className="step-txt">Step 2:</h1>
              <p className="des"> Browse through the app </p>
            </Col>
            <Col md={24} lg={8} className="stap center stap3">
              <img src="/Assets/img/step-img2.png" alt="" />
              <h1 className="step-txt">Step 3:</h1>
              <p className="des"> Go to my profile and select “Job”</p>
              <p className="simple">
                You are required to fill in 2 USP of Convert and 2 of your best
                idea how you can increase user acquisition effectively.
              </p>
            </Col>
          </Row>
        </section>

        <section className="section5">
          <div className="have-fun">
            <div className="box-fun">
              <h1 className="white box-text">
                Work hard - Have fun - Create Legacy
              </h1>
              <img
                className="only-desktop"
                src="/Assets/img/have-fun.png"
                alt=""
              />
              <img
                className="only-mobile"
                src="/Assets/img/have-fun-mob.png"
                alt=""
              />
            </div>
          </div>
          <p className=" bold f18 center">
            Download now to start your new journey !
          </p>

          <div className="center">
            <div className="btn dark-btn apple">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://apps.apple.com/us/app/id1519724399"
                // onClick={() => ReactPixel.trackCustom("AppStore")}
              >
                <img src="/Assets/icons/apple-download-icon.svg" alt="" />
              </a>
            </div>
            <div className="btn dark-btn">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.convert.app"
                // onClick={() => ReactPixel.trackCustom("AppStore")}
              >
                <img src="/Assets/icons/google-play-download-icon.svg" alt="" />
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
