import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    const [user, setUser] = React.useState(null);

    async function login(user = null) {
        setUser(user);
    }

    async function logout() {
        setUser(null)
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="section-1">
                <div className="container-fluid">
                    <a href="/" className="navbar-brand"><img src="/Images/logo-transparent-2.png"
                                                              className="col-md-6 col-sm-6 col-6"
                                                              alt=""/></a>
                    <button type="button" className="navbar-toggler" data-bs-target="#navbarNav"
                            data-bs-toggle="collapse"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle Navbar">
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="mx-auto"/>
                        <ul className="navbar-nav text-larger">

                            <li className="nav-item"><Link to={"/"} className={'nav-link'}>Home</Link></li>
                            <li className="nav-item dropdown"><a href="/"
                                                                 className="nav-link dropdown-toggle disabled"
                                                                 id="navbardrop-news"
                                                                 data-bs-toggle="dropdown">Synth News</a>
                                <div className="dropdown-menu bg-transparent">
                                    <a className="dropdown-item" href="/">Link 1</a>
                                    <a className="dropdown-item" href="/">Link 2</a>
                                    <a className="dropdown-item" href="/">Link 3</a>
                                </div>
                            </li>
                            <li className="nav-item"><a href="/" className="nav-link disabled">Music</a></li>
                            <li className="nav-item"><a href="/" className="nav-link disabled">Design</a></li>
                            <li className="nav-item"><a href="/" className="nav-link disabled">Videos</a></li>
                            <li className="nav-item"><a href="/" className="nav-link disabled">Synth Gaming</a>
                            </li>
                            <li className="nav-item">
                                <Link to={"/restaurants"} className="nav-link">
                                    Restaurants
                                </Link>
                            </li>
                            <li className="nav-item dropdown"><a href="/" className="nav-link dropdown-toggle"
                                                                 id="navbardrop-contact"
                                                                 data-bs-toggle="dropdown">Contact</a>
                                <div className="dropdown-menu bg-transparent">
                                    <Link to={"/about"} className={'dropdown-item'}>Send Us</Link>
                                    <Link to={"/our-partners"} className={'dropdown-item'}>Our Partners</Link>
                                    {/*<a className="dropdown-item" href="our-partners.html">Our Partners</a>*/}
                                    <a className="dropdown-item" href="/">Link 3</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                {user ? (
                                    <a onClick={logout} className="nav-link" style={{cursor: 'pointer'}}>
                                        Logout {user.name}
                                    </a>
                                ) : (
                                    <Link to={"/login"} className="nav-link">
                                        Login
                                    </Link>
                                )}

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;