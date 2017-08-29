import React from 'react';

import ActivityFeedScreen from './../screens/ActivityFeedScreen';
import ProfileScreen from './../screens/ProfileScreen';
import SettingsScreen from './../screens/SettingsScreen';
import JournalEntriesScreen from './../screens/JournalEntriesScreen';
import NewScreen from './../screens/NewScreen';
import { StackNavigator } from 'react-navigation';
import Colors from './../constants/Colors'
function getStackNavigator(stackNavigatorSettings = {}) {
	
	stackNavigatorSettings = {navigationOptions: {headerTintColor: Colors.primary}, ...stackNavigatorSettings};
	
	return StackNavigator(
		{
			ActivityFeedScreen: {
				screen: ActivityFeedScreen,
				path: '/ActivityFeedScreen',
				navigationOptions: {
					title: 'Activites'
				},
			},
			JournalEntriesScreen: {
				screen: JournalEntriesScreen,
				path: '/JournalEntriesScreen',
				navigationOptions: {
					title: 'Feed'
				},
			},
			ProfileScreen: {
				screen: ProfileScreen,
				path: '/ProfileScreen',
				navigationOptions: ({navigation}) => ({
		      title: `${navigation.state.params.user.name.first} ${navigation.state.params.user.name.last}`,
		    }),
			},
			NewScreen: {
				screen: NewScreen,
				path: '/NewScreen',
				navigationOptions: {
					title: 'New'
				},
			},
			SettingsScreen: {
				screen: SettingsScreen,
				path: '/SettingsScreen',
				navigationOptions: {
					title: 'More'
				},
			},
		}, 
		stackNavigatorSettings)
}

export default getStackNavigator;