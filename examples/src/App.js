/*global console*/

import React, { useState } from "react";
import {
  Button,
  Input,
  DropDownItem,
  DropDownList,
  Select,
  RadioButton,
  RadioCheckGroup,
  Checkbox,
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Tag,
  Arrow,
  InputValidator,
  InputGroup,
  Pagination,
} from "reusable-components-poc";

class App extends React.Component {
  state = {
    input: "",
    select: { value: "", label: "" },
    multiselect: [],
    selectoptions: [
      { value: "coco", label: "Coco" },
      { value: "gare", label: "Gare" },
      { value: "montreal", label: "Montreal" },
    ],
    radiooptions: [
      { value: "coco", label: "Coco" },
      { value: "gare", label: "Gare" },
      { value: "montreal", label: "Montreal" },
    ],
    radioselection: "",
    checkoptions: [
      { value: "coco", label: "Coco" },
      { value: "gare", label: "Gare" },
      { value: "montreal", label: "Montreal" },
    ],
    checkselection: [],
    filter: "",
  };

  showClick = () => {
    console.log("click");
  };

  showChange = e => {
    console.log(e.target.value);
  };

  setTextInput = e => {
    this.setState({ input: e.target.value });
  };

  resetTextInput = () => {
    this.setState({ input: "" });
  };

  setSelect = select => {
    this.setState({ select });
  };

  setMultiSelect = select => {
    this.setState({ multiselect: [...this.state.multiselect, select] });
  };

  deleteSelect = () => {
    this.setState({
      select: { value: "", label: "" },
    });
  };

  deleteMultiSelect = value => {
    const endIndex = value
      ? this.state.multiselect.map(s => s.value).indexOf(value)
      : this.state.multiselect.length - 1;
    const newMultiSelect = this.state.multiselect
      .slice(0, endIndex)
      .concat(this.state.multiselect.slice(endIndex + 1));
    this.setState({
      multiselect: newMultiSelect,
    });
  };

  filterSelectOptions = value => {
    this.setState({ filter: value });
  };

  render() {
    const selectOptions = this.state.selectoptions.filter(s => {
      const filtered =
        this.state.filter.length > 0
          ? s.label.toLowerCase().indexOf(this.state.filter.toLowerCase()) > -1
          : true;
      return filtered;
    });
    const multiSelectOptions = this.state.selectoptions.filter(s => {
      const filtered =
        this.state.filter.length > 0
          ? s.label.toLowerCase().indexOf(this.state.filter.toLowerCase()) > -1
          : true;
      const multiselectvalues = this.state.multiselect.map(s => s.value);
      const notselected = multiselectvalues.indexOf(s.value) == -1;
      return filtered && notselected;
    });
    return (
      <div>
        <InputGroup>
          <Button variant="primary" onClick={this.showClick}>
            Click me
          </Button>
          <Button variant="secondary" onClick={this.showClick}>
            Click me
          </Button>
          <Button small={true} hollow={true} onClick={this.showClick}>
            Click me
          </Button>
        </InputGroup>
        <Button variant="secondary" hollow={true} onClick={this.showClick}>
          Click me
        </Button>
        <Button variant="warning" onClick={this.showClick}>
          Click me
        </Button>
        <Button variant="warning" hollow={true} onClick={this.showClick}>
          Click me
        </Button>
        <InputValidator
          validator={value => {
            if (value.length > 5) {
              return true;
            } else {
              return false;
            }
          }}
          helpText="An input field"
          warningText="The input value must be more than 5 characters"
        >
          <Input
            inline={true}
            controlled={true}
            value={this.state.input}
            onChange={this.setTextInput}
            resetButton={true}
            onReset={this.resetTextInput}
          />
        </InputValidator>
        <InputValidator
          validator={value => {
            if (value.length > 5) {
              return true;
            } else {
              return false;
            }
          }}
          helpText="An input field"
          warningText="The input value must be more than 5 characters"
        >
          <Input
            controlled={true}
            value={this.state.input}
            onChange={this.setTextInput}
          />
        </InputValidator>
        <InputValidator
          validator={value => {
            if (value.length > 5) {
              return true;
            } else {
              return false;
            }
          }}
          helpText="An input field"
          warningText="The input value must be more than 5 characters"
        >
          <Input controlled={false} />
        </InputValidator>
        <Select
          inline={true}
          selected={this.state.select}
          onSelect={this.setSelect}
        >
          <DropDownList>
            {selectOptions.map(s => (
              <DropDownItem key={s.value} {...s}>
                {s.label}
              </DropDownItem>
            ))}
          </DropDownList>
        </Select>
        <Select
          inline={true}
          selected={this.state.select}
          onSelect={this.setSelect}
          controlled={true}
          open={false}
        >
          <DropDownList>
            {selectOptions.map(s => (
              <DropDownItem key={s.value} {...s}>
                {s.label}
              </DropDownItem>
            ))}
          </DropDownList>
        </Select>
        <Select selected={this.state.select} onSelect={this.setSelect}>
          <DropDownList>
            {selectOptions.map(s => (
              <DropDownItem key={s.value} {...s}>
                {s.label}
              </DropDownItem>
            ))}
          </DropDownList>
        </Select>
        <Select
          multiple={true}
          selected={this.state.multiselect}
          onSelect={this.setMultiSelect}
          onDelete={this.deleteMultiSelect}
        >
          <DropDownList>
            {multiSelectOptions.map(s => (
              <DropDownItem key={s.value} {...s}>
                {s.label}
              </DropDownItem>
            ))}
          </DropDownList>
        </Select>
        <Select
          variant="secondary"
          multiple={true}
          selected={this.state.multiselect}
          onSelect={this.setMultiSelect}
          onDelete={this.deleteMultiSelect}
        >
          <DropDownList>
            {multiSelectOptions.map(s => (
              <DropDownItem key={s.value} {...s}>
                {s.label}
              </DropDownItem>
            ))}
          </DropDownList>
        </Select>
        <Select
          variant="secondary"
          suggestion={true}
          selected={this.state.select}
          onDelete={this.deleteSelect}
          onInput={this.filterSelectOptions}
          onSelect={this.setSelect}
        >
          <DropDownList>
            {selectOptions.map(s => (
              <DropDownItem key={s.value} {...s}>
                {s.label}
              </DropDownItem>
            ))}
          </DropDownList>
        </Select>
        <Select
          variant="secondary"
          multiple={true}
          suggestion={true}
          selected={this.state.multiselect}
          onDelete={this.deleteMultiSelect}
          onInput={this.filterSelectOptions}
          onSelect={this.setMultiSelect}
        >
          <DropDownList>
            {multiSelectOptions.map(s => (
              <DropDownItem key={s.value} {...s}>
                {s.label}
              </DropDownItem>
            ))}
          </DropDownList>
        </Select>
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
        <Pagination dataLength={102} numberPerPage={10} variant="primary" />
      </div>
    );
  }
}

export default App;
