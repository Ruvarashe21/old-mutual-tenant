import React from 'react';
import { motion } from 'framer-motion';
import {
    Box,
    Container,
    Paper,
    Typography,
    Divider,
    Chip,
    Grid,
    
} from '@mui/material';

const Reports = () => {
    const items = [
            { color: 'Muzukuru Website', percent: 80, country: 900 },
            { color: 'Youtube', percent: 10, country: 231},
            { color: 'Facebook', percent: 10, country: 230 },
        ];
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Grid container spacing={3}>
                <Grid size= {{xs:12, md:6}}>
                    <Paper elevation={3} sx={{ padding: 2 }}>
                        <Typography variant="h6" gutterBottom>
                            Stream Locations
                        </Typography>
                        <Typography variant="h4" fontWeight={600}>
                            326 678
                        </Typography>
                        <Typography color="text.secondary" variant="body2" mb={2}>
                            Total Views
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>

            
        </motion.div>
    );
}

export default Reports;

