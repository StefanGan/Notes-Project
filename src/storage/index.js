import AsyncStorage from '@react-native-async-storage/async-storage';

const setCategoryNotes = async (value, storeKey) => {
  let recentData = await getCategoryNotes(storeKey);
  if (recentData) {
    AsyncStorage.setItem(storeKey, JSON.stringify(recentData.concat(value)));
  } else {
    try {
      if (value) {
        await AsyncStorage.setItem(storeKey, JSON.stringify(value));
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }
};

const getCategoryNotes = async storeKey => {
  try {
    const value = await AsyncStorage.getItem(storeKey);
    const jsonObject = JSON.parse(value);
    if (jsonObject) {
      return jsonObject;
    } else {
      return [];
    }
  } catch (e) {
    return [];
  }
};

const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
    return true;
  } catch (e) {
    return false;
  }
};

export {setCategoryNotes, getCategoryNotes, clearStorage};
