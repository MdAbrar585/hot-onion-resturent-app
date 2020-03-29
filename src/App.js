import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Items from './Component/Items/Items';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ItemReview from './Component/ItemReview/ItemReview';
import Error from './Error/Error';
import ShowItemsCartReview from './Component/ShowItemsCartReview/ShowItemsCartReview';
function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/items">
            <Items></Items>
          </Route>
          {/* <Route path="/itemReview">
          </Route> */}
          <Route path="/breakfast">
            <Items></Items>
          </Route>
          <Route path="/lunch">
            <Items></Items>
          </Route>
          <Route path="/dinner">
            <Items></Items>
          </Route>
          <Route exact path="/">
            <Items></Items>
          </Route>
          <Route path="/showItemsCart">
            <ShowItemsCartReview></ShowItemsCartReview>
          </Route>
          <Route path="/menuItems/:id">
            <ItemReview></ItemReview>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
