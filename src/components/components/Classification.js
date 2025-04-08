import { Text, StyleSheet } from 'react-native';

const Classification = () => {
    return (
        <Text style={styles.classification}>classificação</Text>
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
