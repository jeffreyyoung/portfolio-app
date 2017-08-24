import React from 'react';
import StackNavigator from './StackNavigator';
import { TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from './../constants/Colors';
const StacksInTabs = TabNavigator(
  {
    MainTab: {
      //screen: StackNavigator({initialRouteName:'JournalEntriesScreen'}),
			screen: StackNavigator({initialRouteName:'JournalEntriesScreen'}),
      path: '/',
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-home' : 'ios-home-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
		NewTab: {
			screen: StackNavigator({initialRouteName:'NewScreen'}),
			path: '/new',
			navigationOptions: {
				tabBarLabel: 'New',
				tabBarIcon: ({ tintColor, focused }) => (
					<Ionicons
						name={'ios-plus-round'}
						size={26}
						style={{ color: tintColor }}
					/>
				),
			},
		},
    SettingsTab: {
      screen: StackNavigator({initialRouteName:'SettingsScreen'}),
      path: '/settings',
      navigationOptions: {
        tabBarLabel: 'Settings',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-settings' : 'ios-settings-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
  },
  {
    tabBarPosition: 'bottom',
		tabBarOptions: {
			activeTintColor: Colors.primary,
		},
    animationEnabled: false,
    swipeEnabled: false,
  }
);

export default StacksInTabs;