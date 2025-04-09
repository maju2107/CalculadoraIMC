import { Text, StyleSheet } from 'react-native';

const IdealWeight = ({alturaMetros}) => { // função que retorna o valor peso min e max de acordo com a altura em metros
    const pesoMinimoIdeal = (18.5 * (alturaMetros * alturaMetros)).toFixed(2);
    const pesoMaximoIdeal = (24.9 * (alturaMetros * alturaMetros)).toFixed(2);

    return ( // exibe os pesos
        <Text style={styles.idealweight}> 
            Seu peso mínimo ideal é: {pesoMinimoIdeal} kg {"\n"}
            Seu peso máximo ideal é: {pesoMaximoIdeal} kg
        </Text>
    );
};

const styles = StyleSheet.create({ // estilização do texto para apresentar os pesos
    idealweight: {
        marginTop: 20,
        fontSize: 20,
        color: '#dde9ff',
    },
});

export default IdealWeight; // exportando a função IdealWeigth
