import { Package, AdditionalFeature } from '../../types/booking-form';

// ✅ Import your image assets
import gem2 from '../../assets/bookings/add-booking/gem-2.png';
import gem3 from '../../assets/bookings/add-booking/gem-3.png';
import gem4 from '../../assets/bookings/add-booking/gem-4.png';
import screenImg from '../../assets/bookings/add-booking/monitor.svg';
import videoImg from '../../assets/bookings/add-booking/mirroring-screen.svg';

interface PackageSelectionStepProps {
	selectedPackage?: Package;
	additionalFeatures: AdditionalFeature[];
	onPackageSelect: (pkg: Package) => void;
	onAdditionalFeatureToggle: (feature: AdditionalFeature) => void;
}

const packages: Package[] = [
	{
		id: 'muzukuru-x',
		name: 'Muzukuru X',
		price: 499,
		currency: '$',
		icon: gem2,
		features: [
			{ id: 'f1', name: '2 Camera Setup', description: '' },
			{ id: 'f2', name: 'Broadcast On Youtube', description: '' },
		],
	},
	{
		id: 'muzukuru-pro',
		name: 'Muzukuru Pro',
		price: 699,
		currency: '$',
		icon: gem3,
		isPopular: true,
		features: [
			{ id: 'f3', name: '3 Camera Setup', description: '' },
			{ id: 'f4', name: 'Broadcast On Youtube', description: '' },
		],
	},
	{
		id: 'muzukuru-lux',
		name: 'Muzukuru Lux',
		price: 1299,
		currency: '$',
		icon: gem4,
		features: [
			{ id: 'f5', name: '4 Camera Setup', description: '' },
			{ id: 'f6', name: 'Broadcast On Youtube', description: '' },
		],
	},
];

const additionalFeaturesList: AdditionalFeature[] = [
	{
		id: 'screen',
		name: 'Screen',
		description: '3m x 2m LED Screen',
		price: 420,
		icon: screenImg,
	},
	{
		id: 'video-audio',
		name: 'Video & Audio',
		description: 'Projector Screen 8ft',
		price: 50,
		icon: videoImg,
	},
];

export default function PackageSelectionStep({
	selectedPackage,
	additionalFeatures,
	onPackageSelect,
	onAdditionalFeatureToggle,
}: PackageSelectionStepProps) {
	const getPackageBorderColor = (isSelected: boolean) => {
		return isSelected ? 'border-emerald-500 ring-2 ring-emerald-500' : 'border-gray-200';
	};

	const isFeatureSelected = (feature: AdditionalFeature) => {
		return additionalFeatures.some((f) => f.id === feature.id);
	};

	return (
		<div className="space-y-6">
			<h2 className="text-lg mt-4 font-semibold text-gray-800">Select Package</h2>

			{/* Package Cards */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				{packages.map((pkg) => {
					const isSelected = selectedPackage?.id === pkg.id;
					return (
						<div
							key={pkg.id}
							className={`card cursor-pointer transition-all hover:shadow-md border ${getPackageBorderColor(isSelected)}`}
							onClick={() => onPackageSelect(pkg)}
						>
							<div className="card-body">
								{/* Icon and Popular Badge */}
								<div className="flex items-start justify-between mb-4">
									<div className="w-12 h-12 mt-4 rounded-lg overflow-hidden flex items-center justify-center bg-gray-50">
										<img
											src={pkg.icon}
											alt={pkg.name}
											className="object-contain w-full h-full"
										/>
									</div>
									{pkg.isPopular && (
										<span className="px-2 py-1 text-xs font-medium bg-emerald-100 text-emerald-700 rounded">
											Popular
										</span>
									)}
								</div>

								{/* Package Info */}
								<h3 className="text-lg font-semibold text-gray-800 mb-2">
									{pkg.name}
								</h3>
								{/* Price */}
								<div className="text-2xl font-bold text-gray-800 mb-4">
									{pkg.currency}
									{pkg.price}
								</div>

								<div className="space-y-1 mb-4">
									<h3 className="text-sm font-semibold text-gray-800 mb-2">
									Features
									</h3>
										{pkg.features.map((feature) => (
											<li key={feature.id} className="text-sm text-gray-600 mx-6">
												{feature.name}
											</li>
										))}
								</div>

								
								{/* Select Button */}
								<button
									className={`w-full px-4 py-2 rounded-lg font-medium transition-colors ${
										isSelected
											? 'bg-brand-dark text-white hover:bg-emerald-700'
											: 'bg-gray-100 text-gray-700 hover:bg-gray-200'
									}`}
								>
									{isSelected ? 'Selected' : 'Select Package'}
								</button>
							</div>
						</div>
					);
				})}
			</div>

			{/* Additional Features */}
			<div>
				<h3 className="text-lg font-semibold text-gray-800 mb-4">Additional Features</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{additionalFeaturesList.map((feature) => {
						const isSelected = isFeatureSelected(feature);
						return (
							<div
								key={feature.id}
								className={`card cursor-pointer transition-all hover:shadow-md border ${
									isSelected ? 'ring-2 ring-emerald-500 border-emerald-500' : 'border-gray-200'
								}`}
								onClick={() => onAdditionalFeatureToggle(feature)}
							>
								<div className="card-body">
									<div className="flex items-center justify-between">
										{/* Feature Icon and Info */}
										<div className="flex items-center gap-3">
											<div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center overflow-hidden">
												<img
													src={feature.icon}
													alt={feature.name}
													className="object-contain w-full h-full"
												/>
											</div>
											<div>
												<div className="font-medium text-gray-800">{feature.name}</div>
												<div className="text-sm text-gray-600">{feature.description}</div>
											</div>
										</div>

										{/* Price and Checkmark */}
										<div className="flex items-center gap-3">
											<div className="text-lg font-semibold text-gray-800">
												${feature.price}
											</div>
											<div
												className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
													isSelected
														? 'bg-emerald-600 border-emerald-600'
														: 'border-gray-300'
												}`}
											>
												{isSelected && (
													<svg
														className="w-3 h-3 text-white"
														fill="currentColor"
														viewBox="0 0 20 20"
													>
														<path
															fillRule="evenodd"
															d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
															clipRule="evenodd"
														/>
													</svg>
												)}
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
