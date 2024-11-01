import React from 'react';
import Box from '@mui/material/Box';

const LoadingSpinner = ({ height }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: height,
        backgroundColor: 'black',
        borderTopLeftRadius: "15px"
      }}
    >
      <img 
        src="https://proxiklestatic.com/products/accounts/proxikle-logo-loader.gif"
        alt="Loading..." 
        style={{ width: '20%' }} // adjust the width as needed
      />
    </Box>
  );
};

export default LoadingSpinner;
