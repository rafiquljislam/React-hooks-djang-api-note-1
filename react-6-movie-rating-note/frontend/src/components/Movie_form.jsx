import React, { Component } from 'react';

class Movie_form extends Component {
    state={
        editeMovie: this.props.movie
    }

    cancleClicked = () => {
        this.props.cancelForm();
    }

    onChangeHandeler = (e) => {
        let movie = this.state.editeMovie;
        movie[e.target.name] = e.target.value;
        this.setState({editeMovie: movie})
    }

    saveClicked = (e) => {
        console.log(this.state.editeMovie)
        const url = `${process.env.REACT_APP_API_URL}/api/movies/`
        const token = this.props.token
        fetch(url, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify(this.state.editeMovie)
        })
        .then(res => res.json())
        .then(ress => this.props.newMovie(ress))
        .catch(err => console.log(err))
    }

    updateClicked = (e) => {
        console.log(this.state.editeMovie)
        const url = `${process.env.REACT_APP_API_URL}/api/movies/${this.props.movie.id}/`
        const token = this.props.token
        fetch(url, {
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify(this.state.editeMovie)
        })
        .then(res => res.json())
        .then(ress => this.props.editeMovie(ress))
        .catch(err => console.log(err))
    }

    render() {

        const isDisable = this.state.editeMovie.title.length == 0 || 
                            this.state.editeMovie.description.length == 0;

        return (
            <div className="my-3">
                <span>Title</span> <br/>
                <input type="text" 
                    name='title'
                    value={this.props.movie.title} 
                    onChange={this.onChangeHandeler}
                /> <br/>
                <span>Description</span> <br/>
                <input type="text" 
                    name='description'
                    value={this.props.movie.description} 
                    onChange={this.onChangeHandeler}
                /> <br/>
                {this.props.movie.id ? (
                    <button 
                    className='my-1 btn btn-info' 
                    onClick={this.updateClicked} 
                    disabled={isDisable}
                    >Update</button>
                    ) : (                        
                    <button 
                    className='my-1 btn btn-info' 
                    onClick={this.saveClicked} 
                    disabled={isDisable}                    
                    >Add</button>
                )}
                <button className='m-1 btn btn-info' onClick={this.cancleClicked}>Cancel</button>
            </div>
        );
    }
}

export default Movie_form;