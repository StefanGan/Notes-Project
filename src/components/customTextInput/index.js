import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, TextInput} from 'react-native';

//styles
import styles from './style';
const CustomTextInput = ({maxInput = 0, setContent, content}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <TextInput
        maxLength={maxInput == 0 ? null : maxInput}
        placeholder="Please input note content"
        placeholderTextColor={'#FFFFFF'}
        style={styles.textInputStyle}
        value={content}
        onChangeText={value => {
          setContent(value);
        }}
      />
    </View>
  );
};

export default CustomTextInput;
