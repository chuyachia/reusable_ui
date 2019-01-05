import React from "react";
import Tag from "../Tag";

describe("Tag", () => {
    let wrapper;
    let mockFunc;
    beforeEach(() => {
      mockFunc = jest.fn();
      wrapper = shallow(<Tag onClick={mockFunc} value="A"/>);
    });
    it("should render", () => {
      expect(wrapper).toMatchSnapshot();
    });
    it("should call onClick function when clicked", () => {
      wrapper.simulate("click");
      expect(mockFunc).toBeCalledTimes(1);
    });
  });
  