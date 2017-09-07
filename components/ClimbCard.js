import React from 'react';
import { ScrollView, StyleSheet, Image, View, Dimensions, Text, TouchableOpacity } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/SimpleLineIcons';
import NativeTachyons from 'react-native-style-tachyons';
import { observer } from 'mobx-react';
export default  observer(NativeTachyons.wrap(({i, post, navigation}) => (
	<View cls='flx-i bg-white mb3'>
		<TouchableOpacity onPress={() => navigation.navigate('ProfileScreen', {'user': post.user})}>
			<View cls='flx-i flx-row ph3 pt3'>
				<Image
					cls='w2 h2 br4'
					source={{uri: post.user.picture}}
				/>
				<View cls='ml1 flx-i'>
					<Text cls='f6'>{post.user.name.first} {post.user.name.last}</Text>
					<Text cls='f6 grey'>Today at 9:40 AM</Text>
				</View>
			</View>
		</TouchableOpacity>
		<View cls='pa3 pt0'>
			<View>
				<Text cls='mt2 f4'>{post.text ? post.text : `v${post.level} at ${post.location}`}</Text>
				<View cls='jcsb flx-row mt1'>
					<Text cls='grey'>{post.location}</Text><Text cls='grey ml3'>v{post.level}</Text>
				</View>
			</View>
		</View>
		{ post.picture ? <Image
			cls='flx-i h4 bg-lightblue'
			source={{uri: post.picture}}
		/> : null}
		<View cls='flx-row jcsa pa3 bt b--lightgrey'>
			<TouchableOpacity onPress={() => {
				post.likedByCurrentUser = !post.likedByCurrentUser
				post.likeCount = post.likedByCurrentUser ? post.likeCount + 1 : post.likeCount - 1;
			}}>
				<View cls='flx-row'>
					<EntypoIcon style={{color: post.likedByCurrentUser ? 'green' : 'black'}} name='like' />
					<Text style={{color: post.likedByCurrentUser ? 'green' : 'black'}} > {post.likeCount}</Text>
				</View>
			</TouchableOpacity>
			<View cls='flx-row'>
				<EntypoIcon name='bubble' />
				<Text> {post.commentCount}</Text>
			</View>
			<View cls='flx-row'>
				<EntypoIcon name='share-alt' />
				<Text> {post.shareCount}</Text>
			</View>
		</View>
	</View>
)))