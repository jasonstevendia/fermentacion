import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
/* import * as serviceWorker from './serviceWorker'; */
import 'bootstrap/dist/css/bootstrap.css'
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

// pick a date util library
import DateFnsUtils from '@date-io/date-fns';
ReactDOM.render(
  <React.Fragment>
<MuiPickersUtilsProvider utils={DateFnsUtils}>
    <App />
    </MuiPickersUtilsProvider>
    </React.Fragment>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
/* serviceWorker.unregister(); */
