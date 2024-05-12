import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, Modal} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

//images
import {LeftArrowWhite} from '../../assets';
//styles
import styles from './style';
const PopOut = ({title, modalVisible}) => {
  const navigation = useNavigation();
  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <View style={styles.bakgroundContainer}>
        <LinearGradient
          style={styles.mainContainer}
          colors={['#C724E1', '#4E22CC']}>
          <Text style={styles.midTitle}>{title}</Text>
        </LinearGradient>
      </View>
    </Modal>
  );
};

export default PopOut;
