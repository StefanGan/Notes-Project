import React, {useEffect, useState} from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';

//images
import {RightArrowPink} from '../../assets';
import {getCategoryNotes} from '../../storage';

//styles
import styles from './style';
const RecentCard = ({title, icon, category, storeKey, isFocused}) => {
  const [savedData, setSavedData] = useState();

  useEffect(() => {
    const retrieveData = async () => {
      try {
        const value = await getCategoryNotes(storeKey);
        if (value !== null) {
          setSavedData(value);
        }
      } catch (error) {
        console.log('error2', error);
      }
    };
    retrieveData();
  }, [isFocused]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <View style={styles.topLeftContainer}>
          {icon && (
            <Image
              source={icon}
              resizeMode="contain"
              style={{height: 20, width: 20}}
            />
          )}
          <Text style={styles.midTitle}>{title}</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        {savedData
          ?.reverse()
          ?.slice(0, 3)
          .map((val, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.bottomContainerInside}>
                <Text
                  editable={false}
                  numberOfLines={2}
                  style={styles.dataText}>
                  {val.content.slice(0, 20)}
                </Text>
                <Image
                  source={RightArrowPink}
                  resizeMode="contain"
                  style={{width: 18, height: 18}}
                />
              </TouchableOpacity>
            );
          })}
      </View>
    </View>
  );
};

export default RecentCard;
