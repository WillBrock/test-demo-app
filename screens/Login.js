import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';

export default class Login extends Component {
	static navigatorOptions = {
		header : `Login`,
	}

	state = {
		loading : false
	};

	render() {
		return (
			<View style={{ flex : 1, backgroundColor : `#d3d3d3` }}>
				<View style={styles.informationContainer}>
					<Text style={styles.information}>Username: foo</Text>
					<Text style={styles.information}>Password: bar</Text>
				</View>
				<View style={{ marginTop : 70, paddingLeft : 30, paddingRight : 30 }}>
					<Input placeholder="Username" containerStyle={styles.input} />
					<Input placeholder="Password" containerStyle={styles.input} />
					<Button
						buttonStyle={styles.button}
						title="Sign In"
						loading={this.state.loading}
						onPress={() => (this.setState({ loading : true }))}
					>Sign In</Button>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	informationContainer : {
		marginTop : 90,
	},
	information : {
		textAlign : `center`,
		paddingBottom : 5,
	},

	input : {
		borderRadius : 5,
		padding : 5,
		marginTop : 10,
		backgroundColor : `#fff`,
	},

	button : {
		marginTop : 10,
		padding : 15,
	},
});
