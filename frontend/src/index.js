import { render } from 'react-dom';
import './index.css';
import App from './App';
import { GlobalStyle } from './utils/style/GlobalStyle';
import { Provider } from 'react-redux';
import store from './store/store';

render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root')
);