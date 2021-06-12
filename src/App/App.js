import { BooksList } from "../BooksList";
import { BookItem } from "../BookItem"
// import { CreateBook } from "./CreateBook";
// import { UpdateBook } from "./UpdateBook";
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
          <BooksList />
        </Route>
        <Route path="/BookItem">
          <BookItem />
        </Route>
      </Switch>
    </>
  );
}

export default App;
