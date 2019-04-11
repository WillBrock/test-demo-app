import { Platform } from 'react-native';

function testProperties(id) {
	const key = Platform.OS === `ios` ? `testID` : `accessibilityLabel`;

	return {
		[key] : id,
	};
}

export default testProperties;
