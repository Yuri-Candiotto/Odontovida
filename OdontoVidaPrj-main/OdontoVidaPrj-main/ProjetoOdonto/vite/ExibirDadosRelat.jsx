import React, { useState } from 'react';

const FormularioRelatorio = () => {
  const [dadosFormulario, setDadosFormulario] = useState({
    servico: '',
    valor: '',
  });

  const [listaRelatorio, setListaRelatorio] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDadosFormulario((prevDados) => ({
      ...prevDados,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Dados do relatório:', dadosFormulario);
    setListaRelatorio((prevLista) => [...prevLista, dadosFormulario]);
    
    setDadosFormulario({
      nome: '',
      idade: '',
    });
  };

  const handleExcluir = (index) => {
   
    const novaLista = [...listaRelatorio];
    novaLista.splice(index, 1);
    
    setListaRelatorio(novaLista);
  };

  return (

    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>
          Digite o serviço:
          <input
            type="text"
            name="nome" placeholder="serviço"
            value={dadosFormulario.nome}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Digite o valor:
          <input
            type="text"
            name="idade" placeholder="ex. 0,00"
            value={dadosFormulario.idade}
            onChange={handleChange}
          />
        </label>
        {}
        <br />
        <button type="submit" className="botao-confirmar">Confirmar</button>
      </form>

      {listaRelatorio.length > 0 && (
        <div className="relatorio-container">
          <h1 className="tituloserv">Serviços Cadastrados</h1>
          <ul className="relatorio-lista">
            {listaRelatorio.map((item, index) => (
              <li key={index}  className="relatorio-item">
                <p className="servicoPalavra">Serviço: {item.nome}</p>
                <p classname="valorPalavra">Valor: {item.idade}</p>
                {}
                <button className="botao-excluir" onClick={() => handleExcluir(index)}>Excluir</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FormularioRelatorio;
