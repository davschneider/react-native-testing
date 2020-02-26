import React from 'react';
// import { Text } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Radio, Button, Text } from 'native-base';


export default class SignupPageOne extends React.Component {
  render() {
    return (
      <Container>
        {/* <Header /> */}
        <Content>
          <Form>
            <Item fixedLabel>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item fixedLabel>
              <Label>User Name</Label>
              <Input />
            </Item>
            <Item fixedLabel>
              <Label>Password</Label>
              <Input />
            </Item>
            <Item fixedLabel>
              <Label>Confirm Password</Label>
              <Input />
            </Item>
            <Item fixedLabel last>
              <Radio
                  color={"#f0ad4e"}
                  selectedColor={"#5cb85c"}
                  selected={false}
                />
              <Label>I agree to the terms and privacy policy</Label>
            </Item>
          </Form>
          <Button rounded>
            <Text>SIGN UP</Text>
          </Button>
          <Text>
            Already have an account? <a href=''>Sign in</a>
          </Text>
        </Content>
      </Container>
    );
  }
}
