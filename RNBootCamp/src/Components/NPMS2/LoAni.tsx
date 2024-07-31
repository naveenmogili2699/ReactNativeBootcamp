import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LottieView from 'lottie-react-native';

const LoAni = () => (
    <View>
        <View style={styles.wel}>
            try {
                <LottieView style={{height:100,width:100}} 
                source={require('../NPMS2/Lottie/welcome.json')} autoPlay loop />
            } catch () {
                <Text>Error</Text>
            }
        </View>
        {/* <LottieView  source={require('../NPMS2/Lottie/welcome.json')} autoPlay loop /> */}
        <Text>LottieAnimations</Text>
    </View>
)

export default LoAni;

const styles = StyleSheet.create({
    wel:{
        width:'80%'
    }
})