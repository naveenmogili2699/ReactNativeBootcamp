import React from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	TouchableOpacity,
	Alert
} from 'react-native';
import AppIntroSlider
	from 'react-native-app-intro-slider';

const slides = [
	{
		key: '1',
		title: 'Welcome to MyApp!',
		text: 'A simple and beautiful intro slider for your app',
		image:
		// Replace with your own images
{ uri: 'https://media.geeksforgeeks.org/wp-content/uploads/20240125144446/intro1.png' }, 
	},
	{
		key: '2',
		title: 'Explore Features',
		text: 'Discover the amazing features that make our app stand out',
		image:
		// Replace with your own images
{ uri: 'https://media.geeksforgeeks.org/wp-content/uploads/20240123225418/intro3.jpeg' }, 
	},
  {
		key: '2',
		title: 'Understand Features',
		text: 'Discover the amazing features that make our app stand out',
		image:
		// Replace with your own images
{ uri: 'https://media.geeksforgeeks.org/wp-content/uploads/20240123225418/intro3.jpeg' }, 
	},
	{
		key: '3',
		title: 'Get Started',
		text: 'Start using our app and enjoy the benefits it offers',
		image:
		// Replace with your own images
{ uri: 'https://media.geeksforgeeks.org/wp-content/uploads/20240123225418/intro3.jpeg' }, 
	},
];

const IntroSlider = () => {
	const renderSlide = ({ item }) => {
		return (
			<View style={styles.slide}>
				<Text style={styles.title}>
					{item.title}
				</Text>
				<Image source={item.image}
					style={styles.image} />
				<Text style={styles.text}>
					{item.text}
				</Text>
			</View>
		);
	};

	const onDone = () => {
		// Display a welcome alert
		Alert.alert(
			'Welcome!',
			`Thank you for using MyApp. 
			Start exploring and enjoy!`,
			[
				{
					text: 'OK',
					onPress: () => console.log('Welcome alert closed')
				}
			]
		);
	};

	const renderDoneButton = () => {
		return (
			<TouchableOpacity onPress={onDone}
				style={styles.doneButton}>
				<Text style={styles.doneButtonText}>
					Done
				</Text>
			</TouchableOpacity>
		);
	};

  // const onSlideChange = (index: number, lastIndex: number) => {
  //   console.log("On Slide Change",index)
  // }

  const onSkip = () => {
    console.log("onSkip")
  }
             
	return (
		<AppIntroSlider
			data={slides}
      renderItem={renderSlide}
			renderDoneButton={renderDoneButton}
			onDone={onDone} />
      // onSlideChange = {onSlideChange}
      // onSkip = {onSkip}
      // showSkipButton={true}
	);
};

const styles = StyleSheet.create({
	slide: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		// Background color for the slides
		backgroundColor: 'gray',
	},
	title: {
		fontSize: 30,
		fontWeight: 'bold',
		marginBottom: 16,
		// Text color for the title
		color: 'red',
		textAlign: 'center',
	},
	text: {
		fontSize: 18,
		textAlign: 'center',
		// Text color for the description
		color: 'blue',
		marginHorizontal: 20,
	},
	image: {
		width: 280,
		height: 250,
		resizeMode: 'contain',
		marginBottom: 32,
	},
	doneButton: {
		// Background color for the "Done" button
		backgroundColor: 'red',
		padding: 15,
		borderRadius: 10,
		marginVertical: 20,
    paddingBottom :40,
	},
	doneButtonText: {
		color: 'black',
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
	},
});

export default IntroSlider;
