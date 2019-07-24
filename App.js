/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import {StyleSheet, Text, View, Button, TouchableOpacity, ScrollView,} from 'react-native';



type Props = {};
export default class App extends Component<Props> {

  constructor(){
    super()
    this.state={
      writetxt: "",
      resultsTxt:""
    }
  }

  ops = ['DEL','/','*','-','+']
  
  calculateResult(){
    const text = this.state.writetxt;
    this.setState({
      resultsTxt: eval(text)
    })

    
  }

  validate(){
    const text = this.state.writetxt
    switch(text.slice(-1)){
        case "/":
        case "*":
        case "-":
        case "+":
      return false
    }
    return true;
  }

  /*
  update(text){
    this.setState({writetxt: this.state.writetxt+text})
  }
  */

  pressbtn(text){
    //console.log(text)
    if (text == '='){
      return this.validate() && this.calculateResult();
    }
    this.setState({writetxt: this.state.writetxt+text})
  }

  operatebtn(operate){
  if (operate == 'DEL'){
    this.setState({
      resultsTxt: ""
    })
  }
  switch(operate){

    case 'DEL':
    console.log(this.state.writetxt)
    let text = this.state.writetxt.split('')
    text.pop()
    this.setState({ writetxt : text.join('') })
    break;

    case '/':
      const lasChar1 = this.state.writetxt.split("").pop()
      if (this.ops.indexOf(lasChar1) > 0) return
      if (this.state.writetxt == "") return
      this.setState({writetxt:this.state.writetxt+operate})
      break;

    case "*":
      const lasChar2 = this.state.writetxt.split("").pop()
      if (this.ops.indexOf(lasChar2) > 0) return
      if (this.state.writetxt == "") return
      this.setState({writetxt:this.state.writetxt+operate})
      break;
    case "-":
      const lasChar3 = this.state.writetxt.split("").pop()
      if (this.ops.indexOf(lasChar3) > 0) return
      if (this.state.writetxt == "") return
      this.setState({writetxt:this.state.writetxt+operate})
      break;
    case "+":
      const lasChar4 = this.state.writetxt.split("").pop()
      if (this.ops.indexOf(lasChar4) > 0) return
      if (this.state.writetxt == "") return
      this.setState({writetxt:this.state.writetxt+operate})
      break;


  }
  }

  render() {

    let btnrows = [];
    let nums = [[1,2,3],[4,5,6],[7,8,9],['.',0,'=']];
    for (let i=0; i<4; i++){
      btnrow=[];
      for (let j=0; j<3; j++){
        btnrow.push(<TouchableOpacity key={nums[i][j]} onPress={()=> {this.pressbtn(nums[i][j])}}  
        /*onLongPress={() => {this.update(nums[i][j])}}*/ style={styles.numbtn}><Text style={styles.btntxt}>{nums[i][j]}</Text></TouchableOpacity>);
      }
      btnrows.push(<View key={i} style = {styles.numbtn}>{btnrow}</View>);

    }

    let btnops=[];
    for (let k=0; k<5; k++){
      let btnop=[];
      btnop.push(<TouchableOpacity key={this.ops[k]} style={styles.operation} onPress={()=> {this.operatebtn(this.ops[k])}} ><Text style={styles.btntxt}>{this.ops[k]}</Text></TouchableOpacity>);
      btnops.push(<View  key={k} style = {styles.operation}>{btnop}</View>);

    }

    return (
      <View style={styles.container}>
      <View style = {styles.calculation}>
      <Text style={styles.calTxt}>{this.state.writetxt}</Text></View>
      <View style = {styles.result}>
      <Text style={styles.resTxt}>{this.state.resultsTxt}</Text></View>
      <View style = {styles.button}>
      <View  style = {styles.number}>
      {btnrows}
      </View>

      <View style = {styles.operation}>
      {btnops}
      </View>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
},
    calculation:{
      flex:2,
      backgroundColor:'white',
      justifyContent:'center',
      alignItems:'flex-end',
    },
    result:{
      flex:1,
      backgroundColor:'pink',
      justifyContent:'center',
      alignItems:'flex-end',
    },
    button:{
      flex:7,
      flexDirection:'row',
    },
      number:{
      flex:3,
      flexDirection:'column',
    },
      operation:{
      flex:1,
      flexDirection:'column',
      backgroundColor:'yellow',
      alignItems:'center',
      justifyContent:'space-around',
      alignSelf:'stretch',
    },
    calTxt:{
      fontSize:50,
      margin: 10,
      color:'black',
      textAlign: 'center',
    },
    resTxt:{
      fontSize:40,
      margin: 10,
      textAlign: 'center',
      color:'black',
    },
    numbtn:{
    flex:1,
    flexDirection:'row',
    backgroundColor:'white',
    justifyContent:'space-around',
    alignItems:'center',
    alignSelf:'stretch',
  },
  btntxt:{
    fontSize:20,
  }

});