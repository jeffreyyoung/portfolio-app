import React from 'react';
import { ScrollView } from 'react-native';
import NativeTachyons from 'react-native-style-tachyons';
import ClimbCard from './../components/ClimbCard';
import withPosts from './../hocs/withPosts';

const Screen = withPosts(NativeTachyons.wrap(({ navigation, posts }) => (
  <ScrollView cls='bg-lightgrey pv3'>
	{
		posts.map((post, i) => (
			<ClimbCard key={i} i={i} post={post} navigation={navigation}/>
		))
	}
  </ScrollView>
)))

export default Screen;