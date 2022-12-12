import React from 'react';
import { IFakeData } from '../../App';
import './toggled-movie.scss';

interface IToggledMovieProps {
  elem: IFakeData | undefined
  showMovieInfo: Function
}

interface IToggledMovieState {
  state?: string
}

class ToggledMovie extends React.Component<IToggledMovieProps, IToggledMovieState> {

  render(): JSX.Element {
    return (
      <div className='togglemovie'>
          <div className='togglemovie__logo'>
            <div>
              <span className='togglemovie__logo-color'>netflixroulette</span>
            </div>
            <button onClick={() => {this.props.showMovieInfo()}}>Search</button>
          </div>
          <div className="togglemovie__flex">
            <div className="togglemovie__box">
              <img className='togglemovie__img' src={this.props.elem!.src} alt='alt' />
            </div>
            <div className="togglemovie__container">
              <div className="togglemovie__upper">
                <div className="togglemovie__title">{this.props.elem!.title}</div>
                <div className="togglemovie__rating">{this.props.elem!.rating}</div>
              </div>
              <div className="togglemovie__type">{this.props.elem!.type}</div>
              <div className="togglemovie__center">
                <div className='togglemovie__year'>{this.props.elem!.year}</div>
                <div className='togglemovie__duration'>{this.props.elem!.duration}</div>
              </div>
              <div className='togglemovie__text'>{this.props.elem!.text}</div>
            </div>
          </div>
      </div>
    )
  }
}

export default ToggledMovie
