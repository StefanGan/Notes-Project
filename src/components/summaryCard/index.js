import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';

//images
import {LeftArrowWhite} from '../../assets';
//styles
import styles from './style';
const SummaryCard = ({title}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <View style={styles.topLeftContainer}></View>
      </View>
      <View style={styles.bottomContainer}></View>
    </View>
  );
};

export default SummaryCard;
