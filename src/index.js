import React from 'react';
import ReactDOM from 'react-dom';
import TestReact from './App.js';

ReactDOM.render(
    <React.StrictMode>
        <TestReact />
    </React.StrictMode>,
    document.getElementById('test_container')
);



// import LikeButton from './App.js';
//
// ReactDOM.render(
//     <React.StrictMode>
//         <LikeButton />
//     </React.StrictMode>,
//     document.getElementById('like_button_container')
// );