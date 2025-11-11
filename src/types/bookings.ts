/**
 * Type definitions for the Bookings page
 */

import { StreamStatusType, ServiceTierType } from './common';

export interface StreamSummary {
	totalStreams: number;
	pendingStreams: number;
	completedStreams: number;
}

export interface UpcomingStream {
	id: number;
	event: string;
	date: string; // Format: "DD/MM/YY" e.g., "22/09/25"
	locationStatus: ServiceTierType; // e.g., "Muzukuru Lux"
	status: StreamStatusType;
}

export interface StreamScheduleItem {
	day: number; // Day of the month, e.g., 22
	event: string;
	location: string;
	time: string; // Format: "HHMM-HHMM" e.g., "1500-1600"
	isHighlighted?: boolean; // Optional: to indicate if this schedule item is currently selected/focused
}

export interface CalendarDay {
	date: number; // Day of the month, e.g., 28
	isCurrentMonth: boolean; // True if the day belongs to the displayed month
	isHighlighted: boolean; // True if this day is selected/current
	hasStreams: boolean; // True if there are streams on this day
}

export interface CalendarMonthData {
	month: string; // e.g., "September"
	year: number; // e.g., 2025
	days: CalendarDay[]; // Array of days to display in the calendar grid
}

