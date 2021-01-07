import React, { PureComponent } from "react";
import "./budgetStyles.css";
import { budgetCategories } from "../../constants/budgetConstants.js";
class Budget extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      monthlyIncome: 0,
      incomeInput: "",
      Housing: 0,
      Transportation: 0,
      Food: 0,
      Entertainment: 0,
      Insurance: 0,
      Medical: 0,
    };
  }
  handleIncomeInput = (e) => {
    this.setState({
      monthlyIncome: e.target.value,
    });
  };

  handleCategoryChange = (e) => {
    this.setState({
      [e.target.name]: parseInt(e.target.value),
    });
  };

  render() {
    console.log(this.state);
    let categoryCards = budgetCategories.map((el, index) => {
      let categoryState = this.state[el];
      let percentSum =
        (categoryState / this.state.monthlyIncome).toFixed(2) * 100 || 0;
      return (
        <div className="budget-cards">
          <h3>{el}</h3>

          <h3>
            Monthly:
            <input
              type="number"
              name={el}
              placeholder={el}
              onChange={this.handleCategoryChange}
            />
          </h3>

          <h4>
            {el} accounts for {percentSum} % of your monthly income
          </h4>
        </div>
      );
    });
    return (
      <div className="budget-body">
        <div className="monthly-total">
          <h1> My Monthly Income is ${this.state.monthlyIncome}</h1>
          <div className="budget-update">
            <input
              type="number"
              placeholder="Monthly Income"
              onChange={this.handleIncomeInput}
            />
            <button onClick={this.updateIncome}>Update Income</button>
          </div>
          <div className="budget-card-container">{categoryCards}</div>
        </div>
      </div>
    );
  }
}

export default Budget;
