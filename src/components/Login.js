import './login.css';

export default function Login () {
    return (
        <div>
<div className="login-box">
    <h2>Login</h2>
    <form method="post" action='' >
        <div className="user-box">
            <input type="text"  required />
            <label>Username</label>
        </div>
        <div className="user-box">
            <input type="password"   required />
            <label>Password</label>
        </div>
        <button className="btn" type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
        </button>
        <div className="signup-link">
            <a href="/sign" >Sign up</a>
        </div>
    </form>
</div>
        </div>
    )
}