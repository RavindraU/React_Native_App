import React, { Component } from 'react';
import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity, Picker} from 'react-native';

export default class HelloWorldApp extends Component {

  constructor() {
    super();
    this.state = {
      loading: true,
      dataSource: []
    };
  }
 
//Constructor call..

  // API Fetch
  componentDidMount() {
    fetch("https:// Text,api.exchangerate-api.com/v4/latest/USD")
      .then(response => response.json())
      .then((responseJson) => {
        console.log('mydata', responseJson);
        // this.setState({
        //  loading: false,
        //  dataSource: responseJson
        // })
      })
      .catch(error => console.log(error)) //to catch the errors if any
  }

  //Welcome Page
  render() {
    return (
      <View style={styles.viewPpts}>      
        <Text style={styles.bigBlack}> My First Application </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'flex-end', marginBottom: 50, flex: 1, padding: 20 }}>
          <View style={{ flex: 1 }}>
            <Text style={styles.globalFont}>Select Country</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Picker>
              <Picker.Item label="Java" value="java" />
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
      </View>
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
