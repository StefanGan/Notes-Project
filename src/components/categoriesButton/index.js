import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';

//images
import {DownArrowWhite, LeftArrowWhite} from '../../assets';
//styles
import styles from './style';
const CategoriesButton = ({onPress, selectedData}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
      <Text style={styles.textTitle}>
        {selectedData ? selectedData : 'Choose a category'}
      </Text>
      <Image
        source={DownArrowWhite}
        resizeMode="contain"
        style={{width: 20, height: 20}}
      />
    </TouchableOpacity>
  );
};

export default CategoriesButton;
