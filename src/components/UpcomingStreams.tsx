const rows = [
  { date: '22/09/2025', event: 'Jimmy Chimombe Funeral', venue: 'St Georges Church', location: 'Harare', time: '1500-1600' },
  { date: '01/10/2025', event: 'Tawanda Jones Memorial', venue: 'National Heroes Acre', location: 'Harare', time: '1400-1500' },
  { date: '05/10/2025', event: 'Amelio Mafukidze Memorial', venue: 'Warren Park Cemetery', location: 'Harare', time: '1100-1200' },
  { date: '16/10/2025', event: 'John Mapfumo Celebration', venue: 'Andy Miller Hall', location: 'Bulawayo', time: '1000-1700' },
];

export default function UpcomingStreams() {
  return (
    <div className="card">
      <div className="card-header">Upcoming Streams</div>
      <div className="card-body">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="text-left text-gray-500">
              <tr>
                <th className="py-2 pr-4">Date</th>
                <th className="py-2 pr-4">Event</th>
                <th className="py-2 pr-4">Venue</th>
                <th className="py-2 pr-4">Location</th>
                <th className="py-2 pr-4">Time</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.event} className="border-t">
                  <td className="py-3 pr-4 whitespace-nowrap">{r.date}</td>
                  <td className="py-3 pr-4">{r.event}</td>
                  <td className="py-3 pr-4">{r.venue}</td>
                  <td className="py-3 pr-4">{r.location}</td>
                  <td className="py-3 pr-4">{r.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


