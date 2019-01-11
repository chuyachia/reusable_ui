import React from "react";

import Select from "../Select";
import Button from "../../Button";
import Tag from "../../Tag";
import Input from "../../Input/Input";

describe("Select", () => {
  let wrapper;
  let mockFunc;
  it("should render", () => {
    wrapper = shallow(<Select />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render up arrow after click when not controlled", () => {
    wrapper = shallow(<Select />);
    wrapper.find(Button).simulate("click");
    expect(wrapper.find(Button).prop("children")).toBe("▲");
  });
  it("should stay at down arrow after click when controlled to not open", () => {
    wrapper = shallow(<Select controlled open={false} />);
    wrapper.find(Button).simulate("click");
    expect(wrapper.find(Button).prop("children")).toBe("▼");
  });
  it("should take an object as selected and render the label property as a child of <span>", () => {
    wrapper = shallow(<Select selected={{ value: "a", label: "A" }} />);
    expect(wrapper.find("span").prop("children")).toBe("A");
  });
  it("should take an array of objects as selected and render the same number of <Tag> when it is multiple select", () => {
    wrapper = shallow(
      <Select
        selected={[{ value: "a", label: "A" }, { value: "b", label: "B" }]}
        multiple
      />
    );
    expect(wrapper.find(Tag).length).toBe(2);
  });
  it("should take an array of objects as selected and render value and chidlren property of <Tag> when it is multiple select", () => {
    wrapper = shallow(
      <Select selected={[{ value: "a", label: "A" }]} multiple />
    );
    expect(wrapper.find(Tag).prop("value")).toBe("a");
    expect(wrapper.find(Tag).prop("children")).toBe("A");
  });
  it("should render <Input> when suggestion is true", () => {
    wrapper = shallow(<Select suggestion />);
    expect(wrapper.find(Input).length).toBe(1);
  });
  it("should have a open method that set open state to true", () => {
    wrapper = shallow(<Select />);
    wrapper.instance().open();
    expect(wrapper.state("open")).toBe(true);
  });
  it("should have a openClose method that toggles open state", () => {
    wrapper = shallow(<Select />);
    expect(wrapper.state("open")).toBe(false);
    wrapper.instance().openClose();
    expect(wrapper.state("open")).toBe(true);
  });
  it("should call onInput prop and sets state when Input change", () => {
    mockFunc = jest.fn();
    let event = { target: { value: "aa" } };
    wrapper = shallow(<Select onInput={mockFunc} suggestion />);
    wrapper.find(Input).simulate("change", event);
    expect(mockFunc.mock.calls.length).toBe(1);
    expect(wrapper.state("textinput")).toBe("aa");
  });
  it("should have a selectOption method that calls onSelect and onInput prop and sets state", () => {
    mockFunc = jest.fn();
    let mockFunc2 = jest.fn();
    let event = { target: { getAttribute: () => "a" } };
    wrapper = shallow(<Select onInput={mockFunc} onSelect={mockFunc2} />);
    wrapper.instance().selectOption(event);
    expect(mockFunc.mock.calls.length).toBe(1);
    expect(mockFunc2.mock.calls[0][0]).toEqual({ value: "a", label: "a" });
  });
  it("should call onDelete prop when tag click", () => {
    mockFunc = jest.fn();
    wrapper = shallow(
      <Select
        selected={[{ value: "a", label: "A" }]}
        onDelete={mockFunc}
        multiple
      />
    );
    let event = { target: { getAttribute: () => "a" } };
    wrapper.find(Tag).simulate("click", event);
    expect(mockFunc.mock.calls.length).toBe(1);
    expect(mockFunc.mock.calls[0][0]).toEqual("a");
  });
  it("should call onDelete prop when input delete keydown", () => {
    mockFunc = jest.fn();
    wrapper = shallow(
      <Select
        selected={[{ value: "a", label: "A" }]}
        onDelete={mockFunc}
        suggestion
      />
    );
    let event = { preventDefault: () => null, keyCode: 8 };
    wrapper.find(Input).simulate("keydown", event);
    expect(mockFunc.mock.calls.length).toBe(1);
  });
});
