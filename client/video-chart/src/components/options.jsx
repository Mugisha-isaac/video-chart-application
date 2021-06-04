import React from 'react';
import {Button,TextField,Grid,Typography,Container,Paper} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Assignment,Phone,PhoneDisabled} from '@material-ui/icons';
import {SocketContext} from "../SocketContext";
const Options = ({children})=>{
    return(
        <div>
            options
            {children}
        </div>
    )
}

export default Options;