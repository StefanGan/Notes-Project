import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';

//images
import {LeftArrowWhite} from '../../assets';
import PinkButton from '../pinkButton';
//styles
import styles from './style';
const Footer = ({title, onPress}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <PinkButton onPress={onPress} title={title} />
    </View>
  );
};

export default Footer;
