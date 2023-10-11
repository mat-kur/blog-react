import "./Login.css";


export const Login = props => {


    return (
        <div className="bg">
            <h2>Login panel</h2>
            <div className="login-container">
                <form>
                    <div className="icon-container">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="Username" className="login-input"></input>
                    </div>

                    <div className="icon-container">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Password" className="login-input"></input>
                    </div>

                    <button type="button" className="login-btn">Login</button>
                    <a href="#" className="register-link">Register</a>
                </form>
            </div>
        </div>
       );
};