import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dropdown } from 'react-native-element-dropdown';
import Antdesign from 'react-native-vector-icons/AntDesign'
import MatIcon from 'react-native-vector-icons/MaterialIcons'
import Modal from "react-native-modal";
import CheckBox from '@react-native-community/checkbox';
import ToggleSwitch from 'toggle-switch-react-native'
import { Calendar } from 'react-native-calendars';
import DatePicker from 'react-native-date-picker'
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';
import Slider from '@react-native-community/slider';
import { Formik } from 'formik';
import * as yup from 'yup'
import 'yup';
import Moment from 'moment';

const data = [
    { label: 'AndraPradesh', value: 'AP' },
    { label: 'Telangana', value: 'TG' },
    { label: 'Appulathoni', value: 'APT' },
    { label: 'MadyaPradesh', value: 'MP' },
]

const country = [
    { id: 1, con: 'India' },
    { id: 2, con: 'USA' },
    { id: 3, con: 'Russia' },
]
const initialState = {
    Cooking: false,
    Reading: false,
    Playing: false,
};

const NPMsTask1 = () => {
    const [value, setValue] = useState(null);
    const [visible, setVisible] = useState(false)
    const [visibleChkBox, setVisibleChkBox] = useState(false)
    const [state, setState] = useState(initialState)
    const [isChecked, setIsChecked] = useState(false)
    const [visibleMod, setVisibleMod] = useState(false)
    const [toggle, setToggle] = useState(false)
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [selectedID, setSelectedID] = useState('')
    const [sliderValue, setSilderValue] = useState(0)
    const [selected, setSelected] = useState(false)
    const [selectedCountry, setSelectedCountry] = useState('Select Country')
    const [showCountry, setshowCountry] = useState(selectedCountry)

    const radiobtns = [
        {
            id: '1',
            label: 'B.Tech',
            value: 'btech'
        },
        {
            id: '2',
            label: 'Inter',
            value: 'inter'
        },
        {
            id: '3',
            label: 'SSC',
            value: 'ssc'
        },
    ]

    const toggleSet = () => {
        setshowCountry(selectedCountry)
        setVisible(!visible)

    }

    const toggleChkBox = () => {
        setVisibleChkBox(!visibleChkBox)
    }

    const displayToggleSwitch = () => {
        setToggle(!toggle)
    }
    const displayModel = () => {
        setVisibleMod(!visibleMod)
    }

    const checkValidations = yup.object().shape({
        state: yup
            .string()
            .required(),
        dob: yup
            .date()
            .required()
    })
    return (
        <View>
            <Text>NPMs Task1</Text>
            <Formik initialValues={{ state: '', dob: '' }}
                validationSchema={checkValidations}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                    <>
                        <View style={styles.container}>

                            <View style={styles.boxes}>
                                <Text>State</Text>
                                {/* <Icon1 name={'state-machine'} size={25} color={'gray'} /> */}
                                <Dropdown
                                    name='state'
                                    onChangeText={handleChange('state')}
                                    style={styles.dropdown}
                                    placeholderStyle={styles.placeholderStyle}
                                    selectedTextStyle={styles.selectedTextStyle}
                                    inputSearchStyle={styles.inputSearchStyle}
                                    iconStyle={styles.iconStyle}
                                    data={data}
                                    search
                                    maxHeight={300}
                                    labelField="label"
                                    valueField="value"
                                    placeholder="Select State"
                                    searchPlaceholder="Search State..."
                                    value={value}
                                    onChange={item => {
                                        setValue(item.value)
                                        console.log("Hi");
                                    }}
                                    renderLeftIcon={() => (
                                        <Antdesign style={styles.icon} color="black" name="Safety" size={20} />
                                    )}
                                    renderRightIcon={() => (
                                        <MatIcon style={styles.icon} color="black" name="arrow-drop-down-circle" size={20} />
                                    )}
                                />
                            </View>
                            <View>
                                <Text style={styles.txt}> Country </Text>
                                <TouchableOpacity onPress={toggleSet} style={styles.btnstyle}>
                                    <Text>{showCountry === 'Select Country' ? 'Select Country' : showCountry}</Text>
                                </TouchableOpacity>
                                <Modal
                                    isVisible={visible}
                                    backdropColor='white'
                                //onBackdropPress={toggleSet}
                                >
                                    <View>

                                        <FlatList
                                            data={country}
                                            renderItem={({ item }) => (
                                                <TouchableOpacity
                                                    onPress={(val) => setSelectedCountry(item.con)}
                                                >
                                                    <Text style={[styles.flatlist, styles.btnstylefl]}>{item.con}</Text>
                                                </TouchableOpacity>
                                            )}
                                        />

                                        <TouchableOpacity onPress={toggleSet} style={styles.btnstyle}>
                                            <Text>Submit</Text>
                                        </TouchableOpacity>
                                    </View>
                                </Modal>
                            </View>

                            <View>
                                <Text style={styles.txt}>Hobbies</Text>
                                <TouchableOpacity onPress={toggleChkBox} style={styles.btnstyle}>
                                    <Text>Click Here to Select Hobbies</Text>
                                </TouchableOpacity>
                                <Modal isVisible={visibleChkBox} backdropColor='white'>
                                    <View style={styles.checkbox}>
                                        <CheckBox //value={state.Reading} 
                                            value={isChecked}
                                            onPress={(val) => setIsChecked(val)}
                                        // onValueChange={value =>
                                        //     setState({
                                        //       ...state,
                                        //       Reading: value,
                                        //     })
                                        //   }
                                        />
                                        <Text>Reading</Text>
                                    </View>
                                    <View style={styles.checkbox}>
                                        <CheckBox value={state.Cooking}
                                            onValueChange={value =>
                                                setState({
                                                    ...state,
                                                    Cooking: value,
                                                })
                                            }
                                        />
                                        <Text>Cooking</Text>
                                    </View>
                                    <View style={styles.checkbox}>
                                        <CheckBox value={state.Playing}
                                            onValueChange={value =>
                                                setState({
                                                    ...state,
                                                    Playing: value,
                                                })
                                            }
                                        />
                                        <Text>Playing</Text>
                                    </View>
                                    <TouchableOpacity onPress={toggleChkBox} style={styles.btnstyle}>
                                        <Text>Submit</Text>
                                    </TouchableOpacity>
                                </Modal>
                            </View>
                            <View >
                                <Text style={styles.txt}>Maritual Status</Text>
                                <View style={styles.toggle}>
                                    <Text>Are you married?  {toggle ? 'Yes' : 'No'}</Text>
                                    <ToggleSwitch
                                        isOn={toggle}
                                        size={'small'}
                                        onColor={'green'}
                                        offColor={'gray'}
                                        onToggle={displayToggleSwitch}
                                    ></ToggleSwitch>
                                </View>
                            </View>
                            <View>
                                <Text style={styles.txt}>Date of Birth</Text>
                                <View style={styles.datestyle}>
                                    {/* <TextInput placeholder='date of birth' name='dob' onChange={handleChange('bob')} /> */}
                                    {/* <Text>{date.toString()}</Text> */}
                                    <Text>{Moment(date).format('DD/MM/YYYY')}</Text>
                                    <TouchableOpacity onPress={() => setOpen(true)} style={styles.datepick}>
                                        <Antdesign name={'calendar'} size={25} color={'#0A79DF'} />
                                    </TouchableOpacity>
                                    <DatePicker
                                        modal
                                        open={open}
                                        date={date}
                                        onConfirm={(date) => {
                                            setOpen(false)
                                            setDate(date)
                                            console.log(date)
                                        }}
                                        onCancel={() => {
                                            setOpen(false)
                                        }}
                                    />
                                </View>
                            </View>
                            <View>
                                <Text style={styles.txt}>Qualification</Text>
                                <TouchableOpacity onPress={displayModel} style={styles.btnstyle}>
                                    <Text>Click Here to Select Highest Qualification</Text>
                                </TouchableOpacity>
                                <Modal
                                    isVisible={visibleMod}
                                    backdropColor='white'
                                >
                                    <View>
                                        <RadioGroup
                                            // radioButtons={radiobtns}
                                            // onPress={() => setSelectedID}
                                            // selectedId={selectedID}
                                            // layout={'coloumn'}
                                            radioButtons={radiobtns}
                                            selectedId={selectedID}
                                            onPress={setSelectedID}
                                            style={styles.radio}
                                        />
                                        {/* <CheckBox value={selected} onValueChange={(val) => setIsChecked(val)}  /> */}
                                        <TouchableOpacity onPress={displayModel} style={styles.btnstyle}>
                                            <Text>Submit</Text>
                                        </TouchableOpacity>
                                    </View>
                                </Modal>
                            </View>
                            <View>
                                <Text style={styles.txt}>Age: {sliderValue}</Text>

                                <Slider
                                    minimumValue={18}
                                    maximumValue={70}
                                    maximumTrackTintColor={'gray'}
                                    minimumTrackTintColor='green'
                                    style={{ width: 300, height: 50 }}
                                    step={1}
                                    onValueChange={(sliderValue) => setSilderValue(sliderValue)}
                                />
                            </View>
                            <TouchableOpacity onPress={() => handleSubmit} style={styles.btnstyle}>
                                <Text>Submit All</Text>
                            </TouchableOpacity>
                        </View>
                        <View></View>
                    </>
                )}
            </Formik>
        </View>
    )
}

export default NPMsTask1

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16
    },
    boxes: {
        // flexDirection: 'row',
        // marginHorizontal: 10
    },
    dropdown: {
        marginVertical: 5,
        height: 50,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,

    },
    icon: {
        marginRight: 5,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    btnstyle: {
        backgroundColor: '#25CCF7',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 8
    },
    txt: {
        marginBottom: 6,
        marginTop: 6
    },
    flatlist: {
        margin: 6,
        marginBottom: 5
    },
    btnstylefl: {
        backgroundColor: '#6A89CC',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginBottom: 5,
        borderRadius: 8
    },
    checkbox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5
    },
    toggle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        padding: 10
    },
    datestyle: {
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        justifyContent: 'space-evenly'
    },
    datepick: {
        paddingRight: 5,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    maritual: {
        flexDirection: 'row',
        borderWidth: 0.5,
        justifyContent: 'space-evenly'
    },
    radio: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        textAlign: 'center',
        backgroundColor: 'gray'
    }
})