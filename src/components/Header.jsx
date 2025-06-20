// src/components/Header.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import ThemeToggle from './ThemeToggle';

function Header({ mode, setMode }) {
  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6">LinkedIn Clone</Typography>
        <Box>
          <ThemeToggle mode={mode} setMode={setMode} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
