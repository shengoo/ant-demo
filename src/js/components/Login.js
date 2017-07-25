import React from 'react'
import {connect} from 'react-redux'
import {login,logout} from "../actions/index"

let Login = ({dispatch})=>{
    return(
        <div>
            <button onClick={e=>{
                dispatch(login(1,2))
            }}>Login</button>
            <button onClick={e=>{
                dispatch(logout())
            }}>Logout</button>
        </div>
    )
}
Login = connect()(Login)

export default Login;