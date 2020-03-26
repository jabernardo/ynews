import React, { useState } from "react";

import Box from "../components/Box";
import Button from "../components/Button";

import Head from 'next/head'

export default function Index() {
  const [ clicked, setClicked ] = useState(0);

  const trackClicks = () => {
    setClicked(clicked + 1);
  };

  return (
    <Box>
      <Head>
        <title>Welcome to my template!</title>
      </Head>
      <h1>Hello World!</h1>
        <Box isRow={true}>
          <Box columns="six">
            Six columns
            <Button onClick={trackClicks}>Normal {clicked}</Button>
            <Button isPrimary={true}>Primary</Button>
        </Box>
        <Box columns="six">
           Six columns
           <Button link="#Hello World!">
            Hello World!
           </Button>
        </Box>
      </Box>
    </Box>
  );
}
