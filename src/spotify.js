// clic button login : 
export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "26fe01f0449b4825997709377fbf9ede";

// what we r able to do :
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ];

  //go to the point where hash
  //pull the access token out
 export const getTokenFromUrl = () => {
     return window.location.hash
     .substring(1)
     .split('&')
     .reduce((initial, item) => {
         //#accessToken=musypersecretkey@name
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts [1]);

            return initial;
     }, {});
      
 }

  //  call the login url
    //join = goes into scopes
    
  export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;