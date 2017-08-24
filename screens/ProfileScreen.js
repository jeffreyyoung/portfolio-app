import React from 'react';
import { Button, ScrollView, Text } from 'react-native';

const Screen = ({ navigation }) => (
  <ScrollView>
    <Text>Profile</Text>
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