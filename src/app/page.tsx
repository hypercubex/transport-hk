'use client'

import * as React from 'react'
import { Container, Typography, Box, Paper, Button, Stack } from '@mui/material'
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus'
import TrainIcon from '@mui/icons-material/Train'

export default function HomePage() {
  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Paper elevation={3} sx={{ p: { xs: 2, sm: 4 } }}>
        <Box textAlign="center" mb={3}>
          <Typography variant="h3" component="h1" gutterBottom>
            Transport HK
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Find real-time information for Hong Kong Bus and MTR services.
          </Typography>
        </Box>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={3}
          justifyContent="center"
          alignItems="center"
        >
          <Button
            href="/bus"
            variant="contained"
            color="primary"
            size="large"
            startIcon={<DirectionsBusIcon />}
            fullWidth
            sx={{ minWidth: 150 }}
            data-testid="choose-bus"
          >
            Bus
          </Button>
          <Button
            href="/mtr"
            variant="contained"
            color="secondary"
            size="large"
            startIcon={<TrainIcon />}
            fullWidth
            sx={{ minWidth: 150 }}
            data-testid="choose-mtr"
          >
            MTR
          </Button>
        </Stack>
      </Paper>
    </Container>
  )
}
