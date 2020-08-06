import React from "react";
import Head from "next/head";

import "../Components/Footer/footer.scss";
import "../Components/Navbar/navbar.scss";
import "../Styles/landing.scss";
import "../Styles/landing-respo.scss";
import "../Styles/App.scss";
import "../Styles/App.respo.scss";

import "../Styles/about.scss";
import "../Styles/bill.scss";
import "../Styles/career.scss";
import "../Styles/CashFree.scss";
import "../Styles/EarningCalculator.scss";
import "../Styles/faq.scss";
import "../Styles/fraud.scss";
import "../Styles/FreeCredit.scss";
import "../Styles/membership.scss";
import "../Styles/terms.scss";
import "../Styles/contact.scss";

import "sweetalert2/src/sweetalert2.scss";
import "antd/dist/antd.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/Assets/Logo-1000px.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="CONVERT is an “EXTRA Cash Convertor App” which convert your monthly fixed bill to EXTRA cash in 3 minutes"
        />
        <meta
          name="keywords"
          content="CONVERT, convert-bill, convert-bills, convertbill, extra cash"
        />
        <link rel="apple-touch-icon" href="/Assets/Logo-1000px.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"
        />
      </Head>

      <Component {...pageProps} />
    </div>
  );
}
