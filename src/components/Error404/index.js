import React, { Component } from "react";
import styles from "./Error404.module.scss";
import ImageWrapper from "./../ImageWrapper/index";
class Error404 extends Component {
  render() {
    return (
      <ImageWrapper width="100%" height="100%">
        <img
          src="images/mistake.jpg"
          alt="error"
          className={styles.error__img}
        />
      </ImageWrapper>
    );
  }
}

export default Error404;
