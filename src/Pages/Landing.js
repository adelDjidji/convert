import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Row, Col, Modal } from "antd";
import "../Styles/landing.scss";
import "../Styles/landing-respo.scss";

const black_btns = (
  <div>
    <div className="btn dark-btn">
      <span>
        <img src="/Assets/icons/appleicon.svg" alt="" />
        <span className="small">Download on the</span>
        <img src="/Assets/icons/appstore.svg" alt="" />
      </span>
    </div>
    <div className="btn dark-btn">
      <img src="/Assets/icons/googleplayicon.svg" alt="" />
      <span className="small">GET IT ON</span>
      <img src="/Assets/icons/googleplay.svg" alt="" />
    </div>
  </div>
);

export default function Landing() {
  const [modalVisible, setmodalVisible] = useState(false);
  const [modalVideoVisible, setmodalVideoVisible] = useState(false);

  const showModal = () => {
    setmodalVisible(true);
  };
  const showModalVideo = () => {
    setmodalVideoVisible(true);
  };

  const handleOk = (e) => {
    console.log(e);
    setmodalVisible(false);
  };

  const handleCancel = (e) => {
    console.log(e);
    setmodalVisible(false);
  };
  const handleCancelVideo = (e) => {
    console.log(e);
    setmodalVideoVisible(false);
  };

  const MyModal = () => (
    <Modal
      className="no-padding"
      style={{ width: "100%" }}
      visible={modalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[]}
    >
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} className="modal-right-content">
          <h2 className="sub-title f22 montserrat-bold bold left">
            3 mins to Convert your monthly to bills to
            <span className="blue">EXTRA</span> Cash
          </h2>
          <div className="card-h space-top">
            <div className="card-h-cover cover1"></div>
            <div className="card-h-content">
              <h1 className="card-h-title ">
                Convert Your <span className="blue">Installment</span>
                To Cash
              </h1>
              <span className="card-h-tags">
                Condo | Parking | Security Fees
              </span>
            </div>
          </div>
          <div className="card-h">
            <div className="card-h-cover cover2"></div>
            <div className="card-h-content">
              <h1 className="card-h-title ">
                Convert Your <span className="blue">Education</span>
                Bills To Cash
              </h1>
              <span className="card-h-tags">
                Condo | Parking | Security Fees
              </span>
            </div>
          </div>
          <div className="card-h">
            <div className="card-h-cover cover3"></div>
            <div className="card-h-content">
              <h1 className="card-h-title ">
                Convert Your <span className="blue"> Service Fees</span>
                To Cash
              </h1>
              <span className="card-h-tags">
                Condo | Parking | Security Fees
              </span>
            </div>
          </div>
          <div style={{ marginBlockStart: 30 }}>{black_btns}</div>
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} className="modal-bg"></Col>
      </Row>
    </Modal>
  );
  const VideoModal = () => (
    <Modal
      className="no-padding modal-video"
      style={{ width: "100%", top: 10 }}
      visible={modalVideoVisible}
      onCancel={handleCancelVideo}
      footer={[]}
    >
      <video autoPlay controls>
        <source
          src="/Assets/ConvertIntroVideoV5.3.mp4"
          type="video/mp4"
        ></source>
      </video>
    </Modal>
  );
  return (
    <div className="landing">
      <Navbar />
      <MyModal />
      <VideoModal />
      <section className="section1">
        <Row>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <h1 className="title text-light-shadow">
              <b>Convert</b> your <b>“Business” </b>
              monthly bills to <b>EXTRA cash</b>
            </h1>
            <p>
              Sign up Now to “CONVERT” your monthly fixed bills payment into
              earnings and enjoy unlimited cloud storage (Digitise your bills)
              with monthly cash flow monitoring tools.
            </p>
            <div className="only-desktop">
              <div className="btn dark-btn">
                <span>
                  <img src="/Assets/icons/appleicon.svg" alt="" />
                  <span className="small">Download on the</span>
                  <img src="/Assets/icons/appstore.svg" alt="" />
                </span>
              </div>
              <div className="btn dark-btn">
                <img src="/Assets/icons/googleplayicon.svg" alt="" />
                <span className="small">GET IT ON</span>
                <img src="/Assets/icons/googleplay.svg" alt="" />
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <img src="/Assets/img/landing-section1.svg" alt="" />
          </Col>
          <Col xs={12} sm={12} md={12} lg={0} xl={0}>
            <div className="only-mobile">
              <div className="btn dark-btn">
                <span>
                  <img src="/Assets/icons/appleicon.svg" alt="" />
                  <span className="small">Download on the</span>
                  <img src="/Assets/icons/appstore.svg" alt="" />
                </span>
              </div>
              <div className="btn dark-btn">
                <img src="/Assets/icons/googleplayicon.svg" alt="" />
                <span className="small">GET IT ON</span>
                <img src="/Assets/icons/googleplay.svg" alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </section>
      <section className="section2">
        <Row className="space-bottom lg flex">
          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            <div
              className="center item-option"
              data-aos="fade-right"
              data-aos-delay="500"
            >
              <img src="/Assets/icons/wallet-icon-blue.svg" alt="" />
              <p>Up to 45 Days Free Credit</p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            <div
              className="center item-option"
              data-aos="fade-right"
              data-aos-delay="500"
            >
              <img src="/Assets/icons/safety.svg" alt="" />
              <p>Easy, Fast & Secured</p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            <div
              className="center item-option"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              <img src="/Assets/icons/bill-blue.svg" alt="" />
              <p>Unlimited Bill Storage</p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            <div
              className="center item-option"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              <img src="/Assets/icons/convertor.svg" alt="" />
              <p>Monthly Cash Convertor Assistant</p>
            </div>
          </Col>
        </Row>
        <Row data-aos="fade-down">
          <Col xs={24} sm={24} md={12}>
            <img className="flying" src="/Assets/img/block-2-img.svg" alt="" />
          </Col>
          <Col xs={24} sm={24} md={12}>
            <h1 className="title-medium">Introduce</h1>
            <p>
              <img
                className="icon small light-shadow"
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
                <img
                  onClick={showModalVideo}
                  className="play-icon"
                  src="/Assets/icons/video-play.svg"
                  alt=""
                />
              </div>

              <img src="/Assets/img/block-2-img-video.svg" alt="" />
            </div>
          </Col>
        </Row>
      </section>
      <section className="section3 center">
        <h1 className="title-medium">Rental = Extra Cash </h1>
        <p className="sub-title">
          Convert your Rental to Extra Cash while <br /> paying your rental
          every month
        </p>
        <p>
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

        <Row
          className="cards space-top lg"
          data-aos="fade-down"
        >
          <Col xs={12} sm={12} md={6}>
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
          <Col xs={12} sm={12} md={6}>
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
          <Col xs={12} sm={12} md={6}>
            <div className="card">
              <div className="card-cover cover3"></div>
              <div className="card-content">
                <h1 className="card-title">Kiosk</h1>
                <ul className="card-list">
                  <li>Juise Store, Snack Store</li>
                  <li>Accessories, Gadget</li>
                  <li>Quick Service, Flower store</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6}>
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
        <Row className="space-bottom space-top lg flex">
          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            <div
              className="center item-option"
              data-aos="fade-right"
              
            >
              <img src="/Assets/icons/wallet-red.svg" alt="" />
              <p className="gotham bold gray large-line">
                Up to 45 Days Free Credit
              </p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            <div
              className="center item-option"
              data-aos="fade-right"
              
            >
              <img src="/Assets/icons/safety-red.svg" alt="" />
              <p className="gotham bold gray large-line">
                Easy, Fast & Secured
              </p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            <div
              className="center item-option"
              data-aos="fade-left"
              
            >
              <img src="/Assets/icons/bill-red.svg" alt="" />
              <p className="gotham bold gray large-line">
                Unlimited Bill Storage
              </p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            <div
              className="center item-option"
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
            className="simple space-top right"
            style={{ paddingInlineStart: "34%" }}
          >
            <span className="bold blue">CONVERT</span> is designed for users to
            convert their monthly fixed bills to new form of cash. Find out more
            of our service{" "}
          </p>
        </div>
      </section>
      <section className="section4">
        <Row>
          <Col
          xs={24}
            sm={24}
            md={12}
            className="space-in-right"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h1 className="title-medium space-bottom gotham">
              Free Credit Extension (FCX) Up to 45 Days
            </h1>
            <ul className="list">
              <li>
                <div>
                  <div className="list-item-icon red">
                    <img src="/Assets/icons/block-4-icon-1.svg" alt="" />
                  </div>
                </div>

                <div className="list-item-text">
                  <strong>Pay with your favourite credit card</strong>
                  <br />
                  <span>
                    Did you know? As long as you are a credit card holder, you
                    are automatically entitled to the “FCX” feature that comes
                    along with your credit card.{" "}
                    <span className="blue">“CONVERT”</span> helps you to fully
                    unleash the potential of credit card when you pay your
                    monthly commitment.
                  </span>
                </div>
              </li>
              <li>
                <div className="list-item-icon red">
                  <img src="/Assets/icons/refer.svg" alt="" />
                </div>
                <div className="list-item-text">
                  <strong>Use now, pay later</strong>
                  <br />
                  <span>
                    Our platform is designed for user to use credit card to make
                    monthly fixed bill payment unlike the usual way. Use your
                    credit card to make your Monthly Fixed Bill Payment (Rental
                    (Office, Retail, Home) & Installment Payment...) using a new
                    internet financial platform “CONVERT”, online now and enjoy
                    (FCX) FREE CRDIT EXTENSION up to 45 days without any
                    interest incurred
                  </span>
                </div>
              </li>
              <li>
                <div className="list-item-icon red">
                  <img src="/Assets/icons/calendar.svg" alt="" />
                </div>
                <div className="list-item-text">
                  <strong>Free Credit Extension up to 45 days*</strong>
                  <br />
                  <span>
                    Initiate your payment today at “CONVERT”, lay back and
                    relax, you only pay the actual bill upon receiving your
                    credit card statement after some time. Easily enjoy your
                    credit extension for up to 45 days
                  </span>
                </div>
              </li>
            </ul>
          </Col>
          <Col xs={24} sm={24} md={12} data-aos="fade-left" data-aos-duration="1000">
            <img className="flying" src="/Assets/img/block-4-img.svg" alt="" />
          </Col>
        </Row>
      </section>
      <section className="section5 center">
        <h1 className="title-medium gotham">Addtional Earning</h1>
        <p className="simple space-bottom space-top">
          No joining fees, no sign up fees. All default new register users will
          be entitled to be silver membership. Your membership level determind
          your earning each time afer you make payment from CONVERT
        </p>
        <Row className="boxes" data-aos="fade-down" data-aos-duration="1000">
          <Col md={24} lg={6} className="box box-cyan">
            <div className="box-icon">
              <img src="/Assets/icons/icon-king-gray.svg" alt="" />
            </div>
            <h2 className="box-title">Silver Member</h2>
            <h1 className="poucentage">20%</h1>
            <h4 className="sub-poucentage bold">Earning</h4>
            <p className="description">
              Continue 6 months usage auto upgrade to Gold
            </p>
          </Col>
          <Col md={24} lg={6} className="box box-blue-light">
            <div className="box-icon">
              <img src="/Assets/icons/icon-king-gold.svg" alt="" />
            </div>
            <h2 className="box-title">Gold Member</h2>
            <h1 className="poucentage">25%</h1>
            <h4 className="sub-poucentage bold">Earning</h4>
            <p className="description">
              Continue 6 months usage auto upgrade to Platinum
            </p>
          </Col>
          <Col md={24} lg={6} className="box box-blue">
            <div className="box-icon">
              <img src="/Assets/icons/icon-king-gray.svg" alt="" />
            </div>
            <h2 className="box-title">Platinum Member</h2>
            <h1 className="poucentage">33%</h1>
            <h4 className="sub-poucentage bold">Earning</h4>
            <p className="description">
              Continue 12 months usage auto upgrade to Diamond
            </p>
          </Col>
          <Col md={24} lg={6} className="box box-brown">
            <div className="box-icon">
              <img src="/Assets/icons/icon-cristal.svg" alt="" />
            </div>
            <h2 className="box-title">Diamond Member</h2>
            <h1 className="poucentage">51%</h1>
            <h4 className="sub-poucentage bold">Earning</h4>
            <p className="description">
              Continue 12 months usage you will auto upgrade from Platinum to
              Diamond
            </p>
          </Col>
        </Row>

        <Row className="space-top lg">
          <Col md={0} lg={6}>
            <img className="flying" src="/Assets/img/block-5-img1.svg" alt="" />
          </Col>
          <Col md={24} lg={6}>
            <h1 className="gothma bold space-top lg f25 left">
              How to Gain Membership Point
            </h1>
          </Col>
          <Col md={24} lg={0}>
            <img className="flying" src="/Assets/img/block-5-img1.svg" alt="" />
            <img className="flying" src="/Assets/img/block5-img2.svg" alt="" />
          </Col>
          <Col md={0} lg={6}>
            <img className="flying" src="/Assets/img/block5-img2.svg" alt="" />
          </Col>
          <Col md={24} lg={6}>
            <h1 className="gotham bold space-top lg f25 left">
              Transform your good credit into more earning now!
            </h1>
          </Col>
        </Row>
        <div className="right space-top">
          <button className="btn btn-red">more details</button>
        </div>
        <Row type="flex" justify="space-around">
          <Col md={24} lg={7}>
            <h1 className="gotham bold text-light-shadow space-bottom f25">
              Membership Fees
            </h1>
            <div
              className="sold-box"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <h1 className="sold-title bold red f30 text-light-shadow">
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
          <Col md={24} lg={9} className="space-top lg">
            <p className="med bold small-height text-light-shadow dark-gray">
              {" "}
              <span className="red">Download now! 24 Months Free!</span>
              <br />
              “3 Mins to convert your monthly bills to cash”{" "}
            </p>
            {black_btns}
          </Col>
        </Row>
      </section>
      <section className="section6">
        <h1 className="gotham bold f32 center">Enjoy The Benefits Below</h1>
        <Row className="space-top">
          <Col xs={24} sm={24} md={24} lg={12} xl={12} data-aos="fade-right" data-aos-duration="2000">
            <img className="flying" src="/Assets/img/block6-img.svg" alt="" />
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12} data-aos="fade-left" data-aos-duration="2000">
            <ul className="list">
              <li>
                <div>
                  <div className="list-item-icon white">
                    <img src="/Assets/img/converter-solid-blue.svg" alt="" />
                  </div>
                </div>

                <div className="list-item-text">
                  <strong>
                    Convert to <span className="blue">“CONVERT”</span> and Earn
                    Monthly
                  </strong>
                  <br />
                  <span>
                    <span className="blue">“CONVERT”</span> helps users to earn
                    from every monthly fixed bills. Now you can convert your
                    monthly payment to new form of cash.
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
                  <strong>Double Bonus</strong>
                  <br />
                  <span>
                    At <span className="blue">“CONVERT”</span> , you get double!
                    From the traditional credit card benefits (Cashback and
                    AirMiles Point) and earn EXTRA cash from your regular
                    monthly commitments.
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
        <Row>
          <Col md={0} lg={12}>
            <img className="flying" src="/Assets/img/block7-img.svg" alt="" />
          </Col>
          <Col md={24} lg={12}>
            <h1 className="f35 white gotham">
              Not ready to make any payment now?{" "}
            </h1>
            <ul className="list">
              <li className="no-margin">
                <div>
                  <div className="list-item-icon white">
                    <img src="/Assets/icons/upload-gree.svg" alt="" />
                  </div>
                </div>

                <div className="list-item-text white">
                  <span className="white gotham-pro f20 no-margin">
                    Upload your bill to
                    <img
                      className="icon small"
                      src="/Assets/icons/Logo A - white.png"
                      alt=""
                    />
                    Cloud Storage, you will still get{" "}
                    <span className="text-ronded-red">10%</span> Earning from
                    your bill amount.
                  </span>
                  <p className="bold f28 white no-margin">or</p>
                </div>
              </li>
              <li className="flex-center-items">
                <div>
                  <div className="list-item-icon white">
                    <img src="/Assets/icons/dollar-red.svg" alt="" />
                  </div>
                </div>

                <div className="list-item-text white">
                  <span className="white gotham-pro f20 no-margin">
                    Earn <span className="text-ronded-red">20%</span> when you
                    make payment.
                  </span>
                </div>
              </li>
            </ul>

            <p className="gotham text-light-shadow red bold f22">
              <i>Early bird sign up! 24 months free</i>
            </p>
            <p className="gotham bold f18 white">
              Don’t hesistate, DOWNLOAD NOW
            </p>
            {black_btns}
          </Col>
          <Col md={24} lg={0}>
            <img src="/Assets/img/block7-img.svg" alt="" />
          </Col>
        </Row>
      </section>
      <section className="section8">
        <Row type="flex" justify="space-around">
          <Col md={24} lg={9}>
            <h1 className="bold f30 gotham dark-gray">
              To know more about our news and updates, please subscribe now{" "}
            </h1>
          </Col>
          <Col
            md={24}
            lg={14}
            data-aos="flip-right"
            data-aos-duration="2000"
            data-aos-delay="1000"
          >
            <input
              className="material-input"
              type="text"
              placeholder="Your email"
            />
            <button className="btn btn-blue">subscribe</button>
          </Col>
        </Row>
      </section>
      <footer className="footer">
        <Row>
          <Col xs={24} sm={24} md={24} lg={6} xl={6}>
            <img
              className="icon small"
              src="/Assets/icons/Logo A - white.png"
              alt=""
            />
            <div className="social">
              <div className="fb flex-center">
                <svg
                  width="10"
                  height="19"
                  viewBox="0 0 10 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.98868 0.753641L6.7795 0.75C4.29755 0.75 2.69361 2.44041 2.69361 5.05677V7.04248H0.472373C0.280432 7.04248 0.125 7.20233 0.125 7.3995V10.2766C0.125 10.4737 0.280609 10.6334 0.472373 10.6334H2.69361V17.8932C2.69361 18.0903 2.84904 18.25 3.04098 18.25H5.93907C6.13101 18.25 6.28644 18.0902 6.28644 17.8932V10.6334H8.88359C9.07553 10.6334 9.23096 10.4737 9.23096 10.2766L9.23202 7.3995C9.23202 7.30483 9.19534 7.21417 9.13029 7.14717C9.06525 7.08017 8.97663 7.04248 8.88447 7.04248H6.28644V5.35917C6.28644 4.55011 6.47413 4.13938 7.50012 4.13938L8.98833 4.13884C9.18009 4.13884 9.33553 3.97899 9.33553 3.782V1.11048C9.33553 0.913671 9.18027 0.754005 8.98868 0.753641Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="insta flex-center">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.75 9.5C0.75 6.46688 0.75 4.95032 1.33176 3.78811C1.86368 2.72546 2.72546 1.86368 3.78811 1.33176C4.95032 0.75 6.46688 0.75 9.5 0.75C12.5331 0.75 14.0497 0.75 15.2119 1.33176C16.2745 1.86368 17.1363 2.72546 17.6682 3.78811C18.25 4.95032 18.25 6.46688 18.25 9.5C18.25 12.5331 18.25 14.0497 17.6682 15.2119C17.1363 16.2745 16.2745 17.1363 15.2119 17.6682C14.0497 18.25 12.5331 18.25 9.5 18.25C6.46688 18.25 4.95032 18.25 3.78811 17.6682C2.72546 17.1363 1.86368 16.2745 1.33176 15.2119C0.75 14.0497 0.75 12.5331 0.75 9.5ZM9.50015 4.8678C6.94193 4.8678 4.8678 6.94193 4.8678 9.50015C4.8678 12.0584 6.94193 14.1325 9.50015 14.1325C12.0584 14.1325 14.1325 12.0584 14.1325 9.50015C14.1325 6.94193 12.0584 4.8678 9.50015 4.8678ZM9.50015 12.3954C7.9043 12.3954 6.60493 11.096 6.60493 9.50015C6.60493 7.90315 7.9043 6.60493 9.50015 6.60493C11.096 6.60493 12.3954 7.90315 12.3954 9.50015C12.3954 11.096 11.096 12.3954 9.50015 12.3954ZM15.0971 4.52034C15.0971 4.86124 14.8208 5.1376 14.4799 5.1376C14.139 5.1376 13.8626 4.86124 13.8626 4.52034C13.8626 4.17943 14.139 3.90308 14.4799 3.90308C14.8208 3.90308 15.0971 4.17943 15.0971 4.52034Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={6} xl={6}>
            <h3 className="white bold Montserrat">COMPANY</h3>
            <ul className="footer-list whi">
              <li>About Convert</li>
              <li>Pricing</li>
              <li>Contact Us</li>
            </ul>
          </Col>
          <Col xs={24} sm={24} md={24} lg={6} xl={6}>
            <h3 className="white bold Montserrat">WHY CHOOSE US</h3>
            <ul className="footer-list whi">
              <li>Fraud & Security</li>
              <li>FAQ</li>
            </ul>
          </Col>
          <Col xs={24} sm={24} md={24} lg={6} xl={6}>
            <h3 className="white bold Montserrat">Legal</h3>
            <ul className="footer-list whi">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </Col>
        </Row>
        <hr />
        <p className="whi center">
          Copyright© 2020 Convert All Rights Reserved
        </p>
      </footer>
    </div>
  );
}
