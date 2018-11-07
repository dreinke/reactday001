import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

import TodoItem from './TodoItem'

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`
const Field = styled.input`
  width: 100%;
  border: none;
  font-size: 20px;
  padding: 10px;
  outline: none;
`

export default class Todo extends Component {
  constructor (props) {
    super(props)

    this.state = {
      list: []
    }
  }

  // // persist data
  // componentDidMount () {
  //   const storage = localStorage.getItem('list')

  //   if (storage) {
  //     this.setState({ list: JSON.parse(storage) })
  //   }
  // }

  // componentDidUpdate () {
  //   localStorage.setItem('list', JSON.stringify(this.state.list))
  // }

  onSubmit (e) {
    const form = e.target
    const value = form.newItem.value

    e.preventDefault()

    if (value) {
      this.setState({
        list: [
          ...this.state.list,
          { text: value, checked: false }
        ]
      })

      form.reset()
    }
  }

  onCheck (i) {
    const newList = [ ...this.state.list ]

    newList[i].checked = !newList[i].checked
    this.setState({ list: newList })
  }

  onDelete (i) {
    const newList = [ ...this.state.list ]

    newList.splice(i, 1)
    this.setState({ list: newList })
  }

  render () {
    const { list } = this.state

    return (
      <Fragment>
        <List>
          {
            list.map((item, i) =>
              <TodoItem
                key={i}
                checked={item.checked}
                onCheck={() => this.onCheck(i)}
                onDelete={() => this.onDelete(i)}
              >{ item.text }</TodoItem>
            )
          }
        </List>
        <form onSubmit={this.onSubmit.bind(this)}>
          <Field type='text' name='newItem' placeholder='+' autoFocus />
        </form>
      </Fragment>
    )
  }
}
