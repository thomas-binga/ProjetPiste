import React, {useEffect, useState} from 'react'
import ActionService from '../services/ActionService'
import {useParams} from "react-router-dom";

const ListActionsComponent = () => {

    let {userId, missionId} = useParams();
    const [actions, setActions] = useState([]);
    console.log(missionId)

    useEffect(() => {
        ActionService.getActions({userId, missionId}).then(response => {
            setActions(response.data);
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
    function editAction(id){
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
                Liste des actions{userId ? " (utilisateur " + userId + ")" : missionId ? " (mission " + (missionId === "1" ? "A" : "B") + ")" : null}
            </h1>
            <div className = "row">
                <table className = "table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Description</th>
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
                                    {userId ? <td> {action.userScore}</td> : null}
                                    {userId ? <td><button onClick={ () => editAction(userId)} className="btn btn-info">Modifier</button></td> : null}
                                    {/*<button style={{marginLeft: "10px"}} onClick={ () => viewUser(user.id)} className="btn btn-dark"> Voir jeux </button> TODO if time*/}
                                </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}


export default ListActionsComponent;