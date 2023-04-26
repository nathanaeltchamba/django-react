import React, { Component } from "react";
import RoomJoinPage from './RoomJoinPage';
import CreateRoomPage from './CreateRoomPage';
import { BrowserRouter as Router, 
    Routes, 
    Route, 
    Link, 
    Redirect } from "react-router-dom";
import { createRoot } from 'react-dom';

export default class HomePage extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <Router>
            <Routes>
              <Route path="/">This is the Home Page
              </Route>
              <Route path="/join" element={<RoomJoinPage />} />
              <Route path="/create" element={<CreateRoomPage />} />
            </Routes>
          </Router>
        );
    }
}

// const homeDiv = document.getElementById('app');
// createRoot(homeDiv).render(<HomePage />);
