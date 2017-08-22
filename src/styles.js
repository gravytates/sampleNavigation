import { StyleSheet } from 'react-native';

const staticStyles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


const dynamicStyles = {
  getTitle: color => (
    {
      color: 'blue',
      fontSize: 25,
    }
  ),
};

export { staticStyles, dynamicStyles };
