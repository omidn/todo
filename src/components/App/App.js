import React from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import classnames from 'classnames';
import Todo from '../Todo';
import styles  from './styles.css';

const  App = ({
  onClickHandler,
  onInputTextChanged,
  newTodo,
  todos,
  toggleTodo,
}) => (
  <div className={styles.container}>
    <section className={classnames(styles.row, styles.newTodoContainer)}>
      <TextField className={styles.newTodo} onChange={onInputTextChanged} value={newTodo} />
      <Button className={styles.addButton} variant="contained" color="primary" onClick={onClickHandler} >
        Add
      </Button>
    </section>
    <section>
      <Paper className={styles.todosContainer}>
        {
          todos.sort((a,b) => a.done === b.done ? 0 : a.done ? 1 : -1).map(x => <Todo {...x} key={x.id} toggle={toggleTodo} />)
        }
      </Paper>
    </section>
  </div>
);

export default App;
