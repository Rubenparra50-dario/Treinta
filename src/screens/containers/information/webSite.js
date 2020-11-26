import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, ScrollView } from 'react-native';
import {sG} from '../../components/general/styles';
import {WebSiteTemplate} from '../../templates/information/webSite';
import { MaterialCommunityIcons} from '@expo/vector-icons';

const data = [
    { title: 'Registra todas las ventas y gastos', body:'Registra los ingresos, los gastos y las cuentas por cobrar y pagar', icon:'cash-register' },
    { title: 'Visualiza la utilidad del negocio al instante', body:'Obtén información diaria, semanal y mensual de la utilidad del negocio', icon:'chart-bar' },
    { title: 'Cobra puntualmente la deuda de tus clientes', body:'Obtén pagos de las deudas de tus clientes más rápido con el registro de deudas pendientes', icon:'cash-usd' },
    { title: 'Recuerda cuando pagar a proveedores', body:'Visualiza las fechas de vencimiento de tus facturas y recibos', icon:'information' },
    { title: 'Los datos se mantienen seguros', body:'Las cuentas por cobrar son muy importantes, no las pierda.', icon:'lock' },
]; 
const numColumns = 2;

export default class WebSite extends Component {

    formatData = (data, numColumns) => {
        const numberOfFullRows = Math.floor(data.length / numColumns);
      
        let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
        while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
          data.push({ title: `blank-${numberOfElementsLastRow}`, empty: true });
          numberOfElementsLastRow++;
        }
      
        return data;
      };

    renderItem = ({ item, index }) => {
        if (item.empty === true) {
          return <View style={[sG.container, sG.bg_white]} />;
        }
        return (
          <View style={[styles.item, sG.container, sG.jc_center, sG.ai_center]}>
                <View style={[sG.w_80, sG.h_85, sG.ai_center, sG.jc_center, sG.bg_white, sG.card_shadow, sG.border, sG.brounded]}>
                    <View style={[sG.w_90, sG.h_90, sG.ai_center, sG.jc_center]}>
                        <View style={[sG.w_100, sG.h_30, sG.ai_center, sG.jc_center]}>
                            <MaterialCommunityIcons name={item.icon} style={[sG.size_icon, sG.text_primary]} />
                        </View>
                        <View style={[sG.w_100, sG.h_30, sG.ai_center, sG.jc_center]}>
                            <Text style={[sG.h9, sG.bold, sG.text_center]}>{item.title}</Text>
                        </View>
                        <View style={[sG.w_100, sG.h_30, sG.ai_center, sG.jc_center]}>
                            <Text style={[sG.h9, sG.text_center]}>{item.body}</Text>
                        </View>
                    </View>
                </View>
          </View>
        );
    };

    render() {
        return (
            <WebSiteTemplate
            data={data}
            numColumns={numColumns}
            
            renderItem={this.renderItem}
            formatData={this.formatData}
            ></WebSiteTemplate>
        )
    }
}

const styles = StyleSheet.create({
    item: {
      height: Dimensions.get('window').width / numColumns, // approximate a square
    },
});