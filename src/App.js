import React from "react";

import {
  Button,
  Input,
  DropDownItem,
  DropDownList,
  Select,
  RadioInput,
  RadioGroup
} from "./components";

class App extends React.Component {
  state = {
    input: "",
    select: { value: "", label: "" },
    multiselect: [],
    selectoptions: [
      { value: "coco", label: "Coco" },
      { value: "gare", label: "Gare" },
      { value: "montreal", label: "Montreal" }
    ],
    filter: ""
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
    this.setState({ select: select });
  };
  setMultiSelect = select => {
    this.setState({ multiselect: [...this.state.multiselect, select] });
  };
  deleteSelect = () => {
    this.setState({
      select: { value: "", label: "" }
    });
  };
  deleteMultiSelect = value => {
    var endIndex = value
      ? this.state.multiselect.map(s => s.value).indexOf(value)
      : this.state.multiselect.length - 1;
    var newMultiSelect = this.state.multiselect
      .slice(0, endIndex)
      .concat(this.state.multiselect.slice(endIndex + 1));
    this.setState({
      multiselect: newMultiSelect
    });
  };
  filterSelectOptions = value => {
    this.setState({ filter: value });
  };
  render() {
    const selectOptions = this.state.selectoptions.filter(s => {
      var filtered =
        this.state.filter.length > 0
          ? s.label.toLowerCase().indexOf(this.state.filter.toLowerCase()) > -1
          : true;
      return filtered;
    });
    const multiSelectOptions = this.state.selectoptions.filter(s => {
      var filtered =
        this.state.filter.length > 0
          ? s.label.toLowerCase().indexOf(this.state.filter.toLowerCase()) > -1
          : true;
      var multiselectvalues = this.state.multiselect.map(s => s.value);
      var notselected = multiselectvalues.indexOf(s.value) == -1;
      return filtered && notselected;
    });
    return (
      <div>
        <Button onClick={this.showClick}>Click me</Button>
        <Button variant="secondary" onClick={this.showClick}>
          Click me
        </Button>
        <Button hollow onClick={this.showClick}>
          Click me
        </Button>
        <Button variant="secondary" hollow onClick={this.showClick}>
          Click me
        </Button>
        <Button variant="warning" onClick={this.showClick}>
          Click me
        </Button>
        <Button variant="warning" hollow onClick={this.showClick}>
          Click me
        </Button>
        <Input
          controlled
          value={this.state.input}
          onChange={this.setTextInput}
          resetButton
          onReset={this.resetTextInput}
        />
        <Input
          controlled
          value={this.state.input}
          onChange={this.setTextInput}
        />
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
          selected={this.state.select}
          onSelect={this.setSelect}
          controlled
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
          multiple
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
          multiple
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
          suggestion
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
          multiple
          suggestion
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
        <RadioGroup
          onChange={this.showChange}
          variant="secondary"
        >
          <RadioInput label="A" value="a" name="radiogroup" />
          <RadioInput label="B" value="b" name="radiogroup" />
          <RadioInput label="C" value="c" name="radiogroup" />
        </RadioGroup>
        <RadioGroup
          onChange={this.showChange}
          variant="warning"
          direction="horizontal"
        >
          <RadioInput label="A" value="a" name="radiogroup" />
          <RadioInput label="B" value="b" name="radiogroup" />
          <RadioInput label="C" value="c" name="radiogroup" />
        </RadioGroup>
      </div>
    );
  }
}

export default App;
