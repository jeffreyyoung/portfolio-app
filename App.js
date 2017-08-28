// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import MainStackNavigator from './navigation/TabNavigator';


import NativeTachyons from 'react-native-style-tachyons';
import AppNavigator from './navigation/AppNavigator';

// 
// export default MainStackNavigator;

import React from 'react';
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
} from 'react-native';

import { Font } from 'expo';

NativeTachyons.build({
}, StyleSheet);

console.disableYellowBox = true;
//export default AppNavigator({initialRouteName:'NewScreen'});
//export default AppNavigator({initialRouteName:'TabNavigator'});
export default AppNavigator({initialRouteName:'SignInScreen'});
//export default AppNavigator({initialRouteName:'ScanQRCodeScreen'});
// 
// export default NativeTachyons.wrap(class App extends React.Component {
//   state = {
//     fontsAreLoaded: false,
//   }
// 
//   async componentWillMount() {
//     await Font.loadAsync({
//       'Rubik-Black': require('./node_modules/@shoutem/ui/fonts/Rubik-Black.ttf'),
//       'Rubik-BlackItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-BlackItalic.ttf'),
//       'Rubik-Bold': require('./node_modules/@shoutem/ui/fonts/Rubik-Bold.ttf'),
//       'Rubik-BoldItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-BoldItalic.ttf'),
//       'Rubik-Italic': require('./node_modules/@shoutem/ui/fonts/Rubik-Italic.ttf'),
//       'Rubik-Light': require('./node_modules/@shoutem/ui/fonts/Rubik-Light.ttf'),
//       'Rubik-LightItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-LightItalic.ttf'),
//       'Rubik-Medium': require('./node_modules/@shoutem/ui/fonts/Rubik-Medium.ttf'),
//       'Rubik-MediumItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-MediumItalic.ttf'),
//       'Rubik-Regular': require('./node_modules/@shoutem/ui/fonts/Rubik-Regular.ttf'),
//       'rubicon-icon-font': require('./node_modules/@shoutem/ui/fonts/rubicon-icon-font.ttf'),
//     });
// 
//     this.setState({fontsAreLoaded: true});
//   }
// 
//   render() {
//     if (!this.state.fontsAreLoaded) {
//       return <Text>yayyy</Text>;
//     }
// 
//     return (
//       <MainStackNavigator />
//     );
//   }
// })
// // 
// // Exponent.registerRootComponent(App);