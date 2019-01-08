import React from "react";

import DropDownItem from "../DropDownItem";

describe("DropDownItem", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<DropDownItem value="A" />);
  });
  it("should render", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should render the value property as a value <li>", () => {
    expect(wrapper.find("li").props().value).toBe("A");
  });
});
