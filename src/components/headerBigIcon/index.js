import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, View} from 'react-native';

//images
import {LeftArrowWhite, SummaryHeaderLogo} from '../../assets';
//styles
import styles from './style';
const HeaderBigIcon = ({title}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.midTitle}> {title}</Text>
      <Image
        source={SummaryHeaderLogo}
        resizeMode="contain"
        style={styles.backgroundImage}
      />
    </View>
  );
  0;
};

export default HeaderBigIcon;
