import React from 'react';
import { shallow } from "enzyme";
import Button from "../Button";

describe("Button", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<Button />)));
  it("renders", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
