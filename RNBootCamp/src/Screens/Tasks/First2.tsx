import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const First2 = () => {
    const [name, setName] = useState("Kiran")
    return (
        <View>
            <View
                style={[

                    name === 'Java' ? styles.java :
                        name === 'Python' ? styles.python :
                            name === 'React' ? styles.react : styles.reset,
                    name === 'Kiran' ? [styles.common, { height: 50, width: 50 }] :
                        styles.common,
                    styles.text,
                    { alignSelf: 'center' },
                ]}
            >
                <Text>
                    {name}
                </Text>
            </View>

            <View style={styles.container}>
                <TouchableOpacity
                    style={[styles.common, styles.java]}
                    onPress={() => setName("Java")}
                >
                    <Text>Java</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.common, styles.python]}
                    onPress={() => setName("Python")}
                >
                    <Text>Python</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.common, styles.react]}
                    onPress={() => setName("React")}
                >
                    <Text>React</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.common, styles.reset, { height: 50, width: 50 }]}
                    onPress={() => setName("Kiran")}
                >
                    <Text>Reset</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default First2

const styles = StyleSheet.create({
    text: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        marginVertical: 20
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    common: {
        width: 100,
        height: 50,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    java: {
        backgroundColor: '#48dbfb',
        borderRadius: 8,
    },
    python: {
        backgroundColor: '#f368e0',
        borderRadius: 25,
    },
    react: {
        backgroundColor: '#5f27cd',
        borderBottomEndRadius: 25,
        borderTopRightRadius: 25,
    },
    reset: {
        backgroundColor: '#ee5253',
        borderRadius: 25
    }
})