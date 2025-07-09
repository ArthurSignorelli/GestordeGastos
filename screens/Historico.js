import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { GastoContext } from '../context/GastoContext';

export default function Historico() {
  const { gastos } = useContext(GastoContext);

  const renderItem = ({ item }) => (
    <View style={estilo.card}>
      <Text>{item.descricao}</Text>
      <Text style={{ color: item.valor >= 0 ? 'green' : 'red' }}>
        R$ {item.valor.toFixed(2)}
      </Text>
      <Text>{item.categoria}</Text>
    </View>
  );

  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Histórico de Transações</Text>
      <FlatList
        data={gastos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const estilo = StyleSheet.create({
  container: { padding: 20 },
  titulo: { fontSize: 20, marginBottom: 10 },
  card: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});
