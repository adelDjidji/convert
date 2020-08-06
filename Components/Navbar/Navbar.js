import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import ReactPixel from "react-facebook-pixel";
import { Layout, Col, Row, Drawer, Dropdown, Modal } from "antd";
// import "./navbar.scss";

const { Header } = Layout;

/**
 * Main Top Navbar menu
 */
export default function Navbar({
  mode = "default",
  className = "",
  icon = "",
}) {
  const [drawerVisible, setdrawerVisible] = useState(false);
  const [convert_drawerVisible, setconvert_drawerVisible] = useState(false);
  const [free_drawerVisible, setfree_drawerVisible] = useState(false);
  const [drop_convert_visible, setdrop_convert_visible] = useState(false);
  const [modal_visible, setmodal_visible] = useState(false);
  const [drop_free_visible, setdrop_free_visible] = useState(false);
  const [navBarWhite, setnavBarWhite] = useState(false);
  const [hid, sethid] = useState(false);

  const logo =
    mode === "white" || mode === "white-with-chama"
      ? "/Assets/icons/Logo A - white.png"
      : "/Assets/icons/Logo A - colour.png";

  const menu =
    icon === "blue"
      ? "/Assets/img/menu-icon-blue.png"
      : "/Assets/icons/menu-icon.svg";
  useEffect(() => {
    if (mode !== "dark") window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  var lastScrollTop = 0;
  const handleScroll = (e) => {
    e.preventDefault();
    // if(drop_free_visible || drop_convert_visible) return false;
    const currentScrollTop = e.target.scrollingElement.scrollTop;
    console.log("scroll = ", currentScrollTop);
    if (currentScrollTop > lastScrollTop) {
      // going down
      console.log("going down");
      sethid(true);
      if (currentScrollTop >= 60 && !navBarWhite) {
        setnavBarWhite(true);
      }
      if (currentScrollTop <= 60 && navBarWhite) {
        setnavBarWhite(false);
      }
    } else {
      // going up
      if (currentScrollTop <= 60) sethid(false);
      console.log("going up");
      console.log(
        "currentScrollTop , lastScrollTop",
        currentScrollTop,
        lastScrollTop
      );
      if (currentScrollTop <= 60 && navBarWhite) {
        setnavBarWhite(false);
      }
    }
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
  };

  // handle mobile drawer Open
  const showDrawer = () => {
    setdrawerVisible(true);
  };

  // handle mobile drawer Close
  const onClose = () => {
    setdrawerVisible(false);
  };
  const onClose_convert = () => {
    setconvert_drawerVisible(false);
  };
  const onClose_free = () => {
    setfree_drawerVisible(false);
  };

  const handleVisibleChange_convert = (flag) => {
    setdrop_convert_visible(flag);
    set_dark(flag);
  };
  const handleVisibleChange_free = (flag) => {
    setdrop_free_visible(flag);
    set_dark(flag);
  };

  const openModalShare = () => {
    setmodal_visible(true);
  };

  const set_dark = (flag) => {
    // var landing = document.getElementById("landing-container");
    var e = document.getElementById("main-app");
    if (e)
      if (flag) {
        e.classList.add("dark-bg");
        console.log("added");
      } else {
        e.classList.remove("dark-bg");
      }
  };
  const menu_convert = (
    <div
      className={`top-menu-dropdown convert fixed`}
      style={{ paddingLeft: "3em" }}
    >
      <Row
        type="flex"
        justify="space-between"
        className="bordered-bottom flex-center-items"
      >
        <Col xs={24} sm={24} md={24} lg={10}>
          <p className="strong header">
            <img
              className="icon"
              src="/Assets/icons/Logo A - colour.png"
              alt=""
            />
            your monthly fixed bills into a new form of earnings
          </p>
        </Col>
        <Col xs={24} sm={24} md={24} lg={14} className="right">
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
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={24} lg={14} className="bordered-right">
          <div style={{ paddingTop: 25 }} className="bordered-bottom">
            <ul className="list nav">
              <li>
                <a href="/earningcalculator">
                  <div className="list-item-icon red">
                    <img src="/Assets/icons/calculator.svg" alt="" />
                  </div>
                  <div className="list-item-text">
                    <strong>Earnings Calculator</strong>
                    <br />
                    <span className="maxi-width">
                      Understand how to add value into your every transaction.
                      We provide an overview of your earnings in a year
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <div className="list-item-icon red">
                  <img src="/Assets/icons/bonus.svg" alt="" />
                </div>
                <div className="list-item-text">
                  <a href="/earningcalculator#double-bonus">
                    <strong>Double Bonus</strong>
                    <br />
                    <span>
                      Enjoy double bonus benefits from{" "}
                      <img
                        className="icon logo-small inline"
                        src="/Assets/icons/Logo A - colour.png"
                        alt=""
                      />
                    </span>
                  </a>
                </div>
              </li>
              <li>
                <div className="list-item-icon red">
                  <img src="/Assets/icons/cash.svg" alt="" />
                </div>
                <div className="list-item-text">
                  <a href="/cashfree">
                    <strong>Cash-Free Mall</strong>
                    <br />
                    <span className="maxi-width2">
                      Utilise your earnings at the most rewarding mall
                    </span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={10}
          className="space-in-left space-in-top"
        >
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <b className="bold-sm-title ubuntu-semi-bold f18 gray">
                Learn More
              </b>
              <ul className="gray-list">
                <li>
                  <a href="/aboutus">
                    {" "}
                    About{" "}
                    <img
                      className="icon logo-small"
                      src="/Assets/icons/Logo A - colour.png"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="/earningcalculator">Pricing</a>
                </li>
                <li>
                  <a href="/contact#faq">FAQ</a>
                </li>
                <li>
                  <a href="/contact">Contact us</a>
                </li>
              </ul>
            </Col>
            <Col xs={10} sm={10} md={10} lg={12}>
              <b className="bold-sm-title ubuntu-semi-bold f18 gray">
                Security
              </b>
              <ul className="gray-list">
                <li>
                  <a href="/fraudsecurity">Fraud & Security</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={24} lg={14} className="mob-border-top">
          <div className="space-in-top cloud">
            <a href="/Instantbill">
              <h3 className="blue-title">STORE YOUR BILLS ON CLOUD</h3>
              <p
                className="line-space sm poppins medd"
                style={{ paddingRight: 40 }}
              >
                We provide cloud storage service{" "}
                <b className="bold">“DIGITAL BILL STORAGE” “NO MORE PAPER”</b> +
                EASY TRACKING + MONTHLY CASH FLOW MANAGEMENT TOOLS for you to
                manage your monthly cash flow and strength it with our
                “Pay-Later” feature
              </p>
            </a>
            <div className=" right-mob only-mobile" style={{ paddingTop: 13 }}>
              <a href="/Instantbill">
                <img
                  className="img-rond"
                  src="/Assets/icons/Arrowdown-2 1.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={10}
          className="space-in-left bordered-left"
        >
          <div style={{ paddingTop: 19 }}>
            <a href="/membership">
              <h3 className="blue-title">MEMBERSHIP BENEFITS</h3>
              <p className="line-space sm poppins medd memm">
                Understand how you can gain membership point from your
                discipline behaviour
              </p>
            </a>
          </div>
        </Col>
      </Row>
      <Row type="flex" justify="end">
        <Col span={14}>
          <div
            className="right only-desktop"
            style={{ paddingTop: 13, paddingRight: 10 }}
          >
            <a href="/Instantbill">
              <img
                className="img-rond"
                src="/Assets/icons/Arrowdown-2 1.png"
                alt=""
              />
            </a>
          </div>
        </Col>
        <Col span={10}>
          <div
            className="right-mob"
            style={{ paddingTop: 13, textAlign: "right" }}
          >
            <a href="/membership">
              <img
                className="img-rond"
                src="/Assets/icons/Arrowdown-2 1.png"
                alt=""
              />
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );

  const menu_free = (
    <div className="top-menu-dropdown free fixed ">
      <Row
        type="flex"
        justify="space-between"
        className="bordered-bottom flex-center-items space-in-bottom xs"
      >
        <Col xs={24} sm={24} md={24} lg={14}>
          <p className="strong">
            Free Credit Extension{" "}
            <span style={{ color: "#ff3a44", fontWeight: "bold" }}>(FCX)</span>{" "}
            with
            <img
              className="icon"
              src="/Assets/icons/Logo A - colour.png"
              alt=""
            />
          </p>
        </Col>
        <Col xs={24} sm={24} md={24} lg={10} className="right">
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
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={24} lg={14} className="bordered-right">
          <div style={{ paddingTop: 25 }} className="">
            <b className="bold-sm-title feature">Feature</b>
            <ul className="list">
              <li>
                <div className="list-item-icon blue">
                  <img src="/Assets/icons/calendar.svg" alt="" />
                </div>
                <div className="list-item-text">
                  <a href="/freecredit#free-credit-extension">
                    <strong>
                      Free Credit Extension{" "}
                      <span
                        style={{
                          display: "inline",
                          fontFamily: "gotham",
                          color: "#ff3a44",
                          fontWeight: "bold",
                        }}
                      >
                        (FCX)
                      </span>{" "}
                    </strong>
                    <br />
                    <span className="maxi-width">
                      Enjoy the amazing{" "}
                      <span
                        style={{
                          display: "inline",
                          fontFamily: "Open sans",
                          color: "#ff3a44",
                          fontWeight: "bold",
                        }}
                      >
                        “FCX”
                      </span>{" "}
                      feature with your credit card
                    </span>
                  </a>
                </div>
              </li>
              <li>
                <div className="list-item-icon blue">
                  <img src="/Assets/icons/cashflow.svg" alt="" />
                </div>
                <div className="list-item-text">
                  <a href="/freecredit#extra-cash">
                    <strong>Extra Cash Flow</strong>
                    <br />
                    <span className="maxi-width2">
                      With the amazing{" "}
                      <span
                        style={{
                          display: "inline",
                          fontFamily: "Open sans",
                          color: "#ff3a44",
                          fontWeight: "bold",
                        }}
                      >
                        “FCX”
                      </span>{" "}
                      feature, you can now free up your cash flow and enhance
                      your personal finance
                    </span>
                  </a>
                </div>
              </li>
              <li>
                <div className="list-item-icon blue">
                  <img src="/Assets/icons/interest.svg" alt="" />
                </div>
                <div className="list-item-text">
                  <a href="/freecredit#interest">
                    <strong>Interest-Free</strong>
                    <br />
                    <span className="maxi-width2">
                      Pay your monthly fixed bill payment and enjoy up to 45
                      days free credit with zero interest, for free.
                    </span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div
            className="right right-mob space-in-right"
            style={{ marginTop: -20 }}
          >
            <a href="/freecredit">
              <img
                className="img-rond"
                src="/Assets/icons/Arrowdown-2 1.png"
                alt=""
              />
            </a>
          </div>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={10}
          className="space-in-left space-in-top md mb-border-top"
        >
          <b className="bold-sm-title bold-sm-title gotham f14 gray">
            Good Things are meant to be share{" "}
          </b>
          <ul className="list nav">
            <li>
              <div className="list-item-icon red">
                <img src="/Assets/icons/refer.svg" alt="" />
              </div>
              <div className="list-item-text" onClick={openModalShare}>
                <strong className="blue">Share & Earn</strong>
                <br />
                <span>
                  Refer your loved one to enjoy the benefits and earns more.
                </span>
              </div>
            </li>
          </ul>
          <div className="space-top xl">
            <img
              style={{ float: "right", marginRight: -126 }}
              src="/Assets/icons/visacard.png"
              alt=""
            />
            <img
              className="space-top md"
              src="/Assets/icons/visa-mastercard-nav.svg"
              alt=""
            />
          </div>
        </Col>
      </Row>
    </div>
  );

  const open_convert = () => {
    setconvert_drawerVisible(true);
  };
  const open_free = () => {
    setfree_drawerVisible(true);
  };

  const handleCancel = () => {
    setmodal_visible(false);
  };
  const MyModal = () => (
    <Modal
      className="no-padding popup earn"
      style={{ width: "100%" }}
      visible={modal_visible}
      onCancel={handleCancel}
      footer={[]}
    >
      <div className="container-earn">
        <div className="header center">
          <h1 className="title white">Share & Earn</h1>
          <p className="simple white">Good things are meant to be share</p>
        </div>

        <Row type="flex" justify="space-around">
          <Col xs={24} sm={24} md={24} lg={8} className="center">
            <img src="/Assets/img/earn-modal-img-1.png" alt="" />
            <p className="title-earn simple bold gotham">Step 1: </p>
            <p className="simple descr-earn">Download CONVERT App</p>
          </Col>
          <Col xs={24} sm={24} md={24} lg={8} className="center">
            <img src="/Assets/img/earn-modal-img2.png" alt="" />
            <p className="title-earn simple bold gotham">Step 2: </p>
            <p className="simple descr-earn">
              Look out Share & Earn and share it to your friends
            </p>
          </Col>
          <Col xs={24} sm={24} md={24} lg={8} className="center">
            <img src="/Assets/img/earn-modal-img3.png" alt="" />
            <p className="title-earn simple bold gotham">Step 3: </p>
            <p className="simple descr-earn">
              Earn 30 Cash Point after your friend registered
            </p>
          </Col>
        </Row>
        <div className="darks">
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
      </div>
    </Modal>
  );

  return (
    <Header className={`nav-header ${mode} ${className} ${hid ? "hiden" : ""}`}>
      <MyModal />
      <Drawer
        // title="Playlist & Group manager"
        placement="left"
        width="80%"
        closable={false}
        onClose={onClose}
        visible={drawerVisible}
      >
        <ul>
          <li className="drawer-item" onClick={open_convert}>
            Convert{" "}
            <img
              style={{ marginLeft: "64%" }}
              src="/Assets/icons/cheveron-right.png"
              alt=""
            />{" "}
          </li>
          <li className="drawer-item" onClick={open_free}>
            Free Credit{" "}
            <img
              style={{ marginLeft: "56%" }}
              src="/Assets/icons/cheveron-right.png"
              alt=""
            />{" "}
          </li>
        </ul>
      </Drawer>
      <Drawer
        placement="left"
        width="100%"
        closable={false}
        onClose={onClose_convert}
        visible={convert_drawerVisible}
      >
        <div className="return">
          <img
            onClick={onClose_convert}
            src="/Assets/icons/cheveron-left.png"
            alt=""
          />
        </div>
        {menu_convert}
      </Drawer>
      <Drawer
        placement="left"
        width="100%"
        closable={false}
        onClose={onClose_free}
        visible={free_drawerVisible}
      >
        <div className="return">
          <img
            onClick={onClose_free}
            src="/Assets/icons/cheveron-left.png"
            alt=""
          />
        </div>
        {menu_free}
      </Drawer>
      <Row>
        <Col xs={14} sm={14} md={14} lg={15} xl={17} className="">
          <a href="/">
            {" "}
            <img className="logo icon" src={logo} alt="" />
          </a>
        </Col>
        <Col xs={0} sm={0} md={0} lg={9} xl={7}>
          <span className="menu-nav">
            <Dropdown
              overlay={menu_convert}
              visible={drop_convert_visible}
              onVisibleChange={handleVisibleChange_convert}
            >
              <a
                onClick={(e) => {
                  e.preventDefault();
                  // toggle_convert();
                }}
              >
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
            <Dropdown
              overlay={menu_free}
              visible={drop_free_visible}
              onVisibleChange={handleVisibleChange_free}
            >
              <a
                onClick={(e) => {
                  e.preventDefault();
                  // toggle_free()
                }}
              >
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
        <Col
          xs={10}
          sm={10}
          md={10}
          lg={0}
          xl={0}
          className="right-mob menu-icon-col"
        >
          <img
            onClick={showDrawer}
            className="btn menu-icon"
            src={menu}
            alt=""
          />
        </Col>
      </Row>
    </Header>
  );
}
