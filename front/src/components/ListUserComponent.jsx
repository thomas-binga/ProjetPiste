import React, {Component, useEffect, useState} from 'react'
import UserService from '../services/UserService'

const ListUserComponent = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        UserService.getUsers().then(response => {
            console.log("retrieving users", {response})
            setUsers(response.data)
        })
    }, [])

    function deleteUser(id){
        UserService.deleteUser(id).then( res => {
            this.setState({users: this.state.users.filter(user => user.id !== id)});
        });
    }
    function viewUser(id){
        // this.props.history.push(`/view-user/${id}`); TODO
    }
    function editUser(id){
        // this.props.history.push(`/add-user/${id}`); TODO
    }
    //
    // function componentDidMount(){
    //     UserService.getUsers().then((res) => {
    //         setUsers(res.data);
    //     });
    // }


    function addUser(){
        // this.props.history.push('/add-user/_add'); TODO
    }




    return (
        <div>
            <h2 className="text-center">Liste des utilisateurs</h2>
            {/*<div className = "row">*/}
            {/*    <button className="btn btn-primary" onClick={addUser}>Add User</button>*/}
            {/*</div>*/}
            <br></br>
            <div className = "row">
                <table className = "table table-striped table-bordered">

                    <thead>
                    <tr>
                        <th> Id </th>
                        <th> User First Name</th>
                        <th> User Last Name</th>
                        <th> User Email</th>
                        <th> Actions </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.map(
                            user =>
                                <tr key = {user.numUtil}>
                                    <td> {user.numUtil} </td>
                                    <td> {user.surname} </td>
                                    <td> {user.forename}</td>
                                    <td> {user.email}</td>
                                    <td>
                                        <button onClick={ () => editUser(user.id)} className="btn btn-info"> Mettre a jour </button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => deleteUser(user.id)} className="btn btn-danger"> Supprimer </button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => viewUser(user.id)} className="btn btn-dark"> Voir actions </button>
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


export default ListUserComponent
