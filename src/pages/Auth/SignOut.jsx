import React, {useEffect} from 'react';
import {withRouter} from "react-router-dom";

function SignOut(props) {
    useEffect(()=>{
        localStorage.removeItem("authorization")
        props.history.push("/login")
    },[])
    return (
        <div></div>
    );
}

export default withRouter(SignOut);