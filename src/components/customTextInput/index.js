import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, Text, View, TouchableOpacity, TextInput} from 'react-native';

//images
import {LeftArrowWhite} from '../../assets';
//styles
import styles from './style';
const CustomTextInput = ({maxInput = 0}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <TextInput
        maxLength={maxInput == 0 ? null : maxInput}
        placeholder="Please input note content"
        placeholderTextColor={'#FFFFFF'}
        style={styles.textInputStyle}
      />
    </View>
  );
};

export default CustomTextInput;
