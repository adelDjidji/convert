import React from "react";
import { Row, Col } from "antd";
// import ReactPixel from "react-facebook-pixel";

import NavBar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Head from "next/head";
// import "../Styles/CashFree.scss";

export default function CashFree({}) {
  return (
    <div className="cf-container">
    <Head>
        <title>CONVERT | Cash-free Mall</title>
      </Head>
      <NavBar mode="white" className="no-border" />
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
      <div className="page-container">
        <section className="section2">
          <div className="div-center">
            <h1>
              EARN from your monthly fixed bill payment and use your earning at
              our CASH-FREE MALL. It’s FREE! Join us now & start enjoying the
              benefits.
            </h1>
          </div>
        </section>
        <section className="section3">
          <Row>
            <Col md={24} lg={12} className="sect1">
              <div className="cover1">
                {" "}
                <h1 className="white">UTILITY & PHONE VOUCHER</h1>
              </div>
              <div className="cover2">
                <h1 className="white">CASH VOUCHER</h1>
              </div>
              <div className="cover3">
                <h1 className="white">TRAVEL VOUCHER</h1>
              </div>
            </Col>
            <Col md={24} lg={12} className="sect2"></Col>
          </Row>
        </section>
        <section className="section4">
          <h1 className="big-title">You Are One Step Closer to Free Payment</h1>
          <div className="content">
            <Row>
              <Col md={24} lg={8}>
                <div className="voncher-img">
                  <img src="/Assets/img/voncher-img-1.png" alt="" />
                </div>
                <div className="voncher-content">
                  <span className="voncher-head">mcdonnal </span>
                  <span className="voncher-price">$ 50</span>
                  <span className="voncher-title">CASH VOUCHER </span>
                  <p className="voncher-expire only-desktop">Expired Date: </p>
                  <p className="voncher-expireAt">2027.08.08 - 10.10 </p>
                </div>
                <img
                  className="logo"
                  src="/Assets/icons/Logo A - white.png"
                  alt=""
                />
                <button className="btn border-white">shop now</button>
                <img className="full" src="/Assets/img/voncher.png" alt="" />
              </Col>
              <Col md={24} lg={8}>
                <div className="voncher-img">
                  <img src="/Assets/img/voncher-img-1.png" alt="" />
                </div>
                <div className="voncher-content">
                  <span className="voncher-head">mcdonnal </span>
                  <span className="voncher-price">$ 50</span>
                  <span className="voncher-title">CASH VOUCHER </span>
                  <p className="voncher-expire only-desktop">Expired Date: </p>
                  <p className="voncher-expireAt">2027.08.08 - 10.10 </p>
                </div>
                <img
                  className="logo"
                  src="/Assets/icons/Logo A - white.png"
                  alt=""
                />
                <button className="btn border-white">shop now</button>
                <img className="full" src="/Assets/img/voncher.png" alt="" />
              </Col>

              <Col md={24} lg={8}>
                <div className="voncher-img">
                  <img src="/Assets/img/voncher-img-1.png" alt="" />
                </div>
                <div className="voncher-content">
                  <span className="voncher-head">mcdonnal </span>
                  <span className="voncher-price">$ 50</span>
                  <span className="voncher-title">CASH VOUCHER </span>
                  <p className="voncher-expire only-desktop">Expired Date: </p>
                  <p className="voncher-expireAt">2027.08.08 - 10.10 </p>
                </div>
                <img
                  className="logo"
                  src="/Assets/icons/Logo A - white.png"
                  alt=""
                />
                <button className="btn border-white">shop now</button>
                <img className="full" src="/Assets/img/voncher.png" alt="" />
              </Col>

              <Col md={24} lg={8}>
                <div className="voncher-img">
                  <img src="/Assets/img/voncher-img-2.png" alt="" />
                </div>
                <div className="voncher-content">
                  <span className="voncher-head">H&M</span>
                  <span className="voncher-price">$ 50</span>
                  <span className="voncher-title">CASH VOUCHER </span>
                  <p className="voncher-expire only-desktop">Expired Date: </p>
                  <p className="voncher-expireAt">2027.08.08 - 10.10 </p>
                </div>
                <img
                  className="logo"
                  src="/Assets/icons/Logo A - white.png"
                  alt=""
                />
                <button className="btn border-white">shop now</button>
                <img className="full" src="/Assets/img/voncher.png" alt="" />
              </Col>
              <Col md={24} lg={8}>
                <div className="voncher-img">
                  <img src="/Assets/img/voncher-img-2.png" alt="" />
                </div>
                <div className="voncher-content">
                  <span className="voncher-head">H&M</span>
                  <span className="voncher-price">$ 50</span>
                  <span className="voncher-title">CASH VOUCHER </span>
                  <p className="voncher-expire only-desktop">Expired Date: </p>
                  <p className="voncher-expireAt">2027.08.08 - 10.10 </p>
                </div>
                <img
                  className="logo"
                  src="/Assets/icons/Logo A - white.png"
                  alt=""
                />
                <button className="btn border-white">shop now</button>
                <img className="full" src="/Assets/img/voncher.png" alt="" />
              </Col>
              <Col md={24} lg={8}>
                <div className="voncher-img">
                  <img src="/Assets/img/voncher-img-2.png" alt="" />
                </div>
                <div className="voncher-content">
                  <span className="voncher-head">H&M</span>
                  <span className="voncher-price">$ 50</span>
                  <span className="voncher-title">CASH VOUCHER </span>
                  <p className="voncher-expire only-desktop">Expired Date: </p>
                  <p className="voncher-expireAt">2027.08.08 - 10.10 </p>
                </div>
                <img
                  className="logo"
                  src="/Assets/icons/Logo A - white.png"
                  alt=""
                />
                <button className="btn border-white">shop now</button>
                <img className="full" src="/Assets/img/voncher.png" alt="" />
              </Col>
              <Col md={24} lg={8}>
                <div className="voncher-img">
                  <img src="/Assets/img/voncher-img-3.png" alt="" />
                </div>
                <div className="voncher-content">
                  <span className="voncher-head">Bose</span>
                  <span className="voncher-price">$ 30</span>
                  <span className="voncher-title">CASH VOUCHER </span>
                  <p className="voncher-expire only-desktop">Expired Date: </p>
                  <p className="voncher-expireAt">2027.08.08 - 10.10 </p>
                </div>
                <img
                  className="logo"
                  src="/Assets/icons/Logo A - white.png"
                  alt=""
                />
                <button className="btn border-white">shop now</button>
                <img className="full" src="/Assets/img/voncher.png" alt="" />
              </Col>
              <Col md={24} lg={8}>
                <div className="voncher-img">
                  <img src="/Assets/img/voncher-img-3.png" alt="" />
                </div>
                <div className="voncher-content">
                  <span className="voncher-head">Bose</span>
                  <span className="voncher-price">$ 30</span>
                  <span className="voncher-title">CASH VOUCHER </span>
                  <p className="voncher-expire only-desktop">Expired Date: </p>
                  <p className="voncher-expireAt">2027.08.08 - 10.10 </p>
                </div>
                <img
                  className="logo"
                  src="/Assets/icons/Logo A - white.png"
                  alt=""
                />
                <button className="btn border-white">shop now</button>
                <img className="full" src="/Assets/img/voncher.png" alt="" />
              </Col>
              <Col md={24} lg={8}>
                <div className="voncher-img">
                  <img src="/Assets/img/voncher-img-3.png" alt="" />
                </div>
                <div className="voncher-content">
                  <span className="voncher-head">Bose</span>
                  <span className="voncher-price">$ 30</span>
                  <span className="voncher-title">CASH VOUCHER </span>
                  <p className="voncher-expire only-desktop">Expired Date: </p>
                  <p className="voncher-expireAt">2027.08.08 - 10.10 </p>
                </div>
                <img
                  className="logo"
                  src="/Assets/icons/Logo A - white.png"
                  alt=""
                />
                <button className="btn border-white">shop now</button>
                <img className="full" src="/Assets/img/voncher.png" alt="" />
              </Col>
            </Row>
          </div>
        </section>

        <section className="section5">
          <Row>
            <Col xs={0} sm={0} md={0} lg={12} className="left-sect">
              <img src="/Assets/img/free-mall-img.png" alt="" />
            </Col>
            <Col xs={24} sm={24} md={24} lg={12}>
              <h1 className="big-title">How to purchase e-voucher</h1>
              <ul className="list">
                <li>
                  <div>
                    <div className="list-item-icon  red">
                      <img src="/Assets/icons/1.png" alt="" />
                    </div>
                  </div>

                  <div className="list-item-text">
                    <span>
                      Select your e-voucher that you would like to purchase
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list-item-icon  red">
                    <img src="/Assets/icons/2.png" alt="" />
                  </div>
                  <div className="list-item-text">
                    <span>Purchase with your Cash Point</span>
                  </div>
                </li>
                <li>
                  <div className="list-item-icon  red">
                    <img src="/Assets/icons/3.png" alt="" />
                  </div>
                  <div className="list-item-text">
                    <span>Enjoy the benefits</span>
                  </div>
                </li>
              </ul>
              <p className="download f16 red2 text-light-shadow ubuntu">
                It’s FREE! Join us now & start enjoying the benefits.
              </p>
              <div style={{ marginTop: -5 }}>
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
            <Col xs={24} sm={24} md={24} lg={0} className="left-sect">
              <img
                className="mainn"
                src="/Assets/img/free-mall-img.png"
                alt=""
              />
            </Col>
          </Row>
        </section>

        <section className="section6">
          <Row>
            <Col xs={0} sm={0} md={0} lg={12}>
              <img src="/Assets/img/head-cask.png" alt="" />
            </Col>
            <Col xs={24} sm={24} md={24} lg={12}>
              <h1 className="white">
                Shop for incredible cash vouchers and products varying from
                Day-To-Day Telco packages to Travel perks. Purchase cash
                vouchers with your monthly reward earnings and offset your next
                payment!
              </h1>
            </Col>
            <Col xs={24} sm={24} md={24} lg={0}>
              <img src="/Assets/img/head-cask.png" alt="" />
            </Col>
          </Row>
        </section>
      </div>

      <Footer />
    </div>
  );
}
