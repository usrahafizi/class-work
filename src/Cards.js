import React from 'react';
import Card from './Card';
import './cards.css';


class Cards extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="cardsWrapper">
                <h2 className="cards-title"> Stay in {this.props.location}</h2>

                {this.props.houses.length > 0 ?

                    <div className="cards">
                        {this.props.houses.map(house => {
                            return (
                                <Card house={house} />
                            );
                        })}
                    </div>
                    :
                    <h3>No Result Found</h3>
                }
            </div>
        )
    }
}

export default Cards;