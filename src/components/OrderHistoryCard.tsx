/* eslint-disable prettier/prettier */
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import OrderItemCart from './OrderItemCart';

interface OrderHistoryCardProps {
    navigationHandler: any;
    OrderDate: string;
    CartListPrice: string;
    CartList: any;
}

const OrderHistoryCard: React.FC<OrderHistoryCardProps> = ({
    navigationHandler,
    OrderDate,
    CartListPrice,
    CartList,
}) => {
    console.log("CartListPrice", CartListPrice)
    console.log("OrderDate", OrderDate)
    return (
        <View style={styles.cardContainer}>
            <View style={styles.CardHeader}>
                <View>
                    <Text style={styles.headerTitle}>Order Time:</Text>
                    <Text style={styles.headerSubTitle}>{OrderDate}</Text>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.headerTitle}>Total Amount:</Text>
                    <Text style={styles.headerPrice}>$ {CartListPrice}</Text>
                </View>
            </View>
            <View style={styles.listContainer}>
            {CartList.map((data: any, index: any) => (
          <TouchableOpacity
            key={index.toString() + data.id}
            onPress={() => {
              navigationHandler({
                index: data.index,
                id: data.id,
                type: data.type,
              });
            }}>
            <OrderItemCart
              type={data.type}
              name={data.name}
              imagelink_square={data.imagelink_square}
              special_ingredient={data.special_ingredient}
              prices={data.prices}
              ItemPrice={data.ItemPrice}
            />
          </TouchableOpacity>
        ))}
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    cardContainer: {
        gap: SPACING.space_10,
    },
    CardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: SPACING.space_20,
        alignItems: 'center',
    },
    headerTitle: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_16,
        color: COLORS.primaryWhiteHex,
    },
    headerSubTitle: {
        fontFamily: FONTFAMILY.poppins_light,
        fontSize: FONTSIZE.size_16,
        color: COLORS.primaryWhiteHex,
    },
    priceContainer: {
        alignItems: 'flex-end',
    },
    headerPrice: {
        fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_18,
        color: COLORS.primaryOrangeHex,
    },
    listContainer: {
        gap: SPACING.space_20,
    },
});

export default OrderHistoryCard;
