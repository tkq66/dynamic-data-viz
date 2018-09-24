import React, {Component} from 'react';
import ComparisonWidget from './ComparisonWidget';
import FilterWidget from './FilterWidget';
import ZoomWidget from './ZoomWidget';

const widgetContainer = {
  height: '100%',
  width: '100%'
}

export default class WidgetContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            cards: [
                {name: 'Card 1', value: "Comparison Widget"},
                {name: 'Card 2', value: "Filter Widget"},
                {name: 'Card 3', value: "Zoom Widget"}
            ]
        };
    }

    render() {
        return <div className="cards-list" style={widgetContainer}>
                <ComparisonWidget key={this.state.cards[0].id} card={this.state.cards[0]} />
                <FilterWidget key={this.state.cards[1].id} card={this.state.cards[1]} />
                <ZoomWidget key={this.state.cards[2].id} card={this.state.cards[2]}/>
              </div>
    }
}
