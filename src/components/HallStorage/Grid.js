import React from 'react';
import {Grid} from '@material-ui/core';
import Cards from './Cards';
import  {HeaderMenu} from './HeaderMenu';
import  CardsAllDay  from './CardsAllDay';


export const GridMenu=()=>{
    return(
        <Grid container direction='column'>
            <Grid item>
                <HeaderMenu />
            </Grid>
            <Grid item container>
                <Grid item xs={false} sm={2} />
                <Grid item xs={12} sm={8}>
                    <Cards />
                    <CardsAllDay />
                </Grid>
                <Grid item xs={false} sm={2} />
            </Grid>
        </Grid>
    )
}