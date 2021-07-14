/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import FlatList from './flat_list';
import Map from './map';

import flats from '../data/flats';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            flatsData: flats,
            center: { lat: flats[0].lat, lng: flats[0].lng }
        };
    }

    setCenter =(lat, lng) => {
        this.setState({
            center: { lat, lng }
        });
    }

    render() {
        return (
            <div>
              <FlatList flats={this.state.flatsData} setCenter={this.setCenter} />
              <Map flats={this.state.flatsData} center={this.state.center}/>
            </div>
          );
    }
}

export default App;
