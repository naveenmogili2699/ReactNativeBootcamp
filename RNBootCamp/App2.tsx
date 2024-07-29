import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'
import AlertsPractice from './src/Code/AlertsPractice'
import ModelPractice from './src/Code/ModelPractice'

export default function App() {
  return (
    <SafeAreaView>
        <ScrollView>
            <AlertsPractice />
            
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})