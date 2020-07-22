import React, { Component } from 'react';
import './App.css';
import Movie_list from './components/Movie_list';
import Movie_detale from './components/Movie_detale';
import Movie_form from './components/Movie_form';
import { withCookies } from 'react-cookie';

class App extends Component {

  state = {
    movies: [],
    selectedMovie: null,
    editedMovie: null,
    token: this.props.cookies.get('mr-token'),
  }

  componentDidMount(){
    if (this.state.token) {
      const url = 'http://127.0.0.1:8000/api/movies/'
      const token = this.state.token; 
      fetch(url, {
        method: 'GET',
        headers:{
          'Authorization': `Token ${token}`
        }
      })
      .then(res => res.json())
      .then(ress => this.setState({movies: ress}))
      .catch(err => console.log(err))
    } else {
      window.location.href = '/';
    }
  }

  movieClicked = movie =>{
    // console.log(movie)
    this.setState({selectedMovie: movie, editedMovie: null})
  }


  movieDeleted = selmovie =>{
    const movies = this.state.movies.filter( movie => movie.id != selmovie.id )
    this.setState({movies: movies, selectedMovie: null})
  }

  editClicked = movie => {
    // console.log(movie)
    this.setState({editedMovie: movie});
  }

  addNewMovie = () => {
    this.setState({editedMovie: {title: '', description: ''}});
  }
  cancelForm = () => {
    this.setState({editedMovie: null});
  }
  addMovie = movie => {
    this.setState({movies: [...this.state.movies, movie]})
  }
  logout = e => {
    this.props.cookies.remove('mr-token');
    window.location.href = '/';
  }

  render() {    
    return (
        <div className="container-fluid bg-dark text-light bhh">
          <h1 className='text-center'>Movie Rating App</h1>
          <h3 onClick={this.logout}>LogOut</h3>
          <div className="row mt-4">
            <div className="col-6">
            <h2 className='bg-light text-dark text-center my-4'>Movie name</h2>
              <Movie_list 
              movies={this.state.movies} 
              movieClicked={this.movieClicked} 
              movieDeleted={this.movieDeleted}
              editClicked={this.editClicked}
              addNewMovie ={this.addNewMovie}
              token ={this.state.token}
              />                
            </div>
            <div className="col-6">
            <h2 className='bg-light text-dark text-center my-4'>Movie Detail</h2>
              <div>
                { !this.state.editedMovie ? (
                  <Movie_detale 
                  movie={this.state.selectedMovie} 
                  updateMovie={this.movieClicked}
                  token ={this.state.token}
                  />
                ) : (
                  <Movie_form
                  movie={this.state.editedMovie} 
                  cancelForm={this.cancelForm}
                  newMovie={this.addMovie}
                  editeMovie={this.movieClicked}
                  token ={this.state.token}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      );
  }
}

export default withCookies(App);