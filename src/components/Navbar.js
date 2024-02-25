import './navbar.css';

export default function Navbar () {
    return (
        <nav className="navbar-container">
            <div className="navbar">
                <a className="nav-link" href="/Client/Depart">lien1</a>
                <a className="nav-link" href="/Client/Promo">lien2</a>
                <a className="nav-link" href="/Client/About">lien3</a>
            </div>
            <div className="search">
                <form className="form-inline" method="post" action="">
                    <div className="input-group">
                        <input className="form-control" type="search" placeholder="Search..." aria-label="search" name="search" />
                        <div className="input-group-append">
                            <button className="btn" type="submit">Search</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="navbar-right">
                <a href="/Login" className="navbar-link">Login</a>
                <a href="/Sign" className="navbar-link">Sign up</a>
            </div>
        </nav>
    );
}