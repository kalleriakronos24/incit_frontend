import React, { useEffect, useState } from 'react';
import ApiProvider from '../../api';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { Sidebar } from '../../components/sidebar';

// types
type CryptoTypes = {
	image: string;
	name: string;
	current_price: number;
	market_cap: number;
};
const Home = () => {
	// states
	const [cryptos, setCryptos] = useState<CryptoTypes[]>([]);

	// methods
	const cryptoApi = async () => {
		const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&per_page=10`;
		let { crypto } = new ApiProvider();
		let { get } = crypto();
		const data = await get({ url });
		const dataArr = [];
		if (data.length > 0) {
			for (const value of data) {
				const obj = {
					image: value.image,
					name: value.name,
					current_price: value.current_price,
					market_cap: value.market_cap,
				};
				dataArr.push(obj);
			}
		}
        console.log('data ar >> ', dataArr);
		setCryptos(dataArr);
	};
	const callAllApi = async () => {
		await cryptoApi();
	};
	// lifecycles
	useEffect(() => {
		callAllApi();
	}, []);
	return (
		<div className="flex flex-row">
			<Sidebar />
			<div className="flex flex-col ml-72 w-screen relative">
				<Header />
				<div className="flex flex-col bg-main-body-home py-9 px-9">
					<span className="text-2xl font-bold">Hi Radhika, welcome back!</span>
					<div className="flex flex-col pt-11">
						<span className="text-xl font-bold">Your client list</span>
						<span>You currently servicing 3 clients</span>
						<div className="pt-6 flex flex-row">
							<div className="py-5 px-5 bg-white w-64 h-52">
								<img
									className="h-8"
									src={require('../../images/logo/dbs.png')}
								/>
								<div className="pt-3 flex flex-col">
									<span className="text-base font-bold">DBS Bank</span>
									<span className="text-xs pt-1">
										DBS Bank Limited is a Singaporean multinational
										banking and financial services corporation
										headquartered at the Marina Bay Financial Centre
										in the Marina Bay district of Singapore.
									</span>
								</div>
							</div>
							<div className="ml-4 py-5 px-5 bg-white w-64 h-52">
								<img
									className="h-8"
									src={require('../../images/logo/proudfoot.png')}
								/>
								<div className="pt-3 flex flex-col">
									<span className="text-base font-bold">Proudfoot</span>
									<span className="text-xs pt-1">
										Proudfoot engages teams and leadership, at all
										levels, to create innovative solutions to
										operational constraints and solve the people
										challenge associated with making sure that change
										takes place.
									</span>
								</div>
							</div>
							<div className="ml-4 py-5 px-5 bg-white w-64 h-52">
								<img
									className="h-8"
									src={require('../../images/logo/rmi.png')}
								/>
								<div className="pt-3 flex flex-col">
									<span className="text-base font-bold">RMI</span>
									<span className="text-xs pt-1">
										RMI is a trusted global verification partner for
										Asia-Pacific organisations, offering a highly
										personalised and comprehensive background
										screening service.
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="pt-14">
						<div className="flex flex-row justify-between">
							<div className="flex flex-col">
								<span className="text-xl font-bold">Recent approvals</span>
								<span className="text-sm">
									You can find the recent on-going approvals here
								</span>
							</div>
							<div className="p-3 rounded-2xl bg-button-i">
								<span className="text-base text-white font-bold">
									+ Create new approval
								</span>
							</div>
						</div>
					</div>
					<table className="table-auto rounded border-separate border-spacing-y-4">
						<thead>
							<tr className="bg-white">
								<th className="text-left text-sm font-normal p-8">Image</th>
								<th className="text-left text-sm font-normal p-3">Name</th>
								<th className="text-left text-sm font-normal p-3">
									Current Price
								</th>
								<th className="text-left text-sm font-normal p-3">
									Market Price
								</th>
							</tr>
						</thead>
						<tbody>
							{cryptos.length > 0
								? cryptos.map((v, i) => {
										return (
											<tr
												key={v.name}
												className="h-16 bg-white mt-4"
											>
												<td className="text-left p-8">
													<div className="flex flex-row items-center">
														<img
															className="h-7 w-7 rounded-sm"
															src={v.image}
															alt="coin img"
														/>
													</div>
												</td>
												<td className="text-left p-3">
													<span className="text-base font-bold">
														{v.name}
													</span>
												</td>
												<td className="text-left p-3">
													{v.current_price}
												</td>
												<td className="text-left p-3">
													{v.market_cap}
												</td>
											</tr>
										);
								  })
								: null}
						</tbody>
					</table>
					{/* <table className="table-auto rounded border-separate border-spacing-y-4">
						<thead>
							<tr className="bg-white">
								<th className="text-left text-sm font-normal p-8">
									Clients
								</th>
								<th className="text-left text-sm font-normal p-3">
									Approval Name
								</th>
								<th className="text-left text-sm font-normal p-3">
									Client Contact
								</th>
								<th className="text-left text-sm font-normal p-3">Owner</th>
								<th className="text-left text-sm font-normal p-3">
									Date Issued
								</th>
								<th className="text-left text-sm font-normal p-8">
									Status
								</th>
							</tr>
						</thead>
						<tbody>
							<tr className="h-16 bg-white mt-4">
								<td className="text-left p-8">
									<div className="flex flex-row items-center">
										<img
											className="h-13 w-13 rounded-sm"
											src={require('../../images/icon/icon1.png')}
										/>
									</div>
								</td>
								<td className="text-left p-3">
									<span className="text-base font-bold">
										DBS DEG renewal energy LinkedIn post tiles...
									</span>
								</td>
								<td className="text-left p-3">Jasmine</td>
								<td className="text-left p-3">Radhika</td>
								<td className="text-left p-3">January 23,2022</td>
								<td className="text-left p-3">
									<span className="bg-yellow-300 p-1 rounded-md">
										In Progress
									</span>
								</td>
							</tr>
							<tr className="h-16 bg-white mt-4">
								<td className="text-left p-8">
									<div className="flex flex-row items-center">
										<img
											className="h-13 w-13 rounded-sm"
											src={require('../../images/icon/icon2.png')}
										/>
									</div>
								</td>
								<td className="text-left p-3">
									<span className="text-base font-bold">
										PF website mining and metals edit
									</span>
								</td>
								<td className="text-left p-3">Jasmine</td>
								<td className="text-left p-3">Radhika</td>
								<td className="text-left p-3">January 23,2022</td>
								<td className="text-left p-3">
									<span className="bg-orange-300 p-1 rounded-md">
										1st revision
									</span>
								</td>
							</tr>
							<tr className="h-16 bg-white mt-4">
								<td className="text-left p-8">
									<div className="flex flex-row items-center">
										<img
											className="h-13 w-13 rounded-sm"
											src={require('../../images/icon/icon3.png')}
										/>
									</div>
								</td>
								<td className="text-left p-3">
									<span className="text-base font-bold">
										RMI January newletter EDM
									</span>
								</td>
								<td className="text-left p-3">Jasmine</td>
								<td className="text-left p-3">Radhika</td>
								<td className="text-left p-3">January 23,2022</td>
								<td className="text-left p-3">
									<span className="bg-red-600 p-1 rounded-md">
										2nd revision
									</span>
								</td>
							</tr>
						</tbody>
					</table> */}
					<a className="text-base text-blue-500 font-bold">See all approvals here</a>
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default Home;
