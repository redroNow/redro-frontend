import React from "react";
import "../../css/main.css";

class Login extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="d-flex flex-column align-items-center justify-content-center h-100">
                    <h1>Hello There!</h1>
                    <h3>This is Description</h3>

                    <form className="text-center my-5" id="ios">
                        <input type="password" maxLength="1" />
                        <input type="password" maxLength="1" />
                        <input type="password" maxLength="1" />
                        <input type="password" maxLength="1" />
                    </form>

                    <div className="numpad">
                        <div className="button">1</div>
                        <div className="button">2</div>
                        <div className="button">3</div>
                        <div className="button">4</div>
                        <div className="button">5</div>
                        <div className="button">6</div>
                        <div className="button">7</div>
                        <div className="button">8</div>
                        <div className="button">9</div>
                        <div className="button">0</div>
                        <div className="button">
                            <i className="fas fa-backspace"></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
