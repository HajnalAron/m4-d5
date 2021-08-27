import { Component } from "react";

class DisplayMovies extends Component{
     render() {
        return(
            <>
            <div className="container-fluid margins mt-4">
                <div className="row">
                {this.props.movies.slice(0,6).map(movie => {return(


                <div className="col-2 mb-3"><img className="w-100 img-fluid mb-2 mb-lg-0 rounded" src={movie.Poster} alt="" /></div>
                
                
                
                )})}
                </div>
            </div> 
            </>
        )
    }
}

export default DisplayMovies