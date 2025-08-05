'use client'

import * as React from 'react'
import { Container, Typography, Box, Paper, TextField, Button, Stack } from '@mui/material'

export default function HomePage() {
  const [search, setSearch] = React.useState('')

  const handleSearch = () => {
    // Implement your search logic here
  }

  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box textAlign="center">
          <Typography variant="h2" component="h1" gutterBottom>
            Transport HK
          </Typography>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            Find real-time bus information for Hong Kong.
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, mb: 4 }}>
            This website helps you discover routes, schedules, and live arrival times for public transport in Hong Kong, including Citybus, and KMB.
            Start exploring to plan your journey efficiently!
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center">
            <TextField
              label="Look up bus"
              variant="outlined"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              sx={{ width: 300 }}
              slotProps={{
                htmlInput: {
                  "data-testid": "bus-search-input",
                },
              }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSearch}
              data-testid="bus-search-button"
            >
              Search
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Container>
  )
}
