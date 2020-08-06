import React from "react";
import { Row, Col } from "antd";
// import ReactPixel from "react-facebook-pixel";

import NavBar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Head from "next/head";
// import "../Styles/EarningCalculator.scss";

export default function EarningCalculator({}) {
  return (
    <div id="main-app" className="calculator-container">
    <Head>
        <title>CONVERT | Cost & Earning Calculator</title>
      </Head>
      <NavBar mode="dark" className="no-border" icon="blue" />
      <Row className="calculator-header">
        <h1 className="big-title blue with-grid only-mobile">
          Cost & Earning Calculator
        </h1>
        <Col md={24} lg={12} className="space-bottom">
          <img
            style={{ maxWidth: 570 }}
            src="/Assets/img/earning-calculator-img.png"
            alt=""
          />
        </Col>
        <Col md={24} lg={12} className="space-in-left lg">
          <h1 className="big-title blue with-grid only-desktop">
            Cost & Earning Calculator
          </h1>
          <img
            className="grid only-desktop"
            src="/Assets/img/grid.png"
            alt=""
          />
          <p className="simple md">
            We’ve built this instant illustration tools to let you understand
            how much you will get (Cash Point) from your transaction as well as
            in long term basis (6, 12 Months).
          </p>

          <p className="simple lg">
            Download <b className="bold blue">“CONVERT”</b> now and experience a
            new breakthrough platform just designed to enhance your lifestye.{" "}
          </p>
        </Col>
      </Row>
      <section className="section2" id="double-bonus">
        <Row className="images-panels">
          <Col xs={24} sm={24} md={24} lg={12}>
            {" "}
            <h1 className="title sp">GENERAL CREDIT CARD REWARDS</h1>
            <div className="panel-image">
              <Row>
                <Col xs={8} sm={8} md={8} lg={8} className="image image1"></Col>
                <Col xs={8} sm={8} md={8} lg={8} className="image image2"></Col>
                <Col xs={6} sm={6} md={6} lg={8} className="image image3"></Col>
              </Row>
            </div>
            <p className="note">
              *credit card reward is solely depending on your credit card reward
              & loyalty scheme
            </p>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} className="center">
            <h1 className="title">CONVERT's Cash Point</h1>
            <div className="panel-image2 center">
              <h1 className="welcome">Welcome to</h1>
              <div className="red-box">
                <img src="/Assets/icons/shop-icon.png" alt="" />
                <img src="/Assets/icons/wallet-icon.png" alt="" />
                <img src="/Assets/icons/bills-icon.png" alt="" />
                <span>
                  <b>Cash-Free</b>
                  <p className="kan">Mall</p>
                </span>
              </div>
              <h1 className="white sub">
                It’s not the same but it’s just a beginning
              </h1>
              <div className="blue-box">
                ‘’IT’S EXCLUSIVE FOR OUR MEMBERS, LET’S SHOP IT!’’ IT’S FREE
              </div>
            </div>
            <button className="btn btn-red pro">FIND OUT MORE</button>
          </Col>
        </Row>
      </section>
      <section className="section3 gray">
        <Row>
          <Col xs={24} sm={24} md={24} lg={12}>
            <h1 className="title-medium">What You Get:</h1>
            <ul className="bill">
              <li>Digital Bill Storage (No more paper)</li>
              <li>Unlimited Storage</li>
              <li>Bill Payment Tracker</li>
              <li>Bill Payment Alert</li>
              <li>Cash Flow Management Chart</li>
              <li>Free credit extension*</li>
              <li>Double bonus</li>
              <li>Credit Card Points + Cash Point Earning</li>
              <li>Live chat support</li>
              <li>24/7 access to your data via the cloud</li>
            </ul>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12}>
            <h1 className="title-medium center">Membership Fees</h1>
            <div
              className="sold-box"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-ddelay="1000"
            >
              <h1 className="sold-title bold red fonce f30 text-light-shadow">
                24 Months free
              </h1>
              <h3 className="desc text-light-shadow">Early Bird Sign Up! </h3>
              <span className="old-price blue text-light-shadow">
                <span className="unit bold f20">$</span>
                <span className="number f35 bold ">9.90</span>
                <span className="per f18">/ 12 months</span>
              </span>
            </div>
            <div className="center space-top md">
              <p className="med bold small-height text-light-shadow dark-gray mins">
                <span className="red2">Download now! 24 Months Free!</span>
                <br />
                “3 Mins to convert your monthly <br /> bills to cash”{" "}
              </p>
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
          </Col>
        </Row>
      </section>

      <Footer />
    </div>
  );
}
