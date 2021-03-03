import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
//import CardActions from '@material-ui/core/CardActions';
//import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
//import { findByLabelText } from '@testing-library/react';
//import FavoriteIcon from '@material-ui/icons';
//import ShareIcon from '@material-ui/icons';
//import ExpandMoreIcon from '@material-ui/icons';
//import MoreVertIcon from '@material-ui/icons';

/*TESTE MATERIAL UI USO CARD */


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export const RecipeReviewCard=()=> {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    return (
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              {/*<MoreVertIcon />*/}
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          image="https://media3.s-nbcnews.com/j/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p_67dfb6820f7d3898b5486975903c2e51.fit-1240w.jpg"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body3" color="secondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        </Card>
    )
  }
  


/*import React from 'react'
import Tab from '@material-ui/core/Tab';
import { makeStyles} from '@material-ui/core';


const useStyles = makeStyles((theme)=>({
    root:{
        flexGrow: 1,
        backgroundColor: 'linear-gradient(45deg,#333, #999)',
        display: 'flex',
        height: 224,
    },
    tabs:{
        borderRight: '1px solid',
        borderRightColor: 'secondary'
    }
}));

export const MenuTab= ({children,...props})=>{
    const styles = useStyles();
    return(
        <Tab
            orientation='vertical'
            variant='scrollable'
            className={styles.root}
            {...props}
            >
            {children}
        </Tab>
    );
};*/