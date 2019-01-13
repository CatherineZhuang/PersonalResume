import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/main';
import './styles/index.scss';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
