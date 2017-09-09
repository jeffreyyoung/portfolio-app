//https://www.the-qrcode-generator.com/
//DO THIS...

//https://reactnavigation.org/docs/guides/screen-tracking
import React from 'react';
import Colors from './../constants/Colors.js';
import { StyleSheet, Text, View, Button } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';
import NativeTachyons from 'react-native-style-tachyons';
import { inject, observer } from 'mobx-react';
export default inject('newPostStore')(observer(NativeTachyons.wrap(class BarcodeScannerExample extends React.Component {
  state = {
    hasCameraPermission: null,
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({hasCameraPermission: status === 'granted'});
		alert(JSON.stringify(this.props.navigation));
		this.key = this.props.navigation.state.key;
  }
  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{flex: 1}}>
          <BarCodeScanner
            onBarCodeRead={this._handleBarCodeRead}
            style={StyleSheet.absoluteFill}
          />
					<View
						cls='absolute-fill flx-i jcsa aic'
					>
						<View />
						<View cls='h5 w5 ba b--white'/>
						<Button title='Enter Data Manually' color={Colors.primary} onPress={() => this.props.navigation.navigate('NewScreen')}/>
					</View>
        </View>
      );
    }
  }
	
	_handleKlimbzCode(data) {
		if (!this.foundCode && this.props.navigation.state.key === this.key) {
			this.foundCode = true;
			try {
				delete data.QRtype
				this.props.newPostStore.setAttributes(data);
				this.props.navigation.navigate('NewScreen');
				
			} catch(e) {
				this.foundCode = false;
			} finally {
				this.foundCode = false;
			}
		}
	}
	
  _handleBarCodeRead = (result) => {
		try {
			const data = JSON.parse(result.data);
			if (data.QRtype === 'klimbzCode') {
				this._handleKlimbzCode(data);
			}
		} catch (e) {
			
		}
  }
})))