import logo from "./logo.svg";
import "./App.css";
import { Design } from "./components/Design/pages/index";
import ReduxApi from "./components/Redux-crud";
import SimpleRedux from "./components/simple-redux";
import { Notfound } from "./components/notfound/notfound";
import { Home } from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Pagethree } from "./components/Multi-select/pagethree";
import { Login } from "./components/Multi-select/index";

function App() {
  return (
    <div className="App">
      {/* <SimpleRedux /> */}
      {/* <ReduxApi /> */}
      <Router>
        <Routes>
        <Route path="/" exact element={<Home/>} />
          <Route path="/design" exact element={<Design />} />
          <Route path="/reduxapi" exact element={<ReduxApi />} />
          <Route path="*" element={<Notfound />} />
          <Route path="/login" exact element={<Login/>} />
          <Route path="/page/:name" exact element={<Pagethree/>} />
          
        </Routes>
      </Router>

    </div>
  );
}

export default App;
