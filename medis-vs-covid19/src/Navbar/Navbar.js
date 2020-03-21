import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';

import Drawer from '@material-ui/core/Drawer';

import './Navbar.css';


/* Route to the Profile tab specifying a logged in user */
const ProfileButton = withRouter(({ history }) => (
    <button onClick={() => {
        history.push('/personal/' + localStorage.getItem('accountId'))
    }}>
        My Profile
    </button>
))

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sideDrawerOpen: false,
            showNav: true,
            onRouteChanged: () => {
                if (this.props.location.pathname === "/login") {
                    this.setState({
                        showNav: false
                    });
                } else {
                    this.setState({
                        showNav: true
                    });
                }
            }
        }
        
        this.handleClick = this.handleClick.bind(this);
        console.log(this.props.location);
    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.state.onRouteChanged()
        }
    }

    componentDidMount() {
        this.state.onRouteChanged()
    }

    handleClick() {
        this.setState({
            sideDrawerOpen: !this.state.sideDrawerOpen
        });
    }

    render() {
        const { showNav } = this.state;

        if (showNav) {
            return (
                <nav className="Navbar-container" >

                    <div className="Navbar-logo">
                        <Link to="/">
                            <h1 className="Navbar-logo-text"> Medis4Health </h1>    
                        </Link>
                    </div>
                    <ul className="Navbar-items">
                        <li><MenuIcon fontSize={"large"} onClick={this.handleClick} /></li>
                    </ul>
                    <Drawer anchor={"right"} open={this.state.sideDrawerOpen} onClose={this.handleClick}>
                        <div className="Navbar-drawer">
                            <button className="Navbar-drawer-close" onClick={this.handleClick}>x</button>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg" />
                            <div>
                                <ProfileButton />
                                <Link to="/login">
                                    <button>Logout</button>
                                </Link>
                            </div>
                        </div>
                    </Drawer>
                </nav >
            );
        } else {
            return (
                <div></div>
            );
        }
    }
}

export default withRouter(Navbar);