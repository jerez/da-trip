import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

const Copyright = () => {
  return (
    <Typography variant="title" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Da Trip
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

const App = () => {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Da Trip
        </Typography>
        <Copyright />
      </Box>
    </Container>
  );
};

export default App;
