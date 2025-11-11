import streams from '../assets/dashboard/streams.svg';
import bookings from '../assets/dashboard/bookings-green.svg';
import countries from '../assets/dashboard/countries-reached.svg';


export default function StatsRow() {
	const stats = [
		{ label: 'Total Streams', value: 105, icon: <img src={streams} className='w-11 h-11' /> },
		{ label: 'Bookings', value: 11, icon: <img src={bookings} className='w-11 h-11'/> },
		{ label: 'Countries Reached', value: 7, icon: <img src={countries} className='w-11 h-11' /> },
	];

	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 gap-4  w-[42rem] ">
			{stats.map((s) => (
				<div key={s.label} className="card pt-5">
					<div className="card-body">
						<div className="flex items-center justify-between w-">
							<div className="text-xs text-gray-500">{s.label}</div>
							<div className="text-emerald-600">{s.icon}</div>
						</div>
						<div className="text-3xl font-semibold mt-2">{s.value}</div>
					</div>
				</div>
			))}
		</div>
	);
}


