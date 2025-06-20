import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

function ExperienceCard({ data = [] }) {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>Experience</Typography>
      {data.map((item, index) => (
        <Card key={index} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="subtitle1"><strong>{item.title}</strong> @ {item.company}</Typography>
            <Typography color="text.secondary">{item.duration}</Typography>
            <Typography mt={1}>{item.description}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default ExperienceCard;
