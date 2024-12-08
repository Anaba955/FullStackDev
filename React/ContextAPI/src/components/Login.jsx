import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext) //accesing setUser function from UserContext

    function handleSubmit (e) {
        e.preventDefault()
        setUser({username, password}) //sets user as {username, password} object.
    }

    return (
        <div>
            <h2>Login</h2>
            <input 
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username" />
            {" "}
            <input 
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login;