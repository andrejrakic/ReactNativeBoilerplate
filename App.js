/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View, Linking } from 'react-native';

const uri = `https://www.linkedin.com/in/andrejrakic/`;

export default App = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.welcome}>Hi, I'm Andrej. Blockchain Developer.</Text>
			<Text style={styles.instructions}>We can get in touch via</Text>
			<Text
				style={[styles.instructions, { color: 'blue' }]}
				onPress={() => Linking.openURL(uri)}>
				LinkedIn
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5
	}
});
