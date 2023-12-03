import { useState } from "react"

const SuperiorCadastro = () => {
    const [menuCadastro, setMenuCadastro] = useState();

    return(
        <div>
            <div className="containerCadastro">
                <div>
                    <h1 className="ListagemServic">Serviços Cadastrados</h1>
                </div>

                <div>
                    <button onClick={() => setMenuCadastro(<div className="menuCadastro">

                        <button  onClick={() => setMenuCadastro(menuCadastro)} className="botaoFechar">
                            <img src="close.png" alt="fechar" /> </button>

                        <h1>
                            Cadastro
                        </h1>
                        <p> 
                        <label for="NomeServico">Nome do Serviço</label>
                        <input className="inputCad" required="required"cd type="text">

                        </input>
                        </p>
                        <p> 
                        <label for="Valor">Valor do Serviço</label>
                        <input className="inputCad" required="required"cd type="text" placeholder>
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


