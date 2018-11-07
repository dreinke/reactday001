import React, { Component } from 'react'
import styled from 'styled-components'

import Todo from './Todo'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: darkcyan;
`
const Content = styled.div`
  width: 30vw;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 0 10px 0 black;
  background-color: white;
`
const Title = styled.h1`
  width: 100%;
  font-family: cursive;
  margin: 0;
`

export default class App extends Component {
  render () {
    return (
      <Container>
        <Content>
          <Title>Todo list</Title>
          <Todo />
        </Content>
      </Container>
    )
  }
}
