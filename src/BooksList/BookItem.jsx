import { Flex, Text, Button, Link as StyledLink } from "rebass/styled-components";
// import { Link } from "react-router-dom"
// import { useMutation, useQueryClient } from "react-query";
// import { removeBook } from "../api";
import Loader from "react-loader-spinner"
import React, { Component }  from 'react';

export const BookItem = ({data}) => {
  // const queryClient = useQueryClient()
  // const { mutateAsync, isLoading } = useMutation(removeBook)

  // const remove = async () => {
  //   await mutateAsync(id)
  //   queryClient.invalidateQueries('books')
  // }

  return (
    <div className="item-7">
    <a href={data.url} className="card">
      <div className="thumb" style={{ backgroundImage: `url({data.urlToImage})` }} />
      <article>
        <h1>{data.title}</h1>
        <span>{data.author}</span>
      </article>
    </a>
  </div>)
};
