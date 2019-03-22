/*global console*/

import React, { useState, Suspense, lazy } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

//import ButtonsExample from "./examples/ButtonsExample";
//import InputsExample from "./examples/InputsExample";
import "./appStyle.scss";

const ButtonsExample = lazy(() => import("./examples/ButtonsExample"));
const InputsExample = lazy(() => import("./examples/InputsExample"));
const SelectsExample = lazy(() => import("./examples/SelectsExample"));

class App extends React.Component {
  state = {
    // input: "",
    // select: { value: "", label: "" },
    // multiselect: [],
    // selectoptions: [
    //   { value: "coco", label: "Coco" },
    //   { value: "gare", label: "Gare" },
    //   { value: "montreal", label: "Montreal" },
    // ],
    // radiooptions: [
    //   { value: "coco", label: "Coco" },
    //   { value: "gare", label: "Gare" },
    //   { value: "montreal", label: "Montreal" },
    // ],
    // radioselection: "",
    // checkoptions: [
    //   { value: "coco", label: "Coco" },
    //   { value: "gare", label: "Gare" },
    //   { value: "montreal", label: "Montreal" },
    // ],
    // checkselection: [],
    // filter: "",
  };

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
          </aside>
          <main className="main">
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route path="/button" component={ButtonsExample} />
                <Route path="/input" component={InputsExample} />
                <Route path="/select" component={SelectsExample} />
              </Switch>
            </Suspense>
          </main>
          {/*
        <RadioCheckGroup
          onChange={this.showChange}
          variant="secondary"
          childrenType="radio"
          selected={this.state.radiooptions[0].value}
        >
          {this.state.radiooptions.map(({ value, label }) => (
            <RadioButton
              key={value}
              label={label}
              value={value}
              name="radiogroup"
            />
          ))}
        </RadioCheckGroup>
        <RadioCheckGroup
          onChange={this.showChange}
          variant="secondary"
          childrenType="checkbox"
          selected={[
            this.state.checkoptions[0].value,
            this.state.checkoptions[1].value,
          ]}
        >
          {this.state.checkoptions.map(({ value, label }) => (
            <Checkbox key={value} label={label} value={value} />
          ))}
        </RadioCheckGroup>
        <RadioCheckGroup
          onChange={this.showChange}
          variant="warning"
          direction="horizontal"
        >
          <RadioButton label="A" value="a" name="radiogroup2" />
          <RadioButton label="B" value="b" name="radiogroup2" />
          <RadioButton label="C" value="c" name="radiogroup2" />
        </RadioCheckGroup>
        <Table variant="warning" highlight="column">
          <TableHead>
            <TableRow>
              <TableCell>
                Field1 <Arrow direction="down" />
              </TableCell>
              <TableCell>
                Field2{" "}
                <Button minimal={true} small={true}>
                  <Arrow direction="down" />
                </Button>
                <DropDownList open={true}>
                  {multiSelectOptions.map(s => (
                    <DropDownItem key={s.value} {...s}>
                      {s.label}
                    </DropDownItem>
                  ))}
                </DropDownList>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>409280</TableCell>
              <TableCell>hi</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>367112</TableCell>
              <TableCell>he</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Table variant="secondary" highlight="row">
          <TableHead>
            <TableRow>
              <TableCell>Field1</TableCell>
              <TableCell>Field2</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>409280</TableCell>
              <TableCell>hi</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>367112</TableCell>
              <TableCell>he</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Pagination dataLength={102} numberPerPage={10} />*/}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
