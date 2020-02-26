import React from 'react';
import { AppLoading } from 'expo';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, List, ListItem, Thumbnail, Text, View } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import SignupPageOne from './SignupPageOne';

export default class SignupContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            favoriteSports: [],
            photo: '',
            team: ''
        }
    }

    render() {
        return(
            <View>
                <SignupPageOne/>
            </View>
        );
    }
}