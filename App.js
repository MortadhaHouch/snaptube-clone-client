import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Search from './screens/Search';
import Download from './screens/Download';
import Profile from './screens/Profile';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import { PaperProvider } from 'react-native-paper';
import { MD3LightTheme as DefaultTheme } from 'react-native-paper';
let bottomTabNavigator = createMaterialBottomTabNavigator();
export default function App() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
    },
  };
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <bottomTabNavigator.Navigator screenOptions={({route})=>({
          tabBarIcon: ({focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = <FontAwesome name="home" size={24} color={focused?'#03346E':'#694F8E'} />
            } else if (route.name === 'Search') {
              iconName = <AntDesign name="search1" size={24} color={focused?'#03346E':'#694F8E'} />
            } else if (route.name === 'Download') {
              iconName = <AntDesign name="download" size={24} color={focused?'#03346E':'#694F8E'} />
            } else if (route.name === 'Profile') {
              iconName = <AntDesign name="user" size={24} color={focused?'#03346E':'#694F8E'} />
            }
            return iconName
          }
        })}
          barStyle={{ backgroundColor: '#B692C2' }}
          activeColor="#f0edf6"
          inactiveColor="#3e2465"
        >
          <bottomTabNavigator.Screen name="Home" component={Home} />
          <bottomTabNavigator.Screen name="Search" component={Search} />
          <bottomTabNavigator.Screen name="Download" component={Download} />
          <bottomTabNavigator.Screen name="Profile" component={Profile} />
        </bottomTabNavigator.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}