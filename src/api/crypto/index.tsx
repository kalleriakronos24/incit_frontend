import { fetchApi } from '../../utils/index';
import React from 'react';

type GetType = {
	url: string;
};

class Crypto {
	async get(params: GetType) {
		return await fetchApi({ type: 'get', url: params.url, body: null });
	}
}

export default Crypto;
