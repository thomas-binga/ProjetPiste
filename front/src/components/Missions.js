import React, {useEffect, useState} from 'react';
import MissionsService from "../services/MissionsService";

const Missions = (user) => {

    const [missions, setMissions] = useState([])

    useEffect(() => {
        MissionsService.getMissions().then(response => {
            console.log("retrieving users", {response})
            setMissions(response.data)
        })
    }, [])

    function seeAction(id){
        // TODO
    }


    return (
        <div>
            <h1 className="text-center" style={{fontSize: "40px", margin: "20px 0px"}}>Liste des missions</h1>
            {/*<div className = "row">*/}
            {/*    <button className="btn btn-primary" onClick={addUser}>Add User</button>*/}
            {/*</div>*/}
            <div className = "row">
                <table className = "table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th> Id </th>
                        <th> Nom de la mission</th>
                        <th> Actions </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        missions.map(
                            mission =>
                                <tr key = {mission.id}>
                                    <td> {mission.id} </td>
                                    <td> {mission.nom} </td>
                                    <td>
                                        <button onClick={ () => seeAction(user.id)} className="btn btn-info"> Voir Actions </button>
                                    </td>
                                </tr>
                        )
                    }
                    </tbody>
                </table>

            </div>

        </div>
    )
}


export default Missions;