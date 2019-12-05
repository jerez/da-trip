import React from 'react';
import { Container, Typography, Box, Paper, Link } from '@material-ui/core';
import DaMap from './DaMap';

const Copyright = () => {
  return (
    <Typography variant="h4" color="textSecondary" align="center">
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
    <Container>
      <Box my={2}>
        <Paper>
          <DaMap />
        </Paper>
        <Copyright />
      </Box>
    </Container>
  );
};

export default App;
