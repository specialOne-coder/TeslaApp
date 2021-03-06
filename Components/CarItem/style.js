import { StyleSheet ,Dimensions } from 'react-native';

const styles = StyleSheet.create({

    carContainer: {
      width: '100%',
      height: Dimensions.get('screen').height,
    },
    titles: {
      marginTop: '30%',
      width: '100%',
      alignItems: 'center',
    },
    title: {
      fontSize: 40,
      fontWeight: '500',
    },
    subtitle: {
      fontSize: 15,
      color: '#5c5e52'
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode:'cover',
      position:'absolute'
    },
    containerButton:{
      position:'absolute',
      width:'100%',
      bottom:20
    }
  
  });

  export default styles;