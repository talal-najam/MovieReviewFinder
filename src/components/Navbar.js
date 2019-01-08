import React, { Component } from 'react';

class Navbar extends Component {
    state = {}

    onClick = e => {
        e.preventDefault();
        // Perform api logic
        console.log('submit')
    }

    onChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    {/* eslint-disable-next-line */}
                    <a className="navbar-brand" href="#">Movie Review</a>
                    <ul className="nav navbar-nav navbar-right">
                        {/* eslint-disable-next-line */}
                        <li className="nav-item">
                            <a className="nav-item nav-link" href="https://github.com/mistat44" target="_blank">
                                <i style={{ fontSize: '1.3rem', marginRight: '3px' }} class="fab fa-github" /> Github
                            </a>
                        </li>

                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;