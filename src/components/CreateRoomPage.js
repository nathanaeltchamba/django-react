import React, { Component } from "react";
import { createRoot } from 'react-dom';

export default class CreateRoomPage extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return <p>This is the create room page</p>;
    }
}

// const createRoomDiv = document.getElementById('create-room');
// createRoot(createRoomDiv).render(<CreateRoomPage />);
