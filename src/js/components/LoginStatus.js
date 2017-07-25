import React from 'react'
import {connect} from 'react-redux'

import * as actions from '../actions'

class LoginStatus extends React.Component{

    constructor(props){
        super(props)
        console.log(props)
    }

    // static contextTypes = {
    //     redux: React.PropTypes.object
    // }


    componentDidMount () {
        // this.context.redux.getState()
        console.log(this)
    }

    render(){console.log(this.props)
        return(
            <div>USER:{this.props.user.username}</div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state)
    console.log(ownProps); // ownProps
    return {
        username: state.user.username
    }
}

export default connect(state=>state,actions)(LoginStatus)

// const status = ({username})=>{
//     const { name } = this.props
//     return (
//     <div>USER:{name}</div>
// )}
//
// const mapStateToProps = (state) => ({
//     username: state.user.username
// })
//
// const LoginStatus = connect(
//     mapStateToProps
// )(status)
//
// export default LoginStatus