import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Category from "../screens/Category";

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              color={focused ? "#131313" : "#d6d6d6"}
              size={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          tabBarLabel: "Categorys",
          tabBarIcon: ({ focused }) => (
            <Feather
              name="list"
              color={focused ? "#131313" : "#d6d6d6"}
              size={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused }) => (
            <Feather
              name="user"
              color={focused ? "#131313" : "#d6d6d6"}
              size={20}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
