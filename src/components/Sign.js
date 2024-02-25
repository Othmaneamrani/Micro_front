import './sign.css';

export default function Sign () {
    return (
        <div>
<div className="login-box">
    <h2>Sign up</h2>
    <form method="post" action='' >
        <div className="user-box">
            <input type="text"  required />
            <label>Username</label>
        </div>
        <div className="user-box">
            <input type="password"   required />
            <label>Password</label>
        </div>
        <div className="user-box">
            <input type="password"   required />
            <label>Confirm password</label>
        </div>
        <div className="user-box">
            <input type="email"   required />
            <label>Email</label>
        </div>
        <button className="btn" type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
        </button>
        <div className="login-link">
            <a href="/login" >Login</a>
        </div>
    </form>
</div>
        </div>
    )
}