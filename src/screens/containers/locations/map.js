import React, { Component } from 'react';
import {sG} from '../../components/general/styles';
import { View, Text, Dimensions} from 'react-native';
import MapView, { Marker, ProviderPropType } from 'react-native-maps';
import {MapTemplate} from '../../templates/locations/map';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 4.699269;
const LONGITUDE = -74.089965;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

export default class Map extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cnt: 0,
            region: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            },
            markers: [],
        };
    }

    GeneratorLocations = () => {
        var MARKERS = [];
    
        for(var i=0; i<25; i++){
            var objeto =   {
                coordinate: {
                    latitude: LATITUDE + SPACE,
                    longitude: LONGITUDE + SPACE/ Math.random(),
                },
                title:i+1,
                description:i+1
            }
            MARKERS.push(objeto);
        } 
        
        this.setState({markers:MARKERS})
    }

    componentDidMount () {
        this.GeneratorLocations()
    }

    render() {
        return (
            <MapTemplate
                markers={this.state.markers}
                region={this.state.region}
            ></MapTemplate>
        );
    }
}

// Map.propTypes = {
//   provider: ProviderPropType,
// };
