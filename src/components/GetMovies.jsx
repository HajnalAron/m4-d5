import { Component } from "react";
import DisplayMovies from "./DisplayMovies";


class GetMovies extends Component{
    state = {
        movies:[]
    }
    fetchMovies = async () => {
        try {
            let resp = await fetch(`http://www.omdbapi.com/?apikey=92c48a5d&s=${this.props.search}`)
                if (resp.ok) {
                    let fetchedMovies = await resp.json()
                    console.log(fetchedMovies)
                    this.setState({
                        movies:fetchedMovies.Search
                    })
                } 
            }
            catch(error) {
                console.log(error)
            } 
    }
    componentDidMount (){
        this.fetchMovies()
    }
    render() {
        return(
            <>
            <DisplayMovies movies={this.state.movies} />
            </>
        )
    }
}

export default GetMovies