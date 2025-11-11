import calender from '../../assets/bookings/add-booking/calendar-add.svg';
import { ServiceInformation } from '../../types/booking-form';

interface ServiceInformationStepProps {
	data: Partial<ServiceInformation>;
	onChange: (data: Partial<ServiceInformation>) => void;
}

const venues = [
	'Old Mutual Parlor',
	'Old Mutual Parlour',
	'St Georges Church',
	'Oakwood Cemetery',
	'Riverside Chapel',
	'City Park Pavilion',
	'Greenwood Memorial Park',
	'National Heroes Acre',
	'Warren Park Cemetery',
	'Andy Miller Hall',
];

export default function ServiceInformationStep({
	data,
	onChange,
}: ServiceInformationStepProps) {
	const handleInputChange = (field: keyof ServiceInformation, value: string) => {
		onChange({
			...data,
			[field]: value,
		});
	};

	return (
		<div className="space-y-6">
			<h2 className="text-lg font-semibold text-gray-800">Service Information</h2>

			{/* Venue */}
			<div>
				<label className="block text-sm font-medium text-gray-700 mb-1">
					Venue
				</label>
				<select
					value={data.venue || 'Old Mutual Parlor'}
					onChange={(e) => handleInputChange('venue', e.target.value)}
					className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
				>
					{venues.map((venue) => (
						<option key={venue} value={venue}>
							{venue}
						</option>
					))}
				</select>
			</div>

			{/* Service Date */}
			<div>
				<label className="block text-sm font-medium text-gray-700 mb-1">
					Service Date
				</label>
				<div className="relative">
					<input
						type="text"
						value={data.serviceDate || '22/10/2025'}
						onChange={(e) => handleInputChange('serviceDate', e.target.value)}
						placeholder="DD/MM/YYYY"
						className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
					/>
					<img
						src={calender}
						className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
						
					/>
				</div>
			</div>

			<div className="grid grid-cols-2 gap-4">
				{/* Start Time */}
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-1">
						Start time
					</label>
					<div className="relative">
						<input
							type="text"
							value={data.startTime || '1100'}
							onChange={(e) => handleInputChange('startTime', e.target.value)}
							placeholder="HHMM"
							className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
						/>
						<img 
							src={calender}
							className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"							
						/>
					</div>
				</div>

				{/* End Time */}
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-1">
						End time
					</label>
					<div className="relative">
						<input
							type="text"
							value={data.endTime || '1100'}
							onChange={(e) => handleInputChange('endTime', e.target.value)}
							placeholder="HHMM"
							className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
						/>
						<img 
							src={calender}
							className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"							
						/>
					</div>
				</div>
			</div>

			{/* Address 01 */}
			<div>
				<label className="block text-sm font-medium text-gray-700 mb-1">
					Address 01
				</label>
				<input
					type="text"
					value={data.address01 || ''}
					onChange={(e) => handleInputChange('address01', e.target.value)}
					placeholder="Enter address line 1"
					className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
				/>
			</div>

			{/* Address 02 */}
			<div>
				<label className="block text-sm font-medium text-gray-700 mb-1">
					Address 02
				</label>
				<input
					type="text"
					value={data.address02 || ''}
					onChange={(e) => handleInputChange('address02', e.target.value)}
					placeholder="Enter address line 2"
					className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
				/>
			</div>
		</div>
	);
}

