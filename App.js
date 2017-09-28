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

const navigatorsStore = stores.navigatorsStore;
export default () => (
	<Provider {...stores}>
		<App 
		onNavigationStateChange={navigatorsStore.onNavigationStateChange.bind(navigatorsStore)}
		/>
	</Provider>
)