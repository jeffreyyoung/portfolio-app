import React from 'react';
import {observer} from 'mobx-react';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import NativeTachyons from 'react-native-style-tachyons';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Colors from './../constants/Colors'
import withStore from './../hocs/withStore';
import { List, Picker, ListItem, Container, InputGroup, Header, Button, Text, Content, Form, Item, Input, Label } from 'native-base';
//import QRCodeScanner from './../components/QRCodeScanner';
const Screen = NativeTachyons.wrap(({ navigation, store }) => (
	<Container>
		<Content>
		<Form cls='bg-white mt4'>
				<Item inlineLabel>
					<Label>Activity</Label>
					<Picker
						iosHeader="Select one"
						mode="dropdown"
						selectedValue={store.newPost.activity}
						onValueChange={(nextKey) => {store.newPost.activity = nextKey}}
					>
						<Item label="Momentum Gym Climb" value="key0" />
						<Item label="Outdoor Top Rope" value="key1" />
						<Item label="Outdoor Bouldering" value="key2" />
						<Item label="Outdoor Lead" value="key3" />
						<Item label="Outdoor Crag" value="key4" />
					</Picker>
				</Item>
				<Item inlineLabel>
					<Label>Description</Label>
					<Input value={store.newPost.description} onChangeText={(nextText) => {store.newPost.description = nextText}}/>
				</Item>
				<Item inlineLabel>
					<Label>Date</Label>
					<Input value={store.newPost.date} onChangeText={(nextText) => {store.newPost.date = nextText}}/>
				</Item>
			</Form>
			
			
			<Button onPress={() => navigation.navigate('ScanQRCodeScreen')} cls='mh2 mt4' style={{backgroundColor: Colors.primary}} block><Icon color='white' name='camera' /><Text> Scan QR Code</Text></Button>
			<Text cls='ma2 tc grey f6'>Or Enter Manually</Text>
			<Form cls='bg-white'>
				<Item inlineLabel>
					<Label>Type</Label>
					<Picker
						iosHeader="Select one"
						mode="dropdown"
						selectedValue={store.newPost.type}
						onValueChange={(nextKey) => {store.newPost.type = nextKey}}
					>
						<Item label="Bouldering" value="key0" />
						<Item label="Lead" value="key1" />
						<Item label="Top Rope" value="key2" />
					</Picker>
				</Item>
				<Item inlineLabel>
					<Label>Boulder Problem ID</Label>
					<Input value={store.newPost.problemId} onChangeText={(nextText) => {store.newPost.problemId = nextText}}/>
				</Item>
			</Form>
		</Content>
	</Container>
))

export default withStore(observer(Screen));