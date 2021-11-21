import React from "react";
import ApiAxios from "../Apis/ApiAxios";

class ApiFilmes extends React.Component {
  state= {
    filmes: [],
  }

  async componentDidMount(){ // Camado quando quaquer atualização ocorrer
    const response = await ApiAxios.get(''); // get esta vazio pois não estou passndo nada na URL da Api
    
    this.setState({ filmes:response.data }); // Atualisa o estado com base na resposta
  }

  render() {
    const { filmes } = this.state;
    const regex = /(<([^>]+)>)/ig;

    return (
      <div className="conteiner_content">
        <h1>Listar os filmes</h1>
  
        {filmes.map(filme => (
          <div className="filme">
            <h3 key={filme.show.id}>
              <strong>Título </strong> {filme.show.name}
            </h3>
            <div>
              {filme.show.summary.replace(regex, '')}
              {/* essa constante regex tira as tags html dentro do texto */}
            </div>
            <figure>
              <img src={filme.show.image.original} alt='nome'></img>
            </figure>
          </div>
        ))}
        <div>
          <p>O Axios simplifica absurdamente a escrita de uma requisição à uma API.</p>
          <p>O vídeo abaixo é a referência para a desocberta da biblioteca</p>
          <a href="https://axios-http.com/ptbr/docs/api_intro">Axios API</a>
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/vfrEAz0BSbA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    );
  }
}

export default ApiFilmes;
