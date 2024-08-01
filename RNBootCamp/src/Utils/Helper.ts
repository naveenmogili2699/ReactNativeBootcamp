
import {useNavigation} from '@react-navigation/native'
const navigation = useNavigation()
export const screennavigation =(screenNam:string)=>{
    navigation.navigate(screenNam)
}