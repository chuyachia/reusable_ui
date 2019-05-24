import React from "react";

import Select from "../Select";
import Tag from "../../Tag";
import Input from "../../Input/Input";
import Arrow from "../../Arrow";
import { DropDownItem } from "../../DropDown";

const options = [{ value: "a", label: "A" }, { value: "b", label: "B" }, { value: "c", label: "C" }];
describe("Select", () => {
  let wrapper;
  const mockFunc = jest.fn();
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, "useState");
  useStateSpy.mockImplementation(init => [init, setState]);
  it("should render single select", () => {
    wrapper = shallow(<Select options={options} selected={{ value: "a", label: "A" }} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render multiple select", () => {
    wrapper = shallow(<Select options={options} selected={[{ value: "a", label: "A" }, { value: "b", labe: "B" }]} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should set state open to true when clicked", () => {
    wrapper = shallow(<Select options={options} />);
    let arrow = wrapper.find(Arrow);
    arrow.simulate("click", { stopPropagation: () => null });
    expect(setState).toHaveBeenCalledWith(true);
    jest.clearAllMocks();
  });
  it("should render <Input> when suggestion is true", () => {
    wrapper = shallow(<Select options={options} suggestion />);
    expect(wrapper.find(Input).length).toBe(1);
  });
  it("should call onInput prop and sets state when Input change", () => {
    let event = { target: { value: "aa" } };
    wrapper = shallow(<Select options={options} onInput={mockFunc} suggestion />);
    wrapper.find(Input).simulate("change", event);
    expect(mockFunc.mock.calls.length).toBe(1);
    expect(setState).toHaveBeenCalledWith("aa");
    jest.clearAllMocks();
  });
  it("should call onSelect prop when drop down menu item selected", () => {
    wrapper = shallow(<Select options={options} onSelect={mockFunc} />);
    wrapper.find(DropDownItem).at(0).simulate("click", {
      stopPropagation: () => null,
      target: {
        nodeName: "LI",
        getAttribute: (name) => "a"
      }
    });
    expect(mockFunc.mock.calls.length).toBe(1);
    jest.clearAllMocks();
  });
  it("should call onDelete prop when tag click", () => {
    wrapper = shallow(
      <Select
        options={options}
        selected={[{ value: "a", label: "A" }]}
        onDelete={mockFunc}
        multiple
      />
    );
    let event = { target: { getAttribute: () => "a" } };
    wrapper.find(Tag).simulate("click", event);
    expect(mockFunc.mock.calls.length).toBe(1);
    expect(mockFunc.mock.calls[0][0]).toEqual({ value: "a", label: "a" });
  });
});
