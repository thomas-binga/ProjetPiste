import React from 'react';

const pStyle = {fontSize: "15px", margin: "0px 0px 0px 50px"};

const currentDate = new Date();

const Accueil = () => {

    return (
        <div>
            <h1 className="text-center" style={{fontSize: "40px", margin: "20px 0px"}}>Accueil</h1>
            <div style={{
                backgroundColor: "#eeeeee",
                borderRadius: "10px",
                border: "20px solid #eeeeee",
                display: "flex",
                textAlign: "justify",
                textJustify: "inter-word"
            }}>
                <div style={{width: "50%"}}>
                    <h2 style={{fontSize: "25px", marginBottom: "20px"}}>Bienvenue dans l'application Permis Piste !</h2>
                    <p style={pStyle}>
                        Nous sommes le {currentDate.getDate() + " " + currentDate.toLocaleString("default", {month: "long"}) + " " + currentDate.getFullYear()}.
                        Il est {currentDate.getHours() + "h" + ("0" + currentDate.getMinutes()).slice(-2) + "."}
                    </p>
                    <br/>
                    <p style={pStyle}>Cette application vous permettra de suivre pas à pas tous les apprentissages.</p>
                    <p style={pStyle}>En vous souhaitant une agréable visite !</p>
                    <br/>
                    <p style={pStyle}>Pour commencer, vous pouvez :</p>
                    <ol>
                        <li style={pStyle}><a href="/inscription">Enregistrer un apprenant</a></li>
                        <li style={pStyle}><a href="">Inscrire un apprenant à des actions</a></li>
                        <li style={pStyle}><a href="">Accéder à la liste des missions</a></li>
                    </ol>
                    <p style={pStyle}>D'autres informations, comme la liste des apprenants ou des actions, sont disponibles dans la bar de navigation en haut.</p>
                </div>
                <div style={{marginTop: "30px", width: "50%"}}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/fr/0/0b/Polytech_Lyon_logo.png"
                        alt="Logo Polytech Lyon"
                        style={{width: "100%"}}
                    />
                </div>
            </div>
        </div>
    );

};

export default Accueil;