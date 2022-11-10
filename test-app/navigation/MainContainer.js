import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';

//Screen names
const homeName = "Home";
const detailsName = "Weekly";
const settingsName = "Account";

const Tab = createBottomTabNavigator();

function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName) {
                            iconName = focused ? 'home' : 'home';

                        } else if (rn === detailsName) {
                            iconName = focused ? 'podium' : 'podium';

                        } else if (rn === settingsName) {
                            iconName = focused ? 'person' : 'person';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: '#E5A823',
                    inactiveTintColor: '#FFFFFF',
                    showLabel: false,
                    style: { padding: 10, paddingTop: 20, height: 70 }
                }}>

                <Tab.Screen
                    name={homeName}
                    component={HomeScreen}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#000000',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        tabBarStyle: {
                            backgroundColor: '#000000',
                        }
                    }}

                />
                <Tab.Screen
                    name={detailsName}
                    component={DetailsScreen}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#000000',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        tabBarStyle: {
                            backgroundColor: '#000000',
                        }
                    }}
                />
                <Tab.Screen
                    name={settingsName}
                    component={SettingsScreen}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#000000',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        tabBarStyle: {
                            backgroundColor: '#000000',
                        }
                    }}
                />

            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MainContainer;