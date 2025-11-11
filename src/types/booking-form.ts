/**
 * Type definitions for the Booking Form multi-step process
 */

export interface DeceasedInformation {
	title: string;
	deceasedName: string;
	deceasedSurname: string;
	gender: string;
	sunrise: string; // Date of birth
	sunset: string; // Date of death
	profileImage?: File | string; // File upload or URL
}

export interface ServiceInformation {
	venue: string;
	serviceDate: string;
	startTime: string;
	endTime: string;
	address01: string;
	address02: string;
}

export interface PackageFeature {
	id: string;
	name: string;
	description: string;
}

export interface Package {
	id: string;
	name: string;
	price: number;
	currency?: string;
	icon: string;
	features: PackageFeature[];
	isPopular?: boolean;
}

export interface AdditionalFeature {
	id: string;
	name: string;
	description: string;
	price: number;
	icon: string;
}

export interface BookingFormData {
	step: 1 | 2 | 3;
	deceased: Partial<DeceasedInformation>;
	service: Partial<ServiceInformation>;
	selectedPackage?: Package;
	additionalFeatures: AdditionalFeature[];
}

export type BookingStep = 1 | 2 | 3;

