import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import HomeScreen from "../screens/home"; // Tela de Cliente
import ComprasScreen from "../screens/compras"; // Tela de Compras
import ProdutosScreen from "../screens/produtos"; // Tela de Produtos

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: { backgroundColor: "#f8f9fa" }, // Personalize o estilo aqui
      tabBarActiveTintColor: "#121214", // Cor do ícone ativo
    }}
  >
    <Tab.Screen
      name="Clientes"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="user" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Compras"
      component={ComprasScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="shopping-cart" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Produtos"
      component={ProdutosScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="box" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);
