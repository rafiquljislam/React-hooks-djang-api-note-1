import React, { Component } from 'react';
var FrontAwesome = require('react-fontawesome');


class Movie_list extends Component {

    movieClicked = movie => evt => {
        this.props.movieClicked(movie)
    }

    removeClicked = movie => {
        const url = `${process.env.REACT_APP_API_URL}/api/movies/${movie.id}/`
        const token = this.props.token
        fetch(url, {
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        })
        .then(res => this.props.movieDeleted(movie))
        .catch(err => console.log(err))        
    }
    editClicked = movie => {
        this.props.editClicked(movie)
    }

    addNewMovie = () => {
        // console.log('add new movie clicked')
        this.props.addNewMovie()
    }

    render() 
    {return (
            <>
                {
                    this.props.movies.map(movie => {
                        return (
                            <div key={movie.id}>
                                <h5 style={{float:'left'}} onClick={this.movieClicked(movie)} >
                                    {movie.title}
                                </h5>
                                    < FrontAwesome name='edit' className="edicon" onClick={() => this.editClicked(movie)} />
                                    < FrontAwesome name='trash' className="edicon" onClick={() => this.removeClicked(movie)} />
                            </div>
                        )
                    })
                }
                <button className="btn btn-info" onClick={this.addNewMovie} >Add New</button>
            </>
        );
    }
}

export default Movie_list;