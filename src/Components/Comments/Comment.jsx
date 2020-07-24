import React from "react"
import { Col, Image } from "react-bootstrap";

class Comments extends React.Component {
    constructor(props) {
        super(props);
    }
render(){
    console.log(this.props.comments)
    const comments = this.props
    return(

        <>
        {this.props.comments.length>0 ? (
            <>
                {this.props.comments.map(function (comments) {
                  return <p>{comments.text}</p>;
                })}
            </>
            ):(
                <p>There is no comments</p>
            )
        }
        </>
    )
}
}

export default Comments;