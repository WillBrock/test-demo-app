import React, { Component } from 'react';
import { Switch, View, Text, StyleSheet } from 'react-native';

export default class Switches extends Component {
	static navigationOptions = {
		title : `Switches`,
	};

	constructor() {
		super();

		this.state = {
			switch_1 : false,
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>Enabled Switch</Text>
				<Switch
					value={this.state.switch_1}
					testID="switch-1"
					onValueChange={() => (this.setState({switch_1 : !this.state.switch_1 }))}
					style={styles.switch}
				/>

				<Text>Disabled Switch</Text>
				<Switch
					disabled
					style={styles.switch}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container : {
		marginTop  : 25,
		alignItems : `center`,
	},
	switch : {
		marginBottom : 15,
	}
});
