import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const people = [
  { name: 'Tendai Chikondi', city: 'Mutare', views: 5678 },
  { name: 'Jimmy Chimombe', city: 'Harare', views: 5678 },
  { name: 'Chipo Nyasha', city: 'Bulawayo', views: 9101 },
  { name: 'Kuda Mhlanga', city: 'Masvingo', views: 1123 },
  { name: 'Simba Moyo', city: 'Gweru', views: 4567 },
];

export default function TopPerformers() {
  return (
    <div className="card">
      <div className="card-header">Top Performing Streams</div>
      <div className="card-body">
        <div className='gap-4 items-center'>
                <Box
                  sx={{
                    
                    p: 2,
                    borderRadius: 2,
                  }}
                >
                  <Grid container spacing={2} 
                    sx={{
                       bgcolor: '#F0F4F8',
                       height: '2rem',
                       justifyContent: 'center',
                       alignItems: 'center',
                       borderRadius: 1,		
                       mb: 3,					 
                       }}>
                    <Grid size={10}>
                      <Typography variant={'subtitle2'}>Platform</Typography>
                    </Grid>
                    
                    <Grid size={2}>
                      <Typography variant={'subtitle2'}>Views</Typography>
                    </Grid>
                  </Grid>
                    
                    <div className="space-y-4">
                      {people.map((p) => (
                        <div key={p.name} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-200" />
                            <div>
                              <div className="text-sm font-medium text-gray-800">{p.name}</div>
                              <div className="text-xs text-gray-500">{p.city}</div>
                            </div>
                          </div>
                          <div className="text-sm text-gray-600">{p.views}</div>
                        </div>
                      ))}
                    </div>
                </Box>
        
              </div>
      
      </div>
    </div>
  );
}


