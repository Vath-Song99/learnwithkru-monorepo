"use client";
import React from 'react';
import { Box, Card, CardContent, Avatar, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

const UpdateTeacher: React.FC = () => {
  return (
    <Box display="flex" justifyContent="center" mt={10}>
      <Card sx={{ width: 350,height:350, boxShadow: 3, borderRadius: 2 }}>
        <CardContent>
          <Box display="flex" justifyContent="center">
            <Avatar
              alt="Profile picture of Jenna Stones"
              src="https://cdn.prod.website-files.com/619e8d2e8bd4838a9340a810/647c10640a3ea753d88b9748_profile-picture-hero-img.webp"
              sx={{
                width: 150,
                height: 150,
                position: 'relative',
                top: 1,
                boxShadow: 3,
              }}
            />
          </Box>
          <Box textAlign="center">
            <Typography variant="h5" component="h3" gutterBottom>
              Jenna Stones
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              <LocationOnIcon fontSize="small" /> Los Angeles, California
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              <WorkIcon fontSize="small" /> Solution Manager - Creative Tim Officer
            </Typography>
            <Typography variant="body2" color="textSecondary">
              <SchoolIcon fontSize="small" /> University of Computer Science
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default UpdateTeacher;
