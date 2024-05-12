import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    // flex: 1,
    height: '15%',
    backgroundColor: '#280947',
    flexDirection: 'row',
    paddingTop: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
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
});

export default styles;
