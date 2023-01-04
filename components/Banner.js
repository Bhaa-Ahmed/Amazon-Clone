import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const Banner = () => {
	return (
		<div className=" relative">
			<div className=" absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
			<Carousel
				autoPlay
				infiniteLoop
				showStatus={false}
				showIndicators={false}
				showThumbs={false}
				interval={5000}
			>
				<div>
					<Image
						src="https://links.papareact.com/gi1"
						alt="Carousel"
						width={1500}
						height={20}
						className="cursor-pointer"
					/>
				</div>
				<div>
					<Image
						src="https://links.papareact.com/6ff"
						alt="Carousel"
						width={1500}
						height={20}
						className="cursor-pointer"
					/>
				</div>
				<div>
					<Image
						src="https://links.papareact.com/7ma"
						alt="Carousel"
						width={1500}
						height={20}
						className="cursor-pointer"
					/>
				</div>
			</Carousel>
		</div>
	);
};

export default Banner;
