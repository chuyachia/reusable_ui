import React from "react";

import RadioCheckGroup from "../RadioCheckGroup";

describe("RadioCheckGroup ", () => {
  let wrapper;
  it("should render", () => {
    wrapper = shallow(<RadioCheckGroup />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render its children with properties", () => {
    wrapper = shallow(
      <RadioCheckGroup variant="testvariant" direction="testdirection">
        <span>Item</span>
      </RadioCheckGroup>
    );
    expect(wrapper.find("span").length).toBe(1);
    expect(wrapper.find("span").prop("variant")).toBe("testvariant");
  });
});
