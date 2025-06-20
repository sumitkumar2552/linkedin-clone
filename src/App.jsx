import React, { useState, useMemo } from 'react';
import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Box,
  Divider,
} from '@mui/material';

import Header from './components/Header';
import Profile from './components/Profile';
import About from './components/About';
import ExperienceCard from './components/ExperienceCard';
import Skills from './components/Skills';
import Connections from './components/Connections';
import SidebarWidgets from './components/SidebarWidgets'; 

const experienceData = [
  {
    company: 'Cisco',
    title: 'Software Engineer Intern',
    duration: 'Jan 2024 - Jun 2024',
    description: 'Worked on cloud automation and CI/CD pipelines.',
  },
  {
    company: 'Google',
    title: 'STEP Intern',
    duration: 'May 2023 - Aug 2023',
    description: 'Built internal tools using React and Flask.',
  },
];

const skills = ['JavaScript', 'React', 'Node.js', 'Python', 'MongoDB'];

const connections = [
  { name: 'Anjali Verma', role: 'Software Engineer at Google' },
  { name: 'Rahul Mehta', role: 'DevOps Engineer at AWS' },
  { name: 'Sneha Sharma', role: 'Product Manager at Microsoft' },
];

function App() {
  const [mode, setMode] = useState('light');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header mode={mode} setMode={setMode} />
      <Box p={2}>
        <Container maxWidth="md">
          <Profile />
          <Divider sx={{ my: 4 }} />
          <About />
          <Divider sx={{ my: 4 }} />
          <ExperienceCard data={experienceData} />
          <Divider sx={{ my: 4 }} />
          <Skills skills={skills} />
          <Divider sx={{ my: 4 }} />
          <Connections data={connections} />
          <Divider sx={{ my: 4 }} />
          <SidebarWidgets /> 
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
