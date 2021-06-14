import { Flex } from "rebass/styled-components";
import { useQuery } from "react-query";
import { getAllBooks } from "../App/api";
import Loader from "react-loader-spinner";
import React, { useState, useEffect } from 'react';
import * as _ from 'lodash';
import firebase from "../apis/firebase/firebase"

const db = firebase.database();

export const BooksList = () => {
  const [data, SetData] = useState([])
  useEffect(()=>
  { 
    db.ref('articles').once('value').then((snapshot) => {
      // var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
      if (snapshot.exists()) {
        console.log(snapshot.val())
        SetData(snapshot.val())
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });

  }, [])

  // const { data, error, isLoading, isError } = useQuery("articles", getArticles);
  // if (isLoading) {
  //   return (
  //       <Flex py="5" justifyContent="center">
  //         <Loader type="ThreeDots" color="#cccccc" height={30} />;
  //       </Flex>
  //   );
  // }

  // if (isError) {
  //   return <span>Error: {error.message}</span>;
  // }
  if (data) {
    return (<div className="band">
    { _.map(data,(data, index) => { return <BookItem data={data} ind={index} />})}</div>
  )
  }
  
};

const BookItem = ({data, ind}) => {
  return (
        <div className={"item-" + (Number(ind)+1).toString()}>
          <a href={data.url} className="card">
            <div className="thumb" style={{ backgroundImage: `url(${data.urlToImage})` }} />
            <article>
              <h1>{data.title}</h1>
              <span>{data.author}</span>
            </article>
          </a>
        </div>
  )}