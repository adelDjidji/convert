import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Row, Col, Modal } from "antd";
import "../Styles/landing.scss";

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
      className="no-padding"
      style={{width:'100%'}}
      visible={modalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[]}
    >
      <Row>
        <Col span={12}>
            <h2 className="sub-title">3 mins to Convert your monthly to bills to <span className="blue">EXTRA</span>  Cash
            </h2>
            <div className="card-h">
                <div className="card-h-cover cover1"></div>
                <div className="card-h-content">
                    <h1 className="card-h-title">Convert Your <span className="blue">Installment</span>
                     To Cash</h1>
                    <span className="card-h-tags">Condo | Parking | Security Fees</span>
                </div>

            </div>
        </Col>
        <Col span={12}>
          <img src="/Assets/img/landing-modal-img.svg" alt="" />
        </Col>
      </Row>
    </Modal>
  );
  return (
    <div className="landing">
      <Navbar />
      <MyModal />
      <section className="section1">
        <Row>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <h1 className="title">
              <b>Convert</b> your <b>“Business”</b>
              monthly bills to <b>EXTRA cash</b>
            </h1>
            <p>
              Sign up Now to “CONVERT” your monthly fixed bills payment into
              earnings and enjoy unlimited cloud storage (Digitise your bills)
              with monthly cash flow monitoring tools.
            </p>
            {black_btns}
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <img src="/Assets/img/landing-section1.svg" alt="" />
          </Col>
        </Row>
      </section>
      <section className="section2">
        <Row className="space-bottom lg">
          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            <div className="center">
              <img src="/Assets/icons/wallet-icon-blue.svg" alt="" />
              <p>Up to 45 Days Free Credit</p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            <div className="center">
              <img src="/Assets/icons/safety.svg" alt="" />
              <p>Easy, Fast & Secured</p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            <div className="center">
              <img src="/Assets/icons/bill-blue.svg" alt="" />
              <p>Unlimited Bill Storage</p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            <div className="center">
              <img src="/Assets/icons/convertor.svg" alt="" />
              <p>Monthly Cash Convertor Assistant</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={24} md={12}>
            <img src="/Assets/img/block-2-img.svg" alt="" />
          </Col>
          <Col sm={24} md={12}>
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
            <div className="video-frame">
              <img
                className="play-icon"
                src="/Assets/icons/video-play.svg"
                alt=""
              />
              <img src="/Assets/img/block-2-img-video.svg" alt="" />
            </div>
          </Col>
        </Row>
      </section>
      <section className="section3 center">
        <h1 className="title-medium">Rental = Extra Cash </h1>
        <p className="sub-title">
          Convert your Rental to Extra Cash while paying your rental every month
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

        <Row className="cards space-top lg">
          <Col sm={12} md={6}>
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
          <Col sm={12} md={6}>
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
          <Col sm={12} md={6}>
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
          <Col sm={12} md={6}>
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
        <Row className="space-bottom space-top lg">
          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            <div className="center">
              <img src="/Assets/icons/wallet-red.svg" alt="" />
              <p>Up to 45 Days Free Credit</p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            <div className="center">
              <img src="/Assets/icons/safety-red.svg" alt="" />
              <p>Easy, Fast & Secured</p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            <div className="center">
              <img src="/Assets/icons/bill-red.svg" alt="" />
              <p>Unlimited Bill Storage</p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            <div className="center">
              <img src="/Assets/icons/convertor-red.svg" alt="" />
              <p>Monthly Cash Convertor Assistant</p>
            </div>
          </Col>
        </Row>
        <div className="right">
          <button onClick={showModal} className="btn btn-red">
            more details
          </button>
          <p className="simple space-top" style={{ paddingInlineStart: "34%" }}>
            <span className="bold blue">CONVERT</span> is designed for users to
            convert their monthly fixed bills to new form of cash. Find out more
            of our service{" "}
          </p>
        </div>
      </section>
    </div>
  );
}
