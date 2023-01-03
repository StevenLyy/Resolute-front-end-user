import React, {useState} from 'react';
import authService from "../services/authService";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function sendLoginRequest(){
        authService.login(username, password).then((res) => {
            if(res.status === 200){
                localStorage.setItem("Token", res.data.token);
                return Promise.resolve(res.data);
            }
            else{
                return Promise.reject(res.data);
            }
            window.location.href = "/";
        }).catch((err) => {
            alert(err);
        });
    }

    return(
        <>
            <div className="login-form">
                <form>
                <h1>Login</h1>
                <input
                    type="text"
                    placeholder="Username"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}/>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword((e.target.value))}/>
                <button onClick={() => sendLoginRequest()}>Login</button>
                </form>
            </div>
        </>
    )
}
export default Login;