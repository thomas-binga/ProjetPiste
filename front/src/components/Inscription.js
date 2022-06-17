import React, {useState} from 'react';
import UserService from "../services/UserService";

export default function App() {

    const [user, setUser] = useState({surname: "", forename: "", email: ""});
    const [missions, setMissions] = useState({mission1: false, mission2: false});
    const [missionErrorVisibility, setMissionErrorVisibility] = useState(false);
    const [message, setMessage] = useState({className: "", isShown: false, text: ""});

    const handleSubmit = (event) => {
        event.preventDefault();
        setMessage(prevState => ({...prevState, isShown: false}));
        if (Object.values(missions).find(boolValue => boolValue === true)) {
            setMissionErrorVisibility(false);
            const missionIdList = [];
            Object.values(missions).forEach((boolValue, index) => {
                if (boolValue) missionIdList.push(index + 1);
            });
            UserService.createUser({utilisateur: user, missionIdList}).then(res => {
                console.log(res);
                setMessage({
                    className: "alert alert-success",
                    isShown: true,
                    text: "L'utilisateur " + res.data.forename + " " + res.data.surname + " a été enregistré."
                });
                setUser({surname: "", forename: "", email: ""});
                setMissions({mission1: false, mission2: false});
            }).catch(error => {
                console.error(error);
                setMessage({className: "alert alert-danger", isShown: true, text: error.toString()});
            });
        } else {
            setMissionErrorVisibility(true);
        }
    }

    return (
        <div>
            <h1 className="text-center" style={{fontSize: "40px", margin: "20px 0px"}}>Enregistrer un apprenant</h1>
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
                        value={user.email}
                        onChange={event => {
                            event.persist();
                            setUser(prevState => ({...prevState, email: event.target.value}));
                        }}
                        required
                    />
                </label>
                <br/>
                <label>
                    Nom :&emsp;
                    <input
                        name="surname"
                        value={user.surname}
                        onChange={event => {
                            event.persist();
                            setUser(prevState => ({...prevState, surname: event.target.value}));
                        }}
                        required
                    >
                    </input>
                </label>
                <br/>
                <label>
                    Prénom :&emsp;
                    <input
                        name="forename"
                        value={user.forename}
                        onChange={event => {
                            event.persist();
                            setUser(prevState => ({...prevState, forename: event.target.value}));
                        }}
                        required
                    >
                    </input>
                </label>
                <br/>
                <label>
                    <input
                        name="mission1"
                        type="checkbox"
                        checked={missions.mission1}
                        onChange={() => setMissions(prevState => ({...prevState, mission1: !missions.mission1}))}
                    />
                    &ensp;Mission A
                </label>
                &emsp;&emsp;
                <label>
                    <input
                        name="mission2"
                        type="checkbox"
                        checked={missions.mission2}
                        onChange={() => setMissions(prevState => ({...prevState, mission2: !missions.mission2}))}
                    />
                    &ensp;Mission B
                </label>
                {missionErrorVisibility ? <div className="alert alert-warning" style={{margin: "0px 30%"}}>Vous devez cocher au moins une mission.</div> : <br/>}
                <br/>
                <button className="btn btn-primary">Enregistrer</button>
                <br/>
                {message.isShown && <><br/><div className={message.className} style={{margin: "0px 30%"}}>{message.text}</div></>}
            </form>
        </div>
    );

}
