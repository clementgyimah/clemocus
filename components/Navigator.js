import React, {Component} from 'react';
import {createAppContainer, createMaterialTopTabNavigator} from 'react-navigation';
import simpleCalculator from './simpleCalculator';
import BMIcalculator from './BMIcalculator';

const TopTabNavigator = createMaterialTopTabNavigator({
    simple:{
        screen: simpleCalculator
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