import React from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import classnames from 'classnames';
import styles  from './styles.css';

const  App = ({
  onClickHandler
}) => (
  <div className={styles.container}>
    <section className={classnames(styles.row, styles.newTodoContainer)}>
      <TextField className={styles.newTodo} />
      <Button className={styles.addButton} variant="contained" color="primary" onClick={onClickHandler} >
        Add
      </Button>
    </section>
  </div>
);

export default App;
