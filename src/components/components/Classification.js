import { Text, StyleSheet } from 'react-native';

const Classification = ({imc}) => { // função para classificar o imc
    let classificação = '';
    if(imc<18.5){
        classificação = 'Abaixo do peso';
    } else if(imc>18.5 && imc<24.9){
        classificação = 'Peso normal';
    }else if(imc>25.0 && imc<29.9){
        classificação = 'Sobrepeso';
    }else if(imc>30.0 && imc<34.9){
        classificação = 'Obesidade grau 1';
    }else if(imc>35.0 && imc<39.9){
        classificação = 'Obesidade grau 2';
    }else if(imc>=40){
        classificação = 'Obesidade grau 3 (obesidade mórbida)';
    }
    return (
        <Text style={styles.classification}>{classificação}</Text> // retorna a classificação obtida através das validações
    );
};

const styles = StyleSheet.create({ // estilização do texto para apresentar a classificação do IMC
    classification: {
        marginTop: 20,
        fontSize: 24,
        textAlign: 'center',
        color: '#333',
    },
});

export default Classification; // exportando a função Classification
