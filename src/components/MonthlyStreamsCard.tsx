import { BarChart } from '@mui/x-charts/BarChart';

const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const data = [12,18,10,14,16,8,20,17,12,15,13,16];

export default function MonthlyStreamsCard() {
	return (
		<div className="card">
			<div className="card-header">Total Monthly Streams</div>
			<div className="card-body">
				<div className="w-full overflow-x-auto">
					<div className="min-w-[480px]">
						<BarChart
							height={260}
							xAxis={[
								{ 
									data: months, 
									scaleType: 'band', 
									label: 'Month',
								},
							]}
							series={[
								{ 
									data, 
									color: 'rgba(90, 178, 81, 1)', 
									
								},
							]}
							margin={{ left: 24, right: 12, top: 12, bottom: 24 }}
							sx={{
								'& .MuiBarElement-root': {
									rx: 36, 
									ry: 24, 
								},
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
