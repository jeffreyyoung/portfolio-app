import React from 'react';
import { Button } from 'react-native'
import ActivityFeedScreen from './../screens/ActivityFeedScreen';
import ProfileScreen from './../screens/ProfileScreen';
import SettingsScreen from './../screens/SettingsScreen';
import JournalEntriesScreen from './../screens/JournalEntriesScreen';
import ScanQRCodeScreen from './../screens/ScanQRCodeScreen';
import NewScreen from './../screens/NewScreen';
import SignInScreen from './../screens/SignInScreen';
import { StackNavigator } from 'react-navigation';
import TabNavigator from './TabNavigator';
function getStackNavigator(stackNavigatorSettings = {}) {
	stackNavigatorSettings = {mode:'modal', ...stackNavigatorSettings};
	return StackNavigator(
		{
			TabNavigator: {
				screen: TabNavigator,
				path: '/TabNavigator',
				navigationOptions: {
					title: 'Activites',
					header: null,
					gesturesEnabled: false,
				},
				mode: 'modal'
			},
			SignInScreen: {
				screen: SignInScreen,
				path: '/SignInScreen',
				navigationOptions: {
					title: 'Sign In',
					header: null,
					gesturesEnabled: false,
				},
			},
			NewScreen: {
				screen: NewScreen,
				path: '/NewScreen',
				navigationOptions: ({navigation}) => ({
					title: 'Log A Climb',
					headerRight: (<Button title='Save' onPress={() => navigation.goBack()}/>),
					headerLeft: (<Button title='Close' onPress={() => navigation.goBack()}/>)
				}),
			},
			ScanQRCodeScreen: {
				screen: ScanQRCodeScreen,
				path: '/ScanQRCodeScreen',
				navigationOptions: ({navigation}) => ({
					title: 'Scan QR Code',
				}),
			}
		}, 
		stackNavigatorSettings)
}

export default getStackNavigator;