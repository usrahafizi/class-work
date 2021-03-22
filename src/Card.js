import React from 'react';

class Card extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let superhost = '';
        if (this.props.house.superhost == true) {
            superhost = <span class="super">SUPERHOST</span>
        }
        return (
            <div className="card-item">
                <img src={this.props.house.photo} />
                <div class="card-description">
                    {superhost}
                    <div style={{color: 'gray'}}>
                        <span> {this.props.house.type} </span>
                        <span> {this.props.house.beds} .beds</span>
                    </div>

                    <div class="card-rating" style={{color: 'gray'}}>
                        <span class="material-icons">
                            star_rate
                        </span>
                        <span> {this.props.house.rating} </span>
                    </div>
                </div>
               
                    {this.props.house.desc}
                
            </div>
        )
    }
}

export default Card;