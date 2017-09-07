import React from 'react';
import { Font } from 'expo';
import { Provider } from 'mobx-react';
import { StyleSheet } from 'react-native';
import NativeTachyons from 'react-native-style-tachyons';
import AppNavigator from './navigation/AppNavigator';
import stores from './models/Stores'
NativeTachyons.build({
}, StyleSheet);

console.disableYellowBox = true;

const App = AppNavigator({initialRouteName:'SignInScreen'});
//export default AppNavigator({initialRouteName:'NewScreen'});
//export default AppNavigator({initialRouteName:'TabNavigator'});
export default () => (
	<Provider {...stores}>
		<App />
	</Provider>
)
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