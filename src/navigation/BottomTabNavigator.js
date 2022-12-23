import { StyleSheet, View, Text } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import Ionicons from '@expo/vector-icons/Ionicons'

import HomeScreen from "../screens/HomeScreen"
import SearchNavigator from "./SearchNavigatot"
import MessajesNavigator from "./MessajesNavigator"
import ConfigNavigator from "./ConfigNavigator"

const BottomTabs = createBottomTabNavigator();

export default BottomTabNavigator = () => {
  return (
      <BottomTabs.Navigator
        initialRouteName="HomeTab"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
        }}
      >
        <BottomTabs.Screen
          name="HomeTab"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focus }) => (
              <View style={styles.item}>
                <Ionicons name="home-outline" size={30} color='black'/>
              </View>
            ),
          }}
        />
        <BottomTabs.Screen
          name="SerchTab"
          component={SearchNavigator}
          options={{
            tabBarIcon: ({ focus }) => (
              <View style={styles.item}>
                <Ionicons name="search-outline" size={35} color='black'/>
              </View>
            ),
          }}
        />
        <BottomTabs.Screen
          name="MessajesTab"
          component={MessajesNavigator}
          options={{
            tabBarIcon: ({ focus }) => (
              <View style={styles.item}>
                <Ionicons name="chatbubbles-outline" size={35} color='black'/>
              </View>
            ),
          }}
        />
        <BottomTabs.Screen
          name="ConfigTab"
          component={ConfigNavigator}
          options={{
            tabBarIcon: ({ focus }) => (
              <View style={styles.item}>
                <Ionicons name="person-circle-outline" size={35} color='black'/>
              </View>
            ),
          }}
        />
      </BottomTabs.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    shadowColor: "#7f5df0",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 0.5,
    height: 75,
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})