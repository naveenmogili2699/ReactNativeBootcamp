import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useCallback, useState } from 'react'

const Title = () => {
    console.log("Title Rendered")
    return <Text>Use Call Back Practice </Text>
}

const Count = ({text,number}) => {
    console.log("Number: ",text, number,"==>RENDERED")
    return <Text>{text} : {number}</Text>
}

// const Buttonprop = ({children,clickHandler})=>{
//     console.log(children,"Rendered" )
//     return <Button  onPress={clickHandler} >{children}</Button>
// }


const UseCallBack2 = () => {
    const [age, setAge] = useState(0)
    const [salary, setSalary] = useState(1000)

    const increamentAge = useCallback( () => {
        setAge(age+1)
        console.log("age increament")
    },[age])

    const increamentSalary = () => {
        setSalary(salary+100)
        console.log("salary increament")
    }

    const Counted = useCallback(()=>{
        Title
    },[age])

  return (
    <View>
      <Text>UseCallBack2</Text>
      <Title />
      <Count text={"age"} number={age} />
      <Button title='increase age' onPress={increamentAge}/>
      {/* <Buttonprop  clickHandler={increamentAge} >increase age </Buttonprop> */}
      <Count text={"salary"} number={salary} />
      <Button title='increase salary' onPress={increamentSalary}/>
      <Button title='usecallback' onPress={Counted}/>
      {/* <Buttonprop  clickHandler={increamentSalary} >increase salary </Buttonprop> */}
    </View>
  )
}

export default UseCallBack2

const styles = StyleSheet.create({})