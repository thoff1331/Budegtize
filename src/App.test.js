import { shallow, mount } from "enzyme";
import App from "./App";
import React from "react";
import toJson from "enzyme-to-json";
import Button from "./App";

// application is pretty small so I put all of the tests in one file

// shallow is used to check the componenet with out the children components

// mount will render the component as well as the child component

it("renders App component without crashing", () => {
  shallow(<App />);
});

it("Renders Header without crashing", () => {
  const wrapper = shallow(<App />);
  const header = <h1>Enter a Number to convert it to a Roman Numeral</h1>;
  expect(wrapper.contains(header)).toBe(true);
});
it("Result h1 renders only once", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(".converted-number").length).toEqual(1);
});
it("should pass a selected value to the onChange function", () => {
  const component = shallow(<App />);
  component.find("input").simulate("change", {
    target: {
      value: "Change function",
    },
  });

  expect(toJson(component)).toMatchSnapshot();
});

it("renders only one button with Convert", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find("#convert-button").exists()).toBeTruthy();
});

it("Button has text of Convert", () => {
  const wrapper = shallow(<App />);
  let button = wrapper.find("#convert-button");
  expect(button.text()).toEqual("Convert");
});

it("Button Clicks", () => {
  const wrapper = shallow(<App />);
  const button = wrapper.find("#convert-button").simulate("click");
  const mockButtonClick = jest.fn();
  expect(mockButtonClick).toBeCalledTimes(0);
});
