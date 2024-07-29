import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'

const StopWatch = () => {
    const [time, setTime] = useState(0)
    const [running, setRunning] = useState(false)
    const intervalref = useRef(null)
    const startTimeRef = useRef(0)

    const startStopWatch = () => {
        startTimeRef.current = Date.now() -time*1000;
        intervalref.current = setInterval(()=>{
           //console.log("Intrrval======>", Math.floor((Date.now() -startTimeRef.current) / 1000))
           setTime(Math.floor((Date.now() -startTimeRef.current) / 1000) )
        },1000)
        setRunning(true)
    }
    const resetStopwatch = () => { 
        clearInterval(intervalref.current); 
        setTime(0); 
        setRunning(false); 
    };

    const pauseStopWatch  = () => {
        clearInterval(intervalref.current); 
        setRunning(false)
    }

    const resumeStopwatch = () => {
        startTimeRef.current = Date.now() - time * 1000; 
      intervalref.current = setInterval(() => { 
          setTime(Math.floor( 
              (Date.now() - startTimeRef.current) / 1000)); 
      }, 1000); 
        setRunning(true)
    }
  return (
    <View>
      <Text style={styles.heading}>Stop Watch</Text>
      <Text style={styles.heading1}>{time}s</Text>
      <View style={styles.buttoncontainer}>
       
        {running ? (
            <TouchableOpacity onPress={pauseStopWatch} style={styles.buttonstyle}>
                <Text style={styles.textstyle}>Pause</Text>
            </TouchableOpacity>
        ) : (
            <>
                <TouchableOpacity onPress={startStopWatch} style={styles.buttonstyle}>
                    <Text style={styles.textstyle}>Start</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={resetStopwatch} style={styles.buttonstyle}>
                    <Text style={styles.textstyle}>Stop</Text>
                </TouchableOpacity>
            </>
            
        )}
        {!running && ( 
                  <TouchableOpacity 
                        style={styles.buttonstyle} 
                        onPress={resumeStopwatch} 
                  > 
                      <Text style={styles.textstyle}> 
                          Resume 
                      </Text> 
                  </TouchableOpacity> 
              )} 
        {/* <View>
            <TouchableOpacity onPress={startStopWatch} style={styles.buttonstyle}>
                <Text style={styles.textstyle}>Start</Text>
            </TouchableOpacity>
        </View> 
        <View>
            <TouchableOpacity onPress={resetStopwatch} style={styles.buttonstyle}>
                <Text style={styles.textstyle}>Stop</Text>
            </TouchableOpacity>
            
        </View>
        <View>
            <TouchableOpacity onPress={pauseStopWatch} style={styles.buttonstyle}>
                <Text style={styles.textstyle}>Pause</Text>
            </TouchableOpacity>
        </View> */}
            
        
       </View>
    </View>
  )
}

export default StopWatch

const styles = StyleSheet.create({
    buttoncontainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    heading:{
        fontSize:30,
        flex:1,
        justifyContent:'center',
        textAlign:'center'
    },
    heading1:{
        fontSize:45,
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
        color:'pink',
        padding:6,
    },
    textstyle:{
        
    },
    buttonstyle:{
        backgroundColor:'red'
    }
})