import React from 'react';
import { Button, ScrollView } from 'react-native';

import { List, ListItem, Text } from 'react-native-elements'

const list = [
	{
		title: 'Profile',
		icon: 'face',
		onPress: (navigation) => navigation.navigate('JournalEntriesScreen')
	},
	{
		title: 'Appointments',
		icon: 'av-timer',
		onPress: (navigation) => navigation.navigate('JournalEntriesScreen')
  },
  {
		title: 'Trips',
		icon: 'flight-takeoff',
		onPress: (navigation) => navigation.navigate('JournalEntriesScreen')
  }
]


const Screen = ({ navigation }) => (
  <ScrollView>
		<List>
			{
				list.map((item, i) => (
					<ListItem
						key={i}
						title={item.title}
						leftIcon={{name: item.icon}}
						onPress={item.onPress.bind(this, navigation)}
					/>
				))
			}
		</List>
		
		
    <Button
      onPress={() => navigation.navigate('ActivityFeedScreen', { name: 'Jordan' })}
      title="Open profile screen"
    />
    <Button
      onPress={() => navigation.navigate('ProfileScreen')}
      title="Open notifications screen"
    />
    <Button
      onPress={() => navigation.navigate('SettingsTab')}
      title="Go to settings tab"
    />
    <Button onPress={() => navigation.goBack(null)} title="Go back" />
  </ScrollView>
)

export default Screen;