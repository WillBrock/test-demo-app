import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import testProperties from '../config/testProperties';

export default class Login extends Component {
	static navigatorOptions = {
		title : `Login`,
	}

	state = {
		loading : false,
		success : false,
		error   : false,
	};

	login = () => {
		this.setState({
			loading : true ,
			success : false,
			error   : false,
		});

		const username = this.state.username;
		const password = this.state.password;

		if(username === `foo` && password === `bar`) {
			this.setState({ success : true });
		}
		else {
			this.setState({ success : false });
		}

		this.setState({ loading : false });
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name] : event.target.value,
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.informationContainer}>
					<Text style={styles.information}>Username: foo</Text>
					<Text style={styles.information}>Password: bar</Text>
				</View>

				{
					this.state.error &&
					<View>
						<Text
							style={styles.error}
							{...testProperties(`failed-text`)}
						>Login Failed</Text>
					</View>
				}

				{
					this.state.success &&
					<View>
						<Text
							style={styles.success}
							{...testProperties(`success-text`)}
						>Success!</Text>
					</View>
				}

				<View style={styles.formContainer}>
					<Input
						name="username"
						placeholder="Username"
						containerStyle={styles.input}
						onChangeText={this.handleChange}
						{...testProperties(`username`)}
					/>
					<Input
						name="password"
						placeholder="Password"
						containerStyle={styles.input}
						onChangeText={this.handleChange}
						{...testProperties(`password`)}
					/>
					<Button
						buttonStyle={styles.button}
						title="Sign In"
						loading={this.state.loading}
						onPress={this.login}
						{...testProperties(`sign-in`)}
					>Sign In</Button>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container : {
		flex            : 1,
		backgroundColor : `#d3d3d3`
	},
	informationContainer : {
		marginTop : 10,
	},
	information : {
		textAlign     : `center`,
		paddingBottom : 5,
	},
	formContainer : {
		marginTop : 5,
		paddingLeft : 30,
		paddingRight : 30
	},
	input : {
		borderRadius    : 5,
		padding         : 5,
		marginTop       : 10,
		backgroundColor : `#fff`,
	},
	button : {
		marginTop : 10,
		padding   : 15,
	},
	success : {
		color     : `green`,
		textAlign : `center`,
	},
	error : {
		color     : `red`,
		textAlign : `center`,
	},
});
