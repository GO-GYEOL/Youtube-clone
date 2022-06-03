import React, { Component } from "react";
import styles from "./button1.module.css";

class Button1 extends Component {
  render() {
    return (
      // <div className="button">
      //     <span className="text">Button1</span>
      // </div>
      <div className={styles.button}>
        <span className={styles.text}>Button2</span>
      </div>
    );
  }
}

export default Button1;
