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
            flatsData: flats
        };
    }

    render() {
        return (
            <div>
              <FlatList flats={this.state.flatsData} />
              <Map />
            </div>
          );
    }
}

export default App;
