import React from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
import NativeTachyons from 'react-native-style-tachyons';
import { SocialIcon } from 'react-native-elements'
import { Container, Header, Button, Icon, Fab } from 'native-base';
export default NativeTachyons.wrap(class Screen extends React.Component {
	
	render() {
		const {navigation} = this.props;
		return (
			<Image cls='bg-white pa3 flx-i aic jcc'
				source={{uri: 'https://mindbodygreen-res.cloudinary.com/images/c_scale,w_770,q_80,f_auto,fl_lossy/crp/WomanClimbingRockAtSunsetOverOcean-850x400-1/10-reasons-try-rock-climbing.jpg'}}
			>
				<Text cls='b f1 tc mb3' style={{backgroundColor: 'rgba(0,0,0,0)'}}>Klimbz</Text>
				<Button block style={{ backgroundColor: '#3B5998' }}
					onPress={() => navigation.navigate('TabNavigator')}
				>
					<Icon name="logo-facebook" />
					<Text cls='white'>Continue With Facebook</Text>
				</Button>
			</Image>
		)
	}
})