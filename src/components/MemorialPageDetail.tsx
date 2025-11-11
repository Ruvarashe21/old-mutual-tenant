import React from 'react';
import { motion } from 'framer-motion';
import {
	Box,
	Container,
	Paper,
	Typography,
	Divider,
	Chip,
	Grid,
	
} from '@mui/material';
import Wallet from '../assets/memorial-pages/wallet.svg';
import views from '../assets/memorial-pages/view.svg';
import comments from '../assets/memorial-pages/comment.svg';
import shares from '../assets/memorial-pages/share.svg';
import reactions from '../assets/memorial-pages/reaction.svg';
import sidebar from '../assets/sidebar.svg'


//top boxes (stream components)
	const stats = [
		{ label: 'Views', value: 10000, icon: <img src={views} className='w-11 h-11' /> },
		{ label: 'Comments', value: 500, icon: <img src={comments} className='w-11 h-11'/> },
		{ label: 'Shares', value: 489, icon: <img src={shares} className='w-11 h-11' /> },
		{label: 'Reactions', value: 1200, icon: <img src={reactions} className='w-11 h-11' /> },
	];

// StatCard component (kept for potential reuse maybe l might need it somewhere)
const StatCard = ({
	icon,
	label,
	value,
}: {
	icon: React.ReactNode;
	label: string;
	value: number;
}) => (
	<Paper
		elevation={0}
		sx={{
			p: 3,
			textAlign: 'center',
			backgroundColor: 'white',
			border: '1px solid',
			borderColor: 'divider',
			borderRadius: 2,
			transition: 'all 0.2s ease-in-out',
			'&:hover': {
				boxShadow: 2,
				transform: 'translateY(-2px)',
			},
		}}
	>
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				mb: 1,
				color: 'primary.main',
			}}
		>
			{icon}
		</Box>
		<Typography variant="h4" fontWeight={600} color="text.primary">
			{value}
		</Typography>
		<Typography variant="body2" color="text.secondary">
			{label}
		</Typography>
	</Paper>
);

//  Main component
const ChemaSection = () => {
	return (
		<Container maxWidth="xl" sx={{ py: 4 }}>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4 }}
			>
				<div className="grid grid-cols-1 sm:grid-cols-4 gap-4 ] ">
					{stats.map((s) => (
						<div key={s.label} className="card pt-5">
							<div className="card-body">
								<div className="flex items-center justify-between w-">
									<div className="text-xs text-gray-500">{s.label}</div>
									<div className="text-emerald-600">{s.icon}</div>
								</div>
								<div className="text-3xl font-semibold mt-2">{s.value}</div>
							</div>
						</div>
					))}
				</div>
				<Grid container spacing={3} mt={5}>
					{/* Left Column: Banner */}
					<Grid size={{ xs: 12, md: 8 }}>
						<Paper
							elevation={0}
							sx={{
								position: 'relative',
								borderRadius: 3,
								overflow: 'hidden',
								border: '1px solid',
								borderColor: 'divider',
								height: '100%',
							}}
						>
							{/* Background Image */}
							<Box
								sx={{
									position: 'absolute',
									top: 0,
									left: 0,
									right: 0,
									bottom: 0,
									backgroundImage:
										'url("https://muzukuru.co.zw/wp-content/uploads/2024/08/Muzukuru-Horizontal-Logo-B_W-1.png")',
									backgroundSize: 'cover',
									backgroundPosition: 'center',
									opacity: 0.15,
								}}
							/>

							{/* MUZUKURU Logo Tag */}
							<Box
								sx={{
									position: 'absolute',
									top: 16,
									left: 16,
									zIndex: 2,
								}}
							>
								<Chip
									label="MUZUKURU FUNERAL STREAMING"
									size="small"
									sx={{
										backgroundColor: 'rgba(0, 0, 0, 0.7)',
										color: 'white',
										fontSize: '0.75rem',
										fontWeight: 600,
									}}
								/>
							</Box>
						</Paper>
					</Grid>

					{/* Right Column: CHEMA Card */}
					<Grid size={{ xs: 12, md: 4 }}>
						<Paper
							elevation={0}
							sx={{
								backgroundImage: `url(${sidebar})`,
								backgroundSize: "cover",
								backgroundPosition: "center",
								backgroundRepeat: "no-repeat",
								borderRadius: 3,
								p: 4,
								color: 'white',
								height: '100%',
							}}
						>
							{/* Wallet Icon */}
							<Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
								<Box
									sx={{
										width: 48,
										height: 48,
										borderRadius: '50%',
										
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
									}}
								>
								<img className='h-10 bg-white rounded-full' src={Wallet}/>
									
								</Box>
							</Box>

							{/* Title */}
							<Typography variant="h6" sx={{ mb: 1, fontWeight: 500 }}>
								GoFundMe
							</Typography>

							{/* Placeholder Total Amount */}
							<Typography
								variant="h2"
								sx={{
									fontWeight: 700,
									mb: 3,
									fontSize: { xs: '2.5rem', md: '3rem' },
								}}
							>
								$120.00
							</Typography>

							<Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', my: 2 }} />

							
						</Paper>
					</Grid>
				</Grid>
			</motion.div>
		</Container>
	);
};

export default ChemaSection;
