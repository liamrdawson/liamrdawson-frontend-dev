import React, { Component} from 'react';

class Header extends Component {

    state = {
        showMenuIcon: true
    }

    toggleMenu = () => {
        this.setState({
            showMenuIcon: !this.state.showMenuIcon
        })
    }

    render( ) {
        console.log(this.props);
        return (
            <header>
                <div className="header-elements-container">
                    <a href="#"><span>Liam R. Dawson</span></a>

                    {/* <span className="menu" onClick={this.toggleMenu}>Menu</span> */}

                    {this.state.showMenuIcon === false &&
                        (<nav>
                            <a href="#">About</a>
                            <a href="#projects">Projects</a>
                            <button onClick={this.props.changeInfo}>Contact</button>
                            <button onClick={this.toggleMenu}>Close</button>
                        </nav> )
                    }
                    {this.state.showMenuIcon === true && (<button  onClick={this.toggleMenu}>Menu</button>)}

                </div>
            </header>
        );
    }
    
}

export default Header;