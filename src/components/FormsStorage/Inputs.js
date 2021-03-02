import React, { forwardRef } from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles} from '@material-ui/core'


const useStyles = makeStyles((theme)=>({
    root:{
        background: 'linear-gradient(45deg,#333, #999)',
        border: 0,
        borderRadius: 5,
    },
}));




export const Inputs = forwardRef((props, ref)=>{
    const styles=useStyles()
    return(
        <TextField
            color='secondary'
            variant='outlined'
            margin='normal'
            inputRef={ref}
            fullWidth
            className={styles.root}
            {...props}
        />
    );
});