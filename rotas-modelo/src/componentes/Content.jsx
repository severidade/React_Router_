import React from 'react';
import { Switch, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import Sobre from "../pages/Sobre";
import Contato from "../pages/Contato";
import ApiFilmes from "../pages/ApiFilmes";
import ApiPaises from "../pages/ApiPaises"

class Content extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/Sobre" component={Sobre} />
        <Route path="/ApiFilmes" component={ApiFilmes}/>
        <Route path="/ApiPaises" component={ApiPaises}/>
        <Route path="/Contato" component={Contato} />
      </Switch>
    );
  }
}

export default Content;
