// import { Button, StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// // navigation
// import {NativeStackScreenProps} from "@react-navigation/native-stack"
// import {RootStackParamList} from '../../App'

// type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>



// //home page
// const Home = ({navigation}: HomeProps) => {
//   return (
//     <>
//     <View style={styles.container}>
//       <Text style={styles.smallText}>Welcome to EconoVR</Text>
//       <View   style={styles.btn} >
//       <Button 
//       title='Login'
      
//       onPress={() => navigation.push('Login', {
//         productId: "86"
//       })}

//       />
//       </View>


//       {/* Sign Up */}
//       <View   style={styles.btn} >
//       <Button
//       title='Signup'
      
//       onPress={() => navigation.push('Signup', {
//         productId: "80"
//       })}

//       />
//       </View>
      
//     </View>

//     </>
//   )
// }

// export default Home

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: "center",
//         justifyContent: "center"
//     },
//     smallText: {
//         color: "#000000"
//     },
//     btn:{
//         margin:2,
//         width:100,
//     }
// })