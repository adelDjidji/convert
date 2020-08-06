import React from "react";
import { Row, Col } from "antd";
// import ReactPixel from "react-facebook-pixel";

import NavBar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Head from "next/head";
// import "../Styles/bill.scss";

export default function InstantBill({}) {
  return (
    <div className="bill-container">
    <Head>
    <title>CONVERT | Instant Bill Scanning</title>
  </Head>
      <NavBar mode="white" className="no-border" />
      <div className="bill-header">
        <di className="title-container">
          <h1 className="header-title">
            Instant Bill Scanning & storage with our mobile app
          </h1>

          <p className="simple white">
            Our App helps user stay up to date with their monthly bills (Rental,
            Utility, Installment, etc..) no more paper, easy tracking, monthly
            cash flow management Tools. All you need to do is just scan and
            store.
          </p>
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
              <img
                style={{ maxHeight: 530 }}
                src="/Assets/img/bill-section2.png"
                alt=""
              />
            </Col>
            <Col md={24} lg={12} className="space-in-left">
              <h1 className="big-title left space-top">Digitise your bills</h1>
              <p className="danger">Store in the cloud, NO MORE PAPER! </p>
              <br />
              <p className="simple">
                CONVERT & store your physical bill on cloud. Unlimited Storage.
                Access anytime, anywhere. Embrace the future & transform
                everything to digital.
              </p>
              <p className="simple">
                We aim to become your monthly fixed bill assistant. Not only to
                manage your bill, monthly fixed bill payment, we also helps you
                to enjoy the benefits through the combination of Internet &
                Traditional economy
              </p>
              {
                // <button className="btn btn-blue space-top">more details</button>
              }
            </Col>
          </Row>
        </section>
        <section className="section2 gray with-shama">
          <Row>
            <Col md={24} lg={12} className="space-in-left">
              <h1 className="big-title left space-top">
                Cash Flow Management Chart
              </h1>
              <br />
              <p className="simple">
                We integrated many user friendly graphic chart for you to have
                better overview of your Present, past and future monthly cash
                flow. Don’t forget, we have up to 45 days free credit extension
                feature for all the credit card owners. You can enhance your
                cash flow every month without borrowing from anyone.
              </p>

              {
                // <button className="btn btn-red space-top">more details</button>
              }
            </Col>
            <Col md={24} lg={12} className="">
              <img src="/Assets/img/bill-section2-.png" alt="" />
            </Col>
          </Row>
        </section>
        <section className="section3">
          <Row>
            <Col md={24} lg={7} className="">
              <img src="/Assets/img/bill-section3-img-1.png" alt="" />
            </Col>
            <Col md={24} lg={10} className="space-in-left space-in-right md">
              <h1 className="big-title space-top lg center">
                Bill Payment Tracker
              </h1>
              <br />
              <p className="simple center">
                Never miss payment again. All in one place. When you make your
                payment on time, you will increase your credit scoring. Our
                platform helps everyone to achieve more than triple benefits at
                once.
              </p>
            </Col>
            <Col md={24} lg={7} className="">
              <img src="/Assets/img/bill-section3-2.png" alt="" />
            </Col>
          </Row>
        </section>
        <section className="section4 gray">
          <Row>
            <Col md={24} lg={12} className="">
              <img src="/Assets/img/bill-section4.svg" alt="" />
            </Col>
            <Col md={24} lg={12} className=" space-in-right lg">
              <h1 className="big-title left space-top">
                See everything as it happenes
              </h1>
              <br />
              <p className="simple">
                <b className="blue">“CONVERT”</b> automatically updates and
                categories your bills. We’ll crunch the numbers as they happen
                so you know where you stand.
              </p>

              {
                // <button className="btn btn-red space-top sm">more details</button>
              }
            </Col>
          </Row>
        </section>

        <section className="section5 blue">
          <Row>
            <Col xs={0} sm={0} md={0} lg={12} className="move-left">
              <img src="/Assets/img/image-black-man.png" alt="" />
            </Col>
            <Col md={24} lg={12} className=" space-in-right lg">
              <h1 className="big-title left space-top white ">
                Download
                <img
                  className="logo-med"
                  src="/Assets/icons/Logo A - white.png"
                  alt=""
                />
              </h1>
              <br />
              <p className="simple white">
                Download Convert to experience our interactive “Cost & Earning
                calculator” simulator. We build the best tools for you to manage
                your monthly cash flow.
              </p>

              <p
                className="gotham-pro text-light-shadow red2 f19 only-desktop"
                style={{ marginBottom: 6 }}
              >
                Early bird sign up! 24 months free
              </p>

              <div style={{ paddingBottom: 40 }}>
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
            <Col xs={24} sm={24} md={24} lg={12} className="move-left">
              <img src="/Assets/img/image-black-man.png" alt="" />
            </Col>
          </Row>
        </section>
      </div>

      <Footer />
    </div>
  );
}
