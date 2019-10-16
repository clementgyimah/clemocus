//importing the necessary modules
import React, {Component} from 'react';

import {StyleSheet, Text, View, Button, TouchableOpacity, ScrollView,} from 'react-native';


export default class simpleCalculator extends Component{
//The constructor that contains the state of the app for state changes to be possible
  constructor(){
    super()
    this.state={
      writetxt: "",
      resultsTxt:"",
    }
  }

  //operation signs used in the app
  ops = ['DEL','/','x','-','+']
  
  //function used to do the mathematical calculation
  calculateResult(){
    const text = this.state.writetxt;
    const correct = text.replace(/x/g, "*")

    this.setState({
      resultsTxt: eval(correct)
    })

    
  }

  limiter(){
    
  }

  //function used to verify that the text inputed is a valid math before calculation is done
  validate(){
    const text = this.state.writetxt
    //the slice method takes the last letter of "text" and returns false if it is equal to any of the operators in the cases of the switch statement
    switch(text.slice(-1)){
        case "/":
        case "x":
        case "-":
        case "+":
      return false
    }
    return true;
  }

//This function updates the text on the calculator when its button is pressed. If the equal to (=) sign  is pressed, it will rather call validate() and calculateResult() functions to validate to see if there is a valid maths to be calculated and then do the calculation accordingly
  pressbtn(text){
    if (text == '='){

      return this.validate() && this.calculateResult();
    }
    if(this.state.writetxt.length > 19) return;
    this.setState({writetxt: this.state.writetxt+text})
  }

//This function takes care of operations
  operatebtn(operate){
  if (operate == 'DEL'){
    this.setState({
      resultsTxt: ""
    })
  }
  //the switch case takes the operation button being pressed and work with it
  //it uses "indexOf" to check if the first operator is not presssed continuously
  switch(operate){
    case 'DEL':
    let text = this.state.writetxt.split('')
    text.pop()
    this.setState({ writetxt : text.join('') })
    break;

    case '/':
      const lasChar1 = this.state.writetxt.split("").pop()
      if(this.state.writetxt.length > 19) return
      if (this.ops.indexOf(lasChar1) > 0) return
      if (this.state.writetxt == "") return
      this.setState({writetxt:this.state.writetxt+operate})
      break;

    case "x":
      const lasChar2 = this.state.writetxt.split("").pop()
      if(this.state.writetxt.length > 19) return
      if (this.ops.indexOf(lasChar2) > 0) return
      if (this.state.writetxt == "") return
      this.setState({writetxt:this.state.writetxt+"x"})
      break;
    case "-":
      const lasChar3 = this.state.writetxt.split("").pop()
      if(this.state.writetxt.length > 19) return
      if (this.ops.indexOf(lasChar3) > 0) return
      if (this.state.writetxt == "") return
      this.setState({writetxt:this.state.writetxt+operate})
      break;
    case "+":
      const lasChar4 = this.state.writetxt.split("").pop()
      if(this.state.writetxt.length > 19) return
      if (this.ops.indexOf(lasChar4) > 0) return
      if (this.state.writetxt == "") return
      this.setState({writetxt:this.state.writetxt+operate})
      break;


  }
  }

  render() {

    //This section creates the (numbers and special keys) buttons
    let btnrows = [];
    let nums = [[1,2,3],[4,5,6],[7,8,9],['.',0,'=']];
    for (let i=0; i<4; i++){
      btnrow=[];
      for (let j=0; j<3; j++){
        btnrow.push(<TouchableOpacity key={nums[i][j]} onPress={()=> {this.pressbtn(nums[i][j])}}  
        style={styles.numbtn}><Text style={styles.btntxt}>{nums[i][j]}</Text></TouchableOpacity>);
      }
      btnrows.push(<View key={i} style = {styles.numbtn}>{btnrow}</View>);
    }

    //This section creates the (operations) buttons
    let btnops=[];
    for (let k=0; k<5; k++){
      let btnop=[];
      btnop.push(<TouchableOpacity key={this.ops[k]} style={styles.operation} onPress={()=> {this.operatebtn(this.ops[k])}} ><Text style={styles.btntxt}>{this.ops[k]}</Text></TouchableOpacity>);
      btnops.push(<View  key={k} style = {styles.operation}>{btnop}</View>);

    }

    //the return section of the render 
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
      flex:6,
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