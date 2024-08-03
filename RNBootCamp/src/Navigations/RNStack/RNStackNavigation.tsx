import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../../Screens/HomeScreen';
import AboutScreen from '../../Screens/AboutScreen';
import DetailsPage from '../../Screens/DetailsPage';


import MapMethod from '../../Components/CoreComponents/MapMethod';
import Intro from '../../Screens/LoginFunctionality/Intro';
import FlatListPractice from '../../Components/CoreComponents/FlatListPractice';
import StudentList from '../../Components/CoreComponents/StudentList';
import AsyncStorageScreen from '../../Components/CoreComponents/AsyncStorageScreen';
import Basics1 from '../../Components/CoreComponents/Basics1';
import ProgramsList from '../../Components/CoreComponents/ProgramsList';
import AlertsPractice from '../../Components/CoreComponents/AlertsPractice';
import ModelPractice from '../../Components/CoreComponents/ModelPractice';
import StatusBarPractice from '../../Components/CoreComponents/StatusBarPractice';
import ActivityIndicatorPractice from '../../Components/CoreComponents/ActivityIndicatorPractice';
import UseEffectPractice from '../../Hooks/UseEffectPractice';
import UseReducerPractice from '../../Hooks/UseReducerPractice';
import UseReducerPractice2 from '../../Hooks/UseReducerPractice2';
import UseRefPractice from '../../Hooks/UseRefPractice';
import PickerPractice from '../../Components/CoreComponents/PickerPractice';
import UseRefwithTimer from '../../Components/CoreComponents/UseRefwithTimer';
import StopWatch from '../../Hooks/StopWatch';
import First from '../../Screens/Tasks/First';
import Task2 from '../../Screens/Tasks/Task2';
import Task3 from '../../Screens/Tasks/Task3';
import First2 from '../../Screens/Tasks/First2';
import BackGroundImages from '../../Screens/Tasks/BackGroundImages';
import ImageonImage from '../../Screens/Tasks/ImageonImage';
import UseMemo from '../../Hooks/UseMemo';
import UseCallBack from '../../Hooks/UseCallBack';
import UseCallBack2 from '../../Hooks/UseCallBack2';
import TextinputsinFlatList from '../../Screens/Tasks/TextinputsinFlatList';
import LoginPage from '../../Components/CoreComponents/LoginPage';
import VectorIcons from '../../Components/NPMS/VectorIcons';
import Dropdownpicker from '../../Components/NPMS/Dropdownpicker';
import Imagepicker from '../../Components/NPMS/Imagepicker';
import RNModel from '../../Components/NPMS/RNModel';
import RadioButtonGroup from '../../Components/NPMS/RadioButtonGroup';
import CheckBoxes from '../../Components/NPMS/CheckBoxes';
import RNCalendars from '../../Components/NPMS/RNCalendars';
import Toggleswitch from '../../Components/NPMS/Toggleswitch';
import SliderBar from '../../Components/NPMS/SliderBar';
import IntroSlider from '../../Components/NPMS/IntroSlider';
import ToastMessage from '../../Components/NPMS/ToastMessage';
import CustomeToast from '../../Components/NPMS/CustomeToast';
import FormikandYup from '../../Components/NPMS/FormikandYup';
import NPMsTask1 from '../../Screens/Tasks/NPMsTask1';
import DatePickerPrac from '../../Components/NPMS/DatePickerPrac';
import RNSharing from '../../Components/NPMS2/RNSharing';
import Shareing from '../../Components/NPMS2/Shareing';
import Screenshot from '../../Components/NPMS2/Screenshot';
import Sht from '../../Components/NPMS2/Sht';
import AwakeLib from '../../Components/NPMS2/AwakeLib';
import Popupmenu from '../../Components/NPMS2/Popupmenu';
import LoAni from '../../Components/NPMS2/LoAni';
import RNProgress from '../../Components/NPMS2/RNProgress';
import GoogleMaps from '../../Components/NPMS2/GoogleMaps';
import BAckgroundcolChg from '../../Screens/Tasks/BAckgroundcolChg';
import PersistScreen from '../../Screens/PersistScreen';

const Stack = createNativeStackNavigator();
const RNStackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='About' component={AboutScreen} />
        <Stack.Screen name='Details' component={DetailsPage} />

        
        <Stack.Screen name='Basics1' component={Basics1} />
        <Stack.Screen name='FlatListPractice' component={FlatListPractice} />
        <Stack.Screen name='StudentList' component={StudentList} />
        <Stack.Screen name='ProgramsList' component={ProgramsList} />
        <Stack.Screen name='MapMethod' component={MapMethod} />
        <Stack.Screen name='AlertsPractice' component={AlertsPractice} />
        <Stack.Screen name='ModelPractice' component={ModelPractice} />
        <Stack.Screen name='StatusBarPractice' component={StatusBarPractice} />
        <Stack.Screen name='ActivityIndicatorPractice' component={ActivityIndicatorPractice} />
        <Stack.Screen name='UseEffectPractice' component={UseEffectPractice} />
        <Stack.Screen name='UseReducerPractice' component={UseReducerPractice} />
        <Stack.Screen name='UseReducerPractice2' component={UseReducerPractice2} />
        <Stack.Screen name='UseRefPractice' component={UseRefPractice} />
        <Stack.Screen name='UseRefwithTimer' component={UseRefwithTimer} />
        <Stack.Screen name='StopWatch' component={StopWatch} />
        <Stack.Screen name='First' component={First} />
        <Stack.Screen name='Task2' component={Task2} />
        <Stack.Screen name='Task3' component={Task3} />
        <Stack.Screen name='First2' component={First2} />
        <Stack.Screen name='BackGroundImages' component={BackGroundImages} />
        <Stack.Screen name='ImageonImage' component={ImageonImage} />
        <Stack.Screen name='UseMemo' component={UseMemo} />
        <Stack.Screen name='UseCallBack' component={UseCallBack} />
        <Stack.Screen name='UseCallBack2' component={UseCallBack2} />
        <Stack.Screen name='TextinputsinFlatList' component={TextinputsinFlatList} />
        <Stack.Screen name='LoginPage' component={LoginPage} />
        <Stack.Screen name='VectorIcons' component={VectorIcons} />
        <Stack.Screen name='Dropdownpicker' component={Dropdownpicker} />
        <Stack.Screen name='Imagepicker' component={Imagepicker} />
        <Stack.Screen name='RNModel' component={RNModel} />
        <Stack.Screen name='RadioButtonGroup' component={RadioButtonGroup} />
        <Stack.Screen name='CheckBoxes' component={CheckBoxes} />
        <Stack.Screen name='RNCalendars' component={RNCalendars} />
        <Stack.Screen name='Toggleswitch' component={Toggleswitch} />
        <Stack.Screen name='SliderBar' component={SliderBar} />
        <Stack.Screen name='IntroSlider' component={IntroSlider} />
        <Stack.Screen name='ToastMessage' component={ToastMessage} />
        <Stack.Screen name='CustomeToast' component={CustomeToast} />
        <Stack.Screen name='FormikandYup' component={FormikandYup} />
        <Stack.Screen name='NPMsTask1' component={NPMsTask1} />
        <Stack.Screen name='DatePickerPrac' component={DatePickerPrac} />
        <Stack.Screen name='RNSharing' component={RNSharing} />
        <Stack.Screen name='Shareing' component={Shareing} />
        <Stack.Screen name='Screenshot' component={Screenshot} />
        <Stack.Screen name='Sht' component={Sht} />
        <Stack.Screen name='AwakeLib' component={AwakeLib} />
        <Stack.Screen name='Popupmenu' component={Popupmenu} />
        <Stack.Screen name='LoAni' component={LoAni} />
        <Stack.Screen name='RNProgress' component={RNProgress} />
        <Stack.Screen name='BAckgroundcolChg' component={BAckgroundcolChg} />
        <Stack.Screen name='PersistScreen' component={PersistScreen} />
        <Stack.Screen name='Async' component={AsyncStorageScreen} />
        <Stack.Screen name='Intro' component={Intro} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RNStackNavigation

const styles = StyleSheet.create({})