import React, {useEffect, useState} from 'react';
import MissionsService from "../services/MissionsService";
import {Redirect} from "react-router-dom";

const ListMissionsComponent = () => {

    const [missions, setMissions] = useState([])
    const [redirectState, setRedirectState] = useState({redirect: false, path: ""});

    useEffect(() => {
        MissionsService.getMissions().then(response => {
            setMissions(response.data);
        })
    }, [])

    function seeAction(id){
        setRedirectState({redirect: true, path: "/actions/byMission/"+id});
    }


    return (
        redirectState.redirect ? <Redirect to={redirectState.path}/> :
        <div>
            <h1 className="text-center" style={{fontSize: "40px", margin: "20px 0px"}}>Liste des missions</h1>
            <div className = "row">
                <table className = "table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nom de la mission</th>
                            <th>Actions</th>
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
                                        <button onClick={() => seeAction(mission.id)} className="btn btn-info">Voir les actions</button>
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


export default ListMissionsComponent;