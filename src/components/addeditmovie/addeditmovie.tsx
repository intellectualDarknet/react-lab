import React, { SyntheticEvent } from 'react'
import { IFakeData } from '../../App'
import Button from '../button/button'
import Input from '../input/input'
import Select from '../select/select'
import './addeditmovie.scss'

interface IAddEditMovieProps {
  state?: IFakeData[]
  obj?: IFakeData
  class?: string
  submitFunction: Function
}

interface IAddEditMovieState {
  id: string
  title: string,
  year: string,
  src: string
  rating: string
  type: string
  duration: string
  text: string
}

export default class AddEditMovie extends React.Component<IAddEditMovieProps, IAddEditMovieState> {
  constructor(props: IAddEditMovieProps) {
    super(props)

    this.state = {
      id: this.props.obj?.id ?? '',
      title: this.props.obj?.title ?? '',
      year: this.props.obj?.year ?? '',
      src:  this.props.obj?.src ?? '',
      rating: this.props.obj?.rating ?? '',
      type: this.props.obj?.type ?? '',
      duration: this.props.obj?.duration ?? '',
      text: this.props.obj?.text ?? '',
    }
  }

  public onInputChange = (event: SyntheticEvent): void => {
    console.log((event.target as HTMLSelectElement) )
    const name = (event.target as HTMLInputElement | HTMLTextAreaElement).name
    const value = (event.target as HTMLInputElement | HTMLTextAreaElement).value
    this.setState((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  public reset = (): void => {
    this.setState((prev) => {
      return {
        ...prev,
        textarea: '',
        title: '',
        date: '',
        url:  '',
        rating: '',
        genre: '',
        runtime: '',
      }
    })
  }

  public componentDidMount(): void {
    console.log(this.props.state)
  }

  public submit = (e: SyntheticEvent): void => {
    if (Object.values(this.state).includes('')) {
      console.log('not full')
    } else {
      let state: IFakeData[];
      console.log('full')
      this.reset()
      if (this.props.obj) {
        this.props.state
        state = this.props.state?.map((elem) => elem.id === this.props.obj?.id ? {...this.state} : elem)!
      } else {
        state = [this.state].concat([...this.props.state!]);
      }
      this.props.submitFunction(state)
    }
  }

  render(): JSX.Element {
    return (
      <div className="popup">
        <form onSubmit={(e: SyntheticEvent) => {
          e.preventDefault()
          this.submit(e)
        }}className='addeditmovie'>
        <div className="addeditmovie__wrapper">
         <div className='cross'>
          <div className="addeditmovie__cross">
           <div className="addeditmovie__cross-line"></div>
           <div className="addeditmovie__cross-line"></div>
          </div>
        </div> 
      
        <div className='addeditmovie__content'>
          <div className='addeditmovie__edit'>{this.props.obj ? 'edit movie' : 'add movie'}</div>
          <div className="addeditmovie__line">
          <Input
            defaultValue={this.props.obj?.title}
            name='title'
            class={'addeditmovie__title'}
            description='title'
            value={this.state.title}
            onInputChange={this.onInputChange}
            placeholder='title'
            type='input'
          />
          <Input
            defaultValue={this.props.obj?.year}
            name='year'
            class={'addeditmovie__date'}
            description='release date'
            value={this.state.year}
            onInputChange={this.onInputChange}
            placeholder='movie url'
            type='date'
          />
          
          </div>
          
          <div className="addeditmovie__line">
          <Input
            defaultValue={this.props.obj?.src}
            name='src'
            class={'addeditmovie__url'}
            description='movie url'
            value={this.state.src}
            onInputChange={this.onInputChange}
            placeholder='movie url'
            type='input'
          />
          <Input
            defaultValue={this.props.obj?.rating}
            name='rating'
            class={'addeditmovie__rating'}
            description='rating'
            value={this.state.rating}
            onInputChange={this.onInputChange}
            placeholder='rating'
            type='input'
          />
          
          </div>

          <div className="addeditmovie__line">

          <Select name='type' value={this.state.type} descrClass={'entry__descr'} descr={'genre'} onChangeSelect={this.onInputChange} multiple={true} array={['genre', 'crime','documentary','horror','comedy']} class='addeditmovie__genre'/>
          <Input
            defaultValue={this.props.obj?.duration}
            name='duration'
            class={'addeditmovie__runtine'}
            description='runtime'
            value={this.state.duration}
            onInputChange={this.onInputChange}
            placeholder='movie url'
            type='input'
          />
          
          </div>

          <div className="addeditmovie__area">
            <div className="addeditmovie__descr">overview</div>
            <textarea defaultValue={this.props.obj?.text} value={this.state.text} name='text' className='addeditmovie__textarea' onChange={(event) => this.onInputChange(event)}></textarea>
          </div>

          <div className="addeditmovie__buttons">
            <Button onClick={this.reset} type='hollow' text='reset' class='addeditmovie__button addeditmovie__reset' />
            <Button onClick={() => {}} type='full' text='submit' class='addeditmovie__button addeditmovie__submit' />
          </div>
        </div>
        </div>
    
        </form>
      </div>
    )
  }
}

