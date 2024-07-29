import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Modal from "react-native-modal";
import { SlideInDown } from 'react-native-reanimated';

const RNModel = () => {

    const [showModel, setShowModel] = useState(false)

    // useEffect(()=>{
    //     setShowModel(true)
    // },[])

    const togleModel = () => {
        setShowModel(!showModel)
    }

    return (
        <View>
            <Text>RNModel</Text>
            <Button title='launchModel' onPress={togleModel} />
            <TextInput placeholder='Enter Text' style={{borderWidth:1,}} onChange={()=>setShowModel(true)}/>
            <Modal isVisible={showModel}
                animationInTiming={1200}
                animationIn={"slideInDown"}
                onBackdropPress={()=>console.log("on Back Drop Press")}
                // onSwipeComplete={()=>console.log("on Swipe Complete ")}
                // swipeDirection='left'
                // avoidKeyboard={false}
            //   backdropTransitionInTiming
            >
                <View>
                    <Text>Hi I am Inside Model</Text>
                    <Text>Hi I am Inside Model2</Text>
                    <Button title='hideModel' onPress={togleModel} /> 
                </View>
            </Modal>
        </View>
    )
}

export default RNModel;

const styles = StyleSheet.create({})