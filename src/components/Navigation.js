import React, {Component} from 'react';

class Navigation extends Component{
    render() {
        return(
        <nav className="#ffcdd2 red lighten-4">
            <div className="nav-wrapper">
                <a href="#" className="App-link">
                    { this.props.title }
                </a>
                
            </div>
        </nav>
        )
    }
}

export default Navigation;