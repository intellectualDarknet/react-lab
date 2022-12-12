import classNames from 'classnames'
import React, { SyntheticEvent } from 'react'
import Select from '../select/select'
import './modes.scss'

interface IModesProps {
  props?: string
  changeSearchParams: Function
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
    this.props.changeSearchParams('type', (event.target as HTMLElement).id)
    this.setState({
      type: (event.target as HTMLElement).id
    })
  }

  public onChangeSelect = (event: SyntheticEvent) => {
    this.props.changeSearchParams('sorting', (event.target as HTMLSelectElement).value)
  }

  render(): JSX.Element {
    return (
      <div className='modes'>
        <div className='modes__flex'>
          <div className='modes__types'>
            <span onClick={(e) => this.toggleFilms(e)} id='all'
            className={classNames(`modes__type`, {modes__type_active: this.state.type === 'all',})}
          >All</span>
            <span data-name='type' onClick={(e) => this.toggleFilms(e)} id='documentary' className={classNames(`modes__type`, {modes__type_active: this.state.type === 'documentary',})}>Documentary</span>
            <span data-name='type' onClick={(e) => this.toggleFilms(e)} id='comedy' className={classNames(`modes__type`, {modes__type_active: this.state.type === 'comedy',})}>Comedy</span>
            <span data-name='type' onClick={(e) => this.toggleFilms(e)} id='horror' className={classNames(`modes__type`, {modes__type_active: this.state.type === 'horror',})}>Horror</span>
            <span data-name='type' onClick={(e) => this.toggleFilms(e)} id='crime' className={classNames(`modes__type`, {modes__type_active: this.state.type === 'crime',})}>Crime</span>
          </div>
          <div className='modes__sort-n-date'>
            <div className='modes__type modes__sort-by'>Sort By</div>
            <Select onChangeSelect={this.onChangeSelect} array={["Release date",2021,2020,2019,2018,2017]} class='modes__select'/>
          </div>
        </div>
      </div>
    )
  }
}

export default Modes
