import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export type ThemeState = {
	primary: string;
	accent: string;
	background: string;
	status: 'idle' | 'loading' | 'failed' | 'succeeded';
};

const initialState: ThemeState = {
	primary: 'rgba(90, 178, 81, 1)',
	accent: 'rgba(90, 178, 81, 1)',
	background: '#f6f8fb',
	status: 'idle',
};

// Placeholder async fetch to illustrate redux + axios usage
export const fetchTheme = createAsyncThunk('theme/fetch', async () => {
	// In a real app, replace with API endpoint
	// Here we mimic a resolved theme
	const response = await axios.get('/api/theme.json', { validateStatus: () => true });
	if (response.status >= 200 && response.status < 300 && response.data) {
		return response.data as Partial<ThemeState>;
	}
	return { primary: 'rgba(90, 178, 81, 1)', accent: 'rgba(90, 178, 81, 1)', background: '#f6f8fb' } as Partial<ThemeState>;
});

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchTheme.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchTheme.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.primary = action.payload.primary ?? state.primary;
				state.accent = action.payload.accent ?? state.accent;
				state.background = action.payload.background ?? state.background;
			})
			.addCase(fetchTheme.rejected, (state) => {
				state.status = 'failed';
			});
	},
});

export default themeSlice.reducer;


