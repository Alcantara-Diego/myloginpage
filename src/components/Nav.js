import React from 'react';

function Nav(){
    return (
        <nav className="navbar">
            <div className="container-fluid">
                <h4 className="app-title" href="/">Meu app</h4>
                
                <div className="navbar-nav d-flex flex-row gap-3">
                    <a className="nav-link activeLink p-0"  href="/">Home</a>
                    <a className="nav-link p-0 m-0" href="/login">Log in</a>
                </div>
            </div>
        </nav>
    )
}


export default Nav