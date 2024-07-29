import { Button, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView} from 'react-native-safe-area-context'
import { red } from 'react-native-reanimated/lib/typescript/reanimated2/Colors'




const StatusBarPractice = () => {
  const [hidden, sethidden] = useState(false)
  const changeStatusBarVisibility = () =>{!hidden}
  return (
    <View>
        <StatusBar backgroundColor={'green'} />
        <Text>
            Status Bar Visibility : {"\n"}
            {hidden? 'Hidden':'Visible'}
        </Text>
        {/* <View>
          <Button title='Toggle Visible' onPress={changeStatusBarVisibility} />
        </View> */}
    </View>
  )
}

export default StatusBarPractice ;

const styles = StyleSheet.create({})