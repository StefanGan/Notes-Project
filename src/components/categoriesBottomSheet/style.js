import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    // flex: 1,
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 10,
    // borderColor: 'rgba(255, 255, 255, 0.12)',
    borderWidth: 1,
    marginHorizontal: 10,
    marginTop: 10,
  },
  textTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
  },
  contain: {
    flex: 1,
    // backgroundColor: 'red',
    // height: 300,
  },
  buttonStyle: {
    height: '60%',
    // backgroundColor: 'green',
    marginBottom: 10,
    marginHorizontal: 20,
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,

    textAlign: 'center',
  },
});

export default styles;
