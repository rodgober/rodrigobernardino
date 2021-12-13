import React, { Fragment } from 'react';
import styles from './Name.module.css';

const Name = () => {
    return ( 
        <Fragment>
            <div className={`${styles.cont_figuras}`}>
            <ul>
                <li>
                    <input type="checkbox" />
                    <div className={`${styles.div_letras}`}>R</div>
                </li>
                <li>
                    <input type="checkbox" />
                    <div className={`${styles.div_letras}`}>O</div>
                </li>
                <li>
                    <input type="checkbox" />
                    <div className={`${styles.div_letras}`}>D</div>
                </li>
                <li>
                    <input type="checkbox" />
                    <div className={`${styles.div_letras}`}>R</div>
                </li>
                <li>
                    <input type="checkbox" />
                    <div className={`${styles.div_letras}`}>I</div>
                </li>
                <li>
                    <input type="checkbox" />
                    <div className={`${styles.div_letras}`}>G</div>
                </li>
                <li>
                    <input type="checkbox" />
                    <div className={`${styles.div_letras}`}>O</div>
                </li>
            </ul>
            </div>
            <div className={`${styles.cont_figuras}`}>
            <ul>
                <li>
                    <input type="checkbox" />
                    <div className={`${styles.div_letras}`}>B</div>
                </li>
                <li>
                    <input type="checkbox" />
                    <div className={`${styles.div_letras}`}>E</div>
                </li>
                <li>
                    <input type="checkbox" />
                    <div className={`${styles.div_letras}`}>R</div>
                </li>
                <li>
                    <input type="checkbox" />
                    <div className={`${styles.div_letras}`}>N</div>
                </li>
                <li>
                    <input type="checkbox" />
                    <div className={`${styles.div_letras}`}>A</div>
                </li>
                <li>
                    <input type="checkbox" />
                    <div className={`${styles.div_letras}`}>R</div>
                </li>
                <li>
                    <input type="checkbox" />
                    <div className={`${styles.div_letras}`}>D</div>
                </li>
                <li>
                    <input type="checkbox" />
                    <div className={`${styles.div_letras}`}>I</div>
                </li>
                <li>
                    <input type="checkbox" />
                    <div className={`${styles.div_letras}`}>N</div>
                </li>
                <li>
                    <input type="checkbox" />
                    <div className={`${styles.div_letras}`}>O</div>
                </li>
            </ul>
            </div>
        </Fragment>
     );
}
 
export default Name;