import React from "react";
import { ThemeProvider } from "emotion-theming";

import {
  Button,
  Input,
  DropDownItem,
  DropDownList,
  Select
} from "./components";

class App extends React.Component {
  state = {
    input: "",
    select: { value: "", label: "" },
    multiselect: [],
    selectoptions: [{ value: "a", label: "A" }, { value: "b", label: "B" }],
    filter: ""
  };
  showClick = () => {
    console.log("click");
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
  deleteMultiSelect = () => {
    var newMultiSelect = this.state.multiselect.slice(
      0,
      this.state.multiselect.length - 1
    );
    this.setState({
      multiselect: newMultiSelect
    });
  };
  filterSelectOptions = value => {
    this.setState({ filter: value });
  };
  render() {
    const selectLabel = this.state.select.label;
    const multiSelectLabels = this.state.multiselect.map(s => s.label);
    const selectOptions = this.state.selectoptions.filter(s => {
      var filtered =
        this.state.filter.length > 0
          ? RegExp(this.state.filter, "i").test(s.label)
          : true;
      return filtered;
    });
    const multiSelectOptions = this.state.selectoptions.filter(s => {
      var filtered =
        this.state.filter.length > 0
          ? RegExp(this.state.filter, "i").test(s.label)
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
        <Select label={selectLabel} onSelect={this.setSelect}>
          <DropDownList>
            {selectOptions.map(s => (
              <DropDownItem key={s.value} {...s}>
                {s.label}
              </DropDownItem>
            ))}
          </DropDownList>
        </Select>
        <Select label={selectLabel} onSelect={this.setSelect}>
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
          label={multiSelectLabels}
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
        <Select
          variant="secondary"
          multiple
          label={multiSelectLabels}
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
        <Select
          variant="secondary"
          suggestion
          label={selectLabel}
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
          label={multiSelectLabels}
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
      </div>
    );
  }
}

export default App;
