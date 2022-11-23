import PropTypes from 'prop-types';
import React from 'react';

export const Sidebar = () => {
	return (
		<aside
			className="w-72 shadow-lg h-screen fixed left-0 top-0 z-30 bg-white"
			aria-label="Sidebar"
		>
			<div className="overflow-y-auto">
				<div className="flex h-16 bg-blue-i items-center justify-center">
					<img className="h-5" src={require('../../images/logo/logo4.png')} />
				</div>
				<div className="px-6 pt-14">
					<div>
						<img className="h-16 w-16" src={require('../../images/img1.png')} />
						<div className="flex flex-col py-3">
							<span className="text-xl">Radhika Dhawan Puri</span>
							<span className="text-sm">Senior Client Services</span>
						</div>
					</div>
				</div>
				<div className="m-7 border-b-2 w-60" />
				<div className="px-6 flex flex-col">
					<span className="text-base">NAVIGATION</span>
					<div className="pt-4 flex flex-col">
						<span className="font-bold text-sm">Dashboard</span>
						<span className="font-bold text-sm">Approvals</span>
					</div>
				</div>
				<div className="m-7 border-b-2 w-60" />
				<div className="px-6 flex flex-col">
					<span className="text-base">MY ACCOUNT</span>
					<div className="pt-4 flex flex-col">
						<span className="font-bold text-sm">My clients</span>
						<span className="font-bold text-sm">Edit profiles</span>
					</div>
				</div>
			</div>
		</aside>
	);
};
