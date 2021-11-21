import React from "react";

class ApiPaises extends React.Component {
  constructor() {
    super();
    this.state ={
      allCountries: [],
    }
  }

  componentDidMount(){
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((allCountries) => this.setState({ allCountries }))
  }


  render() {
    return (
      <div className="conteiner_content">
        <h1>PÁGINA de Paises</h1>
        <p>https://restcountries.com/</p>
        <p>https://restcountries.com/v3.1/all</p>
      </div>
    );
  }
}

export default ApiPaises;
