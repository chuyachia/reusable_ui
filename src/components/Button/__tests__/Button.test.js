import React from "react";
import Button from "../Button";

describe("Button", () => {
  let wrapper;
  let mockFunc;
  beforeEach(() => {
    mockFunc = jest.fn();
    wrapper = shallow(<Button onClick={mockFunc} />);
  });
  it("should render", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should call onClick function when clicked", () => {
    wrapper.simulate("click");
    expect(mockFunc.mock.calls.length).toBe(1);
  });
});
