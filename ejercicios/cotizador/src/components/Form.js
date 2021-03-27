import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import colors from '../utils/colors';
import RNPickerSelect from 'react-native-picker-select';

export default function Form(){
  return (
    <View style={styles.viewForm}>
      <View style={styles.viewInputs}>
        <TextInput 
          placeholder="Cantidad apedir"
          keyboardType="numeric"
          style={styles.input}
        />
        <TextInput
          placeholder="Interes %"
          keyboardType="numeric"
          style={[styles.input, styles.inputPercentaje]}
        />
      </View>
      {/* <RNPickerSelect
        onValueChange={(value) => console.log(value)}
        items={[
            { label: 'Football', value: 'football' },
            { label: 'Baseball', value: 'baseball' },
            { label: 'Hockey', value: 'hockey' },
          ]}
        /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  viewForm: {
    position: 'absolute',
    bottom: -90,
    width: '85%',
    paddingHorizontal: 50,
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    borderRadius: 30,
    height: 180,
    justifyContent: 'center',
  },
  viewInputs: {
    flexDirection: 'row',
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 5,
    width: '60%',
    marginRight: 5,
    marginBottom: 10,
    color: '#000',
    paddingHorizontal: 20,
  },
  inputPercentaje: {
    width: '40%',
    marginLeft: 5,
  },
});