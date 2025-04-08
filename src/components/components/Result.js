import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Result = ({imc}) => { // função que retorna o valor da variável imc
    return (
        <Text style={styles.result}>Seu IMC é: {imc}</Text>
    );
};

const styles = StyleSheet.create({ // estilização do texto para apresentar o resultado do IMC
    result: {
        marginTop: 20,
        fontSize: 24,
        textAlign: 'center',
        color: '#333',
    },
});

export default Result; // exportando a função Result