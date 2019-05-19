import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter, Route, Link, NavLink, Switch } from "react-router-dom";

import useMedia from "./hooks/useMedia";
import { Button, DropDownItem, DropDownList } from "reusable-components-poc";
import "./app-styles.scss";
import { ThemeContext } from "reusable-components-poc";

const appTheme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!./app-theme.scss');
const ButtonsExample = lazy(() => import("./examples/ButtonsExample"));
const InputsExample = lazy(() => import("./examples/InputsExample"));
const SelectsExample = lazy(() => import("./examples/SelectsExample"));
const ChecksExample = lazy(() => import("./examples/ChecksExample"));
const TableExample = lazy(() => import("./examples/TableExample"));

const MainPage = () => {
  return <div>This is a proof of concept</div>;
};

const App = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [useCustomTheme, setUseCustomTheme] = useState(false);
  const mediaQueryMatch = useMedia(
    ["(min-width: 992px)", "(min-width: 768px)", "(min-width: 576px)"],
    ["large", "medium", "small"],
    "small"
  );

  return (
    <ThemeContext.Provider value={useCustomTheme && { theme: appTheme }}>
      <BrowserRouter>
        <div className="wrapper">
          <Button
            className="change-theme"
            variant="warning"
            onClick={() => setUseCustomTheme(!useCustomTheme)}
          >
            Change theme
          </Button>
          {mediaQueryMatch === "small" ? (
            <aside className="topbar">
              <Link to="/">
                <h4 className="logo">Reusable components example page</h4>
              </Link>
              <div className="dropdown-wrap">
                <Button
                  onClick={() => setDropDownOpen(!dropDownOpen)}
                  className="nav-button"
                >
                  <div className="menu-icon" />
                  <div className="menu-icon" />
                  <div className="menu-icon" />
                </Button>
                <DropDownList
                  open={dropDownOpen}
                  onClick={() => setDropDownOpen(false)}
                  rightSideAlign={true}
                  controlled={true}
                >
                  <NavLink activeClassName="nav-active" to="/button">
                    <DropDownItem>Button</DropDownItem>
                  </NavLink>
                  <NavLink activeClassName="nav-active" to="/input">
                    <DropDownItem>Input</DropDownItem>
                  </NavLink>
                  <NavLink activeClassName="nav-active" to="/select">
                    <DropDownItem>Select</DropDownItem>
                  </NavLink>
                  <NavLink activeClassName="nav-active" to="/checkradio">
                    <DropDownItem>Checkbox and Radio Button</DropDownItem>
                  </NavLink>
                  <NavLink activeClassName="nav-active" to="/table">
                    <DropDownItem>Table</DropDownItem>
                  </NavLink>
                </DropDownList>
              </div>
            </aside>
          ) : (
            <aside className="sidebar">
              <Link to="/">
                <section>
                  <h4 className="logo">Reusable components example page</h4>
                </section>
              </Link>
              <NavLink activeClassName="nav-active" to="/button">
                <section>
                  <h3>Button</h3>
                </section>
              </NavLink>
              <NavLink activeClassName="nav-active" to="/input">
                <section>
                  <h3>Input</h3>
                </section>
              </NavLink>
              <NavLink activeClassName="nav-active" to="/select">
                <section>
                  <h3>Select</h3>
                </section>
              </NavLink>
              <NavLink activeClassName="nav-active" to="/checkradio">
                <section>
                  <h3>Checkbox and Radio Button</h3>
                </section>
              </NavLink>
              <NavLink activeClassName="nav-active" to="/table">
                <section>
                  <h3>Table</h3>
                </section>
              </NavLink>
            </aside>
          )}
          <main className="main">
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route path="/" exact={true} component={MainPage} />
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
    </ThemeContext.Provider>
  );
};

export default App;
