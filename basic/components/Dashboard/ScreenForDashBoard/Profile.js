import { View, Text, Image ,TextInput} from 'react-native'
import React from 'react'
import Input from '../../screens/Input'

const Profile = () => {
  return (
    <View style={{ backgroundColor: '#081122', height: '100%' }}>

      {/* semi white circle */}
      <View style={{
        backgroundColor: 'white', height: 200, width: 390,
        borderBottomEndRadius: 1000, borderBottomStartRadius: 1000,
        borderColor: 'black', borderWidth: 5, alignItems: 'center', marginTop: 20



      }}>
        {/* my profile text */}
        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <Text style={{ fontSize: 33, color: '#081122' ,fontFamily:'Montserrat',}}>My Profile</Text>
        </View>

        {/* profile frame */}
        <View style={{
          backgroundColor: 'white', height: 130, width: 130,
          borderRadius: 100, borderColor: 'black', borderWidth: 5, marginTop: 50
        }}>
          <Image
            style={{ marginTop: 10, marginBottom: 10, marginLeft: 10 }}

            source={require('../img/profileDemo.png')}
          />


        </View>


      </View>
      

      {/* profile detail form */}
      <View style={{marginHorizontal:30,marginTop:120}}>
      <View>
      <Text style={{color:'white'}}>Name</Text>
        <TextInput style={{color:"white",
         borderBottomColor: 'white',
              borderBottomWidth: 1,
              fontFamily:'Montserrat',
        
        }} placeholder='User name' placeholderTextColor={"white"}
          keyboardType='default'
        />
      </View>
      <View style={{marginTop:20}}>
      <Text style={{color:'white'}}>Email</Text>
        <TextInput style={{color:"white",
         borderBottomColor: 'white',
              borderBottomWidth: 1,
              fontFamily:'Montserrat',
        
        }} placeholder='abc@yourdomain.com' placeholderTextColor={"white"}
          keyboardType='email-address'
        />
      </View>
      <View style={{marginTop:20}}>
      <Text style={{color:'white'}}>Password</Text>
        <TextInput style={{color:"white",
         borderBottomColor: 'white',
              borderBottomWidth: 1,
              fontFamily:'Montserrat',
        
        }} placeholder='**********' placeholderTextColor={"white"}
          keyboardType='email-address'
        />
      </View>

      
      </View>

    </View>
  )
}

export default Profile