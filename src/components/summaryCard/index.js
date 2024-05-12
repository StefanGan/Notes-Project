import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';

import {getCategoryNotes} from '../../storage';
import PinkButton from '../pinkButton';
//styles
import styles from './style';
const SummaryCard = ({title, icon, storeKey, isFocused}) => {
  const navigation = useNavigation();
  const [numberOfRecords, setNumberofRecords] = useState();

  useEffect(() => {
    const retrieveData = async () => {
      try {
        const value = await getCategoryNotes(storeKey);
        if (value !== null) {
          setNumberofRecords(
            'This topic has a total of ' +
              (value?.length ? value?.length : 0) +
              ' records.',
          );
        }
      } catch (error) {
        console.log('error2', error);
      }
    };
    retrieveData();
  }, [navigation.getState()]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <View style={styles.topLeftContainer}>
          {icon && (
            <Image
              source={icon}
              resizeMode="contain"
              style={{height: 48, width: 48}}
            />
          )}
          <Text style={styles.midTitle}>{title}</Text>
        </View>
        <PinkButton
          title={'Detail'}
          customContainerStyle={{paddingHorizontal: 20, alignSelf: 'flex-end'}}
          customtTextStyle={{fontSize: 14}}
          // TODO add onPress when have Detail page
        />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.dataText}>{numberOfRecords}</Text>
      </View>
    </View>
  );
};

export default SummaryCard;
