import { Text, StyleSheet } from 'react-native';
import {useState} from 'react';

const Classification = ({imc}) => {
    let classificação = useState('');
    if(imc<18.5){
        classificação = 'Abaixo do peso';
    }
    return (
        <Text style={styles.classification}>{classificação}</Text>
    );
};

const styles = StyleSheet.create({ // estilização do texto para apresentar o resultado do IMC
    classification: {
        marginTop: 20,
        fontSize: 24,
        textAlign: 'center',
        color: '#333',
    },
});

export default Classification; // exportando a função Result
