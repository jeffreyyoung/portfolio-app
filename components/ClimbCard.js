import React from 'react';
import { ScrollView, StyleSheet, Image, View, Dimensions, Text } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/SimpleLineIcons';
import NativeTachyons from 'react-native-style-tachyons';

export default  NativeTachyons.wrap(({i}) => (
	<View cls='flx-i bg-white mb3'>
		<View cls='flx-i flx-row ph3 pt3'>
			<Image
				cls='w2 h2 br4'
				source={{uri: "http://www.greghaskins.com/public/images/Greg-Haskins-avatar-256-compressed.jpg"}}
			/>
			<View cls='ml1 flx-i'>
				<Text cls='f6'>Jeffrey Young</Text>
				<Text cls='f6 grey'>Today at 9:40 AM</Text>
			</View>
		</View>
		<View cls='pa3 pt0'>
			<View>
				<Text cls='mt2 f4'>Omg so happy i finally finished the red v4</Text>
				<View cls='jcsb flx-row mt1'>
					<Text cls='grey'>Momentum Lehi</Text><Text cls='grey ml3'>Red V4</Text><Text cls='grey ml3'>South Wall</Text>
				</View>
			</View>
		</View>
		{ !(i%3) ? <Image
			cls='flx-i h4 bg-lightblue'
			source={{uri: "https://scontent.fsnc1-2.fna.fbcdn.net/v/t31.0-8/19942594_1044707642330768_7656184179088378335_o.jpg?oh=5bbc206d3415278463d9a1817d841070&oe=5A1C1DF2"}}
		/> : null}
		<View cls='flx-row jcsa pa3 bt b--darkgrey'>
			<View cls='flx-row'>
				<EntypoIcon name='like' />
				<Text> 2</Text>
			</View>
			<View cls='flx-row'>
				<EntypoIcon name='bubble' />
				<Text> 2</Text>
			</View>
			<View cls='flx-row'>
				<EntypoIcon name='share-alt' />
				<Text> 2</Text>
			</View>
		</View>
	</View>
))