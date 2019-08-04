import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity, Picker} from 'react-native';

class App2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedCurrency:"",
            dataSource: {
        
            },
            selectedCurrency2:"",
            conversionRate:0
        }
    }

    render(props){
        this.setState({selectedCurrency:props.selectedCurrency});
        return(
            <View>
            <View style={{ flex: 1 }}>
            <Picker onValueChange={(itemValue, itemIndex) =>
                      {                      
                      this.setState({selectedCurrency2: itemValue});
                      convert();
                    }}>
              <Picker.Item label="USD" value="USD" />
              <Picker.Item label="INR" value="INR" />
            </Picker>
          </View>
          <Text style={styles.blue}>{this.state.conversionRate}</Text>
          </View>
        );

    }

    convert = ()=>{
        this.setState({conversionRate:this.state.dataSource[this.state.selectedCurrency2]});
    }


    componentDidMount() {
        fetch("https://api.exchangerate-api.com/v4/latest/{this.state.selectedCurrency}")
          .then(response => response.json())
          .then((responseJson) => {
            console.log('mydata', responseJson);
             this.setState({
              loading: false,
              dataSource: responseJson
             })
          })
          .catch(error => console.log(error)) //to catch the errors if any
      }

}

export default App2;