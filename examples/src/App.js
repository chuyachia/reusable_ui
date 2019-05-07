import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import useMedia from "./hooks/useMedia";
import { Button, DropDownItem, DropDownList } from "reusable-components-poc";
import "./appStyle.scss";

const ButtonsExample = lazy(() => import("./examples/ButtonsExample"));
const InputsExample = lazy(() => import("./examples/InputsExample"));
const SelectsExample = lazy(() => import("./examples/SelectsExample"));
const ChecksExample = lazy(() => import("./examples/ChecksExample"));
const TableExample = lazy(() => import("./examples/TableExample"));

const App = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const mediaQueryMatch = useMedia(
    ["(min-width: 992px)", "(min-width: 768px)", "(min-width: 576px)"],
    ["large", "medium", "small"],
    "small"
  );

  return (
    <BrowserRouter>
      <div className="wrapper">
        {mediaQueryMatch === "small" ? (
          <aside className="topbar">
            <h4 className="logo">Reusable components example page</h4>
            <div className="dropdown-wrap">
              <Button onClick={() => setDropDownOpen(!dropDownOpen)}>
                <div className="menu-icon" />
                <div className="menu-icon" />
                <div className="menu-icon" />
              </Button>
              <DropDownList
                open={dropDownOpen}
                onClick={() => setDropDownOpen(false)}
                rightSideAlign={true}
              >
                <DropDownItem>
                  <Link to="/button">Button</Link>
                </DropDownItem>
                <DropDownItem>
                  <Link to="/input">Input</Link>
                </DropDownItem>
                <DropDownItem>
                  <Link to="/select">Select</Link>
                </DropDownItem>
                <DropDownItem>
                  <Link to="/checkradio">Checkbox and Radio Button</Link>
                </DropDownItem>
                <DropDownItem>
                  <Link to="/table">Table</Link>
                </DropDownItem>
              </DropDownList>
            </div>
          </aside>
        ) : (
          <aside className="sidebar">
            <section>
              <h3 className="logo">Reusable components example page</h3>
            </section>
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
        )}
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
};

export default App;
