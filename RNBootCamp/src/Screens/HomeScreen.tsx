import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deposit, totalBlc } from '../Redux/ReduxToolKit/balanceSlice';
import RNButton from '../Components/Atoms/RNButton';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = ({ }) => {
  const blc = useSelector(totalBlc);
  const navigation = useNavigation();
  return (
    
      <View style={styles.homescreen}>
        <SafeAreaView>
        <Text style={styles.textstyle}>Home Screen</Text>
        <ScrollView>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <RNButton
              buttonName={'Basics'}
              onClick={() => navigation.navigate('Basics1')}
            />
            <RNButton
              buttonName={'Flatlist Paractice'}
              onClick={() => navigation.navigate('FlatListPractice')}
            />
            <RNButton
              buttonName={'StudentList'}
              onClick={() => navigation.navigate('StudentList')}
            />
            <RNButton
              buttonName={'ProgramsList'}
              onClick={() => navigation.navigate('ProgramsList')}
            />
            <RNButton
              buttonName={'MapMethod'}
              onClick={() => navigation.navigate('MapMethod')}
            />
            <RNButton
              buttonName={'AlertsPractice'}
              onClick={() => navigation.navigate('AlertsPractice')}
            />
            <RNButton
              buttonName={'ModelPractice'}
              onClick={() => navigation.navigate('ModelPractice')}
            />
            <RNButton
              buttonName={'StatusBarPractice'}
              onClick={() => navigation.navigate('StatusBarPractice')}
            />
            <RNButton
              buttonName={'ActivityIndicatorPractice'}
              onClick={() => navigation.navigate('ActivityIndicatorPractice')}
            />
            <RNButton
              buttonName={'UseEffectPractice'}
              onClick={() => navigation.navigate('UseEffectPractice')}
            />
            <RNButton
              buttonName={'UseReducerPractice'}
              onClick={() => navigation.navigate('UseReducerPractice')}
            />
            <RNButton
              buttonName={'UseReducerPractice2'}
              onClick={() => navigation.navigate('UseReducerPractice2')}
            />
            <RNButton
              buttonName={'UseRefPractice'}
              onClick={() => navigation.navigate('UseRefPractice')}
            />
            <RNButton
              buttonName={'UseRefwithTimer'}
              onClick={() => navigation.navigate('UseRefwithTimer')}
            />
            <RNButton
              buttonName={'StopWatch'}
              onClick={() => navigation.navigate('StopWatch')}
            />
            <RNButton
              buttonName={'Task2'}
              onClick={() => navigation.navigate('Task2')}
            />
            <RNButton
              buttonName={'Task3'}
              onClick={() => navigation.navigate('Task3')}
            />
            <RNButton
              buttonName={'First2'}
              onClick={() => navigation.navigate('First2')}
            />
            <RNButton
              buttonName={'BackGroundImages'}
              onClick={() => navigation.navigate('BackGroundImages')}
            />
            <RNButton
              buttonName={'ImageonImage'}
              onClick={() => navigation.navigate('ImageonImage')}
            />
            <RNButton
              buttonName={'UseCallBack'}
              onClick={() => navigation.navigate('UseCallBack')}
            />
            <RNButton
              buttonName={'UseCallBack2'}
              onClick={() => navigation.navigate('UseCallBack2')}
            />
            <RNButton
              buttonName={'TextinputsinFlatList'}
              onClick={() => navigation.navigate('TextinputsinFlatList')}
            />
            <RNButton
              buttonName={'LoginPage'}
              onClick={() => navigation.navigate('LoginPage')}
            />
            <RNButton
              buttonName={'Dropdownpicker'}
              onClick={() => navigation.navigate('Dropdownpicker')}
            />
            <RNButton
              buttonName={'RNModel'}
              onClick={() => navigation.navigate('RNModel')}
            />
            <RNButton
              buttonName={'RadioButtonGroup'}
              onClick={() => navigation.navigate('RadioButtonGroup')}
            />
            <RNButton
              buttonName={'CheckBoxes'}
              onClick={() => navigation.navigate('CheckBoxes')}
            />
            <RNButton
              buttonName={'RNCalendars'}
              onClick={() => navigation.navigate('RNCalendars')}
            />
            <RNButton
              buttonName={'Toggleswitch'}
              onClick={() => navigation.navigate('Toggleswitch')}
            />
            <RNButton
              buttonName={'SliderBar'}
              onClick={() => navigation.navigate('SliderBar')}
            />
            <RNButton
              buttonName={'IntroSlider'}
              onClick={() => navigation.navigate('IntroSlider')}
            />
            
            <RNButton
              buttonName={'ToastMessage'}
              onClick={() => navigation.navigate('ToastMessage')}
            />
            <RNButton
              buttonName={'CustomeToast'}
              onClick={() => navigation.navigate('CustomeToast')}
            />
            <RNButton
              buttonName={'FormikandYup'}
              onClick={() => navigation.navigate('FormikandYup')}
            />
            <RNButton
              buttonName={'NPMsTask1'}
              onClick={() => navigation.navigate('NPMsTask1')}
            />
            <RNButton
              buttonName={'DatePickerPrac'}
              onClick={() => navigation.navigate('DatePickerPrac')}
            />
            <RNButton
              buttonName={'RNSharing'}
              onClick={() => navigation.navigate('RNSharing')}
            />
            <RNButton
              buttonName={'Shareing'}
              onClick={() => navigation.navigate('Shareing')}
            />

            <RNButton
              buttonName={'Screenshot'}
              onClick={() => navigation.navigate('Screenshot')}
            />
            <RNButton
              buttonName={'Sht'}
              onClick={() => navigation.navigate('Sht')}
            />
            <RNButton
              buttonName={'AwakeLib'}
              onClick={() => navigation.navigate('AwakeLib')}
            />
            <RNButton
              buttonName={'Popupmenu'}
              onClick={() => navigation.navigate('Popupmenu')}
            />
            <RNButton
              buttonName={'LoAni'}
              onClick={() => navigation.navigate('LoAni')}
            />
            <RNButton
              buttonName={'RNProgress'}
              onClick={() => navigation.navigate('RNProgress')}
            />
            <RNButton
              buttonName={'BAckgroundcolChg'}
              onClick={() => navigation.navigate('BAckgroundcolChg')}
            />
            <RNButton
              buttonName={'PersistScreen'}
              onClick={() => navigation.navigate('PersistScreen')}
            />
            <RNButton
              buttonName={'AsyncStorageScreen'}
              onClick={() => navigation.navigate('AsyncStorageScreen')}
            />
            <RNButton
              buttonName={'Intro'}
              onClick={() => navigation.navigate('Intro')}
            />


            <View style={{ height: 200 }} />
          </View>
        </ScrollView>
        </SafeAreaView>
      </View>
    
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homescreen: {
    flex: 1,
  },
  textstyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
