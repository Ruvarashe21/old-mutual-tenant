import { useState } from 'react';
import {
	BookingFormData,
	BookingStep,
	DeceasedInformation,
	ServiceInformation,
	Package,
	AdditionalFeature,
} from '../types/booking-form';
import DeceasedInformationStep from './booking-steps/DeceasedInformationStep';
import ServiceInformationStep from './booking-steps/ServiceInformationStep';
import PackageSelectionStep from './booking-steps/PackageSelectionStep';
import BookingPreview from './BookingPreview';
import { Typography } from '@mui/material';

interface BookingFormProps {
	onClose?: () => void;
	onFinish?: (data: BookingFormData) => void;
}

export default function BookingForm({ onClose, onFinish }: BookingFormProps) {
	const [formData, setFormData] = useState<BookingFormData>({
		step: 1,
		deceased: {},
		service: {},
		additionalFeatures: [],
	});

	const updateDeceased = (data: Partial<DeceasedInformation>) => {
		setFormData((prev) => ({
			...prev,
			deceased: { ...prev.deceased, ...data },
		}));
	};

	const updateService = (data: Partial<ServiceInformation>) => {
		setFormData((prev) => ({
			...prev,
			service: { ...prev.service, ...data },
		}));
	};

	const handlePackageSelect = (pkg: Package) => {
		setFormData((prev) => ({
			...prev,
			selectedPackage: pkg,
		}));
	};

	const handleAdditionalFeatureToggle = (feature: AdditionalFeature) => {
		setFormData((prev) => {
			const isSelected = prev.additionalFeatures.some((f) => f.id === feature.id);
			if (isSelected) {
				return {
					...prev,
					additionalFeatures: prev.additionalFeatures.filter((f) => f.id !== feature.id),
				};
			} else {
				return {
					...prev,
					additionalFeatures: [...prev.additionalFeatures, feature],
				};
			}
		});
	};

	const handleNext = () => {
		if (formData.step < 3) {
			setFormData((prev) => ({
				...prev,
				step: (prev.step + 1) as BookingStep,
			}));
		} else {
			// Finish booking
			onFinish?.(formData);
			onClose?.();
		}
	};

	const handleBack = () => {
		if (formData.step > 1) {
			setFormData((prev) => ({
				...prev,
				step: (prev.step - 1) as BookingStep,
			}));
		}
	};

	const getStepLabel = (step: number) => {
		const labels = {
			1: 'Deceased',
			2: 'Service',
			3: 'Package',
		};
		return labels[step as keyof typeof labels];
	};

	return (
		<div className="space-y-6">
			{/* Header */}
			<div>
				<h1 className="text-2xl font-bold text-gray-800">Booking/ Add New Booking</h1>
			</div>

			{/* Main Content */}
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
				{/* Form Section */}
				<div className="lg:col-span-2">
					{/* Progress Indicator */}
					<div className="card">
						<div className="flex items-center gap-4  bg-gradient-to-r from- bg-brand-lighty to- bg-brand-dark p-8 rounded-lg text-white justify-center">
					{[1, 2, 3].map((step) => {
						const isActive = formData.step === step;
						const isCompleted = formData.step > step;
						return (
							<div key={step} className="flex items-center gap-2">
								<div
									className={`
										w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors
										${
											isActive
												? 'bg-emerald-600 text-white'
												: isCompleted
												
												? 'bg-white  text-gray-600'
												: 'bg-emerald-600 text-white'
										}
									`}
								>
									{isCompleted ? (
										<svg
											className="w-4 h-4"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path
												fillRule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clipRule="evenodd"
											/>
										</svg>
									) : (
										step
									)}
								</div>
								<span
									className={`
										text-sm font-medium
										${isActive ? 'text-emerald-600' : 'text-white'}
									`}
								>
									{step} {getStepLabel(step)}
								</span>
								{step < 3 && (
									<div
										className={`
											w-8 h-0.5 mx-2
											${isCompleted ? 'bg-emerald-600' : 'bg-white'}
										`}
									/>  
								)}
							</div>
						);
					})}
				</div>
						<div className="card-body pt-3">
							{formData.step === 1 && (
								<DeceasedInformationStep
									data={formData.deceased}
									onChange={updateDeceased}
								/>
							)}
							{formData.step === 2 && (
								<ServiceInformationStep
									data={formData.service}
									onChange={updateService}
								/>
							)}
							{formData.step === 3 && (
								<PackageSelectionStep
									selectedPackage={formData.selectedPackage}
									additionalFeatures={formData.additionalFeatures}
									onPackageSelect={handlePackageSelect}
									onAdditionalFeatureToggle={handleAdditionalFeatureToggle}
								/>
							)}

							{/* Navigation Buttons */}
							<div className="flex items-center justify-end gap-3 mt-8 pt-6 border-t">
								{formData.step > 1 && (
									<button
										onClick={handleBack}
										className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-colors"
									>
										Back
									</button>
								)}
								<button
									onClick={handleNext}
									className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-colors"
								>
									{formData.step === 3 ? 'Finish' : 'Next'}
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* Preview Section */}
				<div className="lg:col-span-1">
					<div className="flex items-center gap-8 bg-gradient-to-r from- bg-brand-lighty to- bg-brand-dark p-8 rounded-lg text-white justify-center">	

						<Typography variant="h6" fontSize={18} component="div" style={{ marginLeft: -70 }}> 
							Booking Preview
						</Typography>
						<Typography variant="h6" marginRight={-10} border={1} padding={0.5} paddingLeft={2} paddingRight={2} borderRadius={5} fontSize={14}  >
							Preview
						</Typography>		

					</div>			
						<BookingPreview
							deceased={formData.deceased}
							service={formData.service}
							selectedPackage={formData.selectedPackage}
							additionalFeatures={formData.additionalFeatures}
						/>
				
				</div>
			</div>
		</div>
	);
}

