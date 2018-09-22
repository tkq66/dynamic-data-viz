import React, {Component} from 'react';
// import ZoomWidget from '.    `/ZoomWidget';
import ComparisonWidget from './ComparisonWidget';
import FilterWidget from './FilterWidget';

export default class CardsList extends Component {

    constructor(props){
        super(props);
        this.state = {
            cards: [
                {name: 'Card 1', value: "Comparison Widget"},
                {name: 'Card 2', value: "Filter Widget"}
            ]
        };
    }

    render() {
        return <div className="cards-list">
                <ComparisonWidget key={this.state.cards[0].id} card={this.state.cards[0]} />
                <FilterWidget key={this.state.cards[1].id} card={this.state.cards[1]} />
              </div>
    }
}
