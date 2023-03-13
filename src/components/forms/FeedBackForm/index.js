import React, { Component } from "react";
import cx from "classnames";
import styles from "./FeedBackForm.module.css";
const initialState = {
  firstName: "",
  number: "",
  firstNameValid: true,
  numberValid: true,
};

const nameRegex = /^[A-Z][a-z]{3,15}$/;
const numberRegex = /^[1-9]{2}[0-9]{3}[0-9]{2}[0-9]{2}$/;
class FeedBackForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
  }

  handleInput = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
      [name + "Valid"]:
        name === "firstName"
          ? nameRegex.test(value)
          : numberRegex.test(Number.parseInt(value)),
    });
    console.log(Number.parseInt(value));
  };

  render() {
    const { firstName, number, firstNameValid, numberValid } = this.state;
    const firstNameClasses = cx(styles.input, {
      [styles.invalid]: !firstNameValid,
    });
    const numberClasses = cx(styles.input, {
      [styles.invalid]: !numberValid,
    });
    return (
      <form className={styles.form__container}>
        <input
          className={firstNameClasses}
          type="text"
          name="firstName"
          value={firstName}
          onChange={this.handleInput}
          placeholder='John'
        />
        <div className={styles.phone__wrap}>
        <label for='number'>380</label>
        <input
          className={numberClasses}
          id="number"
          type="tel"
          name="number"
          value={number}
          onChange={this.handleInput}
          placeholder='999985316'
        />
        </div>
        

        <input type="submit" className={styles.input}/>
      </form>
    );
  }
}

export default FeedBackForm;
