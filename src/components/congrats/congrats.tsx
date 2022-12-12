import React from 'react'
import './congrats.scss'

class Congrats extends React.Component {
  render(): JSX.Element {
    return (
      <div className="popup">
        <div className='congrats'>
          <div className="congrats__cross cross">
            <div className="congrats__cross-line"></div>
            <div className="congrats__cross-line"></div>
          </div>
          <div className="congrats__body">
            <div className="congrats__circle">
              <div className="congrats__sign"></div>
              <div className="congrats__sign"></div>
            </div>
            <div className="congrats__title">congratulations !</div>
            <div className="congrats__text">
              The movie has been added to &#10; database successfully 
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Congrats
