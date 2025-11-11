/**
 * Type definitions for navigation
 */

import { ReactElement } from 'react';

export interface NavItem {
	id: string;
	label: string;
	icon: ReactElement;
	path: string;
}

export type PageType = 'Dashboard' | 'Bookings' | 'Memorial Pages' | 'Reports';

