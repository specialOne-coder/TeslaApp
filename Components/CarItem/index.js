import React from 'react';
import { View, Text, ImageBackground } from 'react-native'
import styles from './style';
import StyledButton from '../StyledBtn/'

const CarItem = (props) => {

  const { name, tagline, image } = props;

  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={image}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{tagline}</Text>
      </View>
      <View style={styles.containerButton}>
        <StyledButton
          type='primary'
          content='commande personnalisée'
          onPress={() => {
            console.warn('primary press');
          }}
        />

        <StyledButton
          type='secondary'
          content='inventaire existant'
          onPress={() => {
            console.warn('secondary');
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
