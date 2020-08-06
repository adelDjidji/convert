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
          In these Terms and Conditions, unless the context otherwise requires,
          the following words and expressions shall have the following meanings:
          -
        </p>
        <p>
          <strong className="bold">“Beneficiary”</strong> means the recipient of
          the funds pursuant to the Payment Transactions performed by the User.
        </p>
        <p>
          <strong className="bold">“Company”</strong> means (Pay n Earn Pte. Ltd
          | Co: 201819626R) & (Lets Pay N Earn Sdn. Bhd | Co: 1334962-H)
        </p>
        <p>
          <strong className="bold">“KYC”</strong> means the process of
          validating the identity of a User by verifying the personal details of
          the User.
        </p>
        <p>
          <strong className="bold">“Membership”</strong> means the membership of
          the Program.
        </p>
        <p>
          <strong className="bold">“Participating Merchant”</strong> means the
          participating merchant(s) of the Program.
        </p>
        <p>
          <strong className="bold">“Payment Transaction”</strong> means the
          credit card payment or any other mode of payment made by the User on
          the Company’s online platforms for funds transferring or bill
          payments.
        </p>
        <p>
          <strong className="bold">“Points”</strong> means the points awarded to
          the User through the Program.
        </p>
        <p>
          <strong className="bold">“Program”</strong> means the Rewards program
          pursuant to the marketing campaign or promotion conducted by the
          Company from time to time.
        </p>
        <p>
          <strong className="bold">“Rewards”</strong> means the products,
          services, rewards, gifts or other benefits made available by the
          Participating Merchant which can be redeemed by the User using the
          Points earned through the Program.
        </p>
        <p>
          <strong className="bold">“Services”</strong> means the services
          provided by the Company which facilitate the payment of the Payment
          Transactions.
        </p>
        <p>
          <strong className="bold">“Service Fees”</strong> means the fixed fees
          and charges imposed by the Company on the User for the provision of
          the Services.
        </p>
        <p>
          <strong className="bold">“User”</strong> means the registered user of
          the Services provided by the Company and the participating member of
          the Program.
        </p>
      </div>
    ),
  },
  {
    title: "Acceptance of Terms",
    content: (
      <div>
        <p>
          These Terms and Conditions (including the Privacy Policy) set out the
          terms of the agreement between the Company and the User with regards
          to the Services and Program provided by the Company.
        </p>
        <p>
          By using the Services and joining the Membership, the User is deemed
          to have accepted these Terms and Conditions. The Company reserves its
          right to update these Terms and Conditions at any time without notice
          to the User. By continuing using the Services and maintaining the
          Membership, the User will be deemed to have accepted the updated Terms
          and Conditions.
        </p>
      </div>
    ),
  },
  {
    title: "Description of Services",
    content: (
      <div>
        <p>
          Through the Services, the User will be able to perform the Payment
          Transactions through the Company’s online platform, namely CONVERT
          (www.Convert-Bills.com), and to redeem Rewards from the Participating
          Merchant using the Points earned through the Program.
        </p>
        <p>
          The Company reserves the right to, at any time, vary or terminate the
          Services or any privileges under the Program with or without prior
          notification to the User and without being liable in any way to the
          User.
        </p>
      </div>
    ),
  },
  {
    title: "Disclaimer of Third-Party Content",
    content: (
      <div>
        <p>
          The Site contains information and materials provided by third parties{" "}
          <strong className="bold">(“Third Party Content”)</strong>.
        </p>
        <p>
          By accessing the Site, the User acknowledges and agrees that the
          Third-Party Content is not created by the Company. The provision of
          Third-Party Content is for general informational purposes only and
          does not constitute a recommendation or solicitation to purchase or
          sell any product or services or make any other type of purchase or
          decision.
        </p>
        <p>
          The Company does not provide any warranty of any kind, express or
          implied, regarding the Third-Party Content. The Company disclaims any
          responsibility or liability related to User’s access or use of any
          Third-Party Content.
        </p>
        <p>
          Third party links that may be accessed via the Site are for the
          convenience of browsers only. The Third-Party Content including any
          website to which the User links from the Site the responsibility of
          the provider of is solely the Third Party Content. Any transactions
          that the User enters into with the provider of the Third Party Content
          listed in the Site or linked from the Site are solely between the User
          and the provider of the Third Party Content and therefore subject to
          the applicable terms and conditions imposed by that provider of the
          Third-Party Content. The User shall liaise with the provider of the
          Third-Party Content directly with matters concerning the transactions
          that the User enters into with the provider of the Third-Party
          Content. The Company is not responsible in any way for any such
          Third-Party Content that may be accessed via the Site. The Company
          does not endorse the Third-Party Content contained in the Site, nor
          the provider of the Third-Party Content, and hereby disclaims any
          responsibility for the Third-Party Content.
        </p>
        <p>
          The User acknowledges that no guarantees are made by the Company or
          the Site as to the Third- Party Content’s accuracy, completeness, or
          timeliness. The User acknowledges and agrees not to hold the Company,
          the Site, liable for any product or services purchase or any decision
          or other transaction the User may make based on the reliance on or use
          of the Third Party Content, or any liability that may arise due to the
          delivery of the Third Party Content for any reason.
        </p>
      </div>
    ),
  },
  {
    title: "User Account and Membership",
    content: (
      <div>
        <p>
          To use the Services and to join the Membership, the User will need to
          register with the Company by creating an account with the Company.
          Creation of the account is free and only individual of eighteen (18)
          years and above is eligible to create an account with the Company. The
          User agrees to provide the necessary information to the Company for
          registration purpose. The Company may, in its sole discretion, approve
          or refuse an application made by any person to be a User without the
          need to assign any reason.
        </p>
        <p>
          The User may close its account at any time. Upon the closure of its
          account, all unused Points will immediately expire and be removed from
          its account. The User will not be entitled to any compensation from
          the Company arising from such expiry and removal of the Points.
        </p>
        <p>
          The Company reserves the right to freeze or terminate the account in
          the event that including but not limited to the User is involved or
          likely to be involved in dishonest, fraudulent, illegal and/or
          criminal activities in using the Services, the User is in breach of or
          likely to breach any acts, statutes, laws, by-laws, rules and/or
          regulations imposed by any regulatory body or government agency in
          using the Services, the User is in breach or likely to breach any of
          the terms of these Terms and Conditions, or the account becomes domain
          or inactive for a continuous three-month period or any other period
          stipulated by the Company.
        </p>
        <p>
          Upon the freezing of the account by the Company, the User may request
          the Company to reactivate such account. However, the Company will not
          reactivate such account if the User fails to cooperate with the
          Company or fails to provide any relevant information upon the request
          by the Company.
        </p>
        <p>
          Upon the termination of the account by the Company, all unused Points
          will immediately expire and be removed from the account and the User
          will not be entitled to any compensation from the Company arising from
          such expiry and removal of the Points.
        </p>
        <p>
          The Company will not be held liable for any losses or damages that the
          User may incur upon freezing or termination of the account by the
          Company. Any freezing or termination of the account by the Company
          pursuant to these Terms and Conditions is without prejudice to the
          Company’s other rights and remedies under these Terms and Conditions
          or at law.
        </p>
        <p>
          The User agrees to immediately notify the Company by contacting its
          customer care department in the event that there is any fraudulent or
          unauthorized use of the account. The Company’s customer care
          department will investigate the complaint and suspend the account as
          soon as practicable. However, the Company will not be liable to
          compensate the User any of the loss or damages suffered by the User
          due to any fraudulent or unauthorized use of its account as it is the
          User’s duty to take the necessary precautions to safeguard its
          account.
        </p>
      </div>
    ),
  },
  {
    title: "Payment Transaction",
    content: (
      <div>
        <p>
          The Company’s authorization of any Payment Transaction performed by
          the User is subject to the Company’s KYC process and acceptance of the
          credit card issuer. Typically, the Company will require a User to
          provide a copy of its NRIC or Passport, the amount of the Payment
          Transaction, the Beneficiary’s bank account details, and other
          relevant information.
        </p>
        <p>
          Upon authorization of the Payment Transaction by the Company, it will
          take at least Seven (7) working days for the funds to be credited into
          the Beneficiary’s bank account.
        </p>
        <p>
          All Payment Transactions are final and non-refundable. The Company
          will not be held liable to the User if the Payment Transaction fails
          due to reasons including but not limited to insufficient funds,
          payment bank denying the transaction, invalid Beneficiary’s bank
          account number, incorrect bank name, incorrect swift code, improper
          documentation etc.
        </p>
        <p>
          If the User discovers any discrepancy or error in its account, the
          User must notify the Company’s customer care department within seven
          (7) days from the date of the disputed Payment Transaction. Failing
          which, the User will be deemed to have accepted the accuracy of the
          Payment Transaction.
        </p>
        <p>
          Upon notification by the User of the discrepancy or error in its
          account, the Company will investigate and inform the User of the
          outcome of the investigation within thirty (30) days from the date of
          the User’s notification. The Company’s decision is final and binding.
          In the event any incorrect sum was deducted from the account, the
          Company shall have the rights to make the necessary adjustment or
          deduction from the account as required.
        </p>
        <p>
          The Company will not be liable to reimburse the User of any Payment
          Transaction and/or to reverse any Payment Transaction due to the
          User’s own error or negligence.
        </p>
      </div>
    ),
  },
  {
    title: "Fees and Charges",
    content: (
      <div>
        <p>
          The Company will impose fee and charges to the User for the provision
          of the Services. The Company reserves the right to vary the fees and
          charges from time to time. All fees and charges are final and
          non-refundable.
        </p>
      </div>
    ),
  },
  {
    title: "Points Awarding",
    content: (
      <div>
        <p>
          Points awarded to the User through the Program will be at a rate
          determined by the Company at its own discretion. The Company’s
          decision on the Points awarded to the User through the Program is
          final and binding. Every Points awarded to the User through the
          Program will be recorded in the account. The Company may alter the
          method and rate at which Points are awarded from time to time at its
          own discretion without notice.
        </p>
        <p>
          Points awarded to the User through the Program will expire on the
          expiry date as determined by the Company at its own discretion. Points
          awarded to the User through the Program cannot be converted into cash
          or transferred to any third party.
        </p>
      </div>
    ),
  },
  {
    title: "Redemption of Rewards",
    content: (
      <div>
        <p>
          The User may redeem the Rewards using the Points earned through the
          Program. The Rewards may be redeemed at the Participating Merchant's
          outlets, website, mobile apps or by any other methods as determined by
          the Company from time to time.
        </p>
        <p>
          The User is required to input a valid PIN for each redemption upon
          request from the Participating Merchant. The Company or the
          Participating Merchant reserves the right to reject any redemption if
          the PIN is invalid. Once the redemption has been accepted, it cannot
          be cancelled, exchanged or returned. Points cannot be exchanged for
          cash and can only be used for the redemption of Rewards. Upon
          confirmation of the redemption, Points used for the redemption will be
          deducted from the account.
        </p>
        <p>
          Redemption of Rewards is subject to availability and all other
          applicable terms and conditions as imposed by the Participating
          Merchant or the Company. The Company or the Participating Merchant
          makes no representation or warranty of any kind (whether express or
          implied) with regards to the condition, fitness for purposes,
          merchantable quality or otherwise of any Rewards redeemed.
        </p>
        <p>
          The Company shall not be responsible for any failure or delay by the
          Participating Merchant to supply such Reward, or loss or damage to
          such Reward during delivery.
        </p>
      </div>
    ),
  },
  {
    title: "General Provisions",
    content: (
      <div>
        <h3>Intellectual Property Rights</h3>
        <p>
          The User acknowledges that all trademarks, copyrights and other
          intellectual property rights relating to the Services and the Programs
          are owned by or licensed to the Company and shall remain the sole
          property of the Company or its licensor, as the case may be.
        </p>
        <p>
          The User acknowledges that all trademarks, copyrights and other
          intellectual property rights relating to the Services and the Programs
          are owned by or licensed to the Company and shall remain the sole
          property of the Company or its licensor, as the case may be.
        </p>
      </div>
    ),
  },
  {
    title: "Privacy Policy",
    content: (
      <div>
        <p>
          The User agrees and accepts all the terms of the Privacy Policy are
          incorporated herein by reference and shall form an essential and
          integral part of these Terms and Conditions.
        </p>
      </div>
    ),
  },
  {
    title: "Disclaimer and Limitation of Liability",
    content: (
      <div>
        <p>
          The Services are provided on an “as is” and “as available” basis. The
          Company disclaims all liability and makes no express or implied
          representation or warranties of any kind in relation to the Services
          including but not limited to accessibility, timeliness and
          uninterrupted use of the Services; and completeness, timeliness,
          sequence, accuracy or the security of any data, information provided
          to the User as part of the Services.
        </p>
        <p>
          The Services are provided on an “as is” and “as available” basis. The
          Company disclaims all liability and makes no express or implied
          representation or warranties of any kind in relation to the Services
          including but not limited to accessibility, timeliness and
          uninterrupted use of the Services; and completeness, timeliness,
          sequence, accuracy or the security of any data, information provided
          to the User as part of the Services.
        </p>
        <p>
          The User expressly agrees that its use of the Services is at its sole
          risk and discretion and the User will assume total responsibility
          thereof. The User will rely on its own review and evaluation of the
          Services to assess its suitability for its particular purpose. The
          User sole remedy against the Company in the event of dissatisfaction
          is to cease using the Services.
        </p>
        <p>
          The Company shall not be liable for any special, incidental, indirect
          or consequential damages, or for any lost revenue, profits or business
          arising out of, or in connection with the Services (including any
          breach hereof).
        </p>
      </div>
    ),
  },
  {
    title: "Indemnification",
    content: (
      <div>
        <p>
          The User agrees to, at its sole cost and expense, indemnify, defend
          and hold harmless the Company against any and all cost, claims, suits,
          actions, demands, damages, liabilities, expenses (including reasonable
          fees and disbursements of counsel), judgments, settlements and
          penalties of every kind (collectively “Losses”) in connection with:
          (a) any breach by the User of any terms contained herein; (b) any
          failure by the User to comply with all applicable laws in connection
          with the Services provided hereunder; (c) any violation or claimed
          violation of a third party’s rights, including intellectual property
          rights in connection with the Services; or (d) the negligent or
          intentionally wrongful acts or omissions of the User.
        </p>
      </div>
    ),
  },
  {
    title: "Governing law and Jurisdiction",
    content: (
      <div>
        <p>
          These Terms and Conditions shall be interpreted, construed and
          enforced in all respects in accordance with the laws of Singapore.
          Each Party irrevocably submits to the exclusive jurisdiction of the
          courts of Singapore, in connection with any action under these Terms
          and Conditions, or otherwise arising under or by reason of these Terms
          and Conditions.
        </p>
      </div>
    ),
  },
  {
    title: "Queries or Complaints",
    content: (
      <div>
        <p>
          The User may address its queries or complaints in relation to the
          Services to the Company’s customer care department via email at{" "}
          <a className="default" href="mailto:support@Convert-Bills.com">
            support@Convert-Bills.com
          </a>
          .
        </p>
      </div>
    ),
  },
  {
    title: "Miscellaneous",
    content: (
      <div>
        <p>
          If any term of these Terms and Conditions is deemed unenforceable, the
          remaining terms will remain in full force and effect. No failure or
          delay by the Company in exercising any right, power or privilege
          hereunder shall operate as a waiver thereof, nor shall any single or
          partial exercise thereof preclude any other or further exercise of any
          other rights, power or privilege hereunder.
        </p>
        <p>
          The Company shall not be liable for any failure to perform its
          obligations herein caused by event which is outside the Company
          reasonable control (“<span className="bold">Force Majeure Event</span>{" "}
          ”). Force Majeure Event includes an act of God, insurrection or civil
          disorder, military operations or act of terrorism, all emergency, acts
          or omission of Government, persons or bodies, or any competent
          authority, labor trouble or industrial disputes of any kind, fire,
          lightning, subsidence, explosion, or floods.
        </p>
        <p>
          The User undertakes to provide the Company with his most updated and
          current personal particulars and information, including his mailing
          and correspondence/permanent address, contact number, electronic mail
          address and other required details in order to ensure that the User’s
          records with the Company are kept up to date, complete and accurate.{" "}
        </p>
        <p>
          The Company may, in its sole discretion, serve notice to the User
          under these Terms and Conditions by posting such notice on the
          Company’s website or any other medium as the Company deems fit.
        </p>
        <p>
          The Company shall be entitled to assign the whole or any part of its
          rights or obligations under these Terms and Conditions at its
          discretion. These Terms and Conditions shall not be assigned by the
          User to any other third party without the Company’s written consent.
        </p>
        <p>
          These Terms and Conditions shall be binding upon and ensure to the
          benefit of the Company’s respective successors in title and assigns.
        </p>
        <p>
          In the event of any inconsistencies between these Terms and Conditions
          and its translation in any other language, the English language
          version of these Terms and Conditions shall supersede and prevail over
          any other language.
        </p>
      </div>
    ),
  },
];

export default function Terms({}) {
  return (
    <div className="terms-container">
    <Head>
        <title>CONVERT | Terms and conditions</title>
      </Head>
      <NavBar mode="white-with-chama" className="no-border" />
      <section className="terms-header">
        <h1 className="header-small-title">User Terms & Condition</h1>
      </section>
      <Row
        classname="container1"
        style={{ maxWidth: 1000, margin: "auto", marginTop: 40 }}
      >
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
