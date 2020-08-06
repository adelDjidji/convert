import React, { useState, useEffect } from "react";
import axios from "axios";
// import ReactPixel from "react-facebook-pixel";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Formik, Field } from "formik";
import Swal from "sweetalert2/dist/sweetalert2.js";

import Texty from "rc-texty";
import { Row, Col, Modal, Spin, Icon } from "antd";

import Head from "next/head";

import imageLanding from "../Components/ImageLanding";

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

const black_btns = (
  <div>
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
        <img src="/Assets/icons/google-play-download-icon.svg" alt="" />
      </a>
    </div>
  </div>
);

export default function Landing() {
  const [modalVisible, setmodalVisible] = useState(false);
  const [videoOn, setvideoOn] = useState(false);
  const [loading, setloading] = useState(false);

  const showModal = () => {
    setmodalVisible(true);
  };

  const handleOk = (e) => {
    console.log(e);
    setmodalVisible(false);
  };

  const handleCancel = (e) => {
    console.log(e);
    setmodalVisible(false);
  };

  const MyModal = () => (
    <Modal
      className="no-padding popup"
      style={{ width: "100%", top: 10 }}
      visible={modalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[]}
    >
      <Row>
        <Col
          xs={0}
          sm={0}
          md={0}
          lg={12}
          xl={12}
          className="modal-bg left-radius flex-center-items only-desktop"
        >
          <h1 className="white title-medium ubuntu">
            We understand your monthly isn’t just rental. We look after most of
            Your monthly fixed bills commitment.
          </h1>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={12}
          xl={12}
          className="modal-right-content"
        >
          <h2 className="sub-title f22 montserrat-medium bold left">
            3 mins to Convert your monthly to bills to{" "}
            <span className="blue"> EXTRA</span> Cash
          </h2>
          <div className="card-h space-top">
            <div className="card-h-cover cover1"></div>
            <div className="card-h-content">
              <h1 className="card-h-title ">
                Convert Your <span className="blue">Installment</span> To Cash
              </h1>
              <span className="card-h-tags">Car | Home Installment</span>
            </div>
          </div>

          <div className="card-h">
            <div className="card-h-cover cover2"></div>
            <div className="card-h-content">
              <h1 className="card-h-title ">
                Convert Your <span className="blue">Education</span> Bills To
                Cash
              </h1>
              <span className="card-h-tags">School | Tuition Fees etc..</span>
            </div>
          </div>
          <div className="card-h">
            <div className="card-h-cover cover3"></div>
            <div className="card-h-content">
              <h1 className="card-h-title ">
                Convert Your <span className="blue"> Service Fees</span> To Cash
              </h1>
              <span className="card-h-tags">
                Condo | Parking | Security Fees
              </span>
            </div>
          </div>
          <div className="space-top md">{black_btns}</div>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={0}
          xl={0}
          className="modal-bg left-radius flex-center-items only-mobile"
        >
          <h1 className="white title-medium ubuntu">
            We understand your monthly isn’t just rental. We look after most of
            Your monthly fixed bills commitment.
          </h1>
        </Col>
      </Row>
    </Modal>
  );

  const playVideo = () => {
    setvideoOn(!videoOn);
    var vid = document.getElementById("myVideo");
    if (vid) {
      vid.play();
    }
  };

  function handlePause() {
    setvideoOn(false);
  }
  return (
    <div id="landing-container" className={`landing`}>
      <Head>
        <title>CONVERT | Need EXTRA Cash this month? Use CONVERT</title>
      </Head>
      <Navbar />
      <MyModal />
      <section className="section1">
        <Row>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div className="title text-light-shadow" style={{ width: "118%" }}>
              <b className="f30" style={{ position: "relative", top: -30 }}>
                <Texty>Dear Entrepreneur</Texty>{" "}
              </b>{" "}
              <b className="inline">
                <Texty delay={600}>Convert </Texty>
                {"  "}
              </b>{" "}
              <span className="inline animate__animatede animate__fadeIn">
                <Texty delay={900}>your</Texty>
              </span>{" "}
              <b className="inline animate__animated animate__flipInY animate__slow delay-3">
                {" "}
                “Business{" "}
              </b>{" "}
              <b className="inline">
                <Texty delay={1900} duration={100}>
                  Rental”
                </Texty>{" "}
              </b>{" "}
              <span className="inline animate__animated animate__fadeIn">
                {" "}
                <Texty delay={1900} duration={100}>
                  to
                </Texty>
              </span>{" "}
              <b className="inline animate__animated animate__flipInY delay-5 animate__slow">
                EXTRA cash
              </b>
            </div>
            <p className="white animate__animated animate__fadeInDown animate__delay-4s space-in-top space-in-bottom md">
              Sign up Now to “CONVERT” your monthly fixed bills payment into
              earnings and enjoy unlimited cloud storage (Digitise your bills)
              with monthly cash flow monitoring tools.
            </p>
            <div className="only-desktop">
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
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            className="right space-in-right animate__animated animate__bounceInRight animate__delay-1s"
          >
            {imageLanding}
            <img
              src="/Assets/img/landing-img-hi-res.png"
              alt=""
              className="only-mobile img-landing"
            />
          </Col>
          <Col xs={12} sm={12} md={12} lg={0} xl={0}>
            <div className="only-mobile">
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
      <section className="section2">
        <Row
          className="row-options space-bottom lg flex"
          // data-aos="fade-down"
          // data-aos-delay="500"
          type="flex"
          justify="space-between"
        >
          <Col xs={12} sm={12} md={12} lg={4} xl={4}>
            <div className="center item-option">
              <img src="/Assets/icons/wallet-icon-blue.svg" alt="" />
              <p>Up to 45 Days Free Credit</p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={4} xl={4}>
            <div className="center item-option">
              <img src="/Assets/icons/safety.svg" alt="" />
              <p>Easy, Fast & Secured</p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={4} xl={4}>
            <div className="center item-option">
              <img src="/Assets/icons/bill-blue.svg" alt="" />
              <p>Unlimited Bill Storage</p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={4} xl={4}>
            <div className="center item-option">
              <img src="/Assets/icons/convertor.svg" alt="" />
              <p>Monthly Cash Convertor Assistant</p>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={0} xl={0}>
            <div className="center">
              <img src="/Assets/icons/visa-mastercard.svg" alt="" />
            </div>
          </Col>
          <div className="center only-desktop">
            <img
              className="visa"
              style={{ marginTop: -13 }}
              src="/Assets/icons/visa-mastercard.svg"
              alt=""
            />
          </div>
        </Row>
        <Row>
          <Col xs={24} sm={24} md={12} data-aos="fade-right--">
            <img className="flying" src="/Assets/img/block-2-img.png" alt="" />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={12}
            className="space-top lg introduce"
            data-aos="fade-right--"
          >
            <h1 className="title-medium">
              <Texty type="scaleBig" mode="smooth" duration={1000}>
                Introducing
              </Texty>
            </h1>
            <p className="justify">
              <img
                className="icon light-shadow"
                src="/Assets/icons/Logo A - colour.png"
                alt=""
              />
              completely rethink everything about internet & traditional
              economy’s value creation. We choose to help user to ease their
              monthly fixed payment pain point. We combined the internet economy
              & traditional economy as one. Where Users will gain two (2)
              benefits from one transaction. Our platform has enabled and
              simplified it so to be seamless to you.
            </p>
            <div className="video-frame center">
              <div className="video-frame-icon">
                {!videoOn && (
                  <img
                    onClick={playVideo}
                    className="play-icon"
                    src="/Assets/icons/red-play.png"
                    alt=""
                  />
                )}
              </div>
              {!videoOn ? (
                <img src="/Assets/img/block-2-img-video.png" alt="" />
              ) : (
                <video autoPlay controls id="myVideo" onPause={handlePause}>
                  <source
                    src="/Assets/ConvertIntroVideoV5.3.mp4"
                    type="video/mp4"
                  ></source>
                </video>
              )}
            </div>
          </Col>
        </Row>
      </section>
      <section className="section3 center">
        <div>
          <h1 className="title-medium ">Rental = Extra Cash </h1>
        </div>

        <div>
          <p className="sub-title limit-width line-space lg">
            Convert your Rental to Extra Cash while paying your rental every
            month
          </p>
          <p className="f20 gotham-pro line-space lg">
            Rental is an unavoidable monthly fixed expenses to all types of
            businesses as well as individual.
            <img
              className="icon small"
              src="/Assets/icons/Logo A - colour.png"
              alt=""
            />{" "}
            created an incredible benefits for you to gain more every month from
            your rental{" "}
          </p>
        </div>
        <Row className="cards space-top lg" data-aos="fade-down" type="flex">
          <Col xs={12} sm={12} md={12} lg={6} className="mob-space-bottom">
            <div className="card">
              <div className="card-cover cover1"></div>
              <div className="card-content">
                <h1 className="card-title">Office</h1>
                <ul className="card-list">
                  <li>Startup</li>
                  <li>Co-Working</li>
                  <li>Small & Medium office</li>
                  <li>Shop House</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} className="mob-space-bottom">
            <div className="card">
              <div className="card-cover cover2"></div>
              <div className="card-content">
                <h1 className="card-title">Retail</h1>
                <ul className="card-list">
                  <li>Fashion, Sport, Footwear, Cosmetic Boutique etc...</li>
                  <li>Restaurant, Bakery, Cafe, Food</li>
                  <li>Electronic, Computer, Gadget etc...</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} className="mob-space-bottom">
            <div className="card">
              <div className="card-cover cover3"></div>
              <div className="card-content">
                <h1 className="card-title">Kiosk</h1>
                <ul className="card-list">
                  <li>Juice Store, Snack Store</li>
                  <li>Accessories, Gadget</li>
                  <li>Quick Service, Flower store</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} className="mob-space-bottom">
            <div className="card">
              <div className="card-cover cover4"></div>
              <div className="card-content">
                <h1 className="card-title">Residential</h1>
                <ul className="card-list">
                  <li>Condominium, Apartment</li>
                  <li>Landed Property</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
        <Row
          className="space-bottom space-top lg flex"
          type="flex"
          justify="space-between"
        >
          <Col xs={11} sm={12} md={12} lg={6} xl={6}>
            <div
              className="center item-option red space-top"
              data-aos="fade-right"
            >
              <img src="/Assets/icons/wallet-red.svg" alt="" />
              <p className="gotham bold gray large-line">
                Up to 45 Days Free Credit
              </p>
            </div>
          </Col>
          <Col xs={11} sm={12} md={12} lg={6} xl={6}>
            <div
              className="center item-option red space-top"
              data-aos="fade-right"
            >
              <img src="/Assets/icons/safety-red.svg" alt="" />
              <p className="gotham bold gray large-line">
                Easy, Fast & Secured
              </p>
            </div>
          </Col>
          <Col xs={11} sm={12} md={12} lg={6} xl={6}>
            <div
              className="center item-option red space-top"
              data-aos="fade-left"
            >
              <img src="/Assets/icons/bill-red.svg" alt="" />
              <p className="gotham bold gray large-line">
                Unlimited Bill Storage
              </p>
            </div>
          </Col>
          <Col xs={11} sm={12} md={12} lg={6} xl={6}>
            <div
              className="center item-option red space-top"
              data-aos="fade-left"
            >
              <img src="/Assets/icons/convertor-red.svg" alt="" />
              <p className="gotham bold gray large-line">
                Monthly Cash Convertor Assistant
              </p>
            </div>
          </Col>
        </Row>
        <div className="right">
          <button onClick={showModal} className="btn btn-red">
            more details
          </button>
          <p
            className="simple space-top right gotham-pro"
            style={{ paddingInlineStart: "34%", lineHeight: "27px" }}
          >
            <span className="bold blue">CONVERT</span> is designed for users to
            convert their monthly fixed bills to new form of cash. Find out more
            of our service{" "}
          </p>
        </div>
      </section>
      <section className="section4">
        <Row>
          <Col xs={24} sm={24} md={12} className="">
            <div>
              <h1 className="title-medium space-bottom gotham ">
                Free Credit Extension (FCX){" "}
                <span className="only-desktop">Up to 45 Days</span>{" "}
              </h1>
            </div>

            <div data-aos="fade-right--">
              <ul className="list">
                <li>
                  <div>
                    <div className="list-item-icon red">
                      <img src="/Assets/icons/block-4-icon-1.svg" alt="" />
                    </div>
                  </div>

                  <div className="list-item-text">
                    <strong>Pay with your favourite credit card</strong>

                    <span>
                      Did you know? As long as you are a credit card holder, you
                      are automatically entitled to the “FCX” feature that comes
                      along with your credit card.{" "}
                      <span className="blue bold">“CONVERT”</span> helps you to
                      fully unleash the potential of credit card when you pay
                      your monthly commitment.
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list-item-icon red">
                    <img src="/Assets/icons/refer.svg" alt="" />
                  </div>
                  <div className="list-item-text">
                    <strong>Use now, pay later</strong>

                    <span>
                      Our platform is designed for user to use credit card to
                      make monthly fixed bill payment unlike the usual way. Use
                      your credit card to make your Monthly Fixed Bill Payment
                      (Rental (Office, Retail, Home) & Installment Payment...)
                      using a new internet financial platform{" "}
                      <span className="blue bold">“CONVERT”</span> , online now
                      and enjoy (FCX) FREE CRDIT EXTENSION up to 45 days without
                      any interest incurred
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list-item-icon red">
                    <img src="/Assets/icons/calendar.svg" alt="" />
                  </div>
                  <div className="list-item-text">
                    <strong>Free Credit Extension up to 45 days*</strong>

                    <span>
                      Initiate your payment today at{" "}
                      <span className="blue bold">“CONVERT”</span> , lay back
                      and relax, you only pay the actual bill upon receiving
                      your credit card statement after some time. Easily enjoy
                      your credit extension for up to 45 days
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={12}
            className="center"
            // data-aos="fade-left"
            // data-aos-duration="1000"
          >
            <img
              style={{ maxHeight: 637 }}
              className="flying"
              src="/Assets/img/landing-section-4.png"
              alt=""
            />
          </Col>
        </Row>
      </section>
      <section className="section5 center">
        <div>
          <h1 className="title-medium gotham">Additional Earning</h1>
        </div>

        <p className="simple space-bottom space-top">
          No joining fees, no sign up fees. All default new register users will
          be entitled to be silver membership. Your membership level determines
          your earning each time after you make payment from CONVERT
        </p>
        <Row className="boxes">
          <Col xs={24} sm={24} md={24} lg={6} className="box box-cyan">
            <Row>
              <Col xs={7} sm={7} md={7} lg={24}>
                <div className="box-icon">
                  <img src="/Assets/icons/icon-king-gray.svg" alt="" />
                  <h2 className="box-title">Silver Member</h2>
                </div>
              </Col>
              <Col xs={0} sm={0} md={0} lg={24} className="float-right-">
                <h1 className="poucentage">20%</h1>
                <h4 className="sub-poucentage bold">Earning</h4>
              </Col>
              <Col xs={8} sm={8} md={8} lg={24}>
                <p className="description">
                  Continue 6 months usage auto upgrade to Gold <br />
                  <br />
                </p>
              </Col>
              <Col xs={8} sm={8} md={8} lg={0} className="float-right-">
                <h1 className="poucentage">20%</h1>
                <h4 className="sub-poucentage bold">Earning</h4>
              </Col>
            </Row>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={6}
            className="box box-blue-light"
            data-aos-delay="600"
            data-aos="flip-up"
          >
            <Row>
              <Col xs={7} sm={7} md={7} lg={24}>
                <div className="box-icon">
                  <img src="/Assets/icons/icon-king-gold.svg" alt="" />
                </div>
                <h2 className="box-title">Gold Member</h2>
              </Col>
              <Col xs={0} sm={0} md={0} lg={24} className="float-right--">
                <h1 className="poucentage">25%</h1>
                <h4 className="sub-poucentage bold">Earning</h4>
              </Col>
              <Col xs={8} sm={8} md={8} lg={24}>
                {" "}
                <p className="description">
                  Continue 6 months usage auto upgrade to Platinum
                </p>
                <br />
                <br />
              </Col>
              <Col xs={8} sm={8} md={8} lg={0} className="float-right--">
                <h1 className="poucentage">25%</h1>
                <h4 className="sub-poucentage bold">Earning</h4>
              </Col>
            </Row>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={6}
            className="box box-blue"
            data-aos-delay="900"
            data-aos="flip-up"
          >
            <Row>
              <Col xs={7} sm={7} md={7} lg={24}>
                {" "}
                <div className="box-icon">
                  <img src="/Assets/icons/icon-king-gray.svg" alt="" />
                </div>
                <h2 className="box-title">Platinum Member</h2>
              </Col>
              <Col xs={0} sm={0} md={0} lg={24} className="float-right--">
                <h1 className="poucentage">33%</h1>
                <h4 className="sub-poucentage bold">Earning</h4>
              </Col>
              <Col xs={8} sm={8} md={8} lg={24}>
                {" "}
                <p className="description">
                  Continue 12 months usage auto upgrade to Diamond
                </p>
                <br />
                <br />
              </Col>
              <Col xs={8} sm={8} md={8} lg={0} className="float-right--">
                <h1 className="poucentage">33%</h1>
                <h4 className="sub-poucentage bold">Earning</h4>
              </Col>
            </Row>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={6}
            className="box box-brown"
            data-aos-delay="1200"
            data-aos="flip-up"
          >
            <Row>
              <Col xs={7} sm={7} md={7} lg={24}>
                <div className="box-icon">
                  <img src="/Assets/icons/icon-cristal.svg" alt="" />
                </div>
                <h2 className="box-title">Diamond Member</h2>
              </Col>
              <Col xs={0} sm={0} md={0} lg={24} className="float-right--">
                <h1 className="poucentage">51%</h1>
                <h4 className="sub-poucentage bold">Earning</h4>
              </Col>
              <Col xs={8} sm={8} md={8} lg={24}>
                <p className="description">
                  Continue 12 months usage you will auto upgrade from Platinum
                  to Diamond
                </p>
              </Col>
              <Col xs={8} sm={8} md={8} lg={0} className="float-right--">
                <h1 className="poucentage">51%</h1>
                <h4 className="sub-poucentage bold">Earning</h4>
              </Col>
            </Row>
          </Col>
        </Row>
        <img className="grid-image" src="/Assets/img/dots-grid.svg" alt="" />
        <Row className="space-top lg">
          <Col
            xs={0}
            sm={0}
            md={0}
            lg={6}
            data-aos-delay="300"
            data-aos="fade-right"
          >
            <img
              className="flying only-desktop"
              src="/Assets/img/Group 49.png"
              alt=""
            />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={6}
            data-aos-delay="300"
            data-aos="fade-right"
          >
            <h1 className="gothma bold space-top lg f25 left line-space lg32">
              How to Gain Membership Point
            </h1>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={0}
            data-aos-delay="300"
            data-aos="fade-right"
          >
            <img
              className="flying"
              src="/Assets/img/group49- mobile.png"
              alt=""
            />
          </Col>
          <Col
            xs={0}
            sm={0}
            md={0}
            lg={6}
            data-aos-delay="300"
            data-aos="fade-left"
          >
            <img className="flying" src="/Assets/img/Group 30@2x.png" alt="" />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={6}
            data-aos-delay="300"
            data-aos="fade-left"
          >
            <h1 className="gotham bold space-top lg f25 left line-space lg32 title2">
              Transform your good credit into more earning now!
            </h1>
          </Col>
        </Row>
        <div className="right space-top" style={{ marginBottom: 15 }}>
          <button className="btn btn-red">more details</button>
        </div>
        <Row type="flex" justify="space-around">
          <Col xs={24} sm={24} md={24} lg={9}>
            <h1 className="gotham bold text-light-shadow space-bottom lg f25 memb">
              Membership Fees
            </h1>
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
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={10}
            style={{ marginTop: 75 }}
            data-aos-delay="800"
            data-aos="fade-left"
            className="download-div"
          >
            <p className="med bold small-height text-light-shadow dark-gray mins">
              {" "}
              <span className="red2">Download now! 24 Months Free!</span>
              <br />
              “3 Mins to convert your monthly bills to cash”{" "}
            </p>
            {black_btns}
          </Col>
        </Row>
      </section>
      <section className="section6">
        <h1 className="gotham bold f32 center section-title only-desktop">
          Enjoy The Benefits Below
        </h1>

        <Row className="space-top" type="flex" justify="space-around">
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={10}
            xl={10}
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <img className="flying" src="/Assets/img/block6-img.svg" alt="" />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={11}
            xl={11}
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <h1 className="gotham bold f32 center section-title only-mobile">
              Enjoy The Benefits Below
            </h1>
            <ul className="list" style={{ maxWidth: "53ch" }}>
              <li>
                <div>
                  <div className="list-item-icon white">
                    <img src="/Assets/img/converter-solid-blue.svg" alt="" />
                  </div>
                </div>

                <div className="list-item-text">
                  <strong className="f18">
                    Convert to <span className="blue bold f18">“CONVERT”</span>{" "}
                    and Earn Monthly
                  </strong>
                  <br />
                  <span>
                    <span className="blue bold f14">“CONVERT”</span> helps users
                    to earn from every monthly fixed bills. Now you can convert
                    your monthly payment to new form of cash.
                  </span>
                </div>
              </li>
              <li>
                <div>
                  <div className="list-item-icon white">
                    <img src="/Assets/img/calendar-solid-blue.svg" alt="" />
                  </div>
                </div>

                <div className="list-item-text">
                  <strong>Free Credit Extension (FCX) up to 45 days* </strong>
                  <br />
                  <span>
                    With the amazing “FCX” feature, you can now free up your
                    cash flow and enhance your personal financing Power{" "}
                  </span>
                </div>
              </li>
              <li>
                <div>
                  <div className="list-item-icon white">
                    <img src="/Assets/img/bonus-solid-blue.svg" alt="" />
                  </div>
                </div>

                <div className="list-item-text">
                  <strong className="sm">Double Bonus</strong>
                  <br />
                  <span>
                    At <span className="blue bold f14">“CONVERT”</span> , you
                    get double! From the traditional credit card benefits
                    (Cashback and AirMiles Point) and earn EXTRA cash from your
                    regular monthly commitments.
                  </span>
                </div>
              </li>
            </ul>
            <div className="space-top right">
              <button className="btn btn-red">more details</button>
            </div>
          </Col>
        </Row>
      </section>
      <section className="section7">
        <Row type="flex" justify="space-around">
          <Col
            xs={0}
            sm={0}
            md={0}
            lg={12}
            data-aos-delay="900"
            data-aos="fade-down"
          >
            <img
              className="flying main"
              src="/Assets/img/image-black-man.png"
              alt=""
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={11}>
            <div>
              <h1 className="f35 white gotham section-title">
                Not ready to make any payment now?{" "}
              </h1>
            </div>

            <ul className="list">
              <li
                className="no-margin"
                data-aos-delay="1200"
                data-aos="fade-down"
              >
                <div>
                  <div className="list-item-icon white">
                    <img src="/Assets/icons/upload-gree.svg" alt="" />
                  </div>
                </div>

                <div className="list-item-text white">
                  <span className="white gotham-pro f20 no-margin">
                    Upload your bill to
                    <img
                      className="icon light-shadow"
                      style={{ height: 30, marginBottom: "6pt" }}
                      src="/Assets/icons/Logo A - white.png"
                      alt=""
                    />
                    Cloud Storage, you will still get{" "}
                    <span className="text-ronded-red animate__animated animate__flash">
                      10%
                    </span>{" "}
                    Earning from your bill amount.
                  </span>
                  <p className="bold f28 white no-margin">or</p>
                </div>
              </li>
              <li
                className="flex-center-items"
                data-aos-delay="1600"
                data-aos="fade-down"
              >
                <div>
                  <div className="list-item-icon white">
                    <img src="/Assets/icons/dollar-red.svg" alt="" />
                  </div>
                </div>

                <div className="list-item-text white">
                  <span className="white gotham-pro f20 no-margin">
                    Earn{" "}
                    <span className="text-ronded-red animate__animated animate__flash">
                      20%
                    </span>{" "}
                    when you make payment.
                  </span>
                </div>
              </li>
            </ul>

            <p
              className="gotham-pro text-light-shadow red2 f22"
              style={{ marginBottom: 6 }}
            >
              Early bird sign up! 24 months free
            </p>
            <p className="gotham bold f18 white">
              Don’t hesistate,{" "}
              <a className="white" href="">
                DOWNLOAD NOW
              </a>
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
          <Col xs={24} sm={24} md={24} lg={0} className="main-col">
            <img src="/Assets/img/block7-img.svg" alt="" />
          </Col>
        </Row>
      </section>
      <section className="section8">
        <Row type="flex" justify="space-around" className="flex-center-items">
          <Col xs={24} sm={24} md={24} lg={9}>
            <h1 className="bold f30 gotham dark-gray">
              To know more about our news and updates, please subscribe now{" "}
            </h1>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} className="right">
            <Formik
              initialValues={{}}
              onSubmit={async (values, { resetForm }) => {
                try {
                  if (values.email) {
                    setloading(true);
                    await axios({
                      url: "https://api.sendgrid.com/v3/marketing/contacts",
                      method: "PUT",
                      headers: {
                        Authorization:
                          "Bearer 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",
                        "content-type": "application/json",
                      },
                      data: {
                        contacts: [values],
                      },
                    }).then((response) => {
                      setloading(false);
                      Swal.fire({
                        title: "Successfully subscribed!",
                        text: "Thank you for subscribing",
                        icon: "success",
                        confirmButtonText: "OK",
                      });
                    });

                    resetForm({});
                  }
                } catch (e) {
                  console.log(e);
                }
              }}
              render={(formProps) => (
                <>
                  <Field
                    className="material-input"
                    type="email"
                    placeholder="Your email"
                    name="email"
                  />
                  <button
                    className="btn btn-blue"
                    onClick={() => formProps.handleSubmit()}
                    disabled={loading}
                  >
                    {loading && (
                      <Spin style={{ marginRight: 19 }} indicator={antIcon} />
                    )}
                    subscribe
                  </button>
                </>
              )}
            />
          </Col>
        </Row>
      </section>
      <Footer />
    </div>
  );
}
