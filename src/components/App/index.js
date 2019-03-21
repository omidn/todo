import withHandlers from 'recompose/withHandlers';
import compose from 'recompose/compose';
import withState from 'recompose/withState';
import { generate } from 'shortid';
import App from './App';

export default compose(
  withState('newTodo', 'setNewTodo', ''),
  withState('todos', 'setTodos', []),
  withHandlers({
    onClickHandler: ({ todos, newTodo, setNewTodo, setTodos }) => () => {
      // set the new item to the todo list and clear the newTodo text
      setTodos(todos.cnoncat({
        text: newTodo,
        done: false,
        id: generate(),
      }), () => setNewTodo(''));
    },
    onInputTextChanged: ({ setNewTodo }) => (event) => setNewTodo(event.target.value),
    toggleTodo: ({ todos, setTodos }) => (id) => {
      const index = todos.findIndex(x => x.id === id);
      const element = todos[index];
      
      setTodos([
        ...todos.slice(0, index),
        {
          ...element,
          done: !element.done
        },
        ...todos.slice(index + 1)
      ]);
    }
  }),

)(App);
