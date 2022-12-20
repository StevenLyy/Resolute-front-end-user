import React, {useState} from 'react';
import {useLocalState} from "../Hooks/useLocalState";
import authService from "../services/authService";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [jwt, setJwt] = useLocalState("jwt", "");
    function sendLoginRequest(){
        authService.login(username, password).then((res) => {
            console.log(res);
            if(res.status === 200){
                setJwt(res.headers["Authorization"]);
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
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    placeholder="Username"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword((e.target.value))}/>
            </div>
            <div>
                <button onClick={() => sendLoginRequest()}>Login</button>
            </div>
            <button onClick={() => {console.log(jwt)}}></button>
        </>
    )
}
export default Login;