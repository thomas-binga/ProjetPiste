import React, {useState} from 'react';
import UserService from "../services/UserService";

export default function App() {

    const userService = UserService;

    const [email, setEmail] = useState("");
    const [surname, setSurname] = useState("");
    const [forename, setForename] = useState("");
    const [missions, setMissions] = useState({mission1 : false, mission2 : false});
    const [errorVisibility, setErrorVisibility] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (missions.mission1 || missions.mission2) {
            setErrorVisibility(false);
            console.log({email, forename, surname, missions});
            console.log(userService.createUser({surname, forename, email}));
        } else {
            setErrorVisibility(true);
        }
    }

    return (
        <div>
            <h1 style={{fontSize: "40px", margin: "20px 0px"}}>Enregistrer Apprenant</h1>
            <form
                onSubmit={handleSubmit}
                style={{
                    backgroundColor: "#eeeeee",
                    borderRadius: "10px",
                    border: "20px solid #eeeeee",
                    fontSize: "15px",
                    textAlign: "center"
                }}
            >
                <label>
                    Email :&emsp;
                    <input
                        name="email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required/>
                </label>
                <br/>
                <label>
                    Nom :&emsp;
                    <input
                        name="surname"
                        value={surname}
                        onChange={e => setSurname(e.target.value)}
                        required>
                    </input>
                </label>
                <br/>
                <label>
                    Prénom :&emsp;
                    <input
                        name="forename"
                        value={forename}
                        onChange={e => setForename(e.target.value)}
                        required>
                    </input>
                </label>
                <br/>
                <label>
                    <input
                        name="mission1"
                        type="checkbox"
                        onChange={() => setMissions((prev) => ({...prev, mission1: !missions.mission1}))}
                    />
                    &ensp;Mission 1
                </label>
                &emsp;&emsp;
                <label>
                    <input
                        name="mission2"
                        type="checkbox"
                        onChange={() => setMissions(prev => ({...prev, mission2: !missions.mission2}))}
                    />
                    &ensp;Mission 2
                </label>
                {errorVisibility && <div style={{color: "red"}}>Vous devez cocher au moins une mission.</div>}
                <br/>
                <button className="btn btn-primary" style={{marginTop: "20px"}}>Submit</button>
            </form>
        </div>
    );
}

