import React from 'react';
import { Container, AppBar, Toolbar, Typography } from '@mui/material';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Container>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">SystemBuilder</Typography>
          </Toolbar>
        </AppBar>
        {children}
      </Container>
    </div>
  );
};

export default Layout;
