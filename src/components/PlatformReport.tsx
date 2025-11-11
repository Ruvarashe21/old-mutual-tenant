import React from "react";
import YouTube from '../assets/dashboard/brand-icons/youtube.png';
import Facebook from '../assets/dashboard/brand-icons/facebook.png'
import MuzukuruLogo from '../assets/dashboard/brand-icons/Muzukuru Logo Icon.png'
import { Box, Grid, Typography } from '@mui/material';


export default function PlatformReport() {
	const items = [
		{ platform: 'Muzukuru Website', percent: 80, views: 900, icon:<img src={MuzukuruLogo}  className='w-6 h-7'/> },
		{ platform: 'Youtube', percent: 10, views: 231, icon: <img src={YouTube} className='w-5 h-5'/> },
		{ platform: 'Facebook', percent: 10, views: 230, icon: <img src={Facebook} className='w-5 h-5'/> },
	];

	return (
		<div className="card -mt-10"> 
			<div className="card-header">Platform Report</div>
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
							 }}>
						<Grid size={7}>
							<Typography variant={'subtitle2'}>Platform</Typography>
						</Grid>
						<Grid size={3}>
							<Typography variant={'subtitle2'}>Percent</Typography>
						</Grid>
						<Grid size={2}>
							<Typography variant={'subtitle2'}>Views</Typography>
						</Grid>
					</Grid>
  					
					{items.map((i) => (
					<Grid key={i.platform} container spacing={2}>
						<Grid size={8}>
							<div className="flex items-center gap-2">
									<span>{i.icon}</span>
									<span className="text-gray-700">{i.platform}</span>
								</div>
						</Grid>
						<Grid size={2}>
							<div className="text-gray-500">{`${i.percent}%`}</div>
						</Grid>
						<Grid size={2}>
							<div className="text-gray-500">{i.views.toLocaleString()}</div>
						</Grid>
					</Grid>
					))}
				</Box>

			</div>
		</div>
	);
}


