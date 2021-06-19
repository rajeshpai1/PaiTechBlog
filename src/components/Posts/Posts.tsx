import { useQuery } from "react-query";
// import { getAllBooks } from "../App/api";
import React, { useState, useEffect } from 'react';
import * as _ from 'lodash';
import getList from "apis/firebase/getList";
// import loader from "../components/loader/loader.js"
import { Flex } from "rebass/styled-components";
import Loader from "react-loader-spinner";

const PostList = () => {
  const { data, error, isLoading, isError } = useQuery("articles", getList);
  if (isLoading) {
    return (
    <Flex py="5" justifyContent="center">
    <Loader type="ThreeDots" color="#cccccc" height={30} />;
  </Flex>
);
}

  if (isError) {
    return <span>Error: {error.message}</span>
  }
  if (data) {
    return (
      <div className="band">
      { _.map(data,(data, index) => { return <BookItem5 data={data} ind={index} />})}</div>
  )
  }
  
};

const BookItem5 = ({data, ind} : any) => {
  return (
        <div className={"item-" + (Number(ind)+1).toString()}>
          <a href={`/post/${ind}`} className="card">
            <div className="thumb" style={{ backgroundImage: `url(${data.urlToImage})` }} />
            <article>
              <h1>{data.title}</h1>
              <span>{data.author}</span>
            </article>
          </a>
        </div>
  )}

export default PostList ;

