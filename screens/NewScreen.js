import React from 'react';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import NativeTachyons from 'react-native-style-tachyons';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Colors from './../constants/Colors'

import { inject, observer } from 'mobx-react';
import { List, Picker, ListItem, Container, InputGroup, Header, Button, Text, Content, Form, Item, Input, Label } from 'native-base';
//import QRCodeScanner from './../components/QRCodeScanner';
const Screen = NativeTachyons.wrap(({ navigation, newPostStore }) => (
	<Container>
		<Content>
		<Form cls='bg-white mt4'>
				<Item inlineLabel>
					<Label>Description</Label>
					<Input value={newPostStore.description} onChangeText={(nextText) => {newPostStore.description = nextText}}/>
				</Item>
				<Item inlineLabel>
					<Label>Date</Label>
					<Input value={newPostStore.date} onChangeText={(nextText) => {newPostStore.date = nextText}}/>
				</Item>
			</Form>
			
			
			{/*<Button onPress={() => navigation.navigate('ScanQRCodeScreen')} cls='mh2 mt4' style={{backgroundColor: Colors.primary}} block><Icon color='white' name='camera' /><Text> Scan QR Code</Text></Button>
			<Text cls='ma2 tc grey f6'>Or Enter Manually</Text>*/}
			<Form cls='bg-white'>
			<Item inlineLabel>
				<Label>Activity</Label>
				<Picker
					iosHeader="Select one"
					mode="dropdown"
					selectedValue={newPostStore.activity}
					onValueChange={(nextKey) => {newPostStore.activity = nextKey}}
				>
					<Item label="Momentum Gym Climb" value="key0" />
					<Item label="Outdoor Climb" value="key1" />
				</Picker>
			</Item>
				<Item inlineLabel>
					<Label>Type</Label>
					<Picker
						iosHeader="Select one"
						mode="dropdown"
						selectedValue={newPostStore.type}
						onValueChange={(nextKey) => {newPostStore.type = nextKey}}
					>
						<Item label="Bouldering" value="key0" />
						<Item label="Lead" value="key1" />
						<Item label="Top Rope" value="key2" />
					</Picker>
				</Item>
				<Item inlineLabel>
					<Label>Level</Label>
					<Input value={newPostStore.level} onChangeText={(nextText) => {newPostStore.level = nextText}}/>
				</Item>
				<Item inlineLabel>
					<Label>Color</Label>
					<Input value={newPostStore.color} onChangeText={(nextText) => {newPostStore.color = nextText}}/>
				</Item>
				<Item inlineLabel>
					<Label>Problem ID</Label>
					<Input value={newPostStore.id} onChangeText={(nextText) => {newPostStore.id = nextText}}/>
				</Item>
			</Form>
		</Content>
	</Container>
))

export default inject('newPostStore')((observer(Screen)));