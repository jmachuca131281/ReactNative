import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import Form from './src/components/Form';
import colors from './src/utils/colors';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.titleApp}>Cotizador de prestamos</Text>
        <Form />
      </SafeAreaView>
      <View>
        <Text>Resultado</Text>
      </View>
      <View>
        <Text>Footer</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
  },
});
