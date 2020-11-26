//import dependences
import { Dimensions } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';

//import js
import Login from './src/screens/containers/start/login';
import WebSite from './src/screens/containers/information/webSite';
import Map from './src/screens/containers/locations/map';

// define REM depending on screen width
const entireScreenWidth = Dimensions.get('window').width;

// Defined general base styles
EStyleSheet.build({
  $rem: entireScreenWidth / 300,
  $colorPrimary: '#fcd10a',
  $colorSecondary: '#1f7972',
  $colorLight: '#f2f2f2',
  $colorGray: '#616161',
});

const Begin = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    }
  },
  WebSite: {
    screen: WebSite,
    headerTitle: "Información",
      headerTitleStyle: { 
        textAlign: 'center',
        flex:1
      },
      headerTintColor: '#fcd10a',
  },
  Map: {
    screen: Map,
    headerTitle: "Mapa",
      headerTitleStyle: { 
        textAlign: 'center',
        flex:1
      },
      headerTintColor: '#fcd10a',
  },
  
});

const App = createSwitchNavigator({
  Auth: {
    screen: Begin
  }
});

export default createAppContainer(App);