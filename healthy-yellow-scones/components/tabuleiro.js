import React from 'react';
import { View, StyleSheet } from 'react-native';

const Tabuleiro = () => {
  return (
    <View style={estilos.container}>
      <View style={estilos.linha}>
        <View style={estilos.branco} />
        <View style={estilos.preto} />
        <View style={estilos.branco} />
        <View style={estilos.preto} />
      </View>

      <View style={estilos.linha}>
        <View style={estilos.preto} />
        <View style={estilos.branco} />
        <View style={estilos.preto} />
        <View style={estilos.branco} />
      </View>

      <View style={estilos.linha}>
        <View style={estilos.branco} />
        <View style={estilos.preto} />
        <View style={estilos.branco} />
        <View style={estilos.preto} />
      </View>

      <View style={estilos.linha}>
        <View style={estilos.preto} />
        <View style={estilos.branco} />
        <View style={estilos.preto} />
        <View style={estilos.branco} />
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linha: {
    flexDirection: 'row',
  },
  branco: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
  },
  preto: {
    width: 60,
    height: 60,
    backgroundColor: '#000',
    borderWidth: 1,
    borderColor: '#000',
  },
});

export default Tabuleiro;
