import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import basics1 from './src/Code/Basics1'
import Basics1 from './src/Code/FlatListPractice'
import FlatListPractice from './src/Code/FlatListPractice'
import StudentList from './src/Code/StudentList'
import ProgramsList from './src/Code/ProgramsList'
import MapMethod from './src/Code/MapMethod'
import 'react-native-gesture-handler';
import HomeScreen from './src/Screens/HomeScreen'
import AboutScreen from './src/Screens/AboutScreen'
import DetailsPage from './src/Screens/DetailsPage'
import UseEffectPractice from './src/Hooks/UseEffectPractice'
import UseRefPractice from './src/Hooks/UseRefPractice'
import UseReducerPractice from './src/Hooks/UseReducerPractice'
import UseReducerPractice2 from './src/Hooks/UseReducerPractice2'
import PickerPractice from './src/Code/PickerPractice'
import UseRefwithTimer from './src/Code/UseRefwithTimer'
import StopWatch from './src/Hooks/StopWatch'
import First from './src/Tasks/First'
import Task2 from './src/Tasks/Task2'
import Task3 from './src/Tasks/Task3'
import First2 from './src/Tasks/First2'
import BackGroundImages from './src/Tasks/BackGroundImages'
import ImageonImage from './src/Tasks/ImageonImage'
import UseMemo from './src/Hooks/UseMemo'
import UseCallBack from './src/Hooks/UseCallBack'
import UseCallBack2 from './src/Hooks/UseCallBack2'
import TextinputsinFlatList from './src/Tasks/TextinputsinFlatList'
import RNStackNavigation from './src/Navigations/RNStack/RNStackNavigation'
import LoginPage from './src/Code/LoginPage'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LoginNavigations from './src/Navigations/LoginPageNavigations/LoginNavigations'
import VectorIcons from './src/NPMS/VectorIcons'
import Dropdownpicker from './src/NPMS/Dropdownpicker'
import Imagepicker from './src/NPMS/Imagepicker'
import RNModel from './src/NPMS/RNModel'
import RadioButtonGroup from './src/NPMS/RadioButtonGroup'
import CheckBox from './src/NPMS/CheckBoxes'
import CheckBoxes from './src/NPMS/CheckBoxes'
import RNCalendars from './src/NPMS/RNCalendars'
import Toggleswitch from './src/NPMS/Toggleswitch'
import ToggleSwitch from 'toggle-switch-react-native'
import SliderBar from './src/NPMS/SliderBar'
import IntroSlider from './src/NPMS/IntroSlider'
import ToastMessage from './src/NPMS/ToastMessage'
import CustomeToast from './src/NPMS/CustomeToast'
import FormikandYup from './src/NPMS/FormikandYup'
import NPMsTask1 from './src/Tasks/NPMsTask1'
import DatePickerPrac from './src/NPMS/DatePickerPrac'
import Shareing from './src/NPMS2/Shareing'
import Screenshot from './src/NPMS2/Screenshot'
import Sht from './src/NPMS2/Sht'
import AwakeLib from './src/NPMS2/AwakeLib'
import Popupmenu from './src/NPMS2/Popupmenu'
import { MenuProvider } from 'react-native-popup-menu'
import LottieAnimations from './src/NPMS2/LoAni'
import LtAnimations from './src/NPMS2/LoAni'
import LoAni from './src/NPMS2/LoAni'
import Progress from './src/NPMS2/RNProgress'
import RNProgress from './src/NPMS2/RNProgress'
import BottomSheets from './src/NPMS2/BottomSheets'
import GoogleMaps from './src/NPMS2/GoogleMaps'
import Rdx from './src/Redux/MyComponent'
import BAckgroundcolChg from './src/Tasks/BAckgroundcolChg'
import MyComponent from './src/Redux/MyComponent'
import ReduxScreen from './src/Screens/ReduxScreen'
import { store } from './src/ReduxToolKit/store';
import { Provider } from 'react-redux';



const App = () => {
  
  return (
  //   <SafeAreaView>
  //     <ScrollView>
  //       {/* <Text>App</Text>
  //       <Basics1 />
  //       <FlatListPractice />
  //       <StudentList />
  //       <ProgramsList />
  //       <MapMethod />
  //       <AlertsPractice />
  //       <ModelPractice />
  //       <StatusBarPractice />
  //       <ActivityIndicatorPractice /> */}
  //       {/* <UseEffectPractice />
  //       <UseReducerPractice/>
  //       <UseReducerPractice2 /> */}
  //       {/* <UseRefPractice /> */}
  //       {/* <PickerPractice /> */}
  //       {/* <UseRefPractice /> */}
  //       {/* <UseRefwithTimer /> */}
  //       {/* <StopWatch/> */}
  //       {/* <First/> */}
  //       {/* <Task2/>
  //       <Task3/> */}
  //       {/* <First2/> */}
  //       {/* <Task3/> */}
  //        {/* <BackGroundImages/> */}
  //       {/* <Text>Hello World</Text>
  //       <View ><Text>Hello 123</Text></View> */}
  //       {/* <ImageonImage/> */}
  //       {/* <UseMemo/> */}
  //       {/* <UseCallBack/> */}
  //       {/* <UseCallBack2></UseCallBack2> */}
  //       {/* <TextinputsinFlatList/> */}
  //     </ScrollView>
  //  </SafeAreaView>
//<LoginPage/>

 //<RNStackNavigation />
  // <RNBottomNavigation />
  // <RNDrawerNavigation />
  // <RNTopMenuNavigation />

  // <LoginNavigations />

  // <VectorIcons/>

  // <Dropdownpicker/>

  // <Imagepicker/>

  // <RNModel/>

  // <RadioButtonGroup/>
//  <CheckBoxes/>
// <RNCalendars/>
// <Toggleswitch/>
// <SliderBar/>
// <IntroSlider/>
// <ToastMessage/>
// <CustomeToast/>
//<FormikandYup/>
//<NPMsTask1/> 
//<DatePickerPrac/>
//<RNSharing/>
//<Shareing/>
//<Screenshot/>
//<Sht/>
//<AwakeLib/>

//<Popupmenu/>
//<LoAni/>
//<RNProgress/>
//<BottomSheets/>
//<GoogleMaps/>
//<Rdx/>
//<BAckgroundcolChg/>
//<MyComponent/>
<Provider store={store}>
<ReduxScreen/>
</Provider>




  )
}              

export default App;

const styles = StyleSheet.create({})