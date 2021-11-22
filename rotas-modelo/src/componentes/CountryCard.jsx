import React from 'react';
import { Link } from "react-router-dom";

class CountryCard extends React.Component {
  render() {
    const { name, capital, flagUrl, code, icon } = this.props;
    return (
      <article className="card-container">
        <div className="pais">
          <div
            className="image_container"
            style={{
              backgroundImage: `url( ${flagUrl})`,
              backgroundSize: ' 100% 100%',
            }}
          >  
          </div>
          <h2>{name} {icon} </h2>
          <h4>{capital}</h4>
          <Link to={`/contry/${code}`}> ver detalhes do {name} </Link>
        </div> 
      </article>

    );
  }
}

export default CountryCard;
