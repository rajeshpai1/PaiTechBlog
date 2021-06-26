import  PostList  from "../components/Posts/Posts";
import  Post  from "../components/Post/Post";
import React, { Component }  from 'react';
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <Switch>
        {/* <Route path="/create-book">
          <CreateBook />
        </Route>
        <Route path="/update-book/:id">
          <UpdateBook />
        </Route> */}
        <Route path="/">
          <PostList />
        </Route>
        <Route path="/Post/{id}">
          <Post />
        </Route>
      </Switch>
    </>
  );
}

export default App;
