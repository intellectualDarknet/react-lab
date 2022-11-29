import classNames from 'classnames'
import React, { SyntheticEvent } from 'react'
import Select from '../select/select'
import './modes.scss'

interface IModesProps {
  props?: string
  changeType: Function
  changeSorting: Function
}

interface IModesState {
  state?: string
  type: string
}

class Modes extends React.Component<IModesProps, IModesState> {

  constructor(props: IModesProps) {
    super(props);
    this.state = {type: 'all'};
  }

  public toggleFilms = (event: SyntheticEvent) => {
    this.props.changeType((event.target as HTMLElement).id)
    this.setState({
      type: (event.target as HTMLElement).id
    })
  }

  public onChangeSelect = (event: SyntheticEvent) => {
    this.props.changeSorting((event.target as HTMLSelectElement).value)
  }

  render(): JSX.Element {
    return (
      <div className='modes'>
        <div className='modes__flex'>
          <div className='modes__types'>
            <span onClick={(e) => this.toggleFilms(e)} id='all'
            className={classNames(`modes__type`, {modes__type_active: this.state.type === 'all',})}
          >All</span>
            <span onClick={(e) => this.toggleFilms(e)} id='documentary' className={classNames(`modes__type`, {modes__type_active: this.state.type === 'documentary',})}>Documentary</span>
            <span onClick={(e) => this.toggleFilms(e)} id='comedy' className={classNames(`modes__type`, {modes__type_active: this.state.type === 'comedy',})}>Comedy</span>
            <span onClick={(e) => this.toggleFilms(e)} id='horror' className={classNames(`modes__type`, {modes__type_active: this.state.type === 'horror',})}>Horror</span>
            <span onClick={(e) => this.toggleFilms(e)} id='crime' className={classNames(`modes__type`, {modes__type_active: this.state.type === 'crime',})}>Crime</span>
          </div>
          <div className='modes__sort-n-date'>
            <span className='modes__type'>Sort By</span>
            <Select onChangeSelect={this.onChangeSelect} array={["Release date",2021,2020,2019,2018,2017]} class='modes__select'/>
            <span className='modes__sort'>Release Date</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Modes
