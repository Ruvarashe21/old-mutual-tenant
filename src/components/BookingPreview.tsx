import { DeceasedInformation, ServiceInformation, Package, AdditionalFeature } from '../types/booking-form';
import usericon from '../assets/bookings/add-booking/user.svg';
import LocationOnIcon from '@mui/icons-material/LocationOn';

interface BookingPreviewProps {
	deceased?: Partial<DeceasedInformation>;
	service?: Partial<ServiceInformation>;
	selectedPackage?: Package;
	additionalFeatures?: AdditionalFeature[];
}

export default function BookingPreview({
	deceased,
	service,
	selectedPackage,
	additionalFeatures = [],
}: BookingPreviewProps) {
	const formatDate = (date: string) => {
		if (!date) return '';
		return date.replace(/\//g, '/');
	};

	const formatTime = (startTime: string, endTime: string) => {
		if (!startTime || !endTime) return '';
		return `${startTime}-${endTime}`;
	};

	

	const hasData = deceased || service || selectedPackage;

	if (!hasData) {
		return (
			<div className="card h-full">
				<div className="card-header flex items-center justify-between">
					<span className="font-semibold text-gray-800">Booking Information</span>
					
				</div>
				<div className="card-body">
					<div className="space-y-4">
						<div className="text-sm text-gray-500 text-center py-8">
							No information entered yet
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="card h-full sticky top-24 overflow-y-auto">
			<div className="card-header flex items-center justify-between">
				<span className="font-semibold text-gray-800">Booking Information</span>
				
			</div>
			<div className="card-body space-y-4">
				{/* Deceased Information */}
				{deceased && (deceased.deceasedName || deceased.deceasedSurname) && (
					<div className="border-b pb-4">
						<div className="flex items-start gap-3">
							<div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
								{deceased.profileImage ? (
									<img
										src={
											typeof deceased.profileImage === 'string'
												? deceased.profileImage
												: URL.createObjectURL(deceased.profileImage)
										}
										alt="Profile"
										className="w-full h-full rounded-full object-cover"
									/>
								) : (
									<img src={usericon} alt="User Icon" className="w-6 h-6 text-gray-400" />
								)}
							</div>
							<div className="flex-1 min-w-0">
								<div className="font-semibold text-gray-800 text-sm">
									{deceased.title && `${deceased.title} `}
									{deceased.deceasedName} {deceased.deceasedSurname}
								</div>
								{deceased.sunrise && deceased.sunset && (
									<div className="text-xs text-gray-600 mt-1">
										{formatDate(deceased.sunrise)}-{formatDate(deceased.sunset)}
									</div>
								)}
								{deceased.sunrise && (
									<div className="text-xs text-gray-600 mt-0.5">
										<span className="font-medium">Sunrise:</span> {formatDate(deceased.sunrise)}
									</div>
								)}
								{deceased.sunset && (
									<div className="text-xs text-gray-600 mt-0.5">
										<span className="font-medium">Sunset:</span> {formatDate(deceased.sunset)}
									</div>
								)}
								{deceased.gender && (
									<div className="text-xs text-gray-600 mt-0.5">{deceased.gender}</div>
								)}
							</div>
						</div>
					</div>
				)}

				{/* Service/Venue Information */}
				{service && (service.venue || service.serviceDate) && (
					<div className="border-b pb-4">
						<div className="space-y-2">
							<div className="flex items-start gap-2">
								<LocationOnIcon className="text-gray-400 mt-0.5" fontSize="small" />
								<div className="flex-1">
									<div className="font-medium text-gray-800 text-sm mb-1">
										Venue Details
									</div>
									{service.venue && (
										<div className="text-xs text-gray-700 font-medium">
											{service.venue}
										</div>
									)}
									{service.serviceDate && (
										<div className="text-xs text-gray-600 mt-1">
											<span className="font-medium">Service Date:</span> {formatDate(service.serviceDate)}
										</div>
									)}
									{service.startTime && service.endTime && (
										<div className="text-xs text-gray-600 mt-0.5">
											<span className="font-medium">Time:</span> {formatTime(service.startTime, service.endTime)}
										</div>
									)}
									{service.startTime && (
										<div className="text-xs text-gray-600 mt-0.5">
											<span className="font-medium">Start Time:</span> {service.startTime}
										</div>
									)}
									{service.endTime && (
										<div className="text-xs text-gray-600 mt-0.5">
											<span className="font-medium">End Time:</span> {service.endTime}
										</div>
									)}
									{(service.address01 || service.address02) && (
										<div className="text-xs text-gray-600 mt-1">
											{service.address01}
											{service.address01 && service.address02 && ' '}
											{service.address02}
											{(service.address01 || service.address02) && ', Harare, Zimbabwe'}
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				)}

				{/* Selected Package */}
				{selectedPackage && (
					<div className="border-b pb-4">
						<div className="space-y-2">
							<div className="flex items-start gap-2">
								<div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center flex-shrink-0 bg-gray-50">
									<img
										src={selectedPackage.icon}
										alt={selectedPackage.name}
										className="object-contain w-full h-full"
									/>
									
								</div>
								<div className="flex-1">
									<div className="font-medium text-gray-800 text-sm mb-1">
										{selectedPackage.name}
									</div>
									{selectedPackage.features.map((feature, idx) => (
										<div key={idx} className="text-xs text-gray-600">
											{feature.name}
										</div>
									))}
									<div className="text-sm font-semibold text-gray-800 mt-2">
										{selectedPackage.currency || '$'}{selectedPackage.price}
									</div>
								</div>
							</div>
						</div>
					</div>
				)}

				{/* Additional Features */}
				{additionalFeatures && additionalFeatures.length > 0 && (
					<div className="border-b pb-4">
						<div className="space-y-2">
							<div className="font-medium text-gray-800 text-sm mb-2">
								Additional Features
							</div>
							{additionalFeatures.map((feature) => (
								<div key={feature.id} className="flex items-center justify-between text-xs">
									<div className="flex-1">
										<div className="text-gray-800 font-medium">{feature.name}</div>
										<div className="text-gray-600">{feature.description}</div>
									</div>
									<div className="text-gray-800 font-semibold ml-2">
										${feature.price}
									</div>
								</div>
							))}
							{additionalFeatures.length > 0 && (
								<div className="text-xs text-gray-600 mt-2 pt-2 border-t">
									<span className="font-medium">Total Additional:</span> $
									{additionalFeatures.reduce((sum, feature) => sum + feature.price, 0)}
								</div>
							)}
						</div>
					</div>
				)}

			</div>
		</div>
	);
}

