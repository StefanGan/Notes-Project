import {StyleSheet} from 'react-native';
import {Colors} from '../../global/colors';

const styles = StyleSheet.create({
  mainContainer: {
    // flex: 1,
    height: '13%',
    backgroundColor: '#280947',
    flexDirection: 'row',
    paddingTop: 50,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftContainer: {
    flex: 1,
    // backgroundColor: 'red',
  },
  midContainer: {
    flex: 1,
    // backgroundColor: 'green',
  },
  rightContainer: {
    flex: 1,
    // backgroundColor: 'blue',
  },
  leftArrow: {
    height: 24,
    width: 24,
  },
  midTitle: {
    color: 'white',
  },
});

export default styles;
