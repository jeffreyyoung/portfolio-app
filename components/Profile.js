import React from 'react';
import { ScrollView, StyleSheet, Image, View, Dimensions, TouchableOpacity } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/SimpleLineIcons';
var {height, width} = Dimensions.get('window');
import NativeTachyons from 'react-native-style-tachyons';
import {styles as s} from "react-native-style-tachyons";
import ClimbCard from './../components/ClimbCard';
import withPosts from './../hocs/withPosts';
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

const Profile = NativeTachyons.wrap(({ navigation, posts, user }) => (
  <ScrollView cls='bg-lightgrey'>
		
		{/*header*/}
		<View cls='bg-white'>
			<View cls='pl3 pt3 pr3'>
				<View cls='flx-i flx-row'>
					<Image
						cls='w3 h3 br5'
						source={{uri: user.picture}}
					/>
					<View cls='ml1 flx-i flx-row h3'>
						<View cls='flx-i jcc'>
							<Text cls='tc f5 b'>184</Text>
							<Text cls='tc f6 fw1 grey'>Climbs</Text>
						</View>
						<View cls='flx-i jcc'>
							<Text cls='tc f5 b'>184</Text>
							<Text cls='tc f6 fw1 grey'>Followers</Text>
						</View>
						<View cls='flx-i jcc'>
							<Text cls='tc f5 b'>184</Text>
							<Text cls='tc f6 fw1 grey'>Following</Text>
						</View>
					</View>
				</View>
			</View>
			<View cls='flx-i jcsb aic flx-row'>
				<Text cls='pl3 pr3 pt2 b f5'>{user.name.first} {user.name.last}</Text>
				<TouchableOpacity><Text cls='ml3 mr3 mt2 pa1 ph2 f6 ba br2 b--green green'>Following</Text></TouchableOpacity>
			</View>
			<View cls='pt3 pb3 mt3 flx-i jcsa flx-row bt b--lightgrey'>
				<EntypoIcon
					color='green'
					name='list'
					size={18}
				/>
				<EntypoIcon
					name='grid'
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
		</View>
		<View cls='flx-i pv3 bg-lightgrey'>
			{
				posts.map((post, i) => (
					<ClimbCard key={i} i={i} post={post} navigation={navigation}/>
				))
			}
		</View>
  </ScrollView>
))

export default Profile;