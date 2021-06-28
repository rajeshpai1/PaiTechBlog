import  PostList  from "../components/Posts/Posts";
import  Post  from "../components/Post/Post";
import React, { Component }  from 'react';
import { Switch, Route, Router } from "react-router-dom";

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/">
        <PostList />
      </Route>
      <Route exact path="/¸">
        <PostList />
      </Route>
      <Route path="/post/{id}">
        <Post />
      </Route>
    </Switch>
  </Router>)
  };

export default App;


  