import React from 'react'
import {connect} from 'react-redux'

import {logout} from "../actions"

// class LoginStatus extends React.Component{
//
//     constructor(props){
//         super(props)
//         console.log(props)
//     }
//
//     // static contextTypes = {
//     //     redux: React.PropTypes.object
//     // }
//
//
//     componentDidMount () {
//         // this.context.redux.getState()
//         console.log(this)
//     }
//
//     render(){
//         return(
//             <div>USER:{this.props.user.username}</div>
//         )
//     }
// }
//
// const mapStateToProps = (state, ownProps) => {
//     return {
//         user: state.user
//     }
// }
//
// export default connect(mapStateToProps)(LoginStatus)

const status = ({user, dispatch}) => {
    const {username} = user;
    return (
        <div>USER:{username}
            <a onClick={e => {
                dispatch(logout())
            }}>Logout
            </a>
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.user
});

const LoginStatus = connect(
    mapStateToProps
)(status);

export default LoginStatus