import React, {Component} from 'react';
import {createAppContainer, createMaterialTopTabNavigator} from 'react-navigation';
import App from './App';
import BMIcalculator from './BMIcalculator';

const TopTabNavigator = createMaterialTopTabNavigator({
    Math:{
        screen: App
    },
    BMI: {
        screen: BMIcalculator
    }
}
)

const AppContainer = createAppContainer(TopTabNavigator);

export default class Navigator extends Component{
    render(){
        return(
            <AppContainer />
        )
    }
}