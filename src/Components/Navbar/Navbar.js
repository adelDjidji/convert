import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout, Col, Row, Drawer, Dropdown, Icon, Menu } from "antd";
import "./navbar.scss";

const { Header } = Layout;

const logo = "/Assets/icons/Logo A - colour.png";
/**
 * Main Top Navbar menu
 */
export default function Navbar({isWhite}) {
  const [drawerVisible, setdrawerVisible] = useState(false);
  const [whiteMode, setwhiteMode] = useState()

  useEffect(()=>{
    setwhiteMode(isWhite)
    console.log("changed mode to ",isWhite);
  },[isWhite])

  // handle mobile drawer Open
  const showDrawer = () => {
    setdrawerVisible(true);
  };

  // handle mobile drawer Close
  const onClose = () => {
    setdrawerVisible(false);
  };

  const menu_convert = (
    <div className={`top-menu-dropdown convert fixed`}>
      <Row type="flex" justify="space-between" className="bordered-bottom">
        <Col span={10}>
          <p className="strong">
            <img className="icon" src={logo} alt="" />
            your monthly fixed bills into a new form of earnings
          </p>
        </Col>
        <Col span={14} className="right">
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
        </Col>
      </Row>
      <Row>
        <Col span={14} className="bordered-right">
          <div style={{ paddingTop: 25 }} className="bordered-bottom">
            <ul className="list nav">
              <li>
                <div className="list-item-icon red">
                  <img src="/Assets/icons/calculator.svg" alt="" />
                </div>
                <div className="list-item-text">
                  <strong>Earnings Calculator</strong>
                  <br />
                  <span>
                    Understand how to add value into your every transaction. We
                    provide an overview of your earnings in a year
                  </span>
                </div>
              </li>
              <li>
                <div className="list-item-icon red">
                  <img src="/Assets/icons/bonus.svg" alt="" />
                </div>
                <div className="list-item-text">
                  <strong>Double Bonus</strong>
                  <br />
                  <span>
                    Enjoy double bonus benefits from{" "}
                    <img className="icon logo-small" src={logo} alt="" />
                  </span>
                </div>
              </li>
              <li>
                <div className="list-item-icon red">
                  <img src="/Assets/icons/cash.svg" alt="" />
                </div>
                <div className="list-item-text">
                  <strong>Cash-Free Mall</strong>
                  <br />
                  <span>Utilise your earnings at the most rewarding mall</span>
                </div>
              </li>
            </ul>
          </div>
        </Col>
        <Col span={10} className="space-in-left space-in-top">
          <Row>
            <Col span={12}>
              <b className="bold-sm-title ubuntu f18 gray">Learn More</b>
              <ul className="gray-list">
                <li>
                  About <img className="icon logo-small" src={logo} alt="" />
                </li>
                <li>Pricing</li>
                <li>FAQ</li>
                <li>Contact us</li>
              </ul>
            </Col>
            <Col span={12}>
              <b className="bold-sm-title ubuntu f18 gray">Security</b>
              <ul className="gray-list">
                <li>Fraud & Security</li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col span={14}>
          <div style={{ paddingTop: 19 }}>
            <h3 className="blue-title">STORE YOUR BILLS ON CLOUD</h3>
            <p>
              We provide cloud storage service{" "}
              <b>“DIGITAL BILL STORAGE” “NO MORE PAPER”</b> + EASY TRACKING +
              MONTHLY CASH FLOW MANAGEMENT TOOLS for you to manage your monthly
              cash flow and strength it with our “Pay-Later” feature
            </p>
          </div>
          <div className="right space-in-right">
            <img
              className="img-rond"
              src="/Assets/icons/arrow-right-rond.svg"
              alt=""
            />
          </div>
        </Col>
        <Col span={10} className="space-in-left bordered-left">
          <div style={{ paddingTop: 19 }}>
            <h3 className="blue-title">MEMBERSHUPIP BENEFITS</h3>
            <p>
            Understand how you can gain membership
            point from your discipline behaviour
            </p>
          </div>
          <div className="right space-in-right space-in-top">
            <img
              className="img-rond"
              src="/Assets/icons/arrow-right-rond.svg"
              alt=""
            />
          </div>
        </Col>
      </Row>
    </div>
  );

  const menu_free = (
    <div className="top-menu-dropdown free fixed">
      <Row type="flex" justify="space-between" className="bordered-bottom space-in-bottom md">
        <Col span={10}>
          <p className="strong">
            Free Credit Extension(FCX) with
            <img className="icon" src={logo} alt="" />
          </p>
        </Col>
        <Col span={14} className="right">
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
        </Col>
      </Row>
      <Row>
        <Col span={14} className="bordered-right">
          <div style={{ paddingTop: 25 }} className="">
            <b className="bold-sm-title feature">Feature</b>
            <ul className="list">
              <li>
                <div className="list-item-icon blue">
                  <img src="/Assets/icons/calendar.svg" alt="" />
                </div>
                <div className="list-item-text">
                  <strong>Free Credit Extension(FCX) </strong>
                  <br />
                  <span>
                    Enjoy the amazing “FCX” feature with your credit card
                  </span>
                </div>
              </li>
              <li>
                <div className="list-item-icon blue">
                  <img src="/Assets/icons/cashflow.svg" alt="" />
                </div>
                <div className="list-item-text">
                  <strong>Extra Cash Flow</strong>
                  <br />
                  <span>
                    With the amazing “FCX” feature, you can now free up your
                    cash flow and enhance your personal finance
                  </span>
                </div>
              </li>
              <li>
                <div className="list-item-icon blue">
                  <img src="/Assets/icons/interest.svg" alt="" />
                </div>
                <div className="list-item-text">
                  <strong>Interest-Free</strong>
                  <br />
                  <span>
                    Pay your monthly fixed bill payment and enjoy up to 45 days
                    free credit with zero interest, for free.
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="right space-in-right">
            <img
              className="img-rond"
              src="/Assets/icons/arrow-right-rond.svg"
              alt=""
            />
          </div>
        </Col>
        <Col span={10} className="space-in-left space-in-top">
          <b className="bold-sm-title bold-sm-title ubuntu f18 gray">Good Things are meant to be share </b>
          <ul className="list nav">
            <li>
              <div className="list-item-icon red">
                <img src="/Assets/icons/refer.svg" alt="" />
              </div>
              <div className="list-item-text">
                <strong>Refer & Earn</strong>
                <br />
                <span>
                  Refer your loved one to enjoy the benefits and earns more.
                </span>
              </div>
            </li>
          </ul>
          <div>
            <img
              style={{ float: "right", marginRight: -28 }}
              src="/Assets/icons/visacard.svg"
              alt=""
            />
            <img src="/Assets/icons/visalogo.svg" alt="" />
            <img src="/Assets/icons/mastercardlogo.svg" alt="" />
          </div>
        </Col>
      </Row>
    </div>
  );
  return (
    <Header className={`nav-header ${whiteMode?"":"transparent"}`}>
      <Drawer
        title="Playlist & Group manager"
        placement="left"
        closable={false}
        onClose={onClose}
        visible={drawerVisible}
      ></Drawer>
      <Row>
        <Col xs={14} sm={14} md={14} lg={15} xl={17} className="">
          <img className="logo icon" src={logo} alt="" />
        </Col>
        <Col xs={0} sm={0} md={0} lg={9} xl={7}>
          <span className="menu-nav">
            <Dropdown overlay={menu_convert}>
              <a onClick={(e) => e.preventDefault()}>
                <span className="ant-dropdown-link">convert </span>
                <svg
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 1L6 6L1 1"
                    stroke="#1C202B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </Dropdown>
          </span>
          <span className="menu-nav">
            <Dropdown overlay={menu_free} >
              <a onClick={(e) => e.preventDefault()}>
                <span className="ant-dropdown-link">free credit </span>
                <svg
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 1L6 6L1 1"
                    stroke="#1C202B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </Dropdown>
          </span>
        </Col>
        <Col xs={10} sm={10} md={10} lg={0} xl={0} className="right">
          <img className="btn" src="/Assets/icons/menu-icon.svg" alt=""/>
        </Col>
      </Row>
    </Header>
  );
}
