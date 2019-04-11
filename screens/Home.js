import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import testProperties from '../config/testProperties';

export default class Home extends Component {
	render() {
		return (
			<>
				<View style={styles.view_container}>
					<Text style={styles.center}>Demo app for testing mobile applications</Text>
					<Text style={styles.center}>Select the Test tab for various things that are tested with mobile apps</Text>

					<TextInput
						placeholder="Booo"
						//accessibilityLabel="boo-label"
						{...testProperties(`boo-label-foo`)}
					/>
				</View>
			</>
		)
	}
}

const styles = StyleSheet.create({
	view_container : {
		marginTop : 125,
	},
	center : {
		textAlign    : `center`,
		marginTop    : 50,
		paddingLeft  : 20,
		paddingRight : 20,
	},
});
