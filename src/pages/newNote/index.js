// NewNotePage.js
import React, {useState, useRef} from 'react';
import {View, TextInput, Button} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CategoriesBottomSheet from '../../components/categoriesBottomSheet';
import CategoriesButton from '../../components/categoriesButton';
import CustomTextInput from '../../components/customTextInput';
import Footer from '../../components/footer';
import Header from '../../components/header';

const NewNotePage = () => {
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const refRBSheet = useRef();
  const onPressCategory = () => {
    refRBSheet?.current?.open();
  };

  const data = [
    {name: 'workAndStudy', contain: 'Work and study'},
    {name: 'homeLife', contain: 'Home life'},
    {name: 'healthAndWellness', contain: 'Health and wellness'},
  ];
  const handleSaveNote = () => {
    // Logic to save the note
  };

  return (
    <LinearGradient
      style={{flex: 1}}
      colors={['#1B284F', '#351159', '#421C45', '#3B184E']}>
      <Header hasBack={true} title={'New note'} />
      <CategoriesButton selectedData={category} onPress={onPressCategory} />
      <CustomTextInput maxInput={200} />
      <CategoriesBottomSheet
        refRBSheet={refRBSheet}
        data={data}
        selectedData={category}
        setSelectedData={setCategory}
      />
      <Footer title={'Save'} />
    </LinearGradient>
  );
};

export default NewNotePage;
