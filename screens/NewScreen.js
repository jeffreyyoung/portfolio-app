import React from 'react';
import { Button, ScrollView, Text } from 'react-native';
import NativeTachyons from 'react-native-style-tachyons';
const Screen = NativeTachyons.wrap(({ navigation }) => (
	<ScrollView cls='bg-white pa3'>
		<Text cls='b f2'>New</Text>
	</ScrollView>
))

export default Screen;