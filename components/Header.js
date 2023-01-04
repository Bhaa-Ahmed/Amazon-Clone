import Image from "next/image";
import {
	MenuIcon,
	SearchIcon,
	ShoppingCartIcon,
} from "@heroicons/react/outline";

const Header = () => {
	return (
		<header>
			{/* Top Nav */}
			<div className="flex items-center bg-amazon_blue flex-grow p-1 py-2">
				<div className="mt-2 mx-2 flex items-center flex-grow sm:flex-grow-0 pt-3">
					<Image
						src="https://links.papareact.com/f90"
						alt="logo"
						width={150}
						height={40}
						className="cursor-pointer"
					/>
				</div>
				{/* Search */}
				<div className="hidden sm:flex items-center h10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
					<input
						className=" p-3 h-full w-6 flex-grow rounded-l-md focus:outline-none px-4"
						type="text"
					/>
					<SearchIcon className="h-11 p-3" />
				</div>
				{/* Right */}
				<div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
					<div className="link">
						<p>Hello Bahaa Ahmed</p>
						<p className=" font-extrabold md:text-sm">Accounts & Lists</p>
					</div>
					<div className="link">
						<p>Returns</p>
						<p className=" font-extrabold md:text-sm">& Orders</p>
					</div>
					<div className="link relative flex items-center">
						<span className="absolute top-0 right-0 md:right-10 bg-yellow-400 h-4 w-4 rounded-full text-center text-black font-bold">
							0
						</span>
						<ShoppingCartIcon className="h-10" />
						<p className=" hidden md:block font-extrabold md:text-sm mt-2">
							Basket
						</p>
					</div>
				</div>
			</div>
			{/* Bottom Nav */}
			<div className="flex items-center space-x-3 p-2 pl-6 capitalize bg-amazon_blue-light text-white text-sm">
				<p className="link flex items-center">
					<MenuIcon className="h-6 mr-1" />
					all
				</p>
				<p className="link">prime video</p>
				<p className="link">amazon business</p>
				<p className="link">today deal</p>
				<p className="link hidden lg:inline-flex">electronics</p>
				<p className="link hidden lg:inline-flex">food & grocery</p>
				<p className="link hidden lg:inline-flex">prime</p>
				<p className="link hidden lg:inline-flex">buy again</p>
				<p className="link hidden lg:inline-flex">shopper toolkit</p>
				<p className="link hidden lg:inline-flex">health & personal care</p>
			</div>
		</header>
	);
};

export default Header;
