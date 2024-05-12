import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';

//images
import {LeftArrowWhite} from '../../assets';
//styles
import styles from './style';
const Header = ({hasBack = false, hasRightIcon = '', title, onPress}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      {hasBack && (
        <View style={styles.leftContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              source={LeftArrowWhite}
              resizeMode="contain"
              style={styles.leftArrow}
            />
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.midContainer}>
        <Text style={styles.midTitle}>{title}</Text>
      </View>
      {hasRightIcon && (
        <View style={styles.rightContainer}>
          <TouchableOpacity onPress={onPress}>
            <Image
              source={hasRightIcon}
              resizeMode="contain"
              style={styles.leftArrow}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Header;
