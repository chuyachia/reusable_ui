import React from "react";

import Checkbox from "../Checkbox";

describe("Checkbox", () => {
  let wrapper;
  it("should render", () => {
    wrapper = shallow(<Checkbox />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render its children with properties", () => {
    var testclassname = "testclassname";
    var testvalue = "testvalue";
    wrapper = shallow(<Checkbox className={testclassname} value={testvalue} />);
    expect(wrapper.find("label").prop("className")).toBe(testclassname);
    expect(wrapper.find("input").prop("value")).toBe(testvalue);
  });
  it("should render a checked checkbox if prop selected is true", () => {
    wrapper = shallow(<Checkbox selected={true} />);
    expect(wrapper.find("input").prop("checked")).toBe(true);
  });
  it("should render a checked checkbox if its value is in prop groupSelection", () => {
    var testvalue = "testvalue";
    var groupSelection = ["testvalue", "aaa"];
    wrapper = shallow(
      <Checkbox value={testvalue} groupSelection={groupSelection} />
    );
    expect(wrapper.find("input").prop("checked")).toBe(true);
  });
});
