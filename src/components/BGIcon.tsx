/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BORDERRADIUS, SPACING } from '../theme/theme';
import CustomIcon from './CustomIcon';

interface BGIconProps {
    name: string;
    color: string;
    size: number;
    BGColor: string;
}

const BGIcon: React.FC<BGIconProps> = ({ name, color, size, BGColor }) => {
    return (
        <View style={[styles.IconBGContainer, { backgroundColor: BGColor }]}>
            <CustomIcon
                name={name}
                color={color}
                size={size}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    IconBGContainer: {
        height: SPACING.space_30,
        width: SPACING.space_30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: BORDERRADIUS.radius_8,
    },
})

export default BGIcon