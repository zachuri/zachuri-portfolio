import React from "react";

const Works = () => {
	return (
		<div className='flex'>
			<div className='w-1/5 bg-gray-500 h-screen'>
				<div className='w-3/4 mx-auto mt-4 bg-white p-4'>
					{/* Content for the 20% width div */}
					{/* Using w-3/4 to make the content 75% of the div width */}
					<p className='text-[3vw]'>Hello</p>
				</div>
			</div>
			<div className='w-4/5 bg-blue-500 h-screen'>
				{" "}
				{/* 80% of the screen */}
				{/* Content for the 80% width div */}
				<div className='w-3/4 mt-4 bg-white p-4'>
					{/* Content for the 20% width div */}
					{/* Using w-3/4 to make the content 75% of the div width */}
					<p className='text-[3vw]'>Hello</p>
				</div>
			</div>
		</div>
	);
};

export default Works;
