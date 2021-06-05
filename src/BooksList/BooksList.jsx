import { Flex } from "rebass/styled-components";
// import { Container } from "../shared"
import { useQuery } from "react-query";
import { getAllBooks } from "../App/api";
import { BookItem } from "./BookItem";
import Loader from "react-loader-spinner";
import React, { Component }  from 'react';

export const BooksList = () => {
  const { data, error, isLoading, isError ,isSuccess} = useQuery("articles", getAllBooks);

  if (isLoading) {
    return (
      // <Container>
        <Flex py="5" justifyContent="center">
          <Loader type="ThreeDots" color="#cccccc" height={30} />;
        </Flex>
      // </Container>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  if (isSuccess) {
    const renderedGoods = data.map(image => {
      return <div><BookItem images={image} /></div>
    })
  
    return <div>{renderedGoods}</div>
  }
  
};
