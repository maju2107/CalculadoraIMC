import { Text, StyleSheet } from 'react-native';

const Title = () => {
    return (
        <Text style={styles.title}>Calculadora de IMC Legal</Text>
    );
};

const styles = StyleSheet.create({ //estilização do título 
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 24,
    },
});

export default Title; // exportando a função  