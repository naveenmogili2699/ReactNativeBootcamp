import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import 'yup';

const FormikandYup = () => {
    //   const [name,setName]=useState('')
    //   const [email,setEmail]=useState('')
    //   const [password,setPassword]=useState('')



    declare module 'yup' {
        // Define your desired `SchemaMetadata` interface by merging the
        // `CustomSchemaMetadata` interface.
        export interface CustomSchemaMetadata {
            placeholderText?: string;
            tooltipText?: string;
            // …
        }
    }

    const loginValidationSchema = yup.object().shape({
        name: yup
            .string()
            .required(),

        email: yup
            .string()
            .email('please enter valid email address'),
        // .required('email is required'),

        password: yup
            .string()
            .min(8)
            .max(12)
            .matches(/\w*[A-Z]\w*/,  "Password must have a capital letter")
            .matches(/\w*[a-z]\w*/,  "Password must have a small letter")
            .matches(/\d/, "Password must have a number")
            .matches(/[!@#$%^&*_]/, "Password must have a special character")
            .required('Password is required')
            
    })
    return (
        <View>
            <Text>FormikandYup</Text>
            <Formik initialValues={{ name: '', email: '', password: '' }}
                onSubmit={(val) => console.log(val)}
                validationSchema={loginValidationSchema}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                    <>
                        <TextInput placeholder='Name' style={styles.inputstyle}
                            name="name"
                            // value={values.name}
                            onChangeText={handleChange('name')}
                        />
                        {errors.name && <Text style={styles.error}>{errors.name}</Text>}
                        <TextInput placeholder='Email' style={styles.inputstyle}
                            // value={email} 
                            name="email"
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            // value={values.email}
                            keyboardType="email-address"
                        />
                        {errors.email && <Text style={styles.error}>{errors.email}</Text>}
                        <TextInput placeholder='Password' style={styles.inputstyle}
                            // value={password}
                            name="password"
                            onChangeText={handleChange('password')}
                            // value={values.password}
                            secureTextEntry
                        />
                        {errors.password && <Text style={styles.error}>{errors.password}</Text>}
                        <Button title='Sumbit' onPress={()=>handleSubmit} />
                    </>
                )}

            </Formik>
        </View>
    )
}

export default FormikandYup

const styles = StyleSheet.create({
    error: {
        color: 'red',
    },
    inputstyle:{
        borderWidth:1,
        marginVertical:2
    }
})