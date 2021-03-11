import React from 'react'
import Container from '@material-ui/core/Container'
import { makeStyles} from '@material-ui/core'


const useStyles = makeStyles((theme)=>({
    root:{
        height: '100vh',
        width: '100%',
        marginTop: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}));

export const FormsContainer = ({children,...props})=>{
    const styles = useStyles();
    return(
        <Container 
            className={styles.root}
            component='main'
            maxWidth='xs'
            {...props}
            >
            {children}
        </Container>
    );
};
