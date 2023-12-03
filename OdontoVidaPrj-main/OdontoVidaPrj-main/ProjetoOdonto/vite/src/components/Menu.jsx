import { Link } from "react-router-dom"

const Menu = () => {

    return(
        <div>
            <div className='containerMenu'>
        <Link to="../TelaHome"><div className='childMenu'> <button className="styleMenu">Home</button>      </div></Link>

            <Link to="../TelaCadastro"><div className='childMenu'><button className="styleMenu">Cadastro</button></div> </Link>
                
            <Link to="../TelaServicos"><div className='childMenu'><button className="styleMenu">Serviços</button></div> </Link> 
               
                
                <div className='childMenu'><button className="styleMenu">Agendamento</button></div>
                <div className="childMenu"><button className="styleMenu">Relatórios</button></div>
            </div>
        </div>
    )  

}

export default Menu
