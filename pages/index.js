import React, { useState, Fragment } from "react";

import { Box } from "../components";

import Header from "../widgets/Header";
import News from "../widgets/News";

import Head from 'next/head'

export default function Index() {
  return (
    <Fragment>
      <Head>
        <title>Only YNews</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header title="YCombinator News" />
      <News />
    </Fragment>
  );
}
