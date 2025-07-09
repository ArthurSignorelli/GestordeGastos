import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Resumo from './screens/Resumo';
import NovoGasto from './screens/NovoGasto';
import Historico from './screens/Historico';
import Perfil from './screens/Perfil';
import { GastoProvider } from './context/GastoContext';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <GastoProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Resumo" component={Resumo} />
          <Tab.Screen name="Novo Gasto" component={NovoGasto} />
          <Tab.Screen name="Histórico" component={Historico} />
          <Tab.Screen name="Perfil" component={Perfil} />
        </Tab.Navigator>
      </NavigationContainer>
    </GastoProvider>
  );
}
