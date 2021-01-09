import React, { useEffect, useState } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { StyleSheet, ScrollView, Alert, Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { fetchOrders } from '../api';
import Header from '../Header';
import OrderCard from '../OrderCard';
import { Order } from '../types';

function Orders() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            setIsLoading(true);
            fetchOrders()
                .then(response => setOrders(response.data))
                .catch(error => Alert.alert('Houve um erro ao buscar os pedidos!'))
                .finally(() => setIsLoading(false))
        }
    }, [isFocused]);

    const handleOnPress = (order: Order) => {
        navigation.navigate('OrderDetails', {
            order
        });
    }

    const showContent = () => {
        if (isLoading) {
            return <Text>Buscando pedidos...</Text>;
        }

        return orders.map(order => (
            <TouchableWithoutFeedback
                key={order.id}
                onPress={() => handleOnPress(order)}
            >
                <OrderCard order={order} />
            </TouchableWithoutFeedback>
        ));
    }

    return (
        <>
            <Header />
            <ScrollView style={styles.container}>
                {showContent()}
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingRight: '5%',
        paddingLeft: '5%'
    }
});

export default Orders;
