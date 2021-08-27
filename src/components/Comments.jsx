import AddComment from "./AddComment";
import CommentList from "./CommentList";
import { Component } from "react";

class Comments extends Component {
    render () {
            return(
            <>
            <CommentList imdbID={this.props.imdbID}/>
            <AddComment imdbID={this.props.imdbID}/>
            </>
        )
    }
}

export default Comments