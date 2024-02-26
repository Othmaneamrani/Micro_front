import {React , useState} from 'react';
import axios from "axios";

import './login.css';

export default function Login () {

    const[username,setUsername] = useState("");
    const[password,setPassword] = useState("");


	const handleLogin = async (e) => {
		e.preventDefault();

		try{

			const response = await axios.post("http://localhost:8080/login" ,{
				username,password
			})
			if (response.status === 200) {
				console.log("sex");
			}else{
				console.log("idk feh");

			}

		}catch(error) {
			console.error("echec : " + error);
		}

	}


    return (
<div className="login-container">

	<form onSubmit={handleLogin} className="form-login">
		<ul className="login-nav">
             {/* active dir condition */}
			<li className="login-nav__item active">  
				<a href="/login">Login</a>
			</li>
			<li className="login-nav__item">
				<a href="/sign">Sign Up</a>
			</li>
		</ul>
		<label htmlFor="login-input-user" className="login__label">
			Username
		</label>
		<input id="login-input-user"
		 className="login__input"
		  type="text"
		  value={username}
		  onChange={(e) => setUsername(e.target.value)}

		   />
		<label htmlFor="login-input-password" className="login__label">
			Password
		</label>
		<input id="login-input-password"
		 className="login__input"
		  type="password"
		  value={password}
		  onChange={(e) => setPassword(e.target.value)}
		   />

		<button  type="submit" className="login__submit" >Login</button>
	</form>
</div>
    )
}