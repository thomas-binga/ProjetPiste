import React from 'react';

const HeaderComponent = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div style={{color: "#0ad2ff", fontSize: "30px", marginRight: "50px", userSelect: "none"}}>Permis Piste</div>
                    <div><a href="/" className="navbar-brand">Accueil</a></div>
                    <div><a href="/missions" className="navbar-brand">Missions</a></div>
                    <div><a href="/users" className="navbar-brand">Apprenants</a></div>
                    <div><a href="/actions" className="navbar-brand">Actions</a></div>
                </nav>
            </header>
        </div>
    );
};

export default HeaderComponent;
