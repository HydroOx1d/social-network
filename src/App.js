import React, {useEffect} from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import News from "./components/News/News";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import LoginContainer from "./components/Login/LoginContainer";
import { connect } from "react-redux";
import { initializeAppThunk } from "./redux/appReducer.ts";

const App = (props) => {
  useEffect(() => {
    props.initializeAppThunk();
  })
  if (!props.initialized) {
    return <h1>Loading...</h1>;
  }
  return (
    <BrowserRouter>
      <div className="app">
        <div className="container">
          <HeaderContainer />
          <Routes>
            <Route path="/" element={<Navigate to={'/profile'}/>}/>
            <Route path={"/profile/*"} element={<ProfileContainer />} />
            <Route path={"/messages/*"} element={<MessagesContainer />} />
            <Route path={"/news"} element={<News />} />
            <Route path={"/users"} element={<UsersContainer />} />

            <Route path={"/login"} element={<LoginContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  };
};

export default connect(mapStateToProps, { initializeAppThunk })(App);
