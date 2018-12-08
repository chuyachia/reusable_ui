import React from "react";
import Input from "../Input";

describe("Input", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<Input />)));
  it("renders", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
