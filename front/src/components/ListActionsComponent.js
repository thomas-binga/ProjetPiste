import React, {useEffect, useState} from 'react'
import ActionService from '../services/ActionService'
import {useParams} from "react-router-dom";
import UserService from "../services/UserService";

const ListActionsComponent = () => {

    let {userId, missionId} = useParams();
    const [actions, setActions] = useState([]);
    const [userName, setUserName] = useState("");
    const [message, setMessage] = useState({display: false, message: ""});

    async function getActions() {
        return ActionService.getActions({userId, missionId}).then(response => {
            setActions(response.data);
        })
    }

    useEffect(() => {
        getActions();
        UserService.getUserById(userId).then(response => {
            setUserName(response.data.forename + " " + response.data.surname);
        })
    }, []);

    // function deleteAction(id){
    //     UserService.deleteAction(id).then( res => {
    //         this.setState({users: this.state.users.filter(user => user.id !== id)});
    //     });
    // }
    // function viewUser(id){
    //     // this.props.history.push(`/view-user/${id}`); TODO
    // }
    function editAction(userId, actionId){
        ActionService.doAction({userId, actionId}).then(res => {
            console.log(res);
            const status = res.data.status;
            console.log(status);
            switch (status) {
                case "GOOD": {
                    setMessage({display: true, message: "Action effectuée avec succès"});
                    getActions();
                    break;
                }
                case "FULL": {
                    setMessage({display: true, message: "Action impossible, vous avez déjà effectué cette action"});
                    break;
                }
                case "TODO" : {
                    setMessage({display:true, message: "Action impossible, vous n'avez pas effectué l'action n.°" + res.data.actionPrecedente});
                    break;
                }
                default : {
                    setMessage({display: true, message: "Erreur lors de la réalisation de l'action"});
                    break;
                }
            }
        })
        // this.props.history.push(`/add-user/${id}`); TODO
    }

    // function componentDidMount(){
    //     UserService.getUsers().then((res) => {
    //         setUsers(res.data);
    //     });
    // }

    //
    // function addUser(){
    //     // this.props.history.push('/add-user/_add'); TODO
    // }



    return (
        <div style={{marginBottom: "40px"}}>
            <h1
                className="text-center"
                style={{fontSize: "40px", margin: "20px 0px"}}
            >
                Liste des actions{userId ? userName ? " de "+userName :" (utilisateur " + userId + ")" : missionId ? " (mission " + (missionId === "1" ? "A" : "B") + ")" : null}
            </h1>
            <div className = "row">
                <table className = "table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Description</th>
                        {userId ? <th>Score minimum</th> : null}
                        {userId ? <th>Score</th> : null}
                        {userId ? <th>Action</th> : null}
                    </tr>
                    </thead>
                    <tbody>
                    {
                        actions.map(
                            action =>
                                <tr key = {action.id}>
                                    <td> {action.id} </td>
                                    <td> {action.description} </td>
                                    {userId ? <td> {action.scoreMinimum}</td> : null}
                                    {userId ? <td> {action.userScore}</td> : null}
                                    {userId ? <td><button onClick={ () => editAction(userId, action.id)} className="btn btn-info">Modifier</button></td> : null}
                                    {/*<button style={{marginLeft: "10px"}} onClick={ () => viewUser(user.id)} className="btn btn-dark"> Voir jeux </button> TODO if time*/}
                                </tr>
                        )
                    }
                    </tbody>
                </table>
                {message.display ? <div className="alert alert-secondary" role="alert">{message.message}</div> : null}
            </div>
        </div>
    )
}


export default ListActionsComponent;