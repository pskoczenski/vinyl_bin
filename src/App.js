import React from "react";
// import "./styles/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import AlbumShow from "./AlbumShow";
import Collection from "./Collection"
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => {

  return (
    <AuthProvider>
      <CssBaseline />
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/album" component={AlbumShow} />
          <PrivateRoute exact path="/collection" component={Collection} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
