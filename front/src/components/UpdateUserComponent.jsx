import React, { Component } from 'react'
import UserService from '../services/UserService';

class UpdateuserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            surname: '',
            forename: '',
            email: ''
        }
        this.changeSurnameHandler = this.changeSurnameHandler.bind(this);
        this.changeForenameHandler = this.changeForenameHandler.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }

    componentDidMount(){
        UserService.getUserById(this.state.id).then( (res) =>{
            let user = res.data;
            this.setState({surname: user.surname,
                forename: user.forename,
                email : user.email
            });
        });
    }

    updateUser = (e) => {
        e.preventDefault();
        let user = {surname: this.state.surname, forename: this.state.forename, email: this.state.email};
        console.log('user => ' + JSON.stringify(user));
        console.log('id => ' + JSON.stringify(this.state.id));
        UserService.updateUser(user, this.state.id).then(res => {
            this.props.history.push('/users');
        });
    }
    
    changeSurnameHandler= (event) => {
        this.setState({surname: event.target.value});
    }

    changeForenameHandler= (event) => {
        this.setState({forename: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    cancel(){
        this.props.history.push('/users');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update user</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="surname" className="form-control" 
                                                value={this.state.surname} onChange={this.changeSurnameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="forename" className="form-control" 
                                                value={this.state.forename} onChange={this.changeForenameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateUser}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateuserComponent
