import React from 'react';
import { StyleSheet, Text, TextInput, SafeAreaView, View } from 'react-native';
import { SERVER_NAME } from '../config';

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
    this.setState(number)
    fetch(`http://${SERVER_NAME}/api/dictionary`, {
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
    const results = this.state.results.map((match, index) =>
      <li key={index}>
        {match.text}
      </li>
    )
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <View>
            <TextInput
              style={styles.textInput}
              keyboardType="decimal-pad"
              placeholder="Insert number"
              onChangeText={(text) => this.onChange({text})}
              maxLength={16}
            />
            <Text style={styles.results}>
              {results}
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 10
  },
  textInput: {
    height: 57,
    padding: 15,
    fontSize: 32,
    borderColor: 'gray',
    borderWidth: 1
  },
  results: {
    padding: 10,
    fontSize: 32,
  }
});
