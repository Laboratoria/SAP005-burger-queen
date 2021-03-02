import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles} from '@material-ui/core';




const useStyles = makeStyles((theme)=>({
    root:{
        margin: theme.spacing(3, 0, 2),
    },
}));

export const FormsButton= ({children,...props})=>{
    const styles = useStyles();
    return(
        <Button
            type='submit'
            fullWidth
            variant='contained'
            color='secondary'
            className={styles.root}
            onClick={(event)=>{event.preventDefault()}}
            {...props}
            >
            {children}
        </Button>
    );
};
