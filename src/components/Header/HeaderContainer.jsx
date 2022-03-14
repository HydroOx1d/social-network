import React from 'react'
import Header from './Header'
import './Header.css'
import axios from 'axios'
import {connect} from 'react-redux'
import {setAuthData, setIsAuth} from '../../redux/authReducer'

class HeaderContainer extends React.Component {

  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
      withCredentials: true
    }).then(res => {
      this.props.setIsAuth(res.data.resultCode);
      if(res.data.resultCode === 0) { 
        this.props.setAuthData(res.data.data);
      }
    }) 
  }


  render() {
    return <Header {...this.props}/>
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth,
  }
}

export default connect(mapStateToProps, {setAuthData, setIsAuth})(HeaderContainer)
