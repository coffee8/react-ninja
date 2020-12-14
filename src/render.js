import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, updateNewPostText} from "./redux/state";

export let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 updateNewPostText={updateNewPostText}
                 addPost={addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

