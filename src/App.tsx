import React, { SyntheticEvent } from 'react'
import Modal from './components/modal/modal'
import UI from './components/ui/ui'
import { fakedata } from './assets/fakeResponse/fake'
import AddEditMovie from './components/addeditmovie/addeditmovie'
import Deleted from './components/delete/deleted'

export interface IFakeData {
  id: string
  title: string
  year: string
  src: string
  type: string
  rating: string
  duration: string
  text: string
}

interface IAppState {
  search: string
  passingElement: JSX.Element | undefined
  type: string
  sorting: string
  data?: IFakeData[]
  showContextMenu: boolean
  showMovieInfo: boolean
  MovieInfo: IFakeData | undefined
  functionToSubmit: Function 
}

interface IAppProps {
  prop?: string
}

export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props)

    this.state = { 
      search: '',
      passingElement: undefined,
      type: 'all',
      sorting: '',
      showContextMenu: false,
      showMovieInfo: false,
      MovieInfo: undefined,
      functionToSubmit: () => {}
    }
  }

  public changeSearchParams = (field: string, value: string) => {
    this.setState((prev) => {
      return {
        ...prev,
        [field]: value,
      }
    })
  }

  public toggleModal = (value: JSX.Element): void => {
    this.setState((prev) => {
      return {
        ...prev,
        passingElement: value 
      }
    })
  }

  public onClickFunction = (event: SyntheticEvent):void => {
    const target = event.target as HTMLElement
    if (!target.closest('.popup') || target.closest('.cross')) {
      this.setState((prev) => {
        return {
          ...prev,
          passingElement: undefined 
        }
      })
    }
  }

  public showContextMenu = (value: boolean) => {
    this.setState((prev) => {
      return {
        ...prev,
        showContextMenu: true
      }
    })
  }

  public editMovie = (id: number) => {
    this.toggleModal(<AddEditMovie />)
    this.setState((prev) => {})
  }

  public deleteMovie = (id: number) => {
    this.toggleModal(<Deleted />)
    
    const deleteM = ():void => {
      const dArray = this.state.data?.splice(id, 1) 
      this.setState((prev) => {
        return {
          ...prev,
          data: dArray
        }
      })
    }

    this.setState((prev) => {
      return {
        ...prev,
        functionToSubmit: deleteM
      }
    })
  } 

  public showMovieInfo = (value?: IFakeData): void => {
    this.setState((prev) => {
      return {
        ...prev,
        showMovieInfo: value ? true : false,
        MovieInfo: value ? value : prev.MovieInfo 
      }
    })
  }

  public globalOnClick = (event: React.MouseEvent) => {
    console.log('globalClick');
    console.log((event.target as HTMLElement).closest('.movie'))
    console.log(this.state)
    console.log(this.state.showContextMenu)
    if (this.state.showContextMenu) {
      this.setState((prev) => {
        return {
          ...prev,
          showContextMenu: false
        }
      })
    } else {
      const closest = (event.target as HTMLElement).closest('.movie')
      if (closest) {
        this.showMovieInfo(fakedata[+((closest as HTMLElement).dataset.id! as string)])
      }
    }
  }

  componentDidMount(): void {
    console.log(fakedata)
    this.setState((prev) => {
      return {
        ...prev,
        data: fakedata 
      }
    })
  }

  render(): JSX.Element {
    return (
      <>
        {this.state.passingElement && <Modal onClickFunction={this.onClickFunction} passingElement={this.state.passingElement} toggleModal={this.toggleModal}/>}
        <UI movieInfo={this.state.MovieInfo} showMovieF={this.showMovieInfo} showMovieInfo={this.state.showMovieInfo} globalOnClick={this.globalOnClick} showContextMenu={this.state.showContextMenu} toContextMenuFunctions={{showContextMenu: this.showContextMenu, editMovie: this.editMovie, deleteMovie: this.deleteMovie}} changeSearchParams={this.changeSearchParams} toggleModal={this.toggleModal} data={this.state.data}/>
      </>
    )
  }
}
