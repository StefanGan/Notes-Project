import React, {useState} from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';

//images
import {LeftArrowWhite} from '../../assets';
//styles
import styles from './style';
const Header = ({hasBack = false, hasRightIcon = ''}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.leftContainer}>
        <Image
          source={LeftArrowWhite}
          resizeMode="contain"
          style={styles.leftArrow}
        />
      </View>
      <View style={styles.midContainer}>
        <Text style={styles.midTitle}>MID TITLE</Text>
      </View>
      <View style={styles.rightContainer}>
        {/* <Image 
        
        /> */}
      </View>
    </View>
  );
};

export default Header;
