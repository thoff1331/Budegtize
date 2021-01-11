import { shallow } from "enzyme";
import App from "./App";
import Header from "./components/Header/header";
it("renders without crashing", () => {
  shallow(<App />);
});

it("haeder renders without crashing", () => {
  shallow(<Header />);
});

it("renders app header", () => {
  const wrapper = shallow(<Header />);
  let welcome = <h1>Budgetize</h1>;

  expect(wrapper.contains(welcome)).toEqual(true);
});
