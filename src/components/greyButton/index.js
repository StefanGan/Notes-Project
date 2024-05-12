import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';

//images
import {RightArrowPink} from '../../assets';
//styles
import styles from './style';
const GreyButton = ({onPress, title, icon}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
      <View style={styles.titleContainer}>
        {icon && (
          <Image
            source={icon}
            resizeMode="contain"
            style={{width: 20, height: 20}}
          />
        )}

        <Text style={styles.textTitle}>{title ? title : ''}</Text>
      </View>
      <Image
        source={RightArrowPink}
        resizeMode="contain"
        style={{width: 20, height: 20}}
      />
    </TouchableOpacity>
  );
};

export default GreyButton;
