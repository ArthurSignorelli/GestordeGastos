import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GastoContext } from '../context/GastoContext';

export default function Resumo() {
  const { gastos } = useContext(GastoContext);

  const receitas = gastos.filter((g) => g.valor >= 0).reduce((acc, g) => acc + g.valor, 0);
  const despesas = gastos.filter((g) => g.valor < 0).reduce((acc, g) => acc + g.valor, 0);
  const saldo = receitas + despesas;

  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Gestor de Gastos</Text>

      <View style={estilo.card}>
        <Text style={estilo.label}>Receitas</Text>
        <Text style={estilo.valorReceita}>R$ {receitas.toFixed(2)}</Text>
      </View>

      <View style={estilo.card}>
        <Text style={estilo.label}>Despesas</Text>
        <Text style={estilo.valorDespesa}>R$ {Math.abs(despesas).toFixed(2)}</Text>
      </View>

      <View style={estilo.card}>
        <Text style={estilo.label}>Saldo</Text>
        <Text
          style={[
            estilo.valorSaldo,
            { color: saldo >= 0 ? 'green' : 'red' }
          ]}
        >
          R$ {saldo.toFixed(2)}
        </Text>
      </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f2f2f2',
    flex: 1,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    color: '#555',
    marginBottom: 6,
  },
  valorReceita: {
    fontSize: 18,
    color: 'green',
    fontWeight: 'bold',
  },
  valorDespesa: {
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
  },
  valorSaldo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
