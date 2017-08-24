import React from 'react';
import {ScrollView } from 'react-native';
import { Tile,
Overlay,
Text,
Heading,
Title,
Subtitle,
Button,
Image,
Card,
Icon,
View,
Caption
} from '@shoutem/ui';

const Screen = ({ navigation }) => (
  <ScrollView>
    <Text>Activity Feed</Text>
		
		<Tile>
  <Image
    styleName="large-banner"
    source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-7.png' }}
  >
    <Overlay styleName="rounded-small">
      <Icon name="play" />
    </Overlay>
  </Image>
  <View styleName="content">
    <Title>MAUI BY AIR THE BEST WAY AROUND THE ISLAND</Title>
    <View styleName="horizontal space-between">
      <Caption>1 hour ago</Caption>
      <Caption>15:34</Caption>
    </View>
  </View>
</Tile>
<Tile>
<Image
styleName="large-banner"
source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-7.png' }}
>
<Overlay styleName="rounded-small">
	<Icon name="play" />
</Overlay>
</Image>
<View styleName="content">
<Title>MAUI BY AIR THE BEST WAY AROUND THE ISLAND</Title>
<View styleName="horizontal space-between">
	<Caption>1 hour ago</Caption>
	<Caption>15:34</Caption>
</View>
</View>
</Tile>
<Tile>
<Image
styleName="large-banner"
source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-7.png' }}
>
<Overlay styleName="rounded-small">
	<Icon name="play" />
</Overlay>
</Image>
<View styleName="content">
<Title>MAUI BY AIR THE BEST WAY AROUND THE ISLAND</Title>
<View styleName="horizontal space-between">
	<Caption>1 hour ago</Caption>
	<Caption>15:34</Caption>
</View>
</View>
</Tile>
		
		<Image
		  styleName="featured"
		  source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-11.png' }}
		>
		  <Tile>
		    <Overlay><Heading>-20%</Heading></Overlay>
		    <Title styleName="md-gutter-top">COOL BLACK AND WHITE STYLISH WATCHES</Title>
		    <Subtitle styleName="line-through sm-gutter-top">$280.00</Subtitle>
		    <Heading>$250.00</Heading>
		    <Button styleName="md-gutter-top"><Icon name="cart" /><Text>ADD TO BASKET</Text></Button>
		  </Tile>
		</Image>
    <Button
      onPress={() => navigation.navigate('ActivityFeedScreen', { name: 'Jordan' })}
      title="Open profile screen"
    />
    <Button
      onPress={() => navigation.navigate('ProfileScreen')}
      title="Open notifications screen"
    />
    <Button
      onPress={() => navigation.navigate('SettingsTab')}
      title="Go to settings tab"
    />
    <Button onPress={() => navigation.goBack(null)} title="Go back" />
  </ScrollView>
)

export default Screen;