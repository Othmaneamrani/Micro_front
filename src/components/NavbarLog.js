import './navbar.css';

export default function NavbarLog () {
    return (
        <nav className="navbar-container">
            <div className="navbar">
                <a className="nav-link" href="/">Home</a>
                <a className="nav-link" href="/today">Today</a>
                <a className="nav-link" href="/about">About</a>
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
                <a href="/profil" className="navbar-link">Profil</a>
            </div>
        </nav>
    );
}