import React from 'react'
import './input.scss'

interface IPropsInput {
  placeholder?: string
  type?: string
  onInputChange?: Function
  value?: string
  description?: string
  class?: null | undefined | string
  name?: string;
  defaultValue?: string;
}
interface IStateInput {
  state?: string
}

class Input extends React.Component<IPropsInput, IStateInput> {
  // constructor() {
  //   super()
  // }

  render(): JSX.Element {
    return (
      <>
        <div className='entry'>
          <div className='entry__descr'>{this.props.description}</div>
          <input
            defaultValue={this.props.defaultValue}
            name={this.props.name}
            value={this.props.value}
            onChange={(event) => this.props.onInputChange!(event)}
            className={'entry__input ' + (this.props.class ? this.props.class : '')}
            placeholder={this.props.placeholder}
            type={this.props.type}
          ></input>
        </div>
      </>
    )
  }
}

export default Input
