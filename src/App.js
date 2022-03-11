import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import News from "./components/News/News";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="container">
          <Header />
          <Routes>
            <Route path={"/profile/*"} element={<ProfileContainer />} />
            <Route path={"/messages/*"} element={<MessagesContainer />} />
            <Route path={"/news"} element={<News />} />
            <Route path={"/users"} element={<UsersContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
