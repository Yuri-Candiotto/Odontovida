import Formulario from "./Formulario"
import ParedeLogin from "./ParedeLogin"
const Login = () => {

    return(
        <div>
            <div className="container">

                <div className="child">
                    <Formulario/>
                </div>

                <div className="child">
                    <ParedeLogin/>
                </div>

            </div>
        </div>
    )
}

export default Login