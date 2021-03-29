import React from 'react';
import { View, Text, FlatList } from 'react-native'
import styles from './style';
import Cars from './cars'
import CarItem from '../CarItem/'

const CarsList = (props) => {

    const { name, tagline, image } = props;

    return (
        <View style={styles.container}>
            <FlatList
                data={Cars}
                renderItem={({item}) => <CarItem car={item}/> }
            />
        </View>
    );
};

export default CarsList;
