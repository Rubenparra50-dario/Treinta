import React from 'react';
import {View, Text, ImageBackground, ScrollView, TextInput, TouchableOpacity, Modal} from 'react-native';
import {sG} from '../../components/general/styles';

export const LoginTemplate = props =>{
    return (
        <View style={[sG.container, sG.bg_primary, sG.jc_center]}>
            <View style={[sG.h_75, sG.w_100, sG.ai_center, sG.jc_center]}>
                <View style={[sG.h_90, sG.w_90, sG.ai_center, sG.jc_center, sG.bg_white, sG.brounded, sG.border, sG.card_shadow]}>
                    <ScrollView>
                        <View style={[sG.row_40, sG.w_100, sG.ai_center, sG.jc_center]}>
                            <ImageBackground style={[sG.h_90, sG.w_100]} resizeMode='contain' source={require("../../../../assets/icons/icon_treinta.png")} />
                        </View>
                        <View style={[sG.row_25, sG.w_100, sG.ai_center, sG.jc_center]}>
                            <View style={[sG.h_30, sG.w_100, sG.ai_center, sG.jc_center]}>
                                <View style={[sG.w_90, sG.jc_center]}>
                                    <Text style={[sG.h8, sG.bold]}>Correo eléctronico</Text>
                                </View>
                            </View>
                            <View style={[sG.h_70, sG.w_100, sG.ai_center, sG.jc_center]}>
                                <View style={[sG.h_80, sG.w_90, sG.ai_center, sG.jc_center, sG.bg_light, sG.brounded]}>
                                    <TextInput autoCapitalize = 'none' style={[sG.h_90, sG.w_90]} placeholder='Correo electrónico' placeholderTextColor = '#BDBDBD' value={props.email} onChangeText={(text)=>props.handleInputChange(text, "email")}>
                                    </TextInput>
                                </View>
                            </View>
                        </View>
                        <View style={[sG.row_25, sG.m_t_sm, sG.w_100, sG.ai_center, sG.jc_center]}>
                            <View style={[sG.h_30, sG.w_100, sG.ai_center, sG.jc_center]}>
                                <View style={[sG.w_90, sG.jc_center]}>
                                    <Text style={[sG.h8, sG.bold]}>Contraseña</Text>
                                </View>
                            </View>
                            <View style={[sG.h_70, sG.w_100, sG.ai_center, sG.jc_center]}>
                                <View style={[sG.h_80, sG.w_90, sG.ai_center, sG.jc_center, sG.bg_light, sG.brounded]}>
                                    <TextInput autoCapitalize = 'none' secureTextEntry={true} style={[sG.h_90, sG.w_90]} placeholder='Contraseña' placeholderTextColor = '#BDBDBD' value={props.password} onChangeText={(text)=>props.handleInputChange(text, "password")}>
                                    </TextInput>
                                </View>
                            </View>
                        </View>
                        <View style={[sG.row_20, sG.m_t_sm, sG.w_100, sG.ai_center, sG.jc_center]}>
                            <TouchableOpacity style={[sG.h_80, sG.w_50, sG.ai_center, sG.jc_center, sG.bg_primary, sG.brounded]} onPress={props.SignIn}>
                                <Text style={[sG.h6, sG.bold, sG.text_white, sG.text_center]}>Login</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[sG.row_20, sG.m_t_sm, sG.w_100, sG.ai_center, sG.jc_center]}>
                            <TouchableOpacity style={[sG.h_90, sG.w_90, sG.ai_center, sG.jc_center]} onPress={props.SignUp}>
                                <Text style={[sG.h7, sG.bold, sG.text_secondary, sG.text_center]}>Oprime para crear tu cuenta</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </View>
            <View style={[sG.h_10, sG.w_100, sG.ai_center, sG.jc_center]}>
                <View style={[sG.h_80, sG.w_90, sG.ai_center, sG.jc_center, sG.chrow]}>
                    <View style={[sG.w_50, sG.h_100]}>                        
                        <TouchableOpacity style={[sG.w_90, sG.h_100, sG.jc_center, sG.ai_center, sG.bg_secondary, sG.brounded, sG.card_shadow]} onPress={props.handleInfo}>
                            <Text style={[sG.h8, sG.text_white, sG.bold, sG.text_center]}>¿Donde estamos?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[sG.w_50, sG.h_100, sG.ai_end]}>                  
                        <TouchableOpacity style={[sG.w_90, sG.h_100, sG.jc_center, sG.ai_center, sG.bg_secondary, sG.brounded, sG.card_shadow]}  onPress={props.handleInfo}>
                            <Text style={[sG.h8, sG.text_white, sG.bold, sG.text_center]}>¿Quíenes somos?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}