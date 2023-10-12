import "./Register.css";


export const Register = props => {


    return (
        <div className="bg">
        <h2>Register</h2>
        <div className="login-container">
            <form className='register'>
                <div className="icon-container">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Username" className="login-input" required></input>
                </div>

                <div className="icon-container">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Password" className="login-input" required></input>
                </div>

                <div className="icon-container">
                    <i className="fa-regular fa-envelope"></i>
                    <input type="email" placeholder="Email" className="login-input" required></input>
                </div>

                <button type="button" className="login-btn">Login</button>
                <a href="#" className="Login">Login panel</a>
            </form>
        </div>
    </div>
    );
};