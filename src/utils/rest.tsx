type Props = {
	type: string;
	body: Object | null | undefined;
	url: string;
};

const fetchApi = async ({ type, body, url }: Props) => {
	if (type === 'post' || type === 'POST') {
		const call = await fetch(url, {
			method: 'POST',
			body: JSON.stringify(body),
		});
		const response = await call.json();
		return response;
	}

	if (type === 'get' || type === 'GET') {
		const call = await fetch(url, {
			method: 'GET',
		});
		const response = await call.json();
		return response;
	}

	if (type === 'delete' || type === 'DELETE') {
		const call = await fetch(url, {
			method: 'DELETE',
		});

		const response = await call.json();

		return response;
	}

	if (type === 'put' || type === 'PUT') {
		const call = await fetch(url, {
			method: 'PUT',
		});

		const response = await call.json();

		return response;
	}
};

export default fetchApi;
