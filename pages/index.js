import React, { useState } from "react";

import { Box } from "../components";

import Header from "../widgets/Header";
import News from "../widgets/News";

import Head from 'next/head'

export default function Index() {
  return (
    <Box>
      <Header title="YCombinator News" />
      <News />
    </Box>
  );
}
