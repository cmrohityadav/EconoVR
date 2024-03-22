import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'

const Input = ({title, placeholder, keyboard, is_password,onInputChange}) => {
  const [text, setText] = useState('');
  const handleTextChange = (newText) => {
    setText(newText);
    onInputChange(newText); // Call the callback function with the new value
  };
  return (
    <View style={{marginVertical: 2}}>
          <Text style={{fontSize: 16, color: '#6C6C6C',fontFamily:'Montserrat'}}>{title}</Text>
          <TextInput
            placeholder={placeholder}
            onChangeText={handleTextChange}
            value={text}
            placeholderTextColor="gray"
            style={{
              borderBottomColor: '#081122',
              borderBottomWidth: 1,
              paddingVertical: 0,
              marginTop: 5,
            }
           }
          
            secureTextEntry={is_password}
            keyboardType={keyboard}
          />
        </View>
  )
}

export default Input