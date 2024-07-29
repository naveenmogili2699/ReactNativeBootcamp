import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { launchImageLibrary, launchCamera } from 'react-native-image-picker'
import { FlatList } from 'react-native-gesture-handler'

const Imagepicker = () => {
    const [selectedImage, setSelectedImage] = useState(null)
    const handleLaunchImageLibrary = async () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
            selectionLimit: 2
        }
        await launchImageLibrary(options, handleResponse)
    };

    const handleLaunchCamera = async () => {
        const options = {
            mediaType: 'all',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
            cameraType: 'back'
        }
        await launchCamera(options, handleResponse)
    }
    const handleResponse = (response) => {
        if (response.didCancel) {
            console.log("user cancelled image picker")
        }
        else if (response.errorCode) {
            console.log("image picker error", response.errorMessage)
        }
        else {
            console.log("Image Picker selected Image")
            const imageUri = response.uri || response.assets?.[0]?.uri;
            setSelectedImage(imageUri);
        }
    }


    return (
        <View style={styles.container}>
            <Text>Imagepicker</Text>
            <TouchableOpacity onPress={handleLaunchImageLibrary} style={styles.btn}>
                <Text style={styles.txt}>Gallary</Text>
            </TouchableOpacity>

            {selectedImage && (
                <View >
                    <Image
                        source={{ uri: selectedImage }}
                        resizeMode='contain'
                        height={100}
                        width={200}
                    />
                </View>
            )}

            <TouchableOpacity onPress={handleLaunchCamera} style={styles.btn}>
                <Text style={styles.txt}>Camera</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Imagepicker

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',

    },
    txt: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    btn: {
        backgroundColor: 'green',
        margin: 10,
        padding: 10,
        borderRadius: 10,
    }
})