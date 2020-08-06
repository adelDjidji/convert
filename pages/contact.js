
import React, {useState} from "react";
import _ from "lodash";
import { Row, Col, Spin, Icon } from "antd";
import axios from "axios";
import { Formik, Field } from "formik";
import Swal from "sweetalert2/dist/sweetalert2.js";
// import "sweetalert2/src/sweetalert2.scss";

import NavBar from "../Components/Navbar/Navbar";
import FAQ from "./Faq";
import Footer from "../Components/Footer/Footer";
import Head from "next/head";
// import "../Styles/contact.scss";

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;


export default function Contact({}) {
  const [loading, setloading] = useState(false);
  
  return (
    <div className="contact-container">
    <Head>
        <title>CONVERT | Contact us</title>
      </Head>
      <NavBar mode="white" />
      <section className="contact-header"></section>
      <div className="contact-form-container">
        <h1 className="big-title white">Contact Us</h1>
        <Row className="contact-form">
          <Col md={24} lg={14} className="contact-section1">
            <h2 className="small-title">Send us a Message</h2>
            <p className="simple sm">
              Get in touch and let us know how we can help
            </p>
            <br />
            <Formik
              initialValues={{}}
              onSubmit={async (values, { resetForm }) => {
                console.log(values)
                try {
                  if(values.full_name && values.email && values.message){
                    setloading(true)
                  await axios({
                    url: "https://api.sendgrid.com/v3/marketing/contacts",
                    method: "PUT",
                    headers: {
                      Authorization:
                        "Bearer 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",
                      "content-type": "application/json",
                    },
                    data: {
                      contacts: [
                        {
                          ...values,
                          custom_fields: {
                            w3_T: values.full_name,
                            w2_T: values.message,
                          },
                        },
                      ],
                    },
                  }).then(resp=>{
                    setloading(false)
                    Swal.fire({
                      title: "Successfully subscribed!",
                      text: "Thank you for subscribing",
                      icon: "success",
                      confirmButtonText: "OK",
                    });
                  })
                  
                  resetForm({});
                  }
                  
                } catch (e) {
                  console.log(e);
                }
              }}
              render={(formProps) => (
                <>
                  <div className="group-input">
                    <strong>Your Name</strong>
                    <Field
                      name="full_name"
                      type="text"
                      className="with-border"
                      id=""
                      placeholder=""
                    />
                  </div>
                  <div className="group-input">
                    <strong>Your Email</strong>
                    <Field
                      name="email"
                      type="email"
                      className="with-border"
                      id=""
                      placeholder=""
                    />
                  </div>
                  <div className="group-input">
                    <strong>Message</strong>
                    <Field
                      type="textarea"
                      name="message"
                      className="with-border"
                      id=""
                      cols="30"
                      rows="3"
                    />
                  </div>
                  <button
                    className="btn btn-blue btn-rond send"
                    onClick={() => formProps.handleSubmit()}
                  >
                  {loading ? <Spin indicator={antIcon} /> : <img src="/Assets/icons/send-icon.svg" alt="" />}
                    
                  </button>
                </>
              )}
            />
          </Col>
          <Col md={24} lg={10} className="contact-section2">
            <h2 className="small-title white">Contact Information</h2>

            <p className="simple sm white">
              <img
                className="img-mail"
                src="/Assets/icons/email-icon.svg"
                alt=""
              />
              Support@Convert-Bills.com
            </p>
            <div className="social">
              <a href="https://www.facebook.com/ConvertHQ/">
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
              </a>
              <a href="https://www.instagram.com/convert_hq/">
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
              </a>
              <a href="https://www.youtube.com/channel/UCIeuGA23cu92DETI0kdia7g">
                <div className="insta flex-center">
                  <svg
                    width="17"
                    height="21"
                    viewBox="0 0 17 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.7008 10.8597C16.5952 10.3922 16.3841 10.0146 16.0497 9.691C15.7153 9.38535 15.3106 9.18757 14.8706 9.13364C13.4627 8.97182 11.3333 8.8999 8.5 8.8999C5.66667 8.8999 3.53727 8.97182 2.147 9.13364C1.68944 9.18757 1.30228 9.36737 0.967909 9.691C0.63354 9.99665 0.404762 10.3922 0.299172 10.8597C0.10559 11.7586 0 13.1251 0 14.959C0 16.8109 0.10559 18.1773 0.299172 19.0583C0.404762 19.5258 0.615942 19.9033 0.950311 20.227C1.28468 20.5326 1.68944 20.7124 2.1294 20.7663C3.53727 20.9282 5.66667 21.0181 8.5 21.0181C11.3333 21.0181 13.4627 20.9282 14.8706 20.7663C15.3106 20.7124 15.6977 20.5326 16.0321 20.227C16.3665 19.9213 16.5952 19.5258 16.7008 19.0583C16.8944 18.1593 17 16.7929 17 14.959C17 13.0891 16.8944 11.7227 16.7008 10.8597ZM4.85714 12.0283H3.62526V18.6987H2.48137V12.0283H1.26708V10.9316H4.83954V12.0283H4.85714ZM7.95445 18.6987H6.93375V18.0694C6.52899 18.5549 6.12422 18.7886 5.77226 18.7886C5.42029 18.7886 5.19151 18.6448 5.10352 18.3571C5.05072 18.1773 5.01553 17.8896 5.01553 17.4941V12.9093H6.03623V17.1705C6.03623 17.4222 6.03623 17.566 6.05383 17.584C6.07143 17.7458 6.15942 17.8357 6.30021 17.8357C6.51139 17.8357 6.72257 17.6739 6.95135 17.3502V12.9093H7.97205V18.6987H7.95445ZM11.8437 16.9727C11.8437 17.548 11.8085 17.9256 11.7381 18.1413C11.6149 18.5728 11.3333 18.7886 10.9286 18.7886C10.559 18.7886 10.207 18.5728 9.85507 18.1413V18.6987H8.83437V10.9316H9.85507V13.4847C10.1894 13.0711 10.5414 12.8554 10.9286 12.8554C11.3333 12.8554 11.6149 13.0711 11.7381 13.5026C11.8085 13.7004 11.8437 14.096 11.8437 14.6713V16.9727ZM15.7329 16.0018H13.6739V17.0266C13.6739 17.566 13.8499 17.8357 14.2019 17.8357C14.4482 17.8357 14.6066 17.6919 14.6594 17.4222C14.677 17.3502 14.677 17.0985 14.677 16.703H15.7153V16.8468C15.7153 17.2244 15.7153 17.4581 15.6977 17.53C15.6801 17.7458 15.5921 17.9436 15.4513 18.1593C15.1698 18.5728 14.765 18.7886 14.2195 18.7886C13.6915 18.7886 13.2868 18.5908 12.9876 18.1953C12.7588 17.9076 12.6532 17.4581 12.6532 16.8288V14.7972C12.6532 14.1859 12.7588 13.7184 12.97 13.4307C13.2692 13.0352 13.6739 12.8374 14.2019 12.8374C14.7122 12.8374 15.117 13.0352 15.4161 13.4307C15.6273 13.7184 15.7329 14.1679 15.7329 14.7972V16.0018V16.0018Z"
                      fill="white"
                    />
                    <path
                      d="M10.3834 13.79C10.2074 13.79 10.0314 13.8799 9.87305 14.0418V17.5657C10.049 17.7455 10.2074 17.8174 10.3834 17.8174C10.6826 17.8174 10.8234 17.5477 10.8234 17.0263V14.5811C10.8234 14.0597 10.6826 13.79 10.3834 13.79Z"
                      fill="white"
                    />
                    <path
                      d="M14.1852 13.79C13.8332 13.79 13.6748 14.0597 13.6748 14.5811V15.1205H14.7131V14.5811C14.7131 14.0597 14.5371 13.79 14.1852 13.79Z"
                      fill="white"
                    />
                    <path
                      d="M4.18867 4.67466V7.85702H5.33256V4.67466L6.72283 0H5.56134L4.78701 3.07449L3.95989 0H2.74561C2.95679 0.66524 3.20316 1.38442 3.48474 2.19349C3.8543 3.27226 4.08308 4.09932 4.18867 4.67466Z"
                      fill="white"
                    />
                    <path
                      d="M8.25296 7.92905C8.78091 7.92905 9.18567 7.73128 9.46724 7.33573C9.67842 7.04806 9.78401 6.58059 9.78401 5.95131V3.90165C9.78401 3.27237 9.67842 2.82289 9.46724 2.53522C9.18567 2.13967 8.78091 1.94189 8.25296 1.94189C7.74261 1.94189 7.33785 2.13967 7.05627 2.53522C6.84509 2.82289 6.7395 3.29035 6.7395 3.90165V5.95131C6.7395 6.58059 6.84509 7.03008 7.05627 7.33573C7.33785 7.73128 7.74261 7.92905 8.25296 7.92905ZM7.76021 3.6859C7.76021 3.14652 7.91859 2.87683 8.25296 2.87683C8.58733 2.87683 8.74571 3.14652 8.74571 3.6859V6.14909C8.74571 6.68847 8.58733 6.97614 8.25296 6.97614C7.91859 6.97614 7.76021 6.70645 7.76021 6.14909V3.6859Z"
                      fill="white"
                    />
                    <path
                      d="M11.4213 7.92883C11.8085 7.92883 12.1956 7.69509 12.6004 7.20965V7.85691H13.6387V1.99561H12.6004V6.47249C12.3716 6.8141 12.1604 6.97591 11.9493 6.97591C11.8085 6.97591 11.7381 6.88602 11.7029 6.7242C11.7029 6.70622 11.6853 6.58037 11.6853 6.31067V1.99561H10.647V6.61632C10.647 7.01187 10.6822 7.29954 10.735 7.49732C10.8406 7.78499 11.0693 7.92883 11.4213 7.92883Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </Col>
        </Row>
        <div className="contain">
          <div className="only-mobile space-in-top xl">
            <h1 className="title-medium">Choose your region:</h1>
          </div>
          <Row type="flex" justify="space-between">
            <Col md={12} lg={6}>
              <div className="box-pays">
                <img src="/Assets/icons/singaphore-flag.svg" alt="" />
                <h3 className="small-title f16">Singapore</h3>
                <h4 className="small-title f13">Pay N Earn Pte. Ltd</h4>
              </div>
            </Col>
            <Col md={12} lg={6}>
              <div className="box-pays">
                <img src="/Assets/icons/australia-flag.svg" alt="" />
                <h3 className="small-title f16">Australia</h3>
                <h4 className="small-title f13">PayEarnz Pty. Ltd</h4>
              </div>
            </Col>
            <Col md={12} lg={6}>
              <div className="box-pays">
                <img src="/Assets/icons/malaysia-flag.svg" alt="" />
                <h3 className="small-title f16">Malaysia</h3>
                <h4 className="small-title f13">Lets Pay N Earn Sdn. Bhd</h4>
              </div>
            </Col>
            <Col md={12} lg={6}>
              <div className="box-pays">
                <img src="/Assets/icons/indonesia-flag.svg" alt="" />
                <h3 className="small-title f16">Indonesia</h3>
                <h4 className="small-title f13">PT Pay Earn Indonesia</h4>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <FAQ />
      <Footer />
    </div>
  );
}
