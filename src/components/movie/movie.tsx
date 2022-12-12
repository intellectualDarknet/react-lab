import React from 'react';
import './movie.scss';

interface IMovieProps {
  src: string
  name: string
  type: string
  year: string
  onContextMenu: Function
  index: string
}

interface IMovieState {
  state?: string
}

class IMovie extends React.Component<IMovieProps, IMovieState> {

  render(): JSX.Element {
    return (
      <div data-id={this.props.index} className='movie'>
        <div onContextMenu={(e) => this.props.onContextMenu(e, this.props.index)} className='movie__wrapper'>
          <div className="movie__container">
            <img className='movie__img' src={this.props.src} alt='alt' />
          </div>
          <div className='movie__flex'>
            <div className='movie__title'>{this.props.name}</div>
            <div className='movie__year'>{this.props.year}</div>
          </div>
          <div className='movie__type'>{this.props.type}</div>
        </div>
      </div>
    )
  }
}

export default IMovie
