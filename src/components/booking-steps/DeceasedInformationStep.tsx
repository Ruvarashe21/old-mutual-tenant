import { useState, useRef, ChangeEvent } from 'react';
import add from '../../assets/bookings/add-booking/image-add.svg';
import calender from '../../assets/bookings/add-booking/calendar-add.svg';
import { DeceasedInformation } from '../../types/booking-form';

interface DeceasedInformationStepProps {
	data: Partial<DeceasedInformation>;
	onChange: (data: Partial<DeceasedInformation>) => void;
}

export default function DeceasedInformationStep({
	data,
	onChange,
}: DeceasedInformationStepProps) {
	const fileInputRef = useRef<HTMLInputElement>(null);
	const [dragActive, setDragActive] = useState(false);

	const handleInputChange = (field: keyof DeceasedInformation, value: string) => {
		onChange({
			...data,
			[field]: value,
		});
	};

	const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			onChange({
				...data,
				profileImage: file,
			});
		}
	};

	const handleDrag = (e: React.DragEvent) => {
		e.preventDefault();
		e.stopPropagation();
		if (e.type === 'dragenter' || e.type === 'dragover') {
			setDragActive(true);
		} else if (e.type === 'dragleave') {
			setDragActive(false);
		}
	};

	const handleDrop = (e: React.DragEvent) => {
		e.preventDefault();
		e.stopPropagation();
		setDragActive(false);

		const file = e.dataTransfer.files?.[0];
		if (file && (file.type.startsWith('image/') || file.type === 'application/pdf')) {
			onChange({
				...data,
				profileImage: file,
			});
		}
	};

	return (
		<div className="space-y-6">
			<h2 className="text-lg font-semibold text-gray-800">Deceased Information</h2>

			<div className="grid grid-cols-2 gap-4">
				{/* Title */}
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-1">
						Title
					</label>
					<select
						value={data.title || 'Mr'}
						onChange={(e) => handleInputChange('title', e.target.value)}
						className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
					>
						<option value="Mr">Mr</option>
						<option value="Mrs">Mrs</option>
						<option value="Miss">Miss</option>
						<option value="Dr">Dr</option>
						<option value="Prof">Prof</option>
					</select>
				</div>

				{/* Gender */}
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-1">
						Gender
					</label>
					<select
						value={data.gender || 'Male'}
						onChange={(e) => handleInputChange('gender', e.target.value)}
						className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
					>
						<option value="Male">Male</option>
						<option value="Female">Female</option>
					</select>
				</div>
			</div>

			{/* Deceased Name */}
			<div>
				<label className="block text-sm font-medium text-gray-700 mb-1">
					Deceased Name
				</label>
				<input
					type="text"
					value={data.deceasedName || ''}
					onChange={(e) => handleInputChange('deceasedName', e.target.value)}
					placeholder="Enter deceased name"
					className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
				/>
			</div>

			{/* Deceased Surname */}
			<div>
				<label className="block text-sm font-medium text-gray-700 mb-1">
					Deceased Surname
				</label>
				<input
					type="text"
					value={data.deceasedSurname || ''}
					onChange={(e) => handleInputChange('deceasedSurname', e.target.value)}
					placeholder="Enter deceased surname"
					className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
				/>
			</div>

			<div className="grid grid-cols-2 gap-4">
				{/* Sunrise (Date of Birth) */}
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-1">
						Sunrise
					</label>
					<div className="relative">
						<input
							type="text"
							value={data.sunrise || '10/02/1954'}
							onChange={(e) => handleInputChange('sunrise', e.target.value)}
							placeholder="DD/MM/YYYY"
							className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
						/>
						<img
							src={calender}
							alt="Calendar"							
							className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-8"
							
						/>
					</div>
				</div>

				{/* Sunset (Date of Death) */}
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-1">
						Sunset
					</label>
					<div className="relative">
						<input
							type="text"
							value={data.sunset || '10/02/2025'}
							onChange={(e) => handleInputChange('sunset', e.target.value)}
							placeholder="DD/MM/YYYY"
							className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
						/>
						<img
							src={calender}
							alt="Calendar"							
							className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-8"
							
						/>
					</div>
				</div>
			</div>

			{/* File Upload */}
			<div>
				<label className="block text-sm font-medium text-gray-700 mb-2">
					Upload Photo/Document
				</label>
				<div
					onDragEnter={handleDrag}
					onDragLeave={handleDrag}
					onDragOver={handleDrag}
					onDrop={handleDrop}
					className={`
						border-2 border-dashed rounded-lg p-6 text-center transition-colors
						${
							dragActive
								? 'border-emerald-500 bg-emerald-50'
								: 'border-gray-300 hover:border-gray-400'
						}
					`}
				>
					<input
						ref={fileInputRef}
						type="file"
						accept="image/jpeg,image/png,application/pdf"
						onChange={handleFileSelect}
						className="hidden"
					/>
					<div className="flex flex-col items-center gap-3">
						<img
							src={add}
							alt="Upload"
							className={`${dragActive ? 'text-emerald-600' : 'text-gray-400'} h-10`}
						/>
						<div className="text-sm text-gray-600">
							<span className="font-medium">Choose a file or drag & drop it here</span>
						</div>
						<div className="text-xs text-gray-500">JPEG, PNG and PDF</div>
						<button
							type="button"
							onClick={() => fileInputRef.current?.click()}
							className="mt-2 px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 font-medium transition-colors"
						>
							Browse File
						</button>
						{data.profileImage && (
							<div className="mt-2 text-xs text-emerald-600">
								File selected: {typeof data.profileImage === 'string' ? data.profileImage : data.profileImage.name}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

