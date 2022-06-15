import React, { Component } from 'react'

const HeaderComponent = (props) => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    {/*<div><a href="/" className="navbar-brand">user Management App</a></div>*/}
                    <div><a href="/" className="navbar-brand">Accueil</a></div>
                    <div><a href="/" className="navbar-brand">Missions</a></div>
                    <div><a href="/users" className="navbar-brand">Apprenants</a></div>
                    <div><a href="/" className="navbar-brand">Actions</a></div>
                </nav>
            </header>
        </div>
    )
}
// class HeaderComponent extends Component {
//     constructor(props) {
//         super(props)
//
//         this.state = {
//
//         }
//     }
//
//     render() {
//         return (
//             <div>
//                 <header>
//                     <nav className="navbar navbar-expand-md navbar-dark bg-dark">
//                     <div><a href="https://javaguides.net" className="navbar-brand">user Management App</a></div>
//                     </nav>
//                 </header>
//             </div>
//         )
//     }
// }

export default HeaderComponent
