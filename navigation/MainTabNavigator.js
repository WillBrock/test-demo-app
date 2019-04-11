import React from 'react';
import { Platform, Text } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import Home from '../screens/Home';
import Tests from '../screens/Tests';
import Login from '../screens/Login';
import Switches from '../screens/Switches';

const HomeStack = createStackNavigator({
	Home,
});

HomeStack.navigationOptions = {
	tabBarLabel: 'Home',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={
				Platform.OS === 'ios'
					? `ios-information-circle${focused ? '' : '-outline'}`
					: 'md-information-circle'
			}
		/>
	),
};

const TestsStack = createStackNavigator({
	Tests,
	Login,
	Switches,
});

TestsStack.navigationOptions = {
	tabBarLabel: 'Tests',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
		/>
	),
};

export default createBottomTabNavigator({
	HomeStack,
	TestsStack,
});
