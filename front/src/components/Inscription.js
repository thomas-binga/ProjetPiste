import React from 'react';

export default function App() {
    const [email, setEmail] = React.useState("");
    const [surname, setSurname] = React.useState("");
    const [forename, setForename] = React.useState("");
    const [missionList, setMissionList] = React.useState({mission1 : false, mission2 : false});

    const handleSubmit = (event) => {
        console.log({email, forename, surname, missionList})

        const user = {surname,forename,email}


        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Create Account</h1>

            <label>
                Email:
                <input
                    name="email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required/>
            </label>


            <label>
                Surname:
                <input
                    name="surname"
                    value={surname}
                    onChange={e => setSurname(e.target.value)}
                    required>
                </input>
            </label>

            <label>
                Forename:
                <input
                    name="forename"
                    value={forename}
                    onChange={e => setForename(e.target.value)}
                    required>
                </input>
            </label>


            <label>
                <input
                    name="mission1"
                    type="checkbox"
                    onChange={() => setMissionList((prev) => ({...prev, mission1:true}))
                    }
                    required />
                mission1
            </label>

            <label>
                <input
                    name="mission2"
                    type="checkbox"
                    onChange={() => setMissionList((prev) => ({...prev, mission2:true}))
                    }
                    required />
                mission2
            </label>


            <button>Submit</button>
        </form>
    );
}

