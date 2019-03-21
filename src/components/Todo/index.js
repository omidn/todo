import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import styles from './styles.css';

const Todo = ({ text, done, id, toggle }) => (
  <div className={styles.container} onClick={() => toggle(id)}>
    <Checkbox color="primary" checked={done} />
    <span className={done ? styles.done : null}>
      {text}
    </span>
  </div>
);

export default Todo;
