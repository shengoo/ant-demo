import React from 'react'
import {connect} from 'react-redux'
import {login} from "../actions/index"

let Login = ({dispatch})=>{
    console.log(arguments)
    return(
        <div>
            <button onClick={e=>{
                dispatch(login(1,2))
            }}>Login</button>
        </div>
    )
}
Login = connect()(Login)

export default Login;