import React, { Component } from "react";
import styles from "./StopWatch.module.css";
class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(0, 0, 0, 0, 0, 0),
    };
    this.idInterval = null;
    this.idTimeout = null;
    // console.log("contructor");
  }
  tick = () => {
    this.setState((state, props) => {
      const { time } = state;
      const newTime = new Date(time.getTime());
      newTime.setSeconds(newTime.getSeconds() + 1);
      return { time: newTime };
    });
  };

  startTimeout = () => {
    if (this.idTimeout === null) {
      this.idTimeout = setTimeout(this.tick, 1000);
    }
  };

  start = () => {
    if (this.idInterval === null) {
      this.idInterval = setInterval(this.tick, 1000);
    }
  };

  stop = () => {
    clearInterval(this.idInterval);
    this.idInterval = null;
    clearTimeout(this.idTimeout);
    this.idTimeout = null;
  };

  reset = () => {
    this.stop();
    this.setState({ time: new Date(0, 0, 0, 0, 0, 0) });
  };

  componentDidMount() {
    // this.start();
    // console.log("didMount");
  }

  componentDidUpdate() {
    if (this.idTimeout) {
      this.idTimeout = setTimeout(this.tick, 1000);
    }
  }

  componentWillUnmount() {
    this.stop();
    // console.log("componentWillUnmount");
  }

  render() {
    // console.log("render");
    const { time } = this.state;
    return (
      <article className={styles.container}>
        <h2>{time.toLocaleTimeString("en-GB")}</h2>
        <div className={styles.control__btn}>
          <button className={styles.button} onClick={this.startTimeout}>
            start
          </button>
          <button className={styles.button} onClick={this.stop}>
            stop
          </button>
          <button className={styles.button} onClick={this.reset}>
            reset
          </button>
        </div>
      </article>
    );
  }
}

export default StopWatch;
