import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

const uri = `https://automation2.focusschoolsoftware.com/will`;

export default class WebView extends Component {
	render() {
		return (
			<>
				<WebView
					source={{ uri }}
				>Foo</WebView>
			</>
		);
	}
}
