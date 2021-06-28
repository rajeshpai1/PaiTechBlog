import { useQuery } from "react-query";
// import { getAllBooks } from "../App/api";
import React, { useState, useEffect } from 'react';
import * as _ from 'lodash';
import {getPost} from "apis/firebase/getList";
import { Flex } from "rebass/styled-components";
import Loader from "react-loader-spinner";
import { useParams } from "react-router-dom";

const Post = () => {
    const { id } = useParams();
    const { data, error, isLoading, isError } = useQuery(["articles", {id}], async() => await getPost(id));
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
      <div>{<PostItem data={data} />}</div>  )
  }
  
};

const PostItem = ({data} : any) => {
    return (
          <div className={"item-1"}>
            <a className="card">
              <div className="thumb" style={{ backgroundImage: `url(${data.thumb_image})` }} />
              <article>
                <h1>{data.title}</h1>
                <p>{data.file}</p>
              </article>
            </a>
          </div>
    )}

export default Post ;

