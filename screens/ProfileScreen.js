import React from 'react';
import { ScrollView, StyleSheet, Image, View, Dimensions } from 'react-native';
import NativeTachyons from 'react-native-style-tachyons';
import withPosts from './../hocs/withPosts';
import Profile from './../components/Profile'
const Screen = withPosts(NativeTachyons.wrap(({ navigation, posts }) => {
	const userPosts = posts.filter(p => p.user._id === navigation.state.params.user._id);
	return <Profile navigation={navigation} posts={userPosts} user={navigation.state.params.user}/>
}));


export default Screen;