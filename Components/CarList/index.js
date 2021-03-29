import React from 'react';
import { View, Text, FlatList,Dimensions } from 'react-native'
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
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval= {Dimensions.get('window').height}

            />
        </View>
    );
};

export default CarsList;
