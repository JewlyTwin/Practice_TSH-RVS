import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Blur from './Component/testcssblur'
import Progress from './Page/Progress'
import Layout from './Component/layout'
// import ColorExtract from './colorExtractor';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './i18n';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/blur" component={Blur} />
      <Route path="/progress" component={Progress} />
      <Route path="/layout" component={Layout} />
      {/* <Route path="/color" component={ColorExtract} /> */}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
