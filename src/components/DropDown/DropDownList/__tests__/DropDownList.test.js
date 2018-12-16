import React from "react";

import DropDownList from "../DropDownList";

describe("DropDownItem", () => {
  let wrapper;
  it("should render", () => {
    wrapper = shallow(<DropDownList />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render <ul> when the show property is true", () => {
    wrapper = shallow(<DropDownList open={true} />);
    expect(wrapper.find("ul").length).toBe(1);
  });
  it("should not render <ul> when the show property is false", () => {
    wrapper = shallow(<DropDownList open={false} />);
    expect(wrapper.find("ul").length).toBe(0);
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
