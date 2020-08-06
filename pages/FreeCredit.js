import React from "react";
import { Row, Col } from "antd";
// import ReactPixel from "react-facebook-pixel";

import NavBar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Head from "next/head";
// import "../Styles/FreeCredit.scss";

export default function FreeCredit({}) {
  return (
    <div className="free-container">
    <Head>
        <title>CONVERT | Free Credit Extension</title>
      </Head>
      <NavBar mode="white" className="no-border" />
      <div className="free-header">
        <di className="title-container">
          <h1 className="header-title">
            Free Credit Extension (FCX) <br />
            <span className="big">UP TO 45 DAYS</span>
          </h1>

          <img src="/Assets/icons/visa-master-card-logos.svg" alt="" />
        </di>
      </div>
      <div className="page-container">
        <section className="section1" id="free-credit-extension">
          <Row>
            <Col xs={24} sm={24} md={12} className="space-in-right">
              <h1 className="title  gotham text-light-shadow title-medium">
                Free Credit Extension (FCX)
              </h1>

              <ul className="list">
                <li>
                  <div>
                    <div className="list-item-icon lg red">
                      <img src="/Assets/icons/block-4-icon-1.svg" alt="" />
                    </div>
                  </div>

                  <div className="list-item-text">
                    <strong>Pay with your favourite credit card</strong>
                    <br />
                    <span>
                      Did you know? As long as you are a credit card holder, you
                      are automatically entitled to the{" "}
                      <b className="red bold">“FCX”</b> feature that comes along
                      with your credit card.{" "}
                      <span className="blue bold">“CONVERT”</span> helps you to
                      fully unleash the potential of credit card when you pay
                      your monthly commitment.
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list-item-icon lg red">
                    <img src="/Assets/icons/refer.svg" alt="" />
                  </div>
                  <div className="list-item-text">
                    <strong>Use now, pay later</strong>
                    <br />
                    <span>
                      Our platform is designed for user to use credit card to
                      make monthly fixed bill payment unlike the usual way. Use
                      your credit card to make your Monthly Fixed Bill Payment
                      (Rental (Office, Retail, Home) & Installment Payment...)
                      using a new internet financial platform{" "}
                      <span className="blue bold">“CONVERT”</span> , online now
                      and enjoy <b className="red bold">(FCX)</b> FREE CRDIT
                      EXTENSION up to 45 days without any interest incurred
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list-item-icon lg red">
                    <img src="/Assets/icons/calendar.svg" alt="" />
                  </div>
                  <div className="list-item-text">
                    <strong>Free Credit Extension up to 45 days*</strong>
                    <br />
                    <span id="extra-cash">
                      Initiate your payment today at{" "}
                      <span className="blue bold">“CONVERT”</span> , lay back
                      and relax, you only pay the actual bill upon receiving
                      your credit card statement after some time. Easily enjoy
                      your credit extension for up to 45 days
                    </span>
                  </div>
                </li>
              </ul>
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

        <section className="section2 gray">
          <h1 className="title gotham space-top text-light-shadow title-medium">
            Extra Cash
          </h1>
          <Row>
            <Col md={24} lg={8} className="center move-left">
              <img
                className="first-img"
                src="/Assets/img/Group 51@2x.png"
                alt=""
              />
              <h2 className="gotham bold red f20">Free up your cash flow*</h2>
              <p className="simple space-in-top">
                With the Free Credit Extension, you can now extend your Monthly
                Fixed Bill Payment (Rental (Office, Retail, Home) & Installment
                Payment...) every month up to 45 days longer. Give yourself
                ample time with more cash flow every month.
              </p>
              <br />
              <br />
              <br />
              <p className="note">*depends on your credit card billing cycle</p>
            </Col>
            <Col md={24} lg={8} className="center">
              <img src="/Assets/img/Group 96@2x.png" alt="" />
              <h2 className="gotham bold red f20">
                Generate extra cash flow without borrowing
              </h2>
              <p className="simple wasat">
                With the amazing <b className="red">“FCX”</b> feature, you can
                now free up your cash flow and enhance your personal finance
                just by a card. Take full control of your personal cash flow, no
                borrowing needed.
              </p>
            </Col>
            <Col md={24} lg={8} className="center">
              <img src="/Assets/img/Group 82@2x.png" alt="" />
              <h2 className="gotham bold red f20">
                What to “Free Credit <br /> Extension” at{" "}
                <span className="blue">CONVERT</span>
              </h2>
              <p className="simple">
                You can make any Monthly Fixed Bill Payment (Rental (Office,
                Retail, Home) & Installment Payment...) online using your
                favourite credit card. We always do more, pay your Monthly Fixed
                Bill Payment at <b className="blue">“CONVERT”</b> now.
              </p>
            </Col>
          </Row>
        </section>

        <section className="section3" id="interest">
          <Row>
            <Col md={24} lg={12}>
              <img src="/Assets/img/bill-section4.svg" alt="" />
            </Col>
            <Col md={24} lg={12}>
              <h1 className="title  gotham text-light-shadow title-medium">
                Interest-Free
              </h1>

              <ul className="list">
                <li>
                  <div>
                    <div className="list-item-icon lg red">
                      <img src="/Assets/icons/interest-icon.svg" alt="" />
                    </div>
                  </div>

                  <div className="list-item-text">
                    <strong>Interest-free credit extension*</strong>
                    <br />
                    <span>
                      Pay your Monthly Fixed Bills with your credit card this
                      month, enjoy your up to 45-day credit extension at zero
                      interest. No hidden fees, at all.
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list-item-icon lg red">
                    <img src="/Assets/icons/hidden.svg" alt="" />
                  </div>
                  <div className="list-item-text">
                    <strong>No hidden fees</strong>
                    <br />
                    <span>
                      Worry-free! <b className="blue">“CONVERT”</b> highly
                      values transparency and we always put all fees upfront.
                      You can now enjoy maximum credit extension at the lowest
                      cost.
                    </span>
                  </div>
                </li>
              </ul>

              <p className="download f16 red2 text-light-shadow">
                Download <span className="blue">“CONVERT”</span> now to find out
                how to achieve up to 45 Days Free Credit Extension{" "}
              </p>
              <div style={{ paddingTop: 10 }}>
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
      </div>

      <Footer />
    </div>
  );
}
