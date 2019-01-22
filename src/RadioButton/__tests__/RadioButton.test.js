import React from "react";

import RadioButton from "../RadioButton";

describe("RadioButton", () => {
  let wrapper;
  it("should render", () => {
    wrapper = shallow(<RadioButton />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render its children with properties", () => {
    var testclassname = "testclassname";
    var testvalue = "testvalue";
    var testname = "testname";
    wrapper = shallow(
      <RadioButton
        className={testclassname}
        value={testvalue}
        name={testname}
      />
    );
    expect(wrapper.find("label").prop("className")).toBe(testclassname);
    expect(wrapper.find("input").prop("name")).toBe(testname);
    expect(wrapper.find("input").prop("value")).toBe(testvalue);
  });
  it("should render a checked radiobutton if prop selected is true", () => {
    wrapper = shallow(<RadioButton selected={true} />);
    expect(wrapper.find("input").prop("checked")).toBe(true);
  });
  it("should render a checked radiobutton if its value is in prop groupSelection", () => {
    var testvalue = "testvalue";
    var groupSelection = "testvalue";
    wrapper = shallow(
      <RadioButton value={testvalue} groupSelection={groupSelection} />
    );
    expect(wrapper.find("input").prop("checked")).toBe(true);
  });
});
