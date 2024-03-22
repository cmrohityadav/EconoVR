import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import axios from 'axios';

const Logout = ({ navigation }) => {

    const handleLogout=async()=>{
        try {

            await axios.get("http://192.168.123.5:5000/api/v1/user/logout")
            .then(res => {console.log(res.data)
                    if (res.data.success===true) {
                        navigation.navigate('Login2')
                    }
                })
                .catch(err => console.log("err", err))
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#081122',
            }}>
            <View
                style={{
                    height: 200,
                    width: 300,
                    backgroundColor: 'white',
                    borderRadius: 25,
                    display: 'flex',
                    alignItems: 'center'


                }}>
                <View style={{ marginTop: 20, marginHorizontal: 20 }}>
                    <Text style={{ fontSize: 20, textAlign: 'center', color: "#081122" }}>Are you sure you want to logout?</Text>


                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 40 }}>
                    <View style={{
                        backgroundColor: '#D9D9D9',
                        borderRadius: 10,
                        height: 40,
                        width: 80,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 40



                    }}><Text
                    style={{color:"black"}}

                    onPress={handleLogout}
                    >YES</Text></View>


                    <View style={{
                        backgroundColor: '#081122',
                        borderRadius: 10,
                        height: 40,
                        width: 80,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 40



                    }}><Text style={{color:"white"}}
                    onPress={() => navigation.navigate('DashboardHome')}
                    >NO</Text></View>


                </View>


            </View>
        </View>
    );
};

export default Logout;

const styles = StyleSheet.create({});

// import { Button, Modal, StyleSheet, Text, View } from 'react-native'
// import React, { useState } from 'react'
// import Login2 from '../../screens/Login2';

// const Logout = ({navigation}) => {
//     const [showModal, setShowModal] = useState(false);

//     return (
//         <View style={styles.main}>
//             <Modal
//                 transparent={true}
//                 visible={showModal}
//                 animationType='slide'

//             >
//                 <View style={styles.centredView}>

//                     <View style={styles.modalView}>

//                         <View>
//                             <Text style={styles.modalText}>Are you sure</Text>
//                         </View>

//                         <View style={{ flexDirection: 'row', gap: 20 }}>

//                             <View><Button title='YES'
//                            color='#081122'
//                             onPress={() => navigation.navigate('Login2')}

//                              /></View>
//                             <View><Button title='NO'
//                                                          color='#081122'

//                                 onPress={() => setShowModal(false)}
//                             /></View>

//                         </View>

//                     </View>
//                 </View>
//             </Modal>

//             <View style={{flexDirection:'row',
//             justifyContent:'center',alignItems:'center',marginTop:400,

//             }}>

//                 <Button
//                     title='Logout'
//                     onPress={() => setShowModal(true)}
//                 />

//             </View>

//         </View>
//     )
// }

// export default Logout

// const styles = StyleSheet.create({
//     main: {
//         backgroundColor:'#081122',
//         height:'100%'
//     },
//     buttonView: {
//         flex: 1,
//         // justifyContent:''
//     },
//     centredView: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     modalView: {
//         backgroundColor: 'white',
//         padding: 50,
//         borderRadius: 20,
//         shadowColor: 'black',
//         elevation: 5,
//         alignItems: 'center'

//     },
//     modalText: {
//         fontSize: 20,

//     }

// })
