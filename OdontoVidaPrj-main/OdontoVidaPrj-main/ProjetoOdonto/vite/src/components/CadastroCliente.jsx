import React, { useState } from 'react';

const FormularioRelatorio = () => {
  const [dadosFormulario, setDadosFormulario] = useState({
    nome: '',
    cpf: '',
    telefone: '',
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
      cpf: '',
      telefone: '', 
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
          Nome do Paciente:
          <input
            type="text"
            name="nome" placeholder="nome"
            value={dadosFormulario.servico}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          CPF:
          <input
            type="text"
            name="cpf" placeholder="ex. 123.456.789-10"
            value={dadosFormulario.valor}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Telefone:
          <input
            type="text"
            name="telefone" placeholder="ex. (xx)xxxxxxxxx"
            value={dadosFormulario.descricao}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit" className="botao-confirmar">
          Cadastrar
        </button>
      </form>

      {listaRelatorio.length > 0 && (
        <div className="relatorio-container">
          <h1 className="tituloserv">Clientes Cadastrados</h1>
          <ul className="relatorio-lista">
            {listaRelatorio.map((item, index) => (
              <li key={index} className="relatorio-item">
                <p className="servicoPalavra">Paciente: {item.nome}</p>
                <p className="valorPalavra">CPF: {item.cpf}</p>
                <p className="descricaoPalavra">Telefone: {item.telefone}</p>
                <button
                  className="botao-excluir"
                  onClick={() => handleExcluir(index)}
                >
                  Excluir
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FormularioRelatorio;
