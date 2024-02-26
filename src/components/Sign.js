import './sign.css';

export default function Sign () {
    return (
<div class="sign-container">
	<form action="" className="form-sign">
		<ul className="sign-nav">
             {/* active dir condition */}
			<li className="sign-nav__item active">
				<a href="/login">Login</a>
			</li>
			<li className="sign-nav__item">
				<a href="/sign">Sign Up</a>
			</li>
		</ul>
		<label htmlFor="sign-input-user" className="sign__label">
			Username
		</label>
		<input id="sign-input-user" className="sign__input" type="text" />

		<label htmlFor="sign-input-password" className="sign__label">
			Password
		</label>
		<input id="sign-input-password" className="sign__input" type="password" />

		<label htmlFor="sign-input-cpassword" className="sign__label">
			Confirm password
		</label>
		<input id="sign-input-cpassword" className="sign__input" type="password" />

		<label htmlFor="sign-input-email" className="sign__label">
			Email
		</label>
		<input id="sign-input-email" className="sign__input" type="text" />
        
		<button className="sign__submit" disabled>Sign in</button>
	</form>
</div>
    )
}