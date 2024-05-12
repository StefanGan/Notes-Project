import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

//images
import {LeftArrowWhite} from '../../assets';
//styles
import styles from './style';
const PinkButton = ({
  title,
  onPress,
  customContainerStyle = '',
  customtTextStyle = '',
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.midContainer} onPress={onPress}>
      <LinearGradient
        style={[styles.midbackground, customContainerStyle]}
        colors={['#F94695', '#F13A76']}>
        <Text style={[styles.midTitle, customtTextStyle]}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default PinkButton;
