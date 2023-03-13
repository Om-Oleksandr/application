import React, { Component } from "react";
import cx from "classnames";
import styles from "./SignInForm.module.css";
const initialState = {
  email: "",
  password: "",
  emailValid: true,
  passwordValid: true,
};
class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { target } = e;
    console.log(target.email.value);
    console.log(target.password.value);
    this.setState({ ...initialState });
  };

  handleInput = ({ target: { name, value } }) =>
    this.setState({ [name]: value, [name + "Valid"]: !value.includes(" ") });

  render() {
    const { email, password, emailValid, passwordValid } = this.state;
    const emailClassName = cx(styles.input, { [styles.invalid]: !emailValid });
    const passClassName = cx(styles.input, {
      [styles.invalid]: !passwordValid,
    });
    return (
      <form className={styles.form__container} onSubmit={this.handleSubmit}>
        <input
          className={emailClassName}
          type="email"
          placeholder="email"
          name="email"
          value={email}
          onChange={this.handleInput}
        />
        <input
          className={passClassName}
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={this.handleInput}
        />
        <input className={styles.input} type="submit" value="send" />
      </form>
    );
  }
}

export default SignInForm;
