import React from "react";

import Select from "../Select";
import Button from "../../Button";

describe("Select", () => {
  let wrapper;
  it("should render", () => {
    wrapper = shallow(<Select />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render down arrow when opens is true", () => {
    wrapper = shallow(<Select open={true}/>);
    expect(wrapper.find(Button).props().children).toBe('▲');
  });
  it("should render down arrow when opens is false", () => {
    wrapper = shallow(<Select open={false}/>);
    expect(wrapper.find(Button).props().children).toBe('▼');
  });
  it("should render the value property as a child of <span>", () => {
    wrapper = shallow(<Select value="A" />);
    expect(wrapper.find("span").props().children).toBe("A");
  });
  it("should render its children when open is true", () => {
    wrapper = shallow(<Select open={true}><div className='test'>Test</div></Select>);
    expect(wrapper.find('.test').length).toBe(1);
  });
  it("should call onClick function when inner div is clicked", () => {
    let mockFunc = jest.fn();
    wrapper = shallow(<Select value="A" onClick={mockFunc} />);
    wrapper.find('div').at(1).simulate("click");
    expect(mockFunc.mock.calls.length).toBe(1);
  });
});
