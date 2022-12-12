import React from 'react'
import Button from '../button/button'
import './deleted.scss'

interface IDeletedProps {
  deleteEvent: Function
}

class Deleted extends React.Component<IDeletedProps> {

  handleSubmit = () => {
    this.props.deleteEvent();
  }
  render(): JSX.Element {
    return (
      <div className="popup">
        <div className='deleted'>
          <div className="deleted__cross cross">
            <div className="deleted__cross-line"></div>
            <div className="deleted__cross-line"></div>
          </div>
          <div className="deleted__body">
            <div className="deleted__title">Delete movie</div>
            <div className="deleted__text">
              Are you sure you want to delete this movie? 
            </div>
          </div>
          <div className="deleted__container">
            <Button onClick={this.handleSubmit} type='full' text='confirm' class='deleted__button deleted__in' />
          </div>
        </div>
      </div>
    )
  }
}

export default Deleted
