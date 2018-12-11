import React from "react";
import Input from "../Input";
import Button from "../../Button";

describe("Input", () => {
  let wrapper;
  let mockFunc;
  beforeEach(() => {
    mockFunc = jest.fn();
    wrapper = shallow(
      <Input onChange={mockFunc} onReset={mockFunc} resetButton={true} />
    );
  });
  it("should render", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should call onChange function when recieving input value", () => {
    let input = wrapper.find("input");
    let changeEvent = { target: { value: "Hello" } };
    input.simulate("change", changeEvent);
    // expect(mockFunc.mock.calls[0][0]).toBe(changeEvent);
    // I thought mockFunc would match only the value
    expect(mockFunc).toBeCalledWith(changeEvent);
  });
  it("should renders reset button", () => {
    expect(wrapper.find(Button).length).toBe(1);
  });
});
