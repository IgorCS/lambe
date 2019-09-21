import React from 'react'
import { 
    createBottomTabNavigator,
    createAppContainer,
    createSwitchNavigator, 
    createStackNavigator  
} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

import Feed from './screens/Feed'
import AddPhoto from './screens/AddPhoto'
import Profile from './screens/Profile'
import Login from './screens/Login'
import Register from './screens/Register'
//import { tsIntersectionType } from '@babel/types';

const authRouter = createStackNavigator({
    Login: { screen: Login, navigationOptions: { title: 'Login' } },
    Register: { screen: Register, navigationOptions: { title: 'Register' } }
},{
    initialRouteName: 'Login'
})

const loginProOrfileRouter = createSwitchNavigator({
    Profile: Profile,
    Auth: authRouter
},{
    initialRouteName: 'Auth'
})

const MenuRoutes = createBottomTabNavigator({
    Feed: {
        name: 'Feed',
        screen: Feed,
        navigationOptions: {
            title: 'Feed',
            tabBarIcon: ({ tintColor: color }) =>
                <Icon name='home' size={30} color={color} />
        }
    },
    Add: {
        name: 'AddPhoto',
        screen: AddPhoto,
        navigationOptions: {
            title: 'Add Picture',
            tabBarIcon: ({ tintColor }) =>
                <Icon name='camera' size={30} color={tintColor} />
        }
    },
    Profile: {
        name: 'Profile',
        screen: loginProOrfileRouter,
        navigationOptions: {
            title: 'Profile',
            tabBarIcon: ({ tintColor }) =>
                <Icon name='user' size={30} color={tintColor} />
        }
    }
},
{        
    tabBarOptions: {
        showLabel: false,
    },
    initialRouteName: 'Feed',

    }
);

const MenuNavigator = createAppContainer(MenuRoutes)

export default MenuNavigator