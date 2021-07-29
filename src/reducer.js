export const initialState = {
    user:null,
    playlists:[],
    playing: false,
    item: null,
    //  token:'BQAM6fUTNQ9WP4zu04XnJ-lPhsCz1V6huu-QeRf83BQD4AjmE0vVHEDONzTvc7xbjBdUocwWkTYTSq84R-5VOZrSwV0…JYRxW6z4X4Rs09ZqxbD62nkucIpQoeS0CrtPCWEMsp-R4vgMC'   ,
    // token:null,
}  ;

// const reducer takes 2 things from the datalayer
//the listener is inside the reducer
const reducer = (state, action) => {

    // console.log(action);

    switch(action.type) {
        case "SET_USER":
            return {
                ...state,
                user:action.user,
            };
            case "SET_PLAYING":
                return {
                  ...state,
                  playing: action.playing,
                };
            case "SET_TOKEN":
                return {
                    ...state,
                    token:action.token,
                };
                case "SET_SPOTIFY":
                    return {
                      ...state,
                      spotify: action.spotify,
                    };

                case "SET_DISCOVER_WEEKLY":
                    return {
                        ...state,
                        discover_weekly: action.discover_weekly,
                    };

                case "SET_PLAYLISTS":
                    return {
                        ...state,
                        playlist:action.playlist,
                    };



            default:
                return state; 
        }   
    }

 export default reducer;

