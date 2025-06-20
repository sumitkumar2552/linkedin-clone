import React from 'react';
import { Chip, Typography, Box } from '@mui/material';

function Skills({ skills = [] }) {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>Skills</Typography>
      <Box display="flex" gap={1} flexWrap="wrap">
        {skills.map((skill, index) => (
          <Chip key={index} label={skill} />
        ))}
      </Box>
    </Box>
  );
}

export default Skills;
