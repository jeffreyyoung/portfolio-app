import React from 'react';
import { ScrollView } from 'react-native';
import NativeTachyons from 'react-native-style-tachyons';
import ClimbCard from './../components/ClimbCard';
import withPosts from './../hocs/withPosts';
import { inject, observer } from 'mobx-react';
const Screen = inject('postsStore')(observer(NativeTachyons.wrap(({ navigation, postsStore }) => (
  <ScrollView cls='bg-lightgrey pv3'>
	{
		postsStore.posts.map((post, i) => (
			<ClimbCard key={i} i={i} post={post} navigation={navigation}/>
		))
	}
  </ScrollView>
))))

export default Screen;