import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import testProperties from '../config/testProperties';

const list = [
	{ key : `Login` },
	{ key : `Loading` },
	{ key : `Pickers` },
	{ key : `Switches`},
	{ key : `WebView` },
	{ key : `Modal` },
	{ key : `Swipe`},
];

export default class Tests extends Component {
	static navigationOptions = {
		title : `Tests`,
	};

	render() {
		return (
			<View>
				{
					list.map((item, index) => (
						<ListItem
							key={index}
							title={item.key}
							onPress={() => this.props.navigation.navigate(item.key)}
							contentContainerStyle={styles.list_item}
							{...testProperties(`test-${item.key}`)}
						/>
					))
				}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	list_item : {
		borderBottomColor : `#fff`,
	},
});
