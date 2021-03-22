import { render } from '@testing-library/react';
import React from 'react';
import './header.css';
import SearchBox from './SearchBox';


class Header extends React.Component {

    toggleSearchBox = () => {
        let box = document.getElementById('search-box');
        box.classList.toggle('search-box-hide');
    }

    render() {
           
         return (
            <div class="header">
                <div class="site-logo">
                    <span class="material-icons">
                        house
                    </span>
                    <span>WINDBNB</span>
                </div>
                <div class="search-bar">
                    <span>Search for place</span>
                    <span>Add guest</span>
                    <span class="material-icons" id="search-icon" onClick={this.toggleSearchBox}>
                        search
                    </span>
                </div>
                <SearchBox houses={this.props.houses} findLocation = {this.props.findLocation}/>
            </div>
        )
    }
}

export default Header;
