import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './Style.css';
import NavBar from './componentes/NavBar';
import Content from './componentes/Content';


class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Content />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
