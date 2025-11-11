import dashboard from "../assets/dashboard.svg";
import booking from "../assets/bookings.svg";
import memorial from "../assets/memorial-pages.svg";
import reports from "../assets/reports.svg";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { motion } from "framer-motion";
import { PageType } from "../types/navigation";
import sidebar from "../assets/sidebar.svg";
import mutual from "../assets/dashboard/brand-icons/old-mutual-svg.svg";
import logo from "../assets/dashboard/brand-icons/Muzukuru Horizontal Logo WT.png";

type Props = {
  primary: string;
  activePage?: PageType;
  onPageChange?: (page: PageType) => void;
};

export default function Sidebar({
  primary,
  activePage = "Dashboard",
  onPageChange,
}: Props) {
  const menu = [
    { label: "Dashboard" as PageType, icon: <img src={dashboard} /> },
    { label: "Bookings" as PageType, icon: <img src={booking} /> },
    { label: "Memorial Pages" as PageType, icon: <img src={memorial} /> },
    { label: "Reports" as PageType, icon: <img src={reports} /> },
  ];

  const handleClick = (page: PageType) => {
    onPageChange?.(page);
  };

  return (
    <aside className="hidden lg:flex flex-col w-72 h-screen sticky top-0 overflow-y-auto">
      <div
        className="flex flex-col flex-1 p-6 text-white"
        style={{
          backgroundImage: `url(${sidebar})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex items-center gap-3 mb-8">
          <img src={mutual} className="h-16" />
        </div>

        <nav className="space-y-2  flex-1  mt-12">
          {menu.map((m) => {
            const isActive = activePage === m.label;
            return (
              <motion.button
                key={m.label}
                onClick={() => handleClick(m.label)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm w-full text-left ${
                  isActive ? "bg-brand-dark" : "hover:bg-white/10"
                }`}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <span className="opacity-90">{m.icon}</span>
                <span>{m.label}</span>
                {/* {isActive && (
						<CheckCircleIcon fontSize="small"  className="mr-auto opacity-90" />
						)} */}
              </motion.button>
            );
          })}
        </nav>

        <div className="mt-auto pt-10 text-center">
          <div className="text-xs opacity-80 mb-1">A Product Of:</div>
          <img src={logo} className="w-full h-auto" />
        </div>
      </div>
    </aside>
  );
}
