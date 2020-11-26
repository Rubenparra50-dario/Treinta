import React from 'react';
import {View, Text, ImageBackground, ScrollView, TextInput, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import {sG} from '../../components/general/styles';

export const WebSiteTemplate = props =>{
    return (
        <View style={[sG.container, sG.bg_white]}>
            <ScrollView>
                <View style={[sG.row_20, sG.w_100, sG.ai_center, sG.jc_center]}>
                    <View style={[sG.h_90, sG.w_80, sG.ai_center, sG.jc_center]}>
                        <Text style={[sG.h6, sG.bold, sG.text_center]}>Miles de micro y pequeñas empresas confian en Treinta</Text>
                    </View>
                </View>
                <View style={[sG.row_30, sG.w_100, sG.ai_center, sG.jc_center]}>
                    <View style={[sG.h_90, sG.w_90, sG.ai_center, sG.jc_center]}>
                        <Text style={[sG.h7, sG.text_center]}>Treinta es una aplicación GRATUITA para administrar fácilmente las finanzas de tu negocio, en cualquier momento y en cualquier lugar.</Text>
                    </View>
                </View>
                <FlatList
                    data={props.formatData(props.data, props.numColumns)}
                    style={[sG.container]}
                    renderItem={props.renderItem}
                    numColumns={props.numColumns}
                />
            </ScrollView>
        </View>
    )
}
