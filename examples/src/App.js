/*global console*/

import React, { useState, Suspense, lazy } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

//import ButtonsExample from "./examples/ButtonsExample";
//import InputsExample from "./examples/InputsExample";
import "./appStyle.scss";

const ButtonsExample = lazy(() => import("./examples/ButtonsExample"));
const InputsExample = lazy(() => import("./examples/InputsExample"));
const SelectsExample = lazy(() => import("./examples/SelectsExample"));
const ChecksExample = lazy(() => import("./examples/ChecksExample"));
const TableExample = lazy(() => import("./examples/TableExample"));

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <aside className="sidebar">
            <section>
              <Link to="/button">
                <h3>Button</h3>
              </Link>
            </section>
            <section>
              <Link to="/input">
                <h3>Input</h3>
              </Link>
            </section>
            <section>
              <Link to="/select">
                <h3>Select</h3>
              </Link>
            </section>
            <section>
              <Link to="/checkradio">
                <h3>Checkbox and Radio Button</h3>
              </Link>
            </section>
            <section>
              <Link to="/table">
                <h3>Table</h3>
              </Link>
            </section>
          </aside>
          <main className="main">
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route path="/button" component={ButtonsExample} />
                <Route path="/input" component={InputsExample} />
                <Route path="/select" component={SelectsExample} />
                <Route path="/checkradio" component={ChecksExample} />
                <Route path="/table" component={TableExample} />
              </Switch>
            </Suspense>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
