/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';


const Confirm = ({ children, visible, onAccept, onDecline }) => {
    const { containerStyle, cardSectionStyle, textStyle } = styles;

    return (
        <Modal
        visible={visible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => {}}
        >
            <View style={containerStyle}>
                <CardSection style={cardSectionStyle}>
                    <Text style={textStyle}>{ children }</Text>
                </CardSection>

                <CardSection>
                    <Button onPress={onAccept}>Yes</Button>
                    <Button onPress={onDecline}>No</Button>
                </CardSection>
            </View>
        </Modal>
    );
};

const styles = {
    cardSectionStyle: {
        justifyContent: 'center'

    },
    textStyle: {
        flex: 1,
        color: 'red',
        fontSize: 25,
        textAlign: 'center',
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'rgba(0,0,0,0.75',
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
        marginTop: 325
    }
};

export { Confirm };
