import React from 'react';
import { AppLoading } from 'expo';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, List, ListItem, Thumbnail, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import SignupContainer from './SignupContainer';



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      currentPage: 'signupForm'
    };
  }

  // async componentDidMount() {
  //   await Font.loadAsync({
  //     Roboto: require('native-base/Fonts/Roboto.ttf'),
  //     Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
  //     ...Ionicons.font,
  //   });
  //   this.setState({ isReady: true });
  // }

  render() {

    return (
      <Container>
        <Header/>
        <SignupContainer/>
      </Container>
    );
  }
}

