import React, {FormEvent, useState} from 'react';
import authService from "../services/authService";
import "../style/Login.css";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function sendLoginRequest(event: FormEvent) {
        event.preventDefault();
        authService.login(username, password).then((res) => {
            if(res.data.user.authorities[0].authority !== "ROLE_USER"){
                alert("You are not a user");
                return;
            }
            if (res.status === 200) {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("id", res.data.user.id);
                localStorage.setItem("fullName", res.data.user.fullName);
                window.location.href = "/user/" + localStorage.getItem("id");
                return Promise.resolve(res.data.token);
            } else {
                return Promise.reject();
            }

        }).catch((err) => {
            if (err.response.status === 401) {
                alert("Wrong username or password");
            }
        });
    }

    return (
        <div className="container">
                <form className="form" onSubmit={(event) => sendLoginRequest(event)}>
                    <h1 className="title">Login</h1>
                    <label htmlFor="username">Username: </label>
                    <input
                        required={true}
                        type="username"
                        placeholder="username"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}/>
                    <br/>
                    <label htmlFor="password">Password: </label>
                    <input
                        required={true}
                        type="password"
                        placeholder="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword((e.target.value))}/>
                    <br/>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
        </div>
    )
}
export default Login;