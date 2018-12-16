import React from "react";

import Select from "../Select";
import Button from "../../Button";

describe("Select", () => {
  let wrapper;
  it("should render", () => {
    wrapper = shallow(<Select />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render down arrow at the initial state", () => {
    wrapper = shallow(<Select/>);
    expect(wrapper.find(Button).props().children).toBe('▼');
  });
  it("should render up arrow after click", () => {
    wrapper = shallow(<Select/>);
    wrapper.find(Button).simulate("click");
    expect(wrapper.find(Button).props().children).toBe('▲');
  });
  // it("should render the value property as a child of <span>", () => {
  //   wrapper = shallow(<Select label="A" />);
  //   expect(wrapper.find("span").props().children).toBe("A");
  // });
  // it("should render its children when open is true", () => {
  //   wrapper = shallow(<Select open={true}><div className='test'>Test</div></Select>);
  //   expect(wrapper.find('.test').length).toBe(1);
  // });
  // it("should call onClick function when inner div is clicked", () => {
  //   let mockFunc = jest.fn();
  //   wrapper = shallow(<Select label="A" onSelect={mockFunc} />);
  //   wrapper.find('div').at(1).simulate("click");
  //   expect(mockFunc.mock.calls.length).toBe(1);
  // });
});
