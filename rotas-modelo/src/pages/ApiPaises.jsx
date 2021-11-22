import React from "react";
import CountryCard from "../componentes/CountryCard";

class ApiPaises extends React.Component {
  constructor() {
    super();
    this.state = {
      allCountries: [],
    }
  }

  componentDidMount() {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json()) // para o javascript entender .json que retorna uma promessa
      .then((allCountries) => this.setState({ allCountries }))
  }


  render() {
    const { allCountries: countries } = this.state; // allCountries foi renomeado na desestruturacao para countries
    return (
      <div className="conteiner_content">
        <h1>PÁGINA de Paisessss</h1>
        <p>https://restcountries.com/</p>
        <p>https://restcountries.com/v3.1/all</p>
        <section className="cards-list-container">
          {countries.length > 0 && countries.map((country) => (
            <CountryCard
              name={ country.name.common }
              capital={ country.capital }
              flagUrl={ country.flags.svg }
              code={ country.cca3 }
              icon={ country.flag }
            />
          ))
          }
        </section>
      </div>
    );
  }
}

export default ApiPaises;
