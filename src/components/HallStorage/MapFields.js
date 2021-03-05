import React from 'react';
import {Cards} from './Cards';
import {CardsAllDay} from './CardsAllDay';
import cardsList from './FillFields';
import cardsListAD from './FillFields';


export const Cards=()=>{
    const getCard = cardItems =>{
        return(
            <Grid item xs={12} sm={4}>
                <Cards {...cardItems}/>
            </Grid>
        );
    };
    return(
        <Grid container spacing={2}>
            {cardsList.map(cardItems => getCard(cardItems)) }
        </Grid>
    );
};

export const CardsAllDay=()=>{
    const getCardAD = cardItemsAD =>{
        return(
            <Grid item xs={12} sm={4}>
                <Cards {...cardItemsAD}/>
            </Grid>
        );
    };
    return(
        <Grid container spacing={2}>
            {cardsListAD.map(cardItemsAD => getCardAD(cardItemsAD)) }
        </Grid>
    );
};

