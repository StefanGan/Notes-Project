import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

//images
import {LeftArrowWhite} from '../../assets';
//styles
import styles from './style';
const Footer = ({title, onPress}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.midContainer} onPress={onPress}>
        <LinearGradient
          style={styles.midbackground}
          colors={['#F94695', '#F13A76']}>
          <Text style={styles.midTitle}>{title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
