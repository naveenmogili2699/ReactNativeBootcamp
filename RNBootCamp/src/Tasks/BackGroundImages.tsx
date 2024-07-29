import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const BackGroundImages = () => {
    return (
        <View>
            <Text>BackGroundImages</Text>
            <ImageBackground 
            style={{height:100}}
                source={require("D:\React\RNBootCamp\src\Images\ameenfahmy-gcWd0ts4RCo-unsplash.jpg")}
            >
                <Image
                    source={{ uri: 'https://www.istockphoto.com/photo/aerial-view-of-a-sunken-ship-near-keyodhoo-vaavu-atoll-maldives-indian-ocean-gm1467388949-499165524?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fboat&utm_medium=affiliate&utm_source=unsplash&utm_term=boat%3A%3A%3A' }}
                />
                <Text>Image on Image</Text>
            </ImageBackground>
        </View>
    )
}

export default BackGroundImages

const styles = StyleSheet.create({})