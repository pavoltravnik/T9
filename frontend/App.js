import React from 'react';
import { StyleSheet, Text, TextInput, SafeAreaView, View, FlatList } from 'react-native';
import { SERVER_NAME } from './config';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      number: '',
      results: []
    };
  }

  componentDidMount() {

  }


  onChange = (number) => {
    this.setState(number);
    number = parseInt(number.number, 0);
    fetch(`https://${SERVER_NAME}/api/dictionary`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        number,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          results: responseJson.resp,
        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render() {
    const results = this.state.results
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={styles.container}>
          <View
            style={styles.search}
          >
            <TextInput
              style={styles.textInput}
              keyboardType="decimal-pad"
              placeholder="Insert number"
              onChangeText={(number) => this.onChange({number})}
              maxLength={16}
            />
          </View>
          <View
            style={styles.results}
          >
            { !this.state.isLoading &&
              <FlatList
                style={styles.FlatList}
                data={results}
                renderItem={({item}) => <Text style={styles.item}>{item.text}</Text>}
                keyExtractor={(item, index) => index.toString()}
              />
            }
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 10,
    flex:1,
  },
  textInput: {
    height: 57,
    padding: 15,
    fontSize: 32,
    borderColor: 'gray',
    borderWidth: 1
  },
  search: {
    flex: 1,
  },
  results: {
    flex: 7,
  },
  FlatList: {
    padding: 10,
    fontSize: 22,
    height: 50,
  }
});
