import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import App from './App';
import './styles.css';
import { store } from './store/store';

const muiTheme = createTheme({
	palette: {
		primary: {
			main: '#059669',
		},
		background: {
			default: '#ffffff',
			paper: '#ffffff',
		},
	},
	typography: {
		fontFamily: 'system-ui, Mulish, Helvetica, Arial, sans-serif',
	},
});

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={muiTheme}>
				<App />
			</ThemeProvider>
		</Provider>
	</React.StrictMode>
);

