// src/components/Profile.jsx
import React, { useState } from 'react';
import { Box, Typography, Avatar, Button, TextField } from '@mui/material';

function Profile() {
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState('Sumit Singh');
  const [role, setRole] = useState('Front-End Developer');

  return (
    <Box sx={{ p: 2, mb: 4 }}>
      <Avatar sx={{ width: 72, height: 72, mb: 2 }}>S</Avatar>
      {editMode ? (
        <>
          <TextField value={name} onChange={(e) => setName(e.target.value)} fullWidth sx={{ mb: 1 }} />
          <TextField value={role} onChange={(e) => setRole(e.target.value)} fullWidth sx={{ mb: 2 }} />
        </>
      ) : (
        <>
          <Typography variant="h5">{name}</Typography>
          <Typography color="text.secondary">{role}</Typography>
        </>
      )}
      <Button onClick={() => setEditMode(!editMode)} variant="outlined">
        {editMode ? 'Save' : 'Edit'}
      </Button>
    </Box>
  );
}

export default Profile;
