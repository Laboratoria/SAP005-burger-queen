import React from 'react';
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography"
import {Avatar, IconButton, CardMedia } from "@material-ui/core";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';


const Cards= props =>{
    const { title, subtitle, description, imageUrl} = props;
    return(
        <Card>
            <CardHeader
                avatar={<Avatar aria-label="logo">
                    S
                </Avatar>
                }
                title={title}
                subheder={subtitle}
                //title={p.name}
                //subheder={p.price}
                />
                <CardMedia style={{height: '150px'}} image={imageUrl}/>
                {/*<CardMedia style={{height: ''}} image={nossossvgs}/>*/}
                <CardContent>
                <Typography>
                    {description}
                    {/*{p.price}*/}
                </Typography>
                <IconButton aria-label='addQtn'>
                    <AddCircleOutlineIcon />
                </IconButton>
                <IconButton aria-label='removeQtn'>
                    <RemoveCircleOutlineIcon />
                </IconButton>
            </CardContent>
        </Card>
    )
}

export default Cards;