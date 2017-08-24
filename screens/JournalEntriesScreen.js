import React from 'react';
import { ScrollView, StyleSheet, Image, View, Dimensions } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/SimpleLineIcons';
var {height, width} = Dimensions.get('window');
import NativeTachyons from 'react-native-style-tachyons';
import {styles as s} from "react-native-style-tachyons";
import { List, ListItem, Text, Card, Button, Avatar } from 'react-native-elements'
const styles = StyleSheet.create({
	third: {
		width: width/3,
		height: width/3
	}
});
const list = [
	{
		title: 'Profile',
		icon: 'face'
	},
	{
		title: 'Appointments',
		icon: 'av-timer'
  },
  {
		title: 'Trips',
		icon: 'flight-takeoff'
  }
]
let images = [];
for (let i = 0; i < 23; i++) { images.push(i)}

const Screen = NativeTachyons.wrap(({ navigation }) => (
  <ScrollView cls='bg-white'>
		
		{/*header*/}
		<View cls='pl3 pt3 pr3'>
			<View cls='flx-i flx-row'>
				<Image
					cls='w3 h3 br5'
					source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}}
				/>
				<View cls='ml1 flx-i flx-row h3'>
					<View cls='flx-i jcc'>
						<Text cls='tc f4 b'>184</Text>
						<Text cls='tc f5 fw1 grey'>entries</Text>
					</View>
					<View cls='flx-i jcc'>
						<Text cls='tc f4 b'>184</Text>
						<Text cls='tc f5 fw1 grey'>entries</Text>
					</View>
					<View cls='flx-i jcc'>
						<Text cls='tc f4 b'>184</Text>
						<Text cls='tc f5 fw1 grey'>entries</Text>
					</View>
				</View>
			</View>
		</View>
		<Text cls='pl3 pr3 pt2 b f4'>Jeffrey Young</Text>
		<View cls='pt2 pb2 mt3 flx-i jcsa flx-row bt b--lightgrey'>
			<EntypoIcon
				name='grid'
				size={18}
			/>
			<EntypoIcon
				name='list'
				size={18}
			/>
			<EntypoIcon
				name='clock'
				size={18}
			/>
			<EntypoIcon
				name='graph'
				size={18}
			/>
		</View>
		
		{/*images*/}
		<View cls='flx-i flx-row flx-wrap'>
			{
				images.map((image, i) => (
					<Image
						key={i}
						style={{width: width/3, height: width/3}}
						source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}}
					/>
				))
			}
		</View>
		<List>
			{
				list.map((item, i) => (
					<ListItem
						key={i}
						title={item.title}
						leftIcon={{name: item.icon}}
					/>
				))
			}
		</List>
  </ScrollView>
))

export default Screen;