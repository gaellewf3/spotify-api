import React, { useEffect, useState } from "react";
import './App.css';
import Login from './Login';
import {getTokenFromUrl} from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue} from "./DataLayer";


const spotify = new SpotifyWebApi();

function App() {
    //  const [token, setToken] = useState(null);
 
  const [ {user, token}, dispatch ] = useDataLayerValue();

  //NOTE useEffechook = run code based on given condition
  //NOTE = keep eye on window
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
// NOTE underscrore = temporary token


    if (_token) {
      dispatch ({ 
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);
        // setToken(_token);       
      spotify.getMe().then(user => {
        dispatch({
        type: 'SET_USER',
        user: user,
      });
      });

      spotify.getUserPlaylists().then((playlists) => {
          dispatch({
          type: 'SET_PLAYLIST',
          playlists: playlists,
        });
      });

      
      
 

    }
  }, []); 

   // console.log("I HAVE A TOKEN >>>", token);
  console.log('UUU', user);
  console.log('TTT', token);


  return (
    <div className="app">
      { token ? 
     <Player spotify={spotify} ></Player>
:      <Login></Login>
    }
      </div>
  );
}

export default App;  
       
    
