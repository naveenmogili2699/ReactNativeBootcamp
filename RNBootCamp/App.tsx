import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import basics1 from './src/CoreComponents/Basics1';
import Basics1 from './src/CoreComponents/FlatListPractice';
import FlatListPractice from './src/CoreComponents/FlatListPractice';
import StudentList from './src/CoreComponents/StudentList';
import ProgramsList from './src/CoreComponents/ProgramsList';
import MapMethod from './src/CoreComponents/MapMethod';
import 'react-native-gesture-handler';
import HomeScreen from './src/Screens/HomeScreen';
import AboutScreen from './src/Screens/AboutScreen';
import DetailsPage from './src/Screens/DetailsPage';
import UseEffectPractice from './src/Hooks/UseEffectPractice';
import UseRefPractice from './src/Hooks/UseRefPractice';
import UseReducerPractice from './src/Hooks/UseReducerPractice';
import UseReducerPractice2 from './src/Hooks/UseReducerPractice2';
import PickerPractice from './src/CoreComponents/PickerPractice';
import UseRefwithTimer from './src/CoreComponents/UseRefwithTimer';
import StopWatch from './src/Hooks/StopWatch';
import First from './src/Screens/Tasks/First';
import Task2 from './src/Screens/Tasks/Task2';
import Task3 from './src/Screens/Tasks/Task3';
import First2 from './src/Screens/Tasks/First2';
import BackGroundImages from './src/Screens/Tasks/BackGroundImages';
import ImageonImage from './src/Screens/Tasks/ImageonImage';
import UseMemo from './src/Hooks/UseMemo';
import UseCallBack from './src/Hooks/UseCallBack';
import UseCallBack2 from './src/Hooks/UseCallBack2';
import TextinputsinFlatList from './src/Screens/Tasks/TextinputsinFlatList';
import RNStackNavigation from './src/Navigations/RNStack/RNStackNavigation';
import LoginPage from './src/CoreComponents/LoginPage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginNavigations from './src/Navigations/LoginPageNavigations/LoginNavigations';
import VectorIcons from './src/Components/NPMS/VectorIcons';
import Dropdownpicker from './src/Components/NPMS/Dropdownpicker';
import Imagepicker from './src/Components/NPMS/Imagepicker';
import RNModel from './src/Components/NPMS/RNModel';
import RadioButtonGroup from './src/Components/NPMS/RadioButtonGroup';
import CheckBox from './src/Components/NPMS/CheckBoxes';
import CheckBoxes from './src/Components/NPMS/CheckBoxes';
import RNCalendars from './src/Components/NPMS/RNCalendars';
import Toggleswitch from './src/Components/NPMS/Toggleswitch';
import ToggleSwitch from 'toggle-switch-react-native';
import SliderBar from './src/Components/NPMS/SliderBar';
import IntroSlider from './src/Components/NPMS/IntroSlider';
import ToastMessage from './src/Components/NPMS/ToastMessage';
import CustomeToast from './src/Components/NPMS/CustomeToast';
import FormikandYup from './src/Components/NPMS/FormikandYup';
import NPMsTask1 from './src/Screens/Tasks/NPMsTask1';
import DatePickerPrac from './src/Components/NPMS/DatePickerPrac';
import Shareing from './src/Components/NPMS2/Shareing';
import Screenshot from './src/Components/NPMS2/Screenshot';
import Sht from './src/Components/NPMS2/Sht';
import AwakeLib from './src/Components/NPMS2/AwakeLib';
import Popupmenu from './src/Components/NPMS2/Popupmenu';
import {MenuProvider} from 'react-native-popup-menu';
import LottieAnimations from './src/Components/NPMS2/LoAni';
import LtAnimations from './src/Components/NPMS2/LoAni';
import LoAni from './src/Components/NPMS2/LoAni';
import Progress from './src/Components/NPMS2/RNProgress';
import RNProgress from './src/Components/NPMS2/RNProgress';
import BottomSheets from './src/Components/NPMS2/BottomSheets';
import GoogleMaps from './src/Components/NPMS2/GoogleMaps';
import Rdx from './src/Redux/MyComponent';
import BAckgroundcolChg from './src/Screens/Tasks/BAckgroundcolChg';
import MyComponent from './src/Redux/MyComponent';
import ReduxScreen from './src/Screens/ReduxScreen';
import {store} from './src/Redux/ReduxToolKit/store';
import {Provider} from 'react-redux';
import RNBottomNavigation from './src/Navigations/RNBottom/RNBottomNavigation';

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
    // <CheckBoxes/>
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
      <ReduxScreen />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
