import React, {useEffect, useState} from 'react'
import UserService from '../services/UserService'
import {Redirect} from "react-router-dom";

const ListUserComponent = () => {

    const [users, setUsers] = useState([]);
    const [redirectState, setRedirectState] = useState({redirect: false, path: ""});

    useEffect(() => {
        UserService.getUsers().then(response => {
            setUsers(response.data);
        })
    }, []);

    const deleteUser = (numUtil) => {
        UserService.deleteUser(numUtil).then(() => {
            setUsers(users.filter(user => user.numUtil !== numUtil));
        }).catch(error => {
            console.error(error);
            window.alert(error.toString());
        });
    }

    function viewActions(id) {
        // this.props.history.push(`/view-user/${id}`); TODO
        console.log("coucou");
        setRedirectState({redirect: true, path: "/actions/byUser/"+id});
    }

    function editUser(id) {
        // this.props.history.push(`/add-user/${id}`); TODO
    }
    // function componentDidMount(){
    //     UserService.getUsers().then((res) => {
    //         setUsers(res.data);
    //     });
    // }



    return (
        redirectState.redirect ? <Redirect to={redirectState.path}/> :
            <div style={{marginBottom: "40px"}}>
                <h1 className="text-center" style={{fontSize: "40px", margin: "20px 0px"}}>Liste des apprenants</h1>
                <div style={{textAlign: "end"}}>
                    <a className="btn btn-primary" color="white" href="/inscription" style={{marginBottom: "10px"}}>Enregistrer un nouvel apprenant</a>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            users.map(
                                user =>
                                    <tr key={user.numUtil}>
                                        <td>{user.numUtil}</td>
                                        <td>{user.surname}</td>
                                        <td>{user.forename}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <button
                                                onClick={() => viewActions(user.numUtil)}
                                                className="btn btn-info"
                                            >
                                                Voir les scores
                                            </button>
                                            <button
                                                style={{marginLeft: "10px"}}
                                                onClick={() => editUser(user.id)}
                                                className="btn btn-primary"
                                            >
                                                Modifier
                                            </button>
                                            <button
                                                style={{marginLeft: "10px"}}
                                                onClick={() => deleteUser(user.numUtil)}
                                                className="btn btn-danger"
                                            >
                                                Supprimer
                                            </button>
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

export default ListUserComponent;
