import { Button, Modal, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Login2 from '../../screens/Login2';

const Logout = ({navigation}) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <View style={styles.main}>
            <Modal
                transparent={true}
                visible={showModal}
                animationType='slide'

            >
                <View style={styles.centredView}>

                    <View style={styles.modalView}>

                        <View>
                            <Text style={styles.modalText}>Are you sure</Text>
                        </View>

                        <View style={{ flexDirection: 'row', gap: 20 }}>

                            <View><Button title='YES'
                           color='#081122'
                            onPress={() => navigation.navigate('Login2')}
                            

                             /></View>
                            <View><Button title='NO'
                                                         color='#081122'
                                                       
                                onPress={() => setShowModal(false)}
                            /></View>

                        </View>


                    </View>
                </View>
            </Modal>

            <View style={{flexDirection:'row',
            justifyContent:'center',alignItems:'center',marginTop:400,
            
            
            }}>

                <Button 
                    title='Logout'
                    onPress={() => setShowModal(true)}
                />
               
            </View>

        </View>
    )
}

export default Logout

const styles = StyleSheet.create({
    main: {
        backgroundColor:'#081122',
        height:'100%'
    },
    buttonView: {
        flex: 1,
        // justifyContent:''
    },
    centredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        backgroundColor: 'white',
        padding: 50,
        borderRadius: 20,
        shadowColor: 'black',
        elevation: 5,
        alignItems: 'center'


    },
    modalText: {
        fontSize: 20,


    }

})