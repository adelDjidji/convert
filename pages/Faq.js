import React from "react";
// import "../Styles/faq.scss";
import { Collapse, Icon } from "antd";

const { Panel } = Collapse;

export default function Faq() {
  return (
    <div className="faq-container center" id="faq">
      <p className="header-title blue gotham f16 bold">GENERAL Q&A</p>
      <h1 className="big-title space-bottom">How can we help?</h1>
      <div className="faqs">
        <Collapse
          bordered={false}
          defaultActiveKey={["1"]}
          expandIconPosition="right"
          expandIcon={({ isActive }) =>
            isActive ? (
              <img src="/Assets/icons/minus.svg" />
            ) : (
              <img src="/Assets/icons/plus.svg" />
            )
          }
        >
          <Panel header={<span className="header">Am I eligible to use Convert?</span>} key="1">
            <p>
              <span className="blue bold">CONVERT</span>  has also included the credit card benefits, this means if
              you are using credit card to pay, you are able to gain double
              bonus from the existing benefits of credit card and get extra
              earning from <span className="blue bold">CONVERT</span>.
            </p>
          </Panel>
          <Panel header={<span className="header">What benefits do I gain from Convert?</span>} key="2">
            <p>
            <span className="blue bold">CONVERT</span> helps you to convert your monthly fixed bill payments
              (e.g.: Rental, Installment, Monthly services fees, School fees,
              Insurance, Supplier invoice etc..) into extra income. All you need
              to do is use our platform to make your monthly fixed bill payments
              and you will receive up to 33% CASH POINT (1 Cash Point= 1 Dollar
              local currency) in return. These Cash Points can be utilized for
              redemption of products and vouchers in our Cash-Free Mall.
            </p>
          </Panel>
          <Panel header={<span className="header">What is credit extension benefit?</span>} key="3">
            <p>
              While you are using your credit card to pay for your monthly fixed
              bill payment via <span className="blue bold">CONVERT</span>, you will be automatically eligible to
              enjoy the additional day (up to 45 days) of free credit extension
              provided by the credit card issuing Bank at zero interest as you
              are only required to settle your credit card outstanding before
              payment due date. Please download our app and you can use the
              special calculator to check for the number of days of credit
              extension you are entitled.
            </p>
          </Panel>
          <Panel header={<span className="header">Would my payment be delayed if I pay through Convert?</span>} key="4">
            <p>No. You just need to give us your payment instruction before the monthly/bill payment due date.
            </p>
            <ul>
                <li>Rental, Installment, Monthly Service Fees, School Fees, Supplier invoice – You are required to initiate 7 days payment in advance through our platform.
                </li>
                <li>Utility Bill (Phone, Electricity, Water, Entertainment, Broadband) – Payment will reach vendor within 24 hours.</li>
            </ul>
            <p><span className="blue bold">Note:</span> You did not pay advance if you are using credit card pay thought our platform. 
           <br/> Please refer the chart below</p>
          </Panel>
          <Panel header={<span className="header">What are the differences between using Convert & the traditional way?</span>} key="5">
            <p>Traditionally, you must pay for your monthly fixed expenses (eg. Instalment, rental, and most bills) by cash as no credit term shall be entertained. However, you are allowed to make payments through MonthBank with your credit card. By doing so, you will automatically get to enjoy the interest free credit extension from your credit card as well as its spending rewards (eg. Air-Miles, Cashback, redemption points etc.), and on top of these, <span className="blue bold">CONVERT</span> enables you for extra earning up to 33% of your paying amount.</p>
          </Panel>
          <Panel header={<span className="header">Where else can I utilize my earning (Cash Point)?</span>} key="6">
            <p>You can utilise your earning (Cash Point) at our CASH-FREE MALL to redeem vouchers and use it for your next payment. Soon, your utilization of your Cash Point can be extended to other countries too.</p>
          </Panel>
          <Panel header={<span className="header">What other benefits do I get?</span>} key="7">
            <p>This is amazing! If you are using your credit card to make payment through <span className="blue bold">CONVERT</span>, besides getting your spending reward (e.g.: Air-miles, loyalty points etc) and the credit extension given by the card issuing bank, you will get your amazing <span className="blue bold">CONVERT</span> Earning (Cash Point).</p>
          </Panel>
          <Panel header={<span className="header">Is my money safe with Convert?</span>} key="8">
            <p>Your money is 100% safe. All your money transacted through <span className="blue bold">CONVERT</span> will be kept in an Escrow Bank Account which is monitored and controlled by a government recognized Trustee. MonthBank shall have no right to touch the money for any other purposes but only does the payment transfer.</p>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
}
