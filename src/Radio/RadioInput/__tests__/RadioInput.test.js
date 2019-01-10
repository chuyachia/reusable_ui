import React from "react";

import RadioInput from "../RadioInput";

describe("RadioInput", () => {
  let wrapper;
  it("should render", () => {
    wrapper = shallow(<RadioInput />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render its children with properties", () => {
    var testclassname = "testclassname";
    var testvalue = "testvalue";
    var testname = "testname";
    wrapper = shallow(
      <RadioInput className={testclassname} value={testvalue} name={testname}>
        <span>Item</span>
      </RadioInput>
    );
    expect(wrapper.find("label").prop("className")).toBe(testclassname);
    expect(wrapper.find("input").prop("name")).toBe(testname);
    expect(wrapper.find("input").prop("value")).toBe(testvalue);
  });
});
