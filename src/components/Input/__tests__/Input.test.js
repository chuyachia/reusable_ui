import React from "react";
import Input from "../Input";
import Button from "../../Button";

describe("Input", () => {
  let wrapper;
  let mockFunc;
  it("should render", () => {
    wrapper = shallow(<Input />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render value property if controlled", () => {
    wrapper = shallow(<Input controlled value="A"/>);
    expect(wrapper.find('input').prop('value')).toBe("A");
  });
  it("should not render value property if not controlled", () => {
    wrapper = shallow(<Input value="A"/>);
    expect(wrapper.find('input').prop('value')).not.toBeDefined();
  });
  it("should renders reset button when resetButton is true", () => {
    wrapper = shallow(<Input resetButton={true} />);
    expect(wrapper.find(Button).length).toBe(1);
  });
  it("should call onChange function when recieving input value", () => {
    mockFunc = jest.fn();
    wrapper = shallow(
      <Input onChange={mockFunc} />
    );
    let input = wrapper.find("input");
    let changeEvent = { target: { value: "Hello" } };
    input.simulate("change", changeEvent);
    // expect(mockFunc.mock.calls[0][0]).toBe(changeEvent);
    // I thought mockFunc would match only the value
    expect(mockFunc).toBeCalledWith(changeEvent);
  });
  it("should call onKeyDown function when key pressed", () => {
    mockFunc = jest.fn();
    wrapper = shallow(
      <Input onKeyDown={mockFunc} />
    );
    let input = wrapper.find("input");
    input.simulate("keyDown");
    expect(mockFunc).toBeCalledTimes(1);
  });
  it("should call onFocus function when focused", () => {
    mockFunc = jest.fn();
    wrapper = shallow(
      <Input onFocus={mockFunc} />
    );
    let input = wrapper.find("input");
    input.simulate("focus");
    expect(mockFunc).toBeCalledTimes(1);
  });
});
