import classNames from 'classnames'
import React from 'react'
import './button.scss'

interface IButtonProps {
  type: 'full' | 'hollow'
  text: string
  class?: string
  onClick: Function
  buttonType?: 'submit' | 'reset' | 'button' | ''
}

class Button extends React.Component<IButtonProps, IButtonProps> {
  render(): JSX.Element {
    return (
      <button
        type={this.props.buttonType !== '' ? this.props.buttonType : 'button'}
        onClick={() => this.props.onClick()}
        className={classNames(`button ${this.props.class ?? ''}`, {
          button_full: this.props.type === 'full',
          button_hollow: this.props.type !== 'full',
        })}
      >
        {this.props.text}
      </button>
    )
  }
}

export default Button
