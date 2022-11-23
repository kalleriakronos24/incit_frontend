import PropTypes from 'prop-types';
import React from 'react';

export const Header = () => {
	return (
		<div className="flex w-full h-16 shadow-md">
			<div className="flex flex-row w-full justify-between px-8 py-6">
				<div>
					{/* todo search icon */}
					<p className="text-sm">Search anything here...</p>
				</div>
				<div>
					<div>
						{/* todo logout icon */}
						<span className='text-base'>Logout</span>
					</div>
					{/* todo menu icon */}
				</div>
			</div>
		</div>
	);
};
