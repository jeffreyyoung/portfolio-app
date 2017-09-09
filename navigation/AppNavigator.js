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
import Colors from './../constants/Colors'
function getStackNavigator(stackNavigatorSettings = {}) {
	stackNavigatorSettings = {mode:'modal', navigationOptions: {headerTintColor:Colors.primary}, ...stackNavigatorSettings};
	return StackNavigator(
		{
			TabNavigator: {
				screen: TabNavigator,
				path: '/TabNavigator',
				navigationOptions: {
					title: 'Activites',
					header: null,
					gesturesEnabled: false,
					headerTintColor:Colors.primary,
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
					headerTintColor:Colors.primary,
				},
			},
			NewScreen: {
				screen: NewScreen,
				path: '/NewScreen',
				navigationOptions: ({navigation}) => ({
					title: 'Log A Climb',
					headerTintColor:Colors.primary,
					headerRight: (<Button title='Save' color={Colors.primary} onPress={() => navigation.goBack()}/>),
					headerLeft: (<Button title='Close' color={Colors.primary} onPress={() => navigation.goBack()}/>)
				}),
			},
			ScanQRCodeScreen: {
				screen: ScanQRCodeScreen,
				path: '/ScanQRCodeScreen',
				headerTintColor:Colors.primary,
				navigationOptions: ({navigation}) => ({
					title: 'Scan Climb QR Code',
					headerTintColor:Colors.primary,
					headerLeft: (<Button title='Close' color={Colors.primary} onPress={() => navigation.goBack()}/>)
				}),
			}
		}, 
		stackNavigatorSettings)
}

export default getStackNavigator;