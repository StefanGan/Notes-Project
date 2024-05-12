import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

//styles
import styles from './style';
const CategoriesBottomSheet = ({
  refRBSheet,
  selectedData,
  setSelectedData,
  setStoreKey,
  data = [],
}) => {
  const navigation = useNavigation();
  return (
    <View>
      <RBSheet
        ref={refRBSheet}
        height={350}
        closeOnDragDown={true}
        keyboardAvoidingViewEnabled={true}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            paddingHorizontal: 0,
          },
          container: {
            backgroundColor: 'black',
            paddingVertical: 20,
            marginBottom: 10,
            paddingHorizontal: 15,
            borderRadius: 20,
            borderWidth: 1,
          },
          draggableIcon: {display: 'none'},
        }}>
        <View style={styles.mainContainer}>
          <Text style={styles.textTitle}>Choose a category</Text>
        </View>
        <ScrollView style={styles.contain}>
          {data.map((val, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={[
                  styles.buttonStyle,
                  {
                    backgroundColor:
                      val.contain == selectedData ? '#280947' : '',
                  },
                ]}
                onPress={() => {
                  setSelectedData(val.contain);
                  setStoreKey(val.storeKey);
                  refRBSheet.current.close();
                }}>
                <Text style={styles.buttonText}>{val.contain}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </RBSheet>
    </View>
  );
};

export default CategoriesBottomSheet;
