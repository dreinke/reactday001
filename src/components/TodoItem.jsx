import React, { Component } from 'react'
import styled from 'styled-components'

const Item = styled.li`
  width: 100%;
  border: none;
  font-size: 20px;
  border-bottom: 1px solid grey;
  padding: 10px;

  text-decoration: ${props => props.checked ? 'line-through' : 'unset'};
`
const Delete = styled.button`
  border: none;
  cursor: pointer;
  color: red;
  float: right;
  font-size: 20px;

  &:before {
    content: 'X';
  }
`

export default class TodoItem extends Component {
  render () {
    const { checked, children, onCheck, onDelete } = this.props

    return (
      <Item checked={checked}>
        <span onClick={onCheck}>{ children }</span>
        <Delete onClick={onDelete} />
      </Item>
    )
  }
}
