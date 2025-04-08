import { Text, StyleSheet } from 'react-native';

const Classification = () => {
    return (
        <Text style={styles.classification}>classificação</Text>
    );
};

const styles = StyleSheet.create({ // estilização do texto para apresentar o resultado do IMC
    classification: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 24,
    },
});

export default Classification; // exportando a função Result
