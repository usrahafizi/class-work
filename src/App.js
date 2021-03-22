import React from 'react';
import './App.css';
import Header from './Header';
import Cards from './Cards';
import Footer from './Footer';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      houses : [
        { superhost: true, type: 'Entire house ', rooms: 2, beds: 2, maxGuest: 4, Location: 'kabul', rating: 4.5, photo: 'photos/image1.jpg', desc: 'A very beautiful house' },
        { superhost: true, type: 'Private room ', rooms: 1, beds: 1, maxGuest: 2, Location: 'berlin', rating: 5, photo: 'photos/image2.jpg', desc: 'A nice and cozy room' },
        { superhost: false, type: 'Apartment ', rooms: 3, beds: 2, maxGuest: 5, Location: 'london', rating: 4, photo: 'photos/image3.jpg' },
        { superhost: false, type: 'House ', rooms: 2, beds: 2, maxGuest: 4, Location: 'tokyo', rating: 4.5, photo: 'photos/image4.jpg' },
        { superhost: false, type: 'Private room ', rooms: 1, beds: 1, maxGuest: 2, Location: 'paris', rating: 5, photo: 'photos/image5.jpg' },
        { superhost: false, type: 'Apartment ', rooms: 3, beds: 2, maxGuest: 5, Location: 'helsinki', rating: 4, photo: 'photos/image6.jpg' },
        { superhost: false, type: 'House ', rooms: 2, beds: 2, maxGuest: 4, Location: 'kabul', rating: 4.5, photo: 'photos/image7.jpg' },
        { superhost: true, type: 'Private room ', rooms: 1, beds: 1, maxGuest: 2, Location: 'kabul', rating: 5, photo: 'photos/image8.jpg' },
        { superhost: false, type: 'Apartment ', rooms: 3, beds: 2, maxGuest: 5, Location: 'london', rating: 4, photo: 'photos/image9.jpg' }
       ], 
      location: ''
    }
  }

  //arrow functions
  findLocation = (location, numberOfGuests) => {
    location = location.toLowerCase();
    let filtered = this.state.houses.filter(house =>{
      return house.Location === location && house.maxGuest >= numberOfGuests;
    });

    this.setState({
      houses : filtered,
      location: location
    });

    document.getElementById('search-box').classList.toggle('search-box-hide')
  }

  render() {
    return (
      <div className="container">
        <Header houses={this.state.houses} findLocation={this.findLocation} />
        <Cards houses={this.state.houses} location={this.state.location} />
        <Footer />
      </div>
    );
  }
}
export default App;