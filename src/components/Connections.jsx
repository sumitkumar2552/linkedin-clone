import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';

function Connections({ data = [] }) {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Connections
      </Typography>
      <Grid container spacing={2}>
        {data.map((person, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography>{person.name}</Typography>
                <Typography color="text.secondary">{person.role}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Connections;
