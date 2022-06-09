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

    function componentDidMount(){
        UserService.getUsers().then((res) => {
            setUsers(res.data);
        });
    }


    function addUser(){
        // this.props.history.push('/add-user/_add'); TODO
    }




    return (
        <div>
            <h2 className="text-center">users List</h2>
            <div className = "row">
                <button className="btn btn-primary" onClick={addUser}> Add User</button>
            </div>
            <br></br>
            <div className = "row">
                <table className = "table table-striped table-bordered">

                    <thead>
                    <tr>
                        <th> User First Name</th>
                        <th> User Last Name</th>
                        <th> User Email</th>
                        <th> Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.map(
                            user =>
                                <tr key = {user.id}>
                                    <td> {user.surname} </td>
                                    <td> {user.forename}</td>
                                    <td> {user.email}</td>
                                    <td>
                                        <button onClick={ () => editUser(user.id)} className="btn btn-info">Update </button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => deleteUser(user.id)} className="btn btn-danger">Delete </button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => viewUser(user.id)} className="btn btn-info">View </button>
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


// class ListuserComponent extends Component {
//     constructor(props) {
//         super(props)
//
//         this.state = {
//                 users: []
//         }
//         this.adduser = this.adduser.bind(this);
//         this.edituser = this.edituser.bind(this);
//         this.deleteuser = this.deleteuser.bind(this);
//     }
//
//     deleteuser(id){
//         userService.deleteuser(id).then( res => {
//             this.setState({users: this.state.users.filter(user => user.id !== id)});
//         });
//     }
//     viewuser(id){
//         this.props.history.push(`/view-user/${id}`);
//     }
//     edituser(id){
//         this.props.history.push(`/add-user/${id}`);
//     }
//
//     componentDidMount(){
//         userService.getusers().then((res) => {
//             this.setState({ users: res.data});
//         });
//     }
//
//     adduser(){
//         this.props.history.push('/add-user/_add');
//     }
//
//     render() {
//         return (
//             <div>
//                  <h2 className="text-center">users List</h2>
//                  <div className = "row">
//                     <button className="btn btn-primary" onClick={this.adduser}> Add user</button>
//                  </div>
//                  <br></br>
//                  <div className = "row">
//                         <table className = "table table-striped table-bordered">
//
//                             <thead>
//                                 <tr>
//                                     <th> user First Name</th>
//                                     <th> user Last Name</th>
//                                     <th> user Email Id</th>
//                                     <th> Actions</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {
//                                     this.state.users.map(
//                                         user =>
//                                         <tr key = {user.id}>
//                                              <td> { user.surname} </td>
//                                              <td> {user.forename}</td>
//                                              <td> {user.email}</td>
//                                              <td>
//                                                  <button onClick={ () => this.edituser(user.id)} className="btn btn-info">Update </button>
//                                                  <button style={{marginLeft: "10px"}} onClick={ () => this.deleteuser(user.id)} className="btn btn-danger">Delete </button>
//                                                  <button style={{marginLeft: "10px"}} onClick={ () => this.viewuser(user.id)} className="btn btn-info">View </button>
//                                              </td>
//                                         </tr>
//                                     )
//                                 }
//                             </tbody>
//                         </table>
//
//                  </div>
//
//             </div>
//         )
//     }
// }

export default ListUserComponent
