import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	TouchableOpacity,
} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import React from 'react';
import { Icon } from 'react-native-elements';

const Footer = () => {
	return (
		<View style={tw`py-4 mt-20 border-t border-gray-400 `}>
			<Text style={tw`text-center text-gray-400`}>
				Developed by Conrado Sampaio
			</Text>
		</View>
	);
};

export default Footer;

const styles = StyleSheet.create({});
