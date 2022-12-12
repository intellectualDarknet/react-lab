import React from 'react'
import { IFakeData } from '../../App'
import AddEditMovie from '../addeditmovie/addeditmovie'
import Button from '../button/button'
import Input from '../input/input'
import './header.scss'

interface IHeaderProps {
  showModal: Function
  onSearchChange: Function
  state: IFakeData[] | undefined
  buttonSubmitFunction: Function
}

class Header extends React.Component<IHeaderProps> {
  render(): JSX.Element {
    return (
      <div className='header'>
        <div className='header__wrapper'>
          <div className='header__logo'>
            <div>
              <span className='header__logo-color'>netflix</span>roulette
            </div>
            <Button
              onClick={() => {this.props.showModal(<AddEditMovie state={this.props.state} submitFunction={this.props.buttonSubmitFunction}/>)}}
              type='hollow'
              text='+ add movie'
              class='header__button'
            ></Button>
          </div>
          <div className='header__writing'>FIND YOUR MOVIE</div>
          <div className='header__main'>
            <Input
              onInputChange={this.props.onSearchChange}
              placeholder={'What do you want to watch?'}
            />
            <Button onClick={() => {}} type='full' text='SEARCH' />
          </div>
        </div>
      </div>
    )
  }
}

export default Header
