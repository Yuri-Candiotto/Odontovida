import Menu from "./Menu";

const Header = () => {


    return(
        <div>
            <header>
                <div className="barra">
                <h1 className="titleHeader">OdontoVida</h1>
                    
                </div>
                <div>
                    <Menu/>
                </div>
            </header>
           
            
        </div>
    )
}

export default Header;