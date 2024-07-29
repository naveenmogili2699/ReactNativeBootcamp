import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const DetailsPage = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Details Page</Text>
            <Text style={styles.textalign}>This navigator uses the native APIs UINavigationController on iOS and Fragment on Android so that navigation built with createNativeStackNavigator will behave exactly the same and have the same performance characteristics as apps built natively on top of those APIs. It also offers basic Web support using react-native-web.

                One thing to keep in mind is that while @react-navigation/native-stack offers native performance and exposes native features such as large title on iOS etc., it may not be as customizable as @react-navigation/stack depending on your needs. So if you need more customization than what's possible in this navigator, consider using @react-navigation/stack instead - which is a more customizable JavaScript based implementation.</Text>
            <TouchableOpacity>
                <View>
                    <Text style={styles.buttonst} onPress={() => navigation.navigate('MapMethod')}>Goto Map Method</Text>
                </View>
                <View style={styles.bt1}>
                    <Button title='Goto FlatList' onPress={() => navigation.navigate('FlatList')} />
                </View >
                <View style={styles.bt1}>
                    <Button title='Goto StudentsList' onPress={() => navigation.navigate('StundetsList')} />
                </View>

                <View style={styles.bt1}>
                    <Button title='Async' onPress={() => navigation.navigate('Async')} />
                </View>
            </TouchableOpacity>

            {/* <TouchableOpacity
                onPress={() => navigation.navigate('AsyncStorage')}
            >
                <Text>Goto Async Storage Page</Text>
            </TouchableOpacity> */}

        </SafeAreaView>
    )
}

export default DetailsPage

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textalign: {
        marginHorizontal: 16,
        fontSize: 16,
    },
    buttonst: {
        backgroundColor: 'red',
        padding: 4,
        borderRadius: 6,
    },
    bt1: {
        padding: 5,
        borderRadius: 8,
    }
})