import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import ViewShot from "react-native-view-shot";


const Screenshot = () => {
    const ref = useRef()
    const [uri, setUri] = useState("")
   
    useEffect(() => {
        // on mount
        ref.current.capture().then(uri => {
            setUri(uri)
            console.log("do something with ", uri);
        });
    }, []);

    return (
        <View>
            <Text>Screenshot</Text>
            <ViewShot ref={ref} options={{ fileName: "Your-File-Name", format: "jpg", quality: 0.9 }}>
                <Text>...Something to rasterize...</Text>
            </ViewShot>

           
                <View style={styles.previewContainer}>
                    <Text>Preview</Text>
                    <Image
                        height={100} width={100}
                        source={{ uri: uri }}
                        style={styles.previewImage}
                        resizeMode="contain"
                    />
                </View>
           
        </View>
    )
}

export default Screenshot

const styles = StyleSheet.create({
    viewshot: {
        width: '80%',
        height: 200,
        backgroundColor: 'green',
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    btn: {
        borderWidth: 1,
        alignSelf: 'center',
        padding: 10,
        marginTop: 10
    },
    previewContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        backgroundColor: "#000",
    },
})