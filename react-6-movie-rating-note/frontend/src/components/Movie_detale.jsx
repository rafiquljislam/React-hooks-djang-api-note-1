import React, { Component } from 'react';
var FrontAwesome = require('react-fontawesome');

class Movie_datele extends Component {

    state ={
        highlighted : -1,
    }
    hilighetRate = high => evt =>{
        this.setState({highlighted: high})
    }
    rateClicked= stars => evt => {
        const url = `${process.env.REACT_APP_API_URL}/api/movies/${this.props.movie.id}/rate_movie/`
        const token = this.props.token
        fetch(url, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify({stars: stars+1})
        })
        .then(res => res.json())
        .then(ress => this.getDetails())
        .catch(err => console.log(err))
    }

    getDetails = () => {
        const url = `${process.env.REACT_APP_API_URL}/api/movies/${this.props.movie.id}/`
        const token = this.props.token
        fetch(url, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        })
        .then(res => res.json())
        .then(ress => this.props.updateMovie(ress))
        .catch(err => console.log(err))
    }

    render() {
        const mov = this.props.movie
        return (
            <>
            {mov ? 
                (
                    <>
                    <h3 key={mov.id}>{mov.description}</h3>
                    < FrontAwesome name='star' className={mov.avg_rating >0 ? 'orange' : ''} />
                    < FrontAwesome name='star' className={mov.avg_rating >1 ? 'orange' : ''} />
                    < FrontAwesome name='star' className={mov.avg_rating >2 ? 'orange' : ''} />
                    < FrontAwesome name='star' className={mov.avg_rating >3 ? 'orange' : ''} />
                    < FrontAwesome name='star' className={mov.avg_rating >4 ? 'orange' : ''} />
                    <span>({mov.avg_rating}){mov.no_of_ratings}</span>
                    <div className="">
                        <h2>Rate it !!!</h2>
                        {[...Array(5)].map((e, i) => {
                            return < FrontAwesome key={i} name='star' className={this.state.highlighted > i-1 ? 'purpul' : ''}
                                onMouseEnter={this.hilighetRate(i)} onMouseLeave={this.hilighetRate(-1)}
                                onClick={this.rateClicked(i)}
                            />
                        })
                        }
                        {/* <h1>{this.state.highlighted}</h1> */}
                    </div>
                    </>
                ) 
                :
                 null
                }
            </>
        );
    }
}

export default Movie_datele;