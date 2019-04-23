import React, { Component } from 'react';
import { View, StyleSheet, Picker } from 'react-native';

export default class Pickers extends Component {
	static navigationOptions = {
		title : `Pickers`,
	};

	constructor() {
		super();

		this.state = {
			selected : null,
		};

		this.options = [
			{
				label : `Javascript`,
				value : `javascript`,
			},
			{
				label : `Python`,
				value : `python`,
			},
			{
				label : `CSS`,
				value : `css`,
			},
			{
				label : `HTML`,
				value : `html`,
			},
		];
	}

	render() {
		return (
			<View style={styles.container}>
				<Picker
					selectedValue={this.state.selected}
					onValueChange={(selected) => ( this.setState({ selected }))}
					style={styles.picker}
				>
					{
						this.options.map((option) => (
							<Picker.Item
								key={option.selectedValue}
								label={option.label}
								value={option.value}
							/>
						))
					}
				</Picker>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container : {
		marginTop : 25,
	},

	picker : {
		height : 50,
		width  : `100%`,
	},
});
