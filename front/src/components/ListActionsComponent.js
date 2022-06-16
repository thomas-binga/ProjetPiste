import React, {useEffect, useState} from 'react'
import ActionService from '../services/ActionService'
import {useParams} from "react-router-dom";

const ListActionsComponent = () => {
    let {userId, missionId} = useParams();
    const [actions, setActions] = useState([])
    console.log({userId, missionId})

    useEffect(() => {
        ActionService.getActions({userId, missionId}).then(response => {
            console.log("retrieving actions", {response})
            setActions(response.data)
        })
    }, [])

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
            <h1 className="text-center" style={{fontSize: "40px", margin: "20px 0px"}}>Liste des actions</h1>
            <div className = "row">
                <table className = "table table-striped table-bordered">

                    <thead>
                    <tr>
                        <th> Id </th>
                        <th> Description</th>
                        <th> Score minimum </th>
                        {userId ? <th> User score </th> : null}
                    </tr>
                    </thead>
                    <tbody>
                    {
                        actions.map(
                            action =>
                                <tr key = {action.id}>
                                    <td> {action.id} </td>
                                    <td> {action.description} </td>
                                    <td> {action.scoreMinimum}</td>
                                    {userId ? <td> {action.userScore}</td> : null}
                                    <td>
                                        {userId ? <button onClick={ () => editAction(userId)} className="btn btn-info"> Mettre a jour </button> : null}
                                        {/*<button style={{marginLeft: "10px"}} onClick={ () => viewUser(user.id)} className="btn btn-dark"> Voir jeux </button> //TODO if time*/}
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


export default ListActionsComponent