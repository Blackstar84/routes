import React, { Component } from 'react';
import {
  Switch,
  Route,
  Redirect,
  Link,
  Router
} from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <a href={Page1}>Page 1</a>
          <a href={Page2}>Page 2</a>          
        </nav>
        <Router>        
          <Switch>
            <Route path={Page1}></Route>
            <Route path={Page2}></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

// No tienes que hacer nada por debajo de esta linea
//==================================================


export const Page1 = (props) => {
  return (
    <h1>Pagina 1</h1>
  )
}

export const Page2 = (props) => {
  return (
    <h1>Pagina 2</h1>
  )
}

export const NotFound = (props) => {
  return (
    <h1>Pagina no encontrada</h1>
  )
}
