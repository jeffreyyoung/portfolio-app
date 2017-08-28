import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import NativeTachyons from 'react-native-style-tachyons';
import { SocialIcon } from 'react-native-elements'
import { Container, Header, Button, Icon, Fab } from 'native-base';
export default NativeTachyons.wrap(class Screen extends React.Component {
	
	render() {
		const {navigation} = this.props;
		return (
			<View cls='bg-white pa3 flx-i aic jcc'>
				<Text cls='b f2 tc'>Klimbz</Text>
				<Button block style={{ backgroundColor: '#3B5998' }}
					onPress={() => navigation.navigate('TabNavigator')}
				>
					<Icon name="logo-facebook" />
					<Text cls='white'>Continue With Facebook</Text>
				</Button>
			</View>
		)
	}
})