import React from 'react';

function Menu() {
    return (
        <>
            <header className="u-flex u-col-2">
                <h1>BQ's kunskapsblogg</h1>
                <nav className="main-nav">
                    <button type="button" className="btn open-nav" aria-expanded="false">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="menutext">Meny</span>
                    </button>
                    <ul className="u-flex" aria-hidden="true">
                        <li><a href="#">Artiklar</a></li>
                        <li><a href="#">Om BQ</a></li>
                    </ul>
                </nav>
            </header>
            <button type="button" className="btn close-nav" aria-hidden="true" tabIndex="-1">
                <span className="menutext">Stäng</span>
            </button>
        </>
    )
}

export default Menu