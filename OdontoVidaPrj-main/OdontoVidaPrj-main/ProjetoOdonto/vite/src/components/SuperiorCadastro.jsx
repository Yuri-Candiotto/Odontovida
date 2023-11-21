import { useState } from "react"

const SuperiorCadastro = () => {
    const [menuCadastro, setMenuCadastro] = useState();

    return(
        <div>
            <div className="containerCadastro">
                <div>
                    <h1 className="ListagemCad">Listagem de Pacientes</h1>
                </div>

                <div>
                    <button onClick={() => setMenuCadastro(<div className="menuCadastro">

                        <button  onClick={() => setMenuCadastro(menuCadastro)} className="botaoFechar">
                            <img src="close.png" alt="fechar" /> </button>

                        <h1>
                            Cadastro
                        </h1>
                        <p> 
                        <label for="nome_login">Nome do Paciente</label>
                        <input className="inputCad" required="required"cd type="text" placeholder="ex. Nome">

                        </input>
                        </p>
                        <p> 
                        <label for="nome_login">CPF do Paciente</label>
                        <input className="inputCad" required="required"cd type="text" placeholder="ex. 123.456.789.10">

                        </input>
                        </p>
                        <p> 
                        <label for="nome_login">Número do Paciente</label>
                        <input className="inputCad" required="required"cd type="text" placeholder="ex. 48912345678">

                        </input>
                        </p>

                        <button className="confirmar">Confirmar</button>



                    </div>)}  className="botaoCad">Cadastrar</button>
                </div>

                <div>
                    <button className="botaoexc">Excluir</button>
                </div>
            </div>
            <div>{menuCadastro}</div>
        </div>
    )
}

export default SuperiorCadastro