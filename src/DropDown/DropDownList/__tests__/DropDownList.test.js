import React from "react";

import DropDownList from "../DropDownList";

describe("DropDownItem", () => {
  let wrapper;
  it("should render", () => {
    wrapper = shallow(<DropDownList />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render its children", () => {
    wrapper = shallow(
      <DropDownList open={true}>
        <li>Item</li>
      </DropDownList>
    );
    expect(wrapper.find("li").length).toBe(1);
  });
  it("should call onClick function when clicked", () => {
    let mockFunc = jest.fn();
    wrapper = shallow(<DropDownList open={true} onClick={mockFunc} />);
    wrapper.simulate("click", { target: { value: "a", label: "A" } });
    expect(mockFunc.mock.calls.length).toBe(1);
  });
});
