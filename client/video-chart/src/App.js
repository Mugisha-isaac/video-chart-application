import React from 'react';
import {Typography,AppBar} from '@material-ui/core';
import videoPlayer from './components/video-player';
import Options from './components/options';
import Notifications from './components/Notifications';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    appBar: {
      borderRadius: 15,
      margin: '30px 100px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '600px',
      border: '2px solid black',
  
      [theme.breakpoints.down('xs')]: {
        width: '90%',
      },
    },
    image: {
      marginLeft: '15px',
    },
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },
  }));
  

const App = ()=>{
    const classes = useStyles();
    return(
        <div position="static" color="inherit" classNames={classes.wrapper}>
            <AppBar className={classes.appBar}>
         <Typography variant="2" align="center">video chart applications</Typography>
         </AppBar>
         <videoPlayer/>
         <Options>
             <Notifications/>
         </Options>
        </div>
    )
}

export default App;