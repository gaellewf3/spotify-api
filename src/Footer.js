import React from 'react'
import "./Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";

  import VolumeDownIcon from "@material-ui/icons/VolumeDown";
// import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
 import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";


function Footer () {
    return  (
        <div className="footer">
<div className="footer__left">
<img
          className="footer__albumLogo"
          
        //   src={item?.album.images[0].url}
        //   alt={item?.name}
        />    
        
        <div className="footer__songInfo">

        <h4>Manson</h4>
        <p>Marilyn</p>
    </div>  
    </div>  





<div className="footer__center">

<ShuffleIcon className="footer__green">    </ShuffleIcon>  
<SkipPreviousIcon className="footer__icon">    </SkipPreviousIcon>  
<PlayCircleOutlineIcon font-size="large" className="footer__icon">    </PlayCircleOutlineIcon>  
<SkipNextIcon className="footer__icon">    </SkipNextIcon>  
<RepeatIcon className="footer__green">    </RepeatIcon>  


 </div>


<div className="footer_right">
    <Grid container spacing={2}>
            <Grid item>
                <PlaylistPlayIcon />
            </Grid>
            <Grid item>
                <VolumeDownIcon />
            </Grid>
            <Grid item xs>
                <Slider aria-labelledby="continuous-slider" />
            </Grid>
            </Grid>
        </div>
        </div>
    );
}

export default Footer;