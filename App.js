import React, { Component } from 'react';
import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity, Picker} from 'react-native';
import App2 from './App2.js';

export default class HelloWorldApp extends Component {

  constructor() {
    super();
    this.state = {
      loading: true,
      selectedCurrency:'',
      dataSource: {
        
      },
      nextClicked:false
    };
  }
 
//Constructor call..
  //Welcome Page
  render() {
    return (
      (!this.state.nextClicked)(
      <View style={styles.viewPpts}>      
        <Text style={styles.bigBlack}> My First Application </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'flex-end', marginBottom: 50, flex: 1, padding: 20 }}>
          <View style={{ flex: 1 }}>
            <Text style={styles.globalFont}>Select Country</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Picker onValueChange={(itemValue, itemIndex) =>
                      this.setState({selectedCurrency: itemValue})}>
              <Picker.Item label="USD" value="USD" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </View>
        </View>
        <View style={{ flexDirection: 'row', backgroundColor: '#0a94c9', width: '100%', justifyContent: 'center' }}>
          <View style={{ flex: .2 }}>
            <TouchableOpacity> 
               <Text style={styles.blue}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>)
      (this.state.nextClicked)(<App2 selectedCurrency={this.state.selectedCurrency}/>)
    );
    }
}

 
const styles = StyleSheet.create({

  viewPpts: {
    backgroundColor: '#d66b00',
    flex: 1,
    alignItems: "center",
  },
  bigBlack: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  },
  blue: {
    color: 'black',
    margin: 10,
    fontSize: 30
  },
  next: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 50,
  },
  globalFont: {
    fontSize: 20
  }
});
