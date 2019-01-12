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
      <RadioButton className={testclassname} value={testvalue} name={testname}>
        <span>Item</span>
      </RadioButton>
    );
    expect(wrapper.find("label").prop("className")).toBe(testclassname);
    expect(wrapper.find("input").prop("name")).toBe(testname);
    expect(wrapper.find("input").prop("value")).toBe(testvalue);
  });
});
