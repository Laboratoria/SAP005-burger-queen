import React from 'react';
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography"
import  Avatar from "@material-ui/core/Avatar";
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';


const CardsAllDay= props =>{
    const { titleAllDay, subtitleAllDay, descriptionAllDay, imageUrlAllDay} = props;
    return(
        <Card>
            <CardHeader
            avatar={<Avatar aria-label="logo">
                S
            </Avatar>
            }
            title={titleAllDay}
            subheder={subtitleAllDay}
                //title={p.name}
                //subheder={p.price}
            />
            <CardMedia style={{height: '150px'}} src={imageUrlAllDay}/>
            {/*<CardMedia style={{height: ''}} image={nossossvgs}/>*/}
            <CardContent>
                <Typography variant='body2'>
                    {descriptionAllDay}
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

export default CardsAllDay;