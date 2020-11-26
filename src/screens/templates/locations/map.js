import React from 'react';
import {sG} from '../../components/general/styles';
import { View, Text} from 'react-native';
import MapView, { Marker, ProviderPropType } from 'react-native-maps';

  
export const MapTemplate = props =>{

    return (
        <View style={[sG.container, sG.bg_white]}>
            <View style={[sG.w_100, sG.h_80, sG.ai_center, sG.jc_center]}>                    
                <View style={[sG.w_90, sG.h_90]}>                    
                    <MapView
                    style={[sG.container]}
                    initialRegion={props.region}
                    zoomTapEnabled={false}
                    >
                    {props.markers.map((item, key) => (
                    <Marker
                        coordinate={item.coordinate}
                        title={"Ubicación "+item.title}
                        description={'Descripción lugar: '+item.description}
                        pinColor={'#fcd10a'}
                    />
                    ))}
                    </MapView>
                </View>
            </View>
            <View style={[sG.w_100, sG.h_10, sG.ai_center, sG.jc_center]}>
                <Text style={[sG.h6, sG.bold, sG.text_center]}>Encontramos 25 ubicaciones disponibles</Text>
            </View>
        </View>
    );
}
