import React, { Component } from 'react';
import styles from './button2.module.css';

class Button2 extends Component {

    render() {
        return (
            // <div className="button">
            //     <span className="text">Button2</span>
            // </div>
            // 이렇게하면 button1의 className인 button과 겹쳐서 button1은 씹힌다. button2의 css만 먹힌다. 

            <div className={styles.button}>
                <span className={styles.text}>Button2</span>
            </div>
            // 이런식으로 하면 css 모듈화됨. postCSS의 기능인가봄.
        );
    }
}

export default Button2;