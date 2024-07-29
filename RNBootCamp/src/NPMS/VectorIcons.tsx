import { KeyboardAvoidingView, KeyboardAvoidingViewComponent, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import Contacts from '../LoginFunctionality/Contacts';
import IconEmail from 'react-native-vector-icons/Ionicons'
import IconPhone from 'react-native-vector-icons/SimpleLineIcons'
import Antdesign from 'react-native-vector-icons/AntDesign'
import Enty from 'react-native-vector-icons/Entypo'
import Evil from 'react-native-vector-icons/EvilIcons' 
import Feat from 'react-native-vector-icons/Feather'  
import FontAwe from 'react-native-vector-icons/FontAwesome5'  

const VectorIcons = () => {
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const showandhidePass = () => {
        setShowPassword(!showPassword)
    }
    return (
        <KeyboardAvoidingView
            style={styles.container} behavior='padding'
            keyboardVerticalOffset={Platform.OS === "android" ? 150 : 100}
        >
            <Antdesign style={styles.iconback} name='leftcircle' size={35} color="#DAE0E2" />
            <Text style={styles.signup}>Sign Up</Text>
            <View style={styles.formcontainer}>
                <Text style={styles.inputheader}>Full Name</Text>
                <View style={styles.boxstyle}>
                    <IconEmail style={styles.icon} name="mail-outline" size={25} color="#DAE0E2" />
                    <TextInput style={styles.input} placeholder='' value={name} />
                </View>

                <Text style={styles.inputheader}>Phone Number</Text>
                <View style={styles.boxstyle}>
                    <IconPhone style={styles.icon} name="phone" size={25} color="#DAE0E2" />
                    <TextInput style={styles.input} placeholder='' keyboardType='numeric' value={phone} />
                </View>

                <Text style={styles.inputheader}>Email Address</Text>
                <View style={styles.boxstyle}>
                    <IconEmail style={styles.icon} name="mail-outline" size={25} color="#DAE0E2" />
                    <TextInput style={styles.input} placeholder='' keyboardType='email-address' value={email} />
                </View>

                <Text style={styles.inputheader}>Password</Text>
                <View style={styles.boxstyle}>
                    <IconEmail style={styles.icon} name="lock-closed-outline" size={25} color="#DAE0E2" />
                    <TextInput
                        secureTextEntry={!showPassword}
                        style={styles.input}
                        placeholder=''
                        onChangeText={(txt) => setPassword(txt)}
                        value={password}
                        multiline={false}
                    />

                    <Antdesign style={styles.icon2}
                        name={showPassword ? 'eye' : 'eyeo'}
                        size={25} color="#DAE0E2"
                        onPress={() => showandhidePass()}
                    />

                </View>

                <View>
                    <TouchableOpacity style={styles.signupbutton}>
                        <Text style={styles.signuptext}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.bottomsignup}>
                    <Text style={styles.footext}>Already have an account. </Text>
                    <Text style={styles.footext2}>Sign Up</Text>
                </Text>
            </View>

            <View style={styles.iconcontainer}>
                <Enty name='aircraft' size={25} color='#43BE31'/>
                <Enty  name='app-store' size={25} color='#43BE31'/>
                <Evil name='camera' size={25} color='#43BE31' />
                <Feat name='award' size={25} color='#43BE31' />
                <FontAwe  name='bicycle' size={25} color='#43BE31' />
                <Antdesign name='search1' size={25} color='#43BE31' />
            </View>
        </KeyboardAvoidingView>
    )
}

export default VectorIcons

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30
        // justifyContent:'center',
        // alignItems:'center',
        // alignSelf:'center'
    },
    formcontainer: {
        paddingLeft: 15,
        paddingHorizontal: 15
    },
    boxstyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderBottomWidth: 0.17,
        borderColor: 'white'
        // backgroundColor: '#fff',


    },
    icon: {
        paddingRight: 10,
    },
    icon2: {
        paddingRight: 10,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        // backgroundColor: '#fff',
        // color: '#424242',
    },
    signup: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'left',
        paddingLeft: 15,
        marginVertical: 25,
    },
    inputheader: {
        color: '#DAE0E2',
        fontSize: 25,
    },
    signupbutton: {
        backgroundColor: '#0A79DF',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 15,
        padding: 10
    },
    signuptext: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#EAF0F1'
    },
    iconback: {
        paddingLeft: 20,

    },
    footext: {
        fontSize: 16,
        marginTop: 10,
    },
    footext2: {
        fontSize: 16,
        marginTop: 20,
        color: '#0A79DF',
        fontWeight: 'bold',
    },
    bottomsignup: {
        // flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: "center",
        marginTop: 30,
    },
    iconcontainer:{
        flex:1,
        flexDirection:'row',
        paddingLeft:15,
        marginTop:20
    }
})