import React from "react";

import Select from "../Select";
import Button from "../../Button";
import Tag from "../../Tag";
import Input from "../../Input/Input";


describe("Select", () => {
  let wrapper;
  it("should render", () => {
    wrapper = shallow(<Select />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render down arrow at the initial state", () => {
    wrapper = shallow(<Select />);
    expect(wrapper.find(Button).prop('children')).toBe("▼");
  });
  it("should render up arrow after click when not controlled", () => {
    wrapper = shallow(<Select />);
    wrapper.find(Button).simulate("click");
    expect(wrapper.find(Button).prop('children')).toBe("▲");
  });
  it("should stay at down arrow after click when controlled to not open", () => {
    wrapper = shallow(<Select controlled open={false} />);
    wrapper.find(Button).simulate("click");
    expect(wrapper.find(Button).prop('children')).toBe("▼");
  });
  it("should take an object as selected and render the label property as a child of <span>", () => {
    wrapper = shallow(<Select selected={{ value: "a", label: "A" }} />);
    expect(wrapper.find("span").prop('children')).toBe("A");
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
      <Select
        selected={[{ value: "a", label: "A" }]}
        multiple
      />
    );
    expect(wrapper.find(Tag).prop('value')).toBe('a');
    expect(wrapper.find(Tag).prop('children')).toBe('A');
  });
  it("should render <Input> when suggestion is true", () => {
    wrapper = shallow(
      <Select suggestion/>
    );
    expect(wrapper.find(Input).length).toBe(1);
  });
});
