// NewNotePage.js
import React, {useState, useRef} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import CategoriesBottomSheet from '../../components/categoriesBottomSheet';
import CategoriesButton from '../../components/categoriesButton';
import CustomTextInput from '../../components/customTextInput';
import Footer from '../../components/footer';
import Header from '../../components/header';
import PopOut from '../../components/popout';
import {setCategoryNotes} from '../../storage';

const NewNotePage = () => {
  const [category, setCategory] = useState('');
  const [storeKey, setStoreKey] = useState('');
  const [content, setContent] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const refRBSheet = useRef();
  const onPressCategory = () => {
    refRBSheet?.current?.open();
  };

  const data = [
    {storeKey: 'workAndStudy', contain: 'Work and study'},
    {storeKey: 'homeLife', contain: 'Home life'},
    {storeKey: 'healthAndWellness', contain: 'Health and wellness'},
  ];
  const handleSaveNote = async () => {
    let dataInput = {category: category, content: content};
    let temp = await setCategoryNotes(dataInput, storeKey);
    setModalVisible(true);
    setInterval(() => {
      setModalVisible(false);
    }, 2000);
    setCategory('');
    setStoreKey('');
    setContent('');
  };

  return (
    <LinearGradient
      style={{flex: 1}}
      colors={['#1B284F', '#351159', '#421C45', '#3B184E']}>
      <Header hasBack={true} title={'New note'} />
      <PopOut title={'Successfully Added'} modalVisible={modalVisible} />
      <CategoriesButton selectedData={category} onPress={onPressCategory} />
      <CustomTextInput
        maxInput={200}
        setContent={setContent}
        content={content}
      />
      <CategoriesBottomSheet
        refRBSheet={refRBSheet}
        data={data}
        selectedData={category}
        setSelectedData={setCategory}
        setStoreKey={setStoreKey}
      />
      <Footer title={'Save'} onPress={handleSaveNote} />
    </LinearGradient>
  );
};

export default NewNotePage;
