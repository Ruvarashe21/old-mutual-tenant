import SearchIcon from '../assets/topbar/search-normal.svg';
import AddIcon from '../assets/topbar/Add button.svg';
import NotificationsNoneIcon from '../assets/topbar/notifications.svg';
import SettingsOutlinedIcon from '../assets/topbar/Settings Button.svg';
import DarkModeIcon from '../assets/topbar/Light Mode.svg';
import VerifiedUserOutlinedIcon from '../assets/topbar/om-icon.svg';
import { PageType } from '../types/navigation';

type Props = {
	pageName?: PageType;
};

export default function TopBar({ pageName = 'Dashboard' }: Props) {
	return (
		<header className="px-4 lg:px-6 py-4 flex items-center gap-4 border-b bg-white sticky top-0 z-10">
			<div className="flex flex-col text-left">
				<span className="text-xs text-gray-500">OLD MUTUAL FUNERAL SERVICES</span>
				<span className="font-semibold text-gray-800 text-xl">{pageName}</span>
			</div>
			<div className="flex-1" />
			<div className="w-full max-w-md hidden md:flex items-center gap-2 bg-gray-50 border rounded-full px-4 py-2">
				<img className='h-6' src={SearchIcon} />
				<input
					placeholder="Search"
					className="bg-transparent outline-none text-sm flex-1"
				/>
			</div>
			<div className="flex items-center gap-2">
				<button className="p-2 rounded-full bg-gray-50  hover:bg-gray-100 transition-colors">
					<img className='h-8' src={AddIcon}/>
				</button>
				<button className="p-2 rounded-full bg-gray-50  relative hover:bg-gray-100 transition-colors">
					<img className='h-8' src={NotificationsNoneIcon}/>
					<span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-red-500 text-white text-[10px] grid place-items-center">
						3
					</span>
				</button>
				<button className="p-2 rounded-full bg-gray-50  hover:bg-gray-100 transition-colors">
					<img className='h-8' src={DarkModeIcon}/>
				</button>
				<button className="p-2 rounded-full bg-gray-50  hover:bg-gray-100 transition-colors">
					<img className='h-8' src={SettingsOutlinedIcon}/>
				</button>
				<button className="p-2 rounded-full bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-colors">
					<img className='h-8' src={VerifiedUserOutlinedIcon}/>
				</button>
			</div>
		</header>
	);
}


