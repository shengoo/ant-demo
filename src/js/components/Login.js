import React from 'react'
import {connect} from 'react-redux'
import {login,logout} from "../actions/index"

let Login = ({dispatch})=>{
    return(
        <div>
            <a onClick={e=>{
                dispatch(login(1,2))
            }}>Login</a>
        </div>
    )
}
Login = connect()(Login)

export default Login;