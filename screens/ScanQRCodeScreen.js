import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';
import NativeTachyons from 'react-native-style-tachyons';
export default NativeTachyons.wrap(class BarcodeScannerExample extends React.Component {
  state = {
    hasCameraPermission: null,
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({hasCameraPermission: status === 'granted'});
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
						cls='absolute-fill flx-i jcc aic'
					>
						<View cls='h5 w5 ba b--white'/>
					</View>
        </View>
      );
    }
  }

  _handleBarCodeRead = (data) => {
    alert(JSON.stringify(data));
  }
})