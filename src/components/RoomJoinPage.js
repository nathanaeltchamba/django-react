import React, { Component } from "react";
import { createRoot } from 'react-dom';

export default class RoomJoinPage extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return <p>This is the room join page</p>;
    }
}

// const roomJoinPage = document.getElementById('room-join');
// createRoot(roomJoinPage).render(<RoomJoinPage />);
