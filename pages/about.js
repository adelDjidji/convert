import React from "react";
import { Row, Col } from "antd";

import NavBar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Head from "next/head";

// import "../Styles/about.scss";

export default function AboutUs({}) {
  return (
    <div id="main-app" className="about-container">
    <Head>
        <title>CONVERT | About us</title>
      </Head>
      <NavBar mode="dark" className="no-border" icon="blue" />
      <Row className="about-header">
        <Col md={24} lg={10}>
          <h1 className="big-title left space-top">About</h1>
          <img
            className="light-shadow icon"
            src="/Assets/icons/Logo A - colour.png"
            alt=""
          />
        </Col>
        <Col md={24} lg={14} className="space-bottom">
        {
          <img style={{maxWidth: 570}} src="/Assets/img/landing-section-4-all.png" alt=""/>
        }
        </Col>
      </Row>
      <Row className="about-content space-top" type="flex">
        <Col md={24} lg={10} style={{ display: 'flex',alignItems: 'flex-end'}}>
        <div className="left-section only-desktop">
        
         <p className="simple md">
            <span className="blue bold ">CONVERT</span>,{" "}
            <span className="span.open-sans-bold">
             completely rethink everything about internet & traditional economy’s value creation.

            </span>
          </p>

          <img src="/Assets/img/about-img-2.svg" alt=""/>
        </div>
       
        
        </Col>
        <Col md={24} lg={14} className="space-in-right">
          <p className="simple">
            <span className="blue bold ">CONVERT</span>{" "}
            <span className="span.open-sans-bold">
              , a Fintech 3.0 company, believing in the key success factor of
              merging traditional activities with the internet economy and the
              future economy is all about “Convert/Change” to new breakthroughs.
            </span>
          </p>
          <p className="simple sm">
            With the noble philosophy of creating the best & extra ordinary
            values for users, it is all about globalizing the benefits under the
            Online-Merge-Offline (OMO) logic. Together, we continue to create
            values that have never happened in history; just like Steve Jobs of
            Apple who had turned amazing ideas into unstoppable momentum.
          </p>
          <p className="simple sm">
            <span className="blue bold">CONVERT</span> focuses in converting
            users' “Monthly Fixed Bills Commitment” such as (Rental (Office,
            Retail, Home) & Installment Payment...) and all types of bills into
            a new form of CASH (On cloud).
          </p>
          <p className="simple sm">
            <span className="blue bold">CONVERT</span> also helps users to
            digitize all traditional paper bills as well as organizing and
            storing it on Cloud, providing monthly cash flow management tools
            for users to plan and to organize their cash flow with the
            integration of internet economy and traditional economy. Making all
            users to enjoy the extra benefits from every payment being made and
            the interest free{" "}
            <span className="bold red2">FREE CREDIT EXTENSION (FCX)</span>{" "}
            feature.
          </p>
          <ul className="simple sm">
              <li><span className="blue bold">CONVERT</span>, “Converting” monthly fixed bills payment into a new form of earning.</li>
              <li><span className="blue bold">CONVERT</span>. user’s traditional bills to cloud storage with monthly cash flow monitoring tools.</li>
              <p className="simple sm">
              (Internet Financial Services + Digitizing Monthly Bill + Adding Value into every transaction)
              </p>
              </ul>
          
          <p className="simple sm">
          <span className="blue bold">CONVERT</span> has also included the credit card benefits, this means if you are using credit card to pay, you are able to gain double bonus from the existing benefits of credit card and get extra earning from Convert.
          </p>

          <div className="left-section only-mobile">
        
         <p className="simple md f16i">
            <span className="blue bold ">CONVERT</span>,{" "}
            <span className="span.open-sans-bold">
             completely rethink everything about internet & traditional economy’s value creation.

            </span>
          </p>

          <img src="/Assets/img/about-img-2.svg" alt=""/>
        </div>
          

        </Col>
      </Row>
      <Footer />
    </div>
  );
}
