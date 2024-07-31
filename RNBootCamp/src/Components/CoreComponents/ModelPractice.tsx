import { Button, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { red } from 'react-native-reanimated/lib/typescript/reanimated2/Colors'

const ModelPractice = () => {
    const [IsModelVisible, setIsModelVisible] = useState(true)
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Text>Model Practice</Text>
      <Pressable>
        <Button title='Press Here to Display Model'  color='red'  
        onPress={()=>setIsModelVisible(true)}
      />
      </Pressable>
      <Modal visible={IsModelVisible}>
        <View>
           <Pressable>
             <Text>Model Content</Text>
              <Button title='Model Close' color='red'
                onPress={()=>setIsModelVisible(false)}
            />
           </Pressable>
        </View>
      </Modal>
    </GestureHandlerRootView>
  )
}

export default ModelPractice

const styles = StyleSheet.create({})