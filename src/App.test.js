import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  let showAll = () => "test data";
  let wrapper = shallow(<App showAll={showAll} />);
  expect(wrapper).toMatchSnapshot();
});
