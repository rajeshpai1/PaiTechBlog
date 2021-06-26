import React from 'react';
import { Flex } from "rebass/styled-components";
import Loader from "react-loader-spinner";

export default function loader () {
    return (
        <Flex py="5" justifyContent="center">
        <Loader type="ThreeDots" color="#cccccc" height={30} />;
      </Flex>
    );
  }
