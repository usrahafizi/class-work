import React from 'react';
import './SearchBox.css';


class SearchBox extends React.Component {


    render() {

        let visited = [];
        let locations = this.props.houses.map(house => {

            if (visited.indexOf(house.Location) == -1) {
                visited.push(house.Location)
                return <li>
                    <span class="material-icons">
                        location_on
                    </span>{house.Location}</li>
            }
            return null;
        })

        console.log(this.props)

        return (
            <div class="search-box search-box-hide" id="search-box">
                <div class="search-bar">
                    <input type="text" placeholder="Location" id="location" />
                    <select id="numberOfGuests">
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                    </select>

                    <button onClick={() => this.props.findLocation
                        (document.getElementById('location').value, document.
                        getElementById('numberOfGuests').value)}>
                        <span class="material-icons">
                            search
                        </span>
                        Search
                    </button>
                </div>
                <ul className="list-locations">
                    {locations}
                </ul>
            </div>
        )
    }
}

export default SearchBox;