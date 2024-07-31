import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import RBSheet from 'react-native-raw-bottom-sheet';

const BottomSheets = () => {
    const refRBSheet  = useRef()
    return (
        <View>
            <Text>Bottom Sheets</Text>
            <Button title='OPEN BOTTOM SHEET' 
            onPress={()=>refRBSheet.current.open()}
            />
            <RBSheet
                height={300}
                ref={refRBSheet}
                openDuration={1000}
                closeDuration={2000}
                useNativeDriver={false}
                customStyles={{
                    wrapper: {
                        backgroundColor: 'transparent',
                    },
                    draggableIcon: {
                        backgroundColor: 'blue',
                    },
                    container:{
                        backgroundColor:'red'
                    }
                }}
                customModalProps={{
                    animationType: 'fade',
                    statusBarTranslucent: true,
                  }}
                  customAvoidingViewProps={{
                    enabled: false,
                  }}
                >
                    <View>
                        <Text>Hello</Text>
                    </View>
            </RBSheet>
        </View>

    )
}

export default BottomSheets;

const styles = StyleSheet.create({})