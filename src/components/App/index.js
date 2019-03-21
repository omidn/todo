import withHandlers from 'recompose/withHandlers';
import compose from 'recompose/compose';
import App from './App';

export default compose(
  withHandlers({
    onCLickHandler: () => {
      console.log('hello world');
    }
  }),
)(App);
