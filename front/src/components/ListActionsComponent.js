import React, {useEffect, useState} from 'react'
import ActionService from '../services/ActionService'

const ListActionsComponent = ({user, mission}) => {
    const [actions, setActions] = useState([])

    useEffect(() => {
        ActionService.getActions({user, mission}).then(response => {
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
        <div>
            <h2 className="text-center">Liste des actions</h2>
            {/*<div className = "row">*/}
            {/*    <button className="btn btn-primary" onClick={addUser}>Add User</button>*/}
            {/*</div>*/}
            <br></br>
            <div className = "row">
                <table className = "table table-striped table-bordered">

                    <thead>
                    <tr>
                        <th> Id </th>
                        <th> Description</th>
                        <th> Score minimum </th>
                        {user ? <th> User score </th> : null}
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
                                    {user ? <td> {action.userScore}</td> : null}
                                    <td>
                                        {user ? <button onClick={ () => editAction(user.id)} className="btn btn-info"> Mettre a jour </button> : null}
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