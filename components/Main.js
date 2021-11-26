import React, { Component } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, TextInput } from 'react-native';
import data from '../Settings.json'
import MyButton from './MyButton'

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}> Register Node App </Text>
        </View>
        <View style={styles.formView}>
          <Text style={styles.inputName}>username</Text>
          <TextInput style={styles.input} value={this.state.username} onChangeText={text => this.setState({username: text})}/>

          <Text style={styles.inputName}>password</Text>
          <TextInput style={styles.input} value={this.state.password} onChangeText={text => this.setState({password: text})}/>
        </View>

        <MyButton>
        </MyButton>

      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: data.colors.primary,
  },
  title:{
    fontSize: 40,
    fontWeight: 'bold'
  },
  formView:{
    flex: 3,
 
    padding: '5%',
  },
  inputName:{
    fontSize: 20,
  },
  input:{
    fontSize: 30,
    color: data.colors.textSecondary,

  }

});