import React from 'react';
import { AppBar, Toolbar, Button, createMuiTheme } from "@material-ui/core";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {makeStyles} from '@material-ui/core';


const useStyles = makeStyles(()=>({
    root:{
        flex: 1,
        border: 'groove',
        borderColor: '#CD00CD',
    },
}));


export const HeaderMenu=()=>{
    const styles = useStyles();
    return(
        <AppBar position='static'>
        <Toolbar className={styles.root}>
            <Button>
                Café da Manhã
            </Button>
            <Button>
                Resto do Dia
            </Button>
            <ExitToAppIcon />
        </Toolbar>
    </AppBar>
    )
}