import { useState } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { CalendarMonthData } from '../types/bookings';

interface CalendarProps {
	data: CalendarMonthData;
	onDateSelect?: (date: number) => void;
}

const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

export default function Calendar({ data, onDateSelect }: CalendarProps) {
	const [currentMonth, setCurrentMonth] = useState(data);
	
	const navigateMonth = (direction: 'prev' | 'next') => {
		// Simplified navigation - in a real app, this would calculate the previous/next month
		// For now, we'll keep the same month but you'd update this logic
		setCurrentMonth(currentMonth);
	};

	return (
		<div className="card">
			<div className="card-body">
				{/* Calendar Header */}
				<div className="flex items-center justify-between mb-4">
					<button
						onClick={() => navigateMonth('prev')}
						className="p-1 hover:bg-gray-100 rounded-full transition-colors"
					>
						<ChevronLeftIcon fontSize="small" className="text-gray-600" />
					</button>
					<h3 className="text-sm font-semibold text-gray-800">
						{currentMonth.month} {currentMonth.year}
					</h3>
					<button
						onClick={() => navigateMonth('next')}
						className="p-1 hover:bg-gray-100 rounded-full transition-colors"
					>
						<ChevronRightIcon fontSize="small" className="text-gray-600" />
					</button>
				</div>

				{/* Day Names */}
				<div className="grid grid-cols-7 gap-1 mb-2">
					{dayNames.map((day) => (
						<div
							key={day}
							className="text-center text-xs font-medium text-gray-600 py-1"
						>
							{day}
						</div>
					))}
				</div>

				{/* Calendar Grid */}
				<div className="grid grid-cols-7 gap-1">
					{currentMonth.days.map((day, index) => (
						<button
							key={index}
							onClick={() => onDateSelect?.(day.date)}
							className={`
								aspect-square rounded-lg text-sm transition-colors
								${day.isHighlighted
									? 'bg-emerald-600 text-white font-semibold'
									: day.isCurrentMonth
									? 'text-gray-800 hover:bg-gray-100'
									: 'text-gray-400'
								}
								${day.hasStreams && !day.isHighlighted ? 'bg-emerald-50' : ''}
							`}
						>
							{day.date}
						</button>
					))}
				</div>
			</div>
		</div>
	);
}

