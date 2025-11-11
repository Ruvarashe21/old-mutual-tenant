import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './store/store';
import { fetchTheme } from './store/themeSlice';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import StatsRow from './components/StatsRow';
import MonthlyStreamsCard from './components/MonthlyStreamsCard';
import PlatformReport from './components/PlatformReport';
import UpcomingStreams from './components/UpcomingStreams';
import TopPerformers from './components/TopPerformers';
import Reports from './components/Reports';
import BookingsPage from './components/BookingsPage';
import MemorialPagesPage from './components/MemorialPagesPage';
import { motion } from 'framer-motion';
import { PageType } from './types/navigation';

export default function App() {
	const dispatch = useDispatch<AppDispatch>();
	const theme = useSelector((s: RootState) => s.theme);
	const [currentPage, setCurrentPage] = useState<PageType>('Dashboard');

	useEffect(() => {
		dispatch(fetchTheme());
	}, [dispatch]);

	const handlePageChange = (page: PageType) => {
		setCurrentPage(page);
	};

	return (
		<div className="min-h-screen">
			<div
				className="flex"
				style={{ background: theme.background }}
			>
				<Sidebar
					primary={theme.primary}
					activePage={currentPage}
					onPageChange={handlePageChange}
				/>
				<div className="flex-1 min-w-0 overflow-y-auto">
					<TopBar pageName={currentPage} />
					{currentPage === 'Bookings' ? (
						<BookingsPage />
					) : currentPage === 'Memorial Pages' ? (
						<MemorialPagesPage />
					) : currentPage === 'Reports' ? (
						<div className="p-4 lg:p-6">
							<Reports />
						</div>
					) : (
						<motion.main
							className="p-4 lg:p-6 grid grid-cols-1 xl:grid-cols-3 gap-4 lg:gap-6"
							initial={{ opacity: 0, y: 12 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4 }}
						>
							<div className="xl:col-span-3">
								<StatsRow />
							</div>
							<div className="xl:col-span-2 space-y-4">
								<MonthlyStreamsCard />
								<UpcomingStreams />
							</div>
							<div className="space-y-4 -mt-28">
								<PlatformReport />
								<TopPerformers />
							</div>
						</motion.main>
					)}
				</div>
			</div>
		</div>
	);
}



