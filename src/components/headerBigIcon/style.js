import {StyleSheet} from 'react-native';
import {Colors} from '../../global/colors';

const styles = StyleSheet.create({
  mainContainer: {
    // flex: 1,
    height: '25%',
    backgroundColor: '#280947',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingTop: 70,
    paddingLeft: 20,
  },
  leftContainer: {
    flex: 1,
    // backgroundColor: 'red',
  },
  midContainer: {
    flex: 5,
    alignItems: 'flex-start',
    // backgroundColor: 'green',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
    // backgroundColor: 'blue',
  },
  leftArrow: {
    height: 24,
    width: 24,
  },
  midTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
  },
  backgroundImage: {
    width: 250,
    height: 250,
    position: 'absolute',
    top: 0,
    right: 0,
  },
});

export default styles;
