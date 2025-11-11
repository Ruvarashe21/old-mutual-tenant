import React from "react";
import { useState } from 'react';
import { motion } from 'framer-motion';
import SearchIcon from '@mui/icons-material/Search';
import {
	Box,
	Button,
	Container,
	Paper,
	TextField,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
	IconButton,
	Chip,
	Pagination,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MemorialPageDetail from './MemorialPageDetail';
import bgImage from "../assets/memorial-pages/memorial-background.svg"; 

// Types
interface MemorialPage {
	id: string;
	date: string;
	deceasedName: string;
	clientName: string;
	streamStatus: 'pending' | 'granted';
	reactions: number | null;
	pageViews: number | null;
}



// Mock data
const memorialPagesData: MemorialPage[] = [
	{
		id: '1',
		date: '22/09/25',
		deceasedName: 'Jimmy Chimombe',
		clientName: 'John Chimombe',
		streamStatus: 'pending',
		reactions: 145,
		pageViews: 275,
	},
	{
		id: '2',
		date: '20/09/25',
		deceasedName: 'Sarah Johnson',
		clientName: 'Michael Johnson',
		streamStatus: 'granted',
		reactions: 280,
		pageViews: 400,
	},
	{
		id: '3',
		date: '18/09/25',
		deceasedName: 'Robert Smith',
		clientName: 'Emma Smith',
		streamStatus: 'pending',
		reactions: null,
		pageViews: null,
	},
	{
		id: '4',
		date: '15/09/25',
		deceasedName: 'Mary Williams',
		clientName: 'David Williams',
		streamStatus: 'granted',
		reactions: 120,
		pageViews: 180,
	},
	{
		id: '5',
		date: '12/09/25',
		deceasedName: 'James Brown',
		clientName: 'Lisa Brown',
		streamStatus: 'pending',
		reactions: 95,
		pageViews: 150,
	},
	{
		id: '6',
		date: '10/09/25',
		deceasedName: 'Patricia Davis',
		clientName: 'Thomas Davis',
		streamStatus: 'granted',
		reactions: 320,
		pageViews: 450,
	},
	{
		id: '7',
		date: '08/09/25',
		deceasedName: 'Christopher Wilson',
		clientName: 'Jennifer Wilson',
		streamStatus: 'pending',
		reactions: null,
		pageViews: null,
	},
	{
		id: '8',
		date: '05/09/25',
		deceasedName: 'Nancy Martinez',
		clientName: 'Robert Martinez',
		streamStatus: 'granted',
		reactions: 200,
		pageViews: 300,
	},
	{
		id: '9',
		date: '03/09/25',
		deceasedName: 'Daniel Anderson',
		clientName: 'Susan Anderson',
		streamStatus: 'pending',
		reactions: 175,
		pageViews: 250,
	},
	{
		id: '10',
		date: '01/09/25',
		deceasedName: 'Margaret Taylor',
		clientName: 'William Taylor',
		streamStatus: 'granted',
		reactions: 260,
		pageViews: 380,
	},
];

export default function MemorialPagesPage() {
	const [searchQuery, setSearchQuery] = useState('');
	const [tableSearchQuery, setTableSearchQuery] = useState('');
	const [page, setPage] = useState(1);
	const [selectedMemorialId, setSelectedMemorialId] = useState<string | null>(null);
	const rowsPerPage = 10;

	// Filter data based on search queries
	const filteredData = memorialPagesData.filter((item) => {
		const matchesMainSearch = searchQuery === '' || 
			item.deceasedName.toLowerCase().includes(searchQuery.toLowerCase()) ||
			item.clientName.toLowerCase().includes(searchQuery.toLowerCase());
		const matchesTableSearch = tableSearchQuery === '' ||
			item.deceasedName.toLowerCase().includes(tableSearchQuery.toLowerCase()) ||
			item.clientName.toLowerCase().includes(tableSearchQuery.toLowerCase());
		return matchesMainSearch && matchesTableSearch;
	});

	// Pagination logic
	const paginatedData = filteredData.slice(
		(page - 1) * rowsPerPage,
		page * rowsPerPage
	);

	const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
		setPage(value);
	};

	const handleRequestStream = (id: string) => {
		// Handle stream request logic here
		console.log('Request stream for:', id);
	};

	const handleRowClick = (id: string) => {
		setSelectedMemorialId(id);
	};

	const handleBackToList = () => {
		setSelectedMemorialId(null);
	};

	// If a memorial is selected, show the detail view
	if (selectedMemorialId) {
		return <MemorialPageDetail memorialid={selectedMemorialId} onBack={handleBackToList} />;
	}
 
	return (
		<Container maxWidth="xl" sx={{ py: 4 }}>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4 }}
			>
				{/* Hero Banner Section */}
				<Box
					sx={{
						position: 'relative',
						borderRadius: 3,
						overflow: 'hidden',
						mb: 4,
						height: { xs: 300, md: 240 },
									
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'flex-start',
						p: { xs: 3, md: 6 },
						color: 'white',
						'&::before': {
							content: '""',
							position: 'absolute',
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
							backgroundImage: `url(${bgImage})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
							
						},
					}}
				>
					<Typography
						variant="h3"
						component="h1"
						sx={{
							fontWeight: 700,
							mb: 2,
							fontSize: { xs: '2rem', md: '2.5rem' },
							position: 'relative',
							zIndex: 1,					
						}}
					>
						Memorial Pages
					</Typography>
					<Typography
						variant="h6"
						sx={{
							fontWeight: 400,
							mb: 3,
							opacity: 0.95,
							textAlign: 'center',
							fontSize: { xs: '1rem', md: '1.25rem' },
							position: 'relative',
							zIndex: 1,
						}}
					>
						Setup a free memorial page for your clients!
					</Typography>
					<Button
						variant="contained"
						size="large"
						onClick={() => console.log('Get Started clicked')}
						sx={{
							backgroundColor: 'white',
							color: '#059669',
							fontWeight: 600,
							px: 4,
							py: 1.5,
							borderRadius: 2,
							textTransform: 'none',
							'&:hover': {
								backgroundColor: 'rgba(255, 255, 255, 0.9)',
							},
							position: 'relative',
							zIndex: 1,
						}}
					>
						Get Started
					</Button>
				</Box>

				{/* Memorial Page Listings Section */}
				<Paper
					elevation={0}
					sx={{
						borderRadius: 3,
						overflow: 'hidden',
						border: '1px solid',
						borderColor: 'divider',
					}}
				>
					{/* Section Header with Search */}
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							p: 3,
							borderBottom: '1px solid',
							borderColor: 'divider',
							flexWrap: { xs: 'wrap', md: 'nowrap' },
							gap: 2,
						}}
					>
						<Typography
							variant="h5"
							component="h2"
							sx={{ fontWeight: 600, color: 'text.primary' }}
						>
							Memorial Page Listings
						</Typography>
						<TextField
							placeholder="Search"
							size="small"
							value={tableSearchQuery}
							onChange={(e) => setTableSearchQuery(e.target.value)}
							InputProps={{
								startAdornment: <SearchIcon sx={{ color: 'text.secondary', mr: 1 }} />,
							}}
							sx={{
								minWidth: { xs: '100%', md: 300 },
								'& .MuiOutlinedInput-root': {
									borderRadius: 2,
									backgroundColor: 'grey.50',
									'&:hover': {
										backgroundColor: 'grey.100',
									},
									'& fieldset': {
										borderColor: 'transparent',
									},
									'&:hover fieldset': {
										borderColor: 'transparent',
									},
									'&.Mui-focused fieldset': {
										borderColor: 'primary.main',
									},
								},
							}}
						/>
					</Box>

					{/* Table */}
					<TableContainer>
						<Table>
							<TableHead>
								<TableRow sx={{ backgroundColor: 'grey.50' }}>
									{['Date', 'Deceased Name', 'Client Name', 'Stream Status', 'Reactions', 'Page Views'].map((header) => (
										<TableCell
											key={header}
											sx={{
												fontWeight: 600,
												color: 'text.secondary',
												py: 2,
												fontSize: '0.875rem',
											}}
										>
											{header}
										</TableCell>
									))}
								</TableRow>
							</TableHead>
							<TableBody>
								{paginatedData.map((row) => (
									<TableRow
										key={row.id}
										onClick={() => handleRowClick(row.id)}
										sx={{
											'&:hover': { backgroundColor: 'grey.50' },
											cursor: 'pointer',
										}}
									>
										<TableCell>{row.date}</TableCell>
										<TableCell sx={{ fontWeight: 500 }}>{row.deceasedName}</TableCell>
										<TableCell>{row.clientName}</TableCell>
										<TableCell onClick={(e) => e.stopPropagation()}>
											{row.streamStatus === 'pending' ? (
												<Chip
													label="Request Stream"
													size="small"
													onClick={() => handleRequestStream(row.id)}
													sx={{
														backgroundColor: '#10b981',
														color: 'white',
														fontWeight: 500,
														cursor: 'pointer',
														'&:hover': {
															backgroundColor: '#059669',
														},
													}}
												/>
											) : (
												<Chip
													label="Granted"
													size="small"
													sx={{
														backgroundColor: '#86efac',
														color: '#065f46',
														fontWeight: 500,
													}}
												/>
											)}
										</TableCell>
										<TableCell>{row.reactions ?? '--'}</TableCell>
										<TableCell>{row.pageViews ?? '--'}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>

					{/* Pagination */}
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							p: 2,
							borderTop: '1px solid',
							borderColor: 'divider',
							flexWrap: 'wrap',
							gap: 2,
						}}
					>
						<Typography variant="body2" color="text.secondary">
							{`${(page - 1) * rowsPerPage + 1}-${Math.min(page * rowsPerPage, filteredData.length)} of ${filteredData.length}`}
						</Typography>
						<Pagination
							count={Math.ceil(filteredData.length / rowsPerPage)}
							page={page}
							onChange={handlePageChange}
							color="primary"
							shape="rounded"
							showFirstButton={false}
							showLastButton={false}
							renderItem={(item) => {
								if (item.type === 'previous') {
									return (
										<IconButton {...item} aria-label="previous page">
											<ArrowBackIcon />
										</IconButton>
									);
								}
								if (item.type === 'next') {
									return (
										<IconButton {...item} aria-label="next page">
											<ArrowForwardIcon />
										</IconButton>
									);
								}
								return null;
							}}
						/>
					</Box>
				</Paper>
			</motion.div>
		</Container>
	);
}
