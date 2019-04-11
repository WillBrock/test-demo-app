import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';

const list = [
	{ key : `Login` },
	{ key : `Loading` },
	{ key : `Picker` },
	{ key : `Text Inputs` },
	{ key : `Switches`},
	{ key : `WebView` },
	//{ key : `Push Notifications`},
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
							accessibilityLabel={item.key}
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
