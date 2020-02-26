import React from 'react';
import { AppLoading } from 'expo';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, List, ListItem, Thumbnail, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components'

const StyledChallengeElement = styled(ListItem)`
  margin: 18px;
`;

export default function ChallengeElement() {

    return(
        <StyledChallengeElement 
              avatar>
              <Body>
                <Text>Flag Football</Text>
                <Text note>Piedmont Park</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
        </StyledChallengeElement>
    )
}