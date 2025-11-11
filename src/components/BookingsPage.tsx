import { useState } from "react";
import pending from "../assets/bookings/pending-streams.svg";
import completed from "../assets/bookings/completed.svg";
import total from "../assets/bookings/streams.svg";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  StreamSummary,
  UpcomingStream,
  StreamScheduleItem,
} from "../types/bookings";
import Calendar from "./Calendar";
import { CalendarMonthData } from "../types/bookings";
import BookingForm from "./BookingForm";
import { BookingFormData } from "../types/booking-form";
import tile from "../assets/bookings/tile.svg";
import StreamDetail from "./StreamDetail";

// Mock data
const summaryData: StreamSummary = {
  totalStreams: 105,
  pendingStreams: 11,
  completedStreams: 7,
};

const upcomingStreamsData: UpcomingStream[] = [
  {
    id: 134,
    event: "Jimmy Chimombe Funeral",
    date: "22/09/25",
    locationStatus: "Muzukuru Lux",
    status: "Fulfilled",
  },
  {
    id: 137,
    event: "Jane Smith Funeral",
    date: "21/10/25",
    locationStatus: "Muzukuru Lux",
    status: "Scheduled",
  },
  {
    id: 140,
    event: "Michael Lee Funeral",
    date: "24/10/25",
    locationStatus: "No Stream",
    status: "No stream",
  },
];

const streamSchedulesData: StreamScheduleItem[] = [
  {
    day: 22,
    event: "Jimmy Chimombe Funeral",
    location: "St Georges Church",
    time: "1500-1600",
    isHighlighted: true,
  },
  {
    day: 26,
    event: "James Anderson Funeral",
    location: "Oakwood Cemetery",
    time: "1400-1600",
  },
  {
    day: 26,
    event: "Margaret Hill Memorial Service",
    location: "Riverside Chapel",
    time: "1100-1300",
  },
  {
    day: 28,
    event: "Susan Clark Funeral",
    location: "City Park Pavilion",
    time: "1300-1500",
  },
  {
    day: 31,
    event: "Thomas Lewis Funeral",
    location: "Greenwood Memorial Park",
    time: "0900-1100",
  },
];

// Calendar data for September 2025 (last week: 24-30)
const calendarData: CalendarMonthData = {
  month: "September",
  year: 2025,
  days: [
    // Days 24-30 (Sunday to Saturday)
    { date: 24, isCurrentMonth: true, isHighlighted: false, hasStreams: false },
    { date: 25, isCurrentMonth: true, isHighlighted: false, hasStreams: false },
    { date: 26, isCurrentMonth: true, isHighlighted: false, hasStreams: true },
    { date: 27, isCurrentMonth: true, isHighlighted: false, hasStreams: false },
    { date: 28, isCurrentMonth: true, isHighlighted: true, hasStreams: true },
    { date: 29, isCurrentMonth: true, isHighlighted: false, hasStreams: false },
    { date: 30, isCurrentMonth: true, isHighlighted: false, hasStreams: false },
  ],
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "Fulfilled":
      return "bg-emerald-100 text-emerald-700";
    case "Scheduled":
      return "bg-blue-100 text-blue-700";
    case "No stream":
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

export default function BookingsPage() {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const [showStreamDetails, setShowStreamDetails] = useState(false);

  const handleStreamDetails = () => {
    setShowStreamDetails(true);
  };

  const handleCreateBooking = () => {
    setShowBookingForm(true);
  };

  const handleCloseBookingForm = () => {
    setShowBookingForm(true);
  };

  const handleFinishBooking = (data: BookingFormData) => {
    console.log("Booking completed:", data);
    // Here you would typically send the data to your API
    setShowBookingForm(false);
    // Optionally refresh the bookings list
  };

  if (showStreamDetails) {
    return <StreamDetail />;
  }

  if (showBookingForm) {
    return (
      <div className="p-4 lg:p-6">
        <button
          onClick={handleCloseBookingForm}
          className="mb-4 flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          <ArrowBackIcon fontSize="small" />
          <span>Back to Bookings</span>
        </button>
        <BookingForm
          onClose={handleCloseBookingForm}
          onFinish={handleFinishBooking}
        />
      </div>
    );
  }

  return (
    <div className="p-4 lg:p-6 space-y-6">
      {/* Summary Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4  w-[43rem]">
        {/* Total Streams */}
        <div className="card pt-5">
          <div className="card-body">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-500 mb-1">Total Streams</div>
                <div className="text-3xl font-semibold text-gray-800">
                  {summaryData.totalStreams}
                </div>
              </div>
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                <img src={total} />
              </div>
            </div>
          </div>
        </div>

        {/* Pending Streams */}
        <div className="card pt-5">
          <div className="card-body">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-500 mb-1">
                  Pending Streams
                </div>
                <div className="text-3xl font-semibold text-gray-800">
                  {summaryData.pendingStreams}
                </div>
              </div>
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <img src={pending} />
              </div>
            </div>
          </div>
        </div>

        {/* Completed Streams */}
        <div className="card pt-5">
          <div className="card-body">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-500 mb-1">
                  Completed Streams
                </div>
                <div className="text-3xl font-semibold text-gray-800">
                  {summaryData.completedStreams}
                </div>
              </div>
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                <img src={completed} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content: Table and Calendar Side by Side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Upcoming Streams Table */}
        <div className="card w-[700px]">
          <div className="card-header flex items-center justify-between">
            <span className="font-semibold text-gray-800">
              Upcoming Streams
            </span>
            <button
              onClick={handleCreateBooking}
              className="px-4 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-gray-700 font-medium"
            >
              Create Booking
            </button>
            <button onClick={handleStreamDetails}>testing</button>
          </div>
          {showStreamDetails && <StreamDetail />}
          <div className="card-body">
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="text-left text-gray-500 border-b">
                  <tr>
                    <th className="py-3 pr-4 font-medium">ID</th>
                    <th className="py-3 pr-4 font-medium">Event</th>
                    <th className="py-3 pr-4 font-medium">Date</th>
                    <th className="py-3 pr-4 font-medium">Status</th>
                    <th className="py-3 pr-4 font-medium">Status</th>
                    <th className="py-3 pr-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {upcomingStreamsData.map((stream) => (
                    <tr key={stream.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 pr-4 whitespace-nowrap text-gray-800">
                        {stream.id}
                      </td>
                      <td className="py-3 pr-4 text-gray-800">
                        {stream.event}
                      </td>
                      <td className="py-3 pr-4 whitespace-nowrap text-gray-600">
                        {stream.date}
                      </td>
                      <td className="py-3 pr-4 whitespace-nowrap text-gray-600">
                        {stream.locationStatus}
                      </td>
                      <td className="py-3 pr-4">
                        <span
                          className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(
                            stream.status
                          )}`}
                        >
                          {stream.status}
                        </span>
                      </td>
                      <td className="py-3 pr-4">
                        <div className="flex items-center gap-2">
                          <button className="p-1.5 hover:bg-gray-200 rounded transition-colors">
                            <EditIcon
                              fontSize="small"
                              className="text-gray-600"
                            />
                          </button>
                          <button className="p-1.5 hover:bg-red-100 rounded transition-colors">
                            <DeleteIcon
                              fontSize="small"
                              className="text-red-600"
                            />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Pagination */}
            <div className="flex items-center justify-end mt-4 text-sm text-gray-600">
              <span className="mr-4">1-10 of 94</span>
              <div className="flex items-center gap-1">
                <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Calendar and Stream Schedules */}
        <div className="space-y-4  w-[300px] h-[618px] mx-48 -my-28">
          {/* Calendar */}
          <Calendar
            data={calendarData}
            onDateSelect={(date) => setSelectedDate(date)}
          />

          {/* Stream Schedules List */}
          <div className="card">
            <div className="card-body">
              <div className="mb-4">
                <h3 className="font-semibold text-gray-800">
                  Stream Schedules
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  Streams this month
                </p>
              </div>
              <div className="space-y-2">
                {streamSchedulesData.map((schedule, index) => (
                  <div
                    key={index}
                    className={`
											p-3 rounded-lg border transition-colors
											${
                        schedule.isHighlighted
                          ? "bg-emerald-600 border-emerald-600 text-white"
                          : "bg-white border-gray-200 hover:bg-gray-50"
                      }
										`}
                    style={
                      schedule.isHighlighted
                        ? {
                            backgroundImage: `url(${tile})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundColor: "#059669",
                          }
                        : {}
                    }
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`
													w-10 h-10 rounded-lg flex items-center justify-center font-semibold text-sm
													${
                            schedule.isHighlighted
                              ? "bg-white/20 text-white"
                              : "bg-emerald-600 text-white"
                          }
												`}
                      >
                        {schedule.day}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div
                          className={`font-medium text-sm ${
                            schedule.isHighlighted
                              ? "text-white"
                              : "text-gray-800"
                          }`}
                        >
                          {schedule.event}
                        </div>
                        <div
                          className={`text-xs mt-1 ${
                            schedule.isHighlighted
                              ? "text-white/80"
                              : "text-gray-500"
                          }`}
                        >
                          {schedule.location} • {schedule.time}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
