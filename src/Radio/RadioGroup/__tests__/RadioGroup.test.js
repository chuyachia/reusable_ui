import React from "react";

import RadioGroup from "../RadioGroup";

describe("RadioGroup ", () => {
  let wrapper;
  it("should render", () => {
    wrapper = shallow(<RadioGroup />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render its children with properties", () => {
    wrapper = shallow(
      <RadioGroup variant="testvariant" direction="testdirection">
        <span>Item</span>
      </RadioGroup>
    );
    expect(wrapper.find("span").length).toBe(1);
    expect(wrapper.find("span").prop("variant")).toBe("testvariant");
  });
});
