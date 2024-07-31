import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
    Menu,
    MenuProvider,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from "react-native-popup-menu";
import Enty from 'react-native-vector-icons/Entypo'
import Block from './Componants/Block';
import NotApplicable from './Componants/NotApplicable';


const Popupmenu = () => {
    return (
        // <View>
        //     <Text>Pop Up Menu</Text>
        //     <View>
        //         <Text>Hello</Text>
        <MenuProvider style={styles.con}>
            <Text>Hello2</Text>
            <Menu>
                <MenuTrigger
                    //text="Click for Option menu"
                >
                    <Enty name="dots-three-vertical" size={24} color="black" />
                </MenuTrigger>
                <MenuOptions>
                    {/* <MenuOption onSelect={() => Alert.alert('Save')} text='save' />
                    <MenuOption onSelect={() => Alert.alert('Delete')} >
                        <Text>delete</Text>
                    </MenuOption> */}
                    <Block text='Block' value={'block'} iconName={'block'}/>
                    <NotApplicable text='Not Interested' iconName={'emoji-sad'} value={'Not Interested'}/>
                    {/* <NotApplicable text='Mute' iconName={'mute'} value={'mute'}/>
                    <NotApplicable text='Follow' iconName={'user-follow'} value={'follow'}/> */}
                </MenuOptions>
            </Menu>
        </MenuProvider>
        //     </View>
        // </View>
    )
}

export default Popupmenu

const styles = StyleSheet.create({
    con:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center'
    }
})