// src/components/SidebarWidgets.jsx
import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Paper } from '@mui/material';

const activities = [
  "React.js skill endorsed by John",
  "Started a new position at ABC Corp",
  "Shared a post on UI/UX trends",
];

function SidebarWidgets() {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>Recent Activities</Typography>
      <List>
        {activities.map((activity, index) => (
          <ListItem key={index}>
            <ListItemText primary={activity} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default SidebarWidgets;
