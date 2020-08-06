import React from "react";
import { Row, Col, Anchor } from "antd";

import NavBar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Head from "next/head";

// import "../Styles/terms.scss";

const { Link } = Anchor;

const items = [
  {
    title: "Definition",
    content: (
      <div>
        <p>
          In this Privacy Policy, unless the context otherwise requires, the
          following words and expressions shall have the following meanings: -
        </p>
        <p>
          <strong className="bold">“Sensitive Personal Data”</strong> means
          details about your religious or philosophical beliefs, sex life,
          sexual orientation, political opinions, trade union membership,
          information about your health, and genetic and biometric data.
        </p>
        <p>
          <strong className="bold">“Personal Data”</strong> means any
          information about an individual from which that person can be
          identified. It does not include data where the identity has been
          removed (anonymous data).
        </p>
        <p>
          <strong className="bold">“We”</strong> or{" "}
          <strong className="bold">“our”</strong> or{" "}
          <strong className="bold">“us”</strong> means (Pay n Earn Pte. Ltd |
          Co: 201819626R) & (Lets Pay N Earn Sdn. Bhd | Co: 1334962-H)
        </p>
        <p>
          <strong className="bold">“You”</strong> or{" "}
          <strong className="bold">“your”</strong> means any person who has
          access of our websites or the registered user of our services.
        </p>
      </div>
    ),
  },
  {
    title: "General",
    content: (
      <div>
        <p>
          This Privacy Policy explains our policy on collecting, processing,
          using, and disclosing your Personal Data. By visiting our websites,
          applying and/or registering for our products and/or services, you are
          deemed to have read and agreed to be bound by this Privacy Policy. We
          reserve our right to update this Private Policy at any time without
          notice to you. By continuing using our services, you will be deemed to
          have accepted the updated Privacy Policy.
        </p>
      </div>
    ),
  },
  {
    title: "Types of Personal Data that we collect from you",
    content: (
      <div>
        <p>
          We collect Personal Data about you which we have grouped together as
          follows:
        </p>
        <ul>
          <li>
            <strong className="bold">Profile Data</strong> which includes your
            username and password, purchases or orders, and your interests,
            preferences, feedback and survey responses.
          </li>
          <li>
            <strong className="bold">Identity Data</strong> which includes first
            name, maiden name, last name, username or similar identifier,
            marital status, title, race, date of birth and gender.
          </li>
          <li>
            <strong className="bold">Usage Data</strong> which includes
            information about how you use our websites, products and services,
            rewards, coupons, cashbacks and other incentive program provided to
            you as part of our services.
          </li>
          <li>
            <strong className="bold">Transaction Data</strong> which includes
            details about payments to and from you, and other details of
            products and services you have purchased from us.
          </li>
          <li>
            <strong className="bold">Financial Data</strong> which includes bank
            account and payment card details.
          </li>
          <li>
            <strong className="bold">Technical Data</strong> which includes
            internet protocol (IP) address, your login data, browser type and
            version, time zone setting and location, browser plug-in types and
            versions, operating system and platform, and other technology on the
            devices you use to access our websites.
          </li>
          <li>
            <strong className="bold">Marketing and Communications Data</strong>{" "}
            which includes your preferences in receiving marketing from us and
            our related third parties, and your communication preferences.
          </li>
          <li>
            We do not collect any{" "}
            <strong className="bold">Sensitive Personal Data</strong> about you
            nor do we collect any information about criminal convictions and
            offences unless otherwise required by applicable law.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "How we collect your personal data",
    content: (
      <div>
        <p>
          We use different methods to collect your Personal Data including
          through:
        </p>
        <ul>
          <li>
            <strong className="bold">Direct interactions.</strong> You may give us your Identity Data and Financial Data by filling in
            forms or by corresponding with us by post, phone, email or otherwise. This includes
            Personal Data you provide when you apply for our products or services, create an account
            on our website, subscribe to our service or publications, request marketing to be sent to
            you, enter a competition, promotion or survey; or give us feedback or contact us or grant
            us your phone camera access or photo album access to upload profile image or other
            supporting documents for the purpose of creating an account with us or using our services.
          </li>
          <li>
            <strong className="bold">
              Automated technologies or interactions.
            </strong>{" "}
            As you interact with our websites, we will automatically collect
            Technical Data about your equipment, browsing actions and patterns.
            We collect this Personal Data by using cookies, server logs and
            other similar technologies.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "How we use of your Personal Data",
    content: (
      <div>
        <p>
          We collect, use, and/or process your Personal Data including but not
          limited to for the following purposes:
        </p>
        <ul>
          <li>to administer and manage products and/or services to you;</li>
          <li>
            to communicate with you including responding to your applications,
            queries and/or complaints;
          </li>
          <li>
            to notify you about important changes/developments to the products
            and/or services features;
          </li>
          <li>
            to comply with regulatory requirements and provide assistance to law
            enforcement agencies;
          </li>
          <li>
            to research and develop products and/or services including improving
            and developing our services and quality assurance to you;
          </li>
          <li>
            to assess/verify your credit worthiness and to maintain your credit
            history for present and future reference (if deemed necessary); and
          </li>
          <li>
            to market and promote other products and services that are offered
            by our affiliates, agents, related third parties, from time to time.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Disclosure of your personal data",
    content: (
      <div>
        <p>
          We may disclose your Personal Data with the following class of third
          parties for the purposes set out above:
        </p>
        <ul>
          <li>
            Internal third parties such as other companies in the group and
            affiliates.
          </li>
          <li>
            External third parties such as service providers who provide IT and
            system administration services; professional advisers including
            lawyers, bankers, auditors and insurers who provide consultancy,
            banking, legal, insurance and accounting services; regulators and
            other authorities who require reporting of processing activities in
            certain circumstances; credit bureaus, credit reporting agencies,
            debt-collection agencies who assist with debt recovery functions,
            due diligence functions, etc.
          </li>
          <li>
            Other third parties to whom we choose to sell, transfer or merge
            parts of our business or 2 our assets.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Data Security",
    content: (
      <div>
        <p>
          We have put in place appropriate security measures to prevent your
          Personal Data from misuse and loss from unauthorized access,
          modification or disclosure. In addition, we limit access to your
          Personal Data to those employees, agents, contractors and other third
          parties on a need to know basis. They will only process your Personal
          Data on our instructions and they are subject to a duty of
          confidentiality.
        </p>
        <p>
          We have put in place procedures to deal with any suspected Personal
          Data breach and will notify you and any applicable regulator of a
          breach where we are legally required to do so.
        </p>
      </div>
    ),
  },
  {
    title: "Data Retention",
    content: (
      <div>
        <p>
          We will only retain your Personal Data for as long as reasonably
          necessary to fulfil the purposes we collected it for, including for
          the purposes of satisfying any legal, regulatory, tax, accounting or
          reporting requirements. We may retain your Personal Data for a longer
          period in the event of a complaint or if we reasonably believe there
          is a prospect of litigation in respect to our relationship with you.
        </p>
        <p>
          To determine the appropriate retention period for Personal Data, we
          consider the amount, nature and sensitivity of the Personal Data, the
          potential risk of harm from unauthorized use or disclosure of your
          Personal Data, the purposes for which we process your Personal Data
          and whether we can achieve those purposes through other means, and the
          applicable legal, regulatory, tax, accounting or other requirements.
        </p>
        <p>
          In some circumstances you can ask us to delete your Personal Data: see
          your legal rights below for further information.
        </p>
        <p>
          In some circumstances we will anonymize your Personal Data (so that it
          can no longer be associated with you) for research or statistical
          purposes, in which case we may use this information indefinitely
          without further notice to you.
        </p>
      </div>
    ),
  },
  {
    title: "Your Legal Rights",
    content: (
      <div>
        <p>
          By giving or making available your Personal Data to us, you will be
          deemed to have agreed and consented to the use and process of your
          Personal Data in accordance to this Privacy Policy, including but not
          limited to, consenting to receiving communications, offers, promotions
          and marketing materials from us from time to time. Notwithstanding the
          foregoing, you have the following rights in relation to your Personal
          Data under data protection laws:
        </p>
        <ul>
          <li>Request access to your Personal Data.</li>
          <li>Request correction of your Personal data.</li>
          <li>Request erasure of your Personal Data.</li>
          <li>Request restriction of processing your Personal Data.</li>
          <li>Request transfer of your Personal Data.</li>
          <li>Right to withdraw consent.</li>
        </ul>
        <p>
          If you wish to exercise any of the rights set out above, please
          contact us.
        </p>
        <p>
          You will not have to pay a fee to access your Personal Data (or to
          exercise any of the other rights). However, we may charge a reasonable
          fee if your request is clearly unfounded, repetitive or excessive.
          Alternatively, we could refuse to comply with your request in these
          circumstances.
        </p>
        <p>
          We may need to request specific information from you to help us
          confirm your identity and ensure your right to access your Personal
          Data (or to exercise any of your other rights). This is a security
          measure to ensure that Personal Data is not disclosed to any person
          who has no right to receive it. We may also contact you to ask you for
          further information in relation to your request to speed up our
          response.
        </p>
        <p>
          We will use our best efforts to respond to all legitimate requests
          within one month. Occasionally it could take us longer than a month if
          your request is particularly complex or you have made a number of
          requests. In this case, we will notify you and keep you updated.
        </p>
      </div>
    ),
  },
  {
    title: "Questions about this Privacy Policy",
    content: (
      <div>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          via email at{" "}
          <a className="default" href="mailto:support@Convert-Bills.com">
            support@Convert-Bills.com
          </a>
          .
        </p>
      </div>
    ),
  },
];

export default function Privacy({}) {
  return (
    <div className="terms-container">
    <Head>
        <title>CONVERT | Privacy & policy</title>
      </Head>
      <NavBar mode="white-with-chama" className="no-border" />
      <section className="privacy-header">
        <h1 className="header-small-title">Privacy Policy</h1>
      </section>
      <img className="image-mobile" src="/Assets/img/image-mobile-18.svg" alt="" />
      <Row classname="container1" style={{ maxWidth: 1000, margin: 'auto', marginTop: 40}}>
        <Col xs={24} sm={24} md={24} lg={8} className="col-padded">
          <Anchor affix={false}>
            {items.map((item) => {
              return (
                <Link
                  href={"#" + item.title.replace(" ", "-")}
                  title={item.title}
                />
              );
            })}
          </Anchor>
        </Col>
        <Col xs={24} sm={24} md={24} lg={16} className="col-padded">
          {items.map((item) => {
            return (
              <section
                classNam="list-content__item"
                id={item.title.replace(" ", "-")}
                style={{ marginBottom: 40 }}
              >
                <h3 className="small-title">{item.title}</h3>
                {item.content}
              </section>
            );
          })}
        </Col>
      </Row>
      <Footer />
    </div>
  );
}
