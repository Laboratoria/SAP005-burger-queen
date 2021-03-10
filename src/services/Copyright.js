import React from 'react'; 
import { Box, Typography , Link } from '@material-ui/core';

const  Copyright = () => {
  return (
    <Box mt={5}>
      <Typography variant='body2'  align='center'>
        {'Copyright © '}
        <Link color='inherit'  target='_blank' href='https://github.com/JulianaAmoriN'>
          Juliana 
        </Link>
        {' & '}
        <Link color='inherit' target='_blank' href='https://github.com/carolineshimada'>
          Caroline 
        </Link>
      </Typography> 
    </Box>
  );
};
export default Copyright;