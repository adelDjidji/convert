import React from "react";
import { Row, Col } from "antd";

import NavBar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Head from "next/head";
// import "../Styles/membership.scss";

export default function Membership({}) {
  return (
    <div className="membership-container">
    <Head>
        <title>CONVERT | Membership</title>
      </Head>
      <NavBar mode="dark" className="no-border" icon="blue" />
      <img
        className="visa only-desktop"
        src="/Assets/icons/visacard.svg"
        alt=""
      />

      <Row className="membership-content">
        <h1 className="big-title blue only-mobile em">Membership Benefits</h1>
        <Col xs={24} sm={24} md={24} lg={6} className="move-left">
          <Row className="boxes only-desktop">
            <Col span={24} className="box box-cyan">
              <div className="box-icon center">
                <img src="/Assets/icons/icon-king-gray.svg" alt="" />
              </div>
              <h2 className="box-title">Silver Member</h2>
              <h1 className="poucentage">20%</h1>
              <h4 className="sub-poucentage center bold">Earning</h4>
              <p className="description">
                Continue 6 months usage auto upgrade to Gold <br />
                <br />
              </p>
            </Col>
            <Col span={24} className="box box-blue-light">
              <div className="box-icon center">
                <img src="/Assets/icons/icon-king-gold.svg" alt="" />
              </div>
              <h2 className="box-title">Gold Member</h2>
              <h1 className="poucentage">25%</h1>
              <h4 className="sub-poucentage center bold">Earning</h4>
              <p className="description">
                Continue 6 months usage auto upgrade to Platinum
              </p>
              <br />
              <br />
            </Col>
            <Col span={24} className="box box-blue">
              <div className="box-icon center">
                <img src="/Assets/icons/icon-king-gray.svg" alt="" />
              </div>
              <h2 className="box-title">Platinum Member</h2>
              <h1 className="poucentage">33%</h1>
              <h4 className="sub-poucentage center bold">Earning</h4>
              <p className="description">
                Continue 12 months usage auto upgrade to Diamond
              </p>
              <br />
              <br />
            </Col>
            <Col span={24} className="box box-brown">
              <div className="box-icon center">
                <img src="/Assets/icons/icon-cristal.svg" alt="" />
              </div>
              <h2 className="box-title">Diamond Member</h2>
              <h1 className="poucentage">51%</h1>
              <h4 className="sub-poucentage center bold">Earning</h4>
              <p className="description">
                Continue 12 months usage you will auto upgrade from Platinum to
                Diamond
              </p>
            </Col>
          </Row>
          <Row className="boxes only-mobile">
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
                <Col xs={9} sm={9} md={9} lg={24}>
                  <p className="description">
                    Continue 6 months usage auto upgrade to Gold
                  </p>
                </Col>
                <Col xs={7} sm={7} md={7} lg={0} className="float-right-">
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
                <Col xs={9} sm={9} md={9} lg={24}>
                  {" "}
                  <p className="description">
                    Continue 6 months usage auto upgrade to Platinum
                  </p>
                </Col>
                <Col xs={7} sm={7} md={7} lg={0} className="float-right--">
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
                <Col xs={9} sm={9} md={9} lg={24}>
                  {" "}
                  <p className="description">
                    Continue 12 months usage auto upgrade to Diamond
                  </p>
                </Col>
                <Col xs={7} sm={7} md={7} lg={0} className="float-right--">
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
                <Col xs={10} sm={10} md={10} lg={24}>
                  <p className="description">
                    Continue 12 months usage you will auto upgrade from Platinum
                    to Diamond
                  </p>
                </Col>
                <Col xs={6} sm={6} md={6} lg={0} className="float-right--">
                  <h1 className="poucentage">51%</h1>
                  <h4 className="sub-poucentage bold">Earning</h4>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={24} lg={18} className="space-in-left xxl">
          <h1 className="big-title blue f35 only-desktop">
            Membership Benefits
          </h1>
          <h1
            style={{ maxWidth: "30ch" }}
            className="small-title text-light-shadow f22"
          >
            Transform your good credit into more earning now!
          </h1>
          <p className="simple f15">
            We rethink membership again. Your membership status determine your
            earning from our platform{" "}
          </p>
          <h1
            style={{ maxWidth: "30ch", marginTop: "1.5em" }}
            className="small-title text-light-shadow f22"
          >
            Membership = Earning
          </h1>
          <p className="simple f15">
            Transform your credit in EXTRA earning now! Increase your membership
            status by following the method below
          </p>

          <div className="flows only-desktop">
            <div className="flow-item">
              <p className="flow-item-content flow-blue">
                Membership <br /> Point
              </p>
              <p className="flow-desc">
                Increase <br /> Membership Point
              </p>
              <img src="/Assets/icons/row-flow.svg" alt="" />
            </div>
            <div className="flow-item middle">
              <p className="flow-item-content flow-blue">
                Membership <br /> Level
              </p>
              <p className="flow-desc">
                Increase <br /> Membership Status
              </p>
              <img src="/Assets/icons/row-flow.svg" alt="" />
            </div>
            <div className="flow-item">
              <p className="flow-item-content flow-red">
                Increase <br /> Earning %
              </p>
              <p className="flow-desc">
                Increase Your Earning From
                <br />
                Every Transaction
              </p>
            </div>
          </div>

          <div className="flows only-mobile">
            <Row>
              <Col xs={11} sm={11} md={11} lg={11}>
                <div className="flow-item first" >
                  <p className="flow-item-content flow-blue" style={{ marginLeft: 0}}>
                    Membership <br /> Point
                  </p>
                  <p className="flow-desc" style={{ marginLeft: 0,maxWidth: '15ch'}}>
                    Increase <br /> Membership Point
                  </p>
                  <img src="/Assets/icons/row-flow.svg" alt="" />
                </div>
              </Col>
              <Col xs={11} sm={11} md={11} lg={11}>
                <div className="flow-item middle">
                  <p className="flow-item-content flow-blue" style={{ marginRight: 0}}>
                    Membership <br /> Level
                  </p>
                  <p className="flow-desc" style={{ maxWidth: '15ch', margin: 'auto 0 auto auto'}}>
                    Increase <br /> Membership Status
                  </p>
                  <img src="/Assets/icons/row-flow.svg" alt="" />
                </div>
              </Col>
              <Col xs={24} sm={24} md={24} lg={24} className="flow-taht">
                <div className="flow-item last">
                  <p className="flow-item-content flow-red">
                    Increase <br /> Earning %
                  </p>
                  <p className="flow-desc">
                    Increase Your Earning From
                    <br />
                    Every Transaction
                  </p>
                </div>
              </Col>
            </Row>
          </div>

          <img src="/Assets/img/membership-phones.png" alt="" />
        </Col>
      </Row>

      <Footer />
    </div>
  );
}
